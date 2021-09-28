import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit {
  showPassword = true;
  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }



  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(["login"])
  }

}
