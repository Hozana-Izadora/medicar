import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NovaContaService } from 'src/app/services/nova-conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css'],
})
export class NovaContaComponent implements OnInit {
  showPassword = true;

  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmSenha: string = '';

  constructor(
    private router: Router,
    private NovaContaService: NovaContaService
  ) {}

  ngOnInit(): void {}

  newAccount() {
    //Verifica o preenchimento dos inputs
    if (this.nome && this.email && (this.senha.length < 8) && (this.confirmSenha == this.senha)) {
      //Verifica se senhas são iguais
      if (this.senha == this.confirmSenha) {
        this.NovaContaService.newUser(
          this.nome,
          this.email,
          this.senha
        ).subscribe((result: any) => {
          if (result) {
            window.localStorage.setItem('token', result.token);
            window.localStorage.setItem('user', result.username);
            this.router.navigate(['/consultas']);
          }else {
            Swal.fire({
              title: 'Erro',
              text: 'Erro ao criar conta!',
              icon: 'error',
              confirmButtonColor: '#49b4bb',
              confirmButtonText: 'ok',
            });
          }
        });
      } else {
        Swal.fire({
          title: 'Erro',
          text: 'Senhas não são iguais!',
          icon: 'error',
          confirmButtonColor: '#49b4bb',
          confirmButtonText: 'ok',
        });
      }
    } else {
      Swal.fire({
        title: 'Erro',
        text: 'Preencha todos os campos!',
        icon: 'error',
        confirmButtonColor: '#49b4bb',
        confirmButtonText: 'ok',
      });
    }
  }

  cheksPassword() {
    var inputSenha = document.getElementById('senha');
    var confirmSenha = document.getElementById('confirmSenha');
    if (this.senha != this.confirmSenha) {
      inputSenha?.classList.add('is-invalid');
      confirmSenha?.classList.add('is-invalid');
    } else {
      inputSenha?.classList.remove('is-invalid');
      confirmSenha?.classList.remove('is-invalid');
    }
  }
  
  cancel() {
    this.router.navigate(['']);
  }
}
