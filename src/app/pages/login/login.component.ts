import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private LoginService: LoginService) {}

  email: string = '';
  senha: string = '';
  // user: string = '';
  ngOnInit(): void {}

  newAccount() {
    this.router.navigate(['conta/add']);
  }

  login() {
    if (this.email && this.senha) {
      this.LoginService.getUser(this.email, this.senha).subscribe(
        (result: any) => {
          if (result) {
            window.localStorage.setItem('token', result.token);
            window.localStorage.setItem('user', this.email);
            this.router.navigate(['/consultas']);
          }
        }
      );

    }
    else{
      Swal.fire({
        title: 'Erro',
        text: 'Preencha todos os campos!',
        icon: 'error',
        confirmButtonColor: "#49b4bb",  
        confirmButtonText: 'OK'
      })
    }
  }
} 
