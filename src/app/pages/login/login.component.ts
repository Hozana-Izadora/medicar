import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  private Usuario: Usuario = new Usuario();
  constructor(
    private router: Router,
    private Login: LoginService,

  ) { }

  email:string = '';
  senha:string = '';

 

  ngOnInit(): void { }

  novaConta(){
    this.router.navigate(['conta/add'])
  }

  enviar(){
    console.log(this.email)
  }

}
