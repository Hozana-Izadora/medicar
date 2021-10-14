import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router
  ) {}
  user: any = '';

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
  }

  desconectar() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    window.localStorage.clear();

    this.router.navigate(['']);
  }
}
