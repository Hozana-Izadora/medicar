import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  private Usuario: Usuario = new Usuario();
  constructor(
    private Login: LoginService
  ) { }

 

  ngOnInit(): void { }

  novaConta(){
    
  }

}
