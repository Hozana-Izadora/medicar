import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router, 
    private LoginService: LoginService
    ) {}

  email: string = '';
  senha: string = '';

  ngOnInit(): void {}

  novaConta() {
    this.router.navigate(['conta/add']);
  }

  enviar() {
    this.LoginService.getUser(this.email, this.senha).subscribe(
      (result: any) => {
        // if(result){
          //  window.localStorage.setItem('token',result.token)
          //  window.localStorage.setItem('user' ,result.user)
        //   this.router.navigate(["/consultas"]) 
        // }
        console.log(result);
      }
    );
  }
}
