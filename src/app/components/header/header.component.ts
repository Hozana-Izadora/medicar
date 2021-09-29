import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}
  user: any = '';

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  desconectar() {
    this.localStorage.remove('token');
    this.localStorage.remove('user');
    this.localStorage.clear();


    this.router.navigate(['login']);
  }
}
