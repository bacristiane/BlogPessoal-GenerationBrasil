import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {


  user: User = new User()
  idUsuario: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private postagemService: PostagemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.idUsuario=this.route.snapshot.params['idUsuario']
    this.findByIdUser(this.idUsuario)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  atualizar() {
    this.user.tipo = this.tipoUsuario
    if (this.user.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas.')
    }

    else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/inicio'])
        alert('Usuário atualizado com sucesso, faço login novamente!')
        environment.token=''
        environment.nome=''
        environment.foto=''
        environment.idUsuarioL=0
        this.router.navigate(['/login'])
      })

    }
  }

  findByIdUser(idUsuario: number){
    this.postagemService.getByIdUser(this.idUsuario).subscribe((resp: User)=>{
      this.user = resp
    })
  }
}
