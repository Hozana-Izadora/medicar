import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NovaContaService } from 'src/app/services/nova-conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit {
  showPassword = true;

  nome: string = ''
  email: string = ''
  senha: string = ''
  confimSenha: string = ''

  constructor(
    private router: Router,
    private NovaContaService: NovaContaService
  ) { }

  ngOnInit(): void {

  }
  novaConta() {
    if (this.nome || this.email || this.senha) {
      this.NovaContaService.newUser(this.nome, this.email, this.senha).subscribe(
        (result: any) => {
          if (result) {
            window.localStorage.setItem('token', result.token);
            window.localStorage.setItem('user', result.username);
            this.router.navigate(['/consultas']);
          }
        }
      )
    } else {
      Swal.fire({
        title: 'Erro',
        text: 'Preencha todos os campos!',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    }
  }

  cancel() {
    this.router.navigate([""])
  }

}
