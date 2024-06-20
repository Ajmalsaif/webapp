// src/app/navbar/navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  theme: boolean = false; // Initialize theme as a boolean

  toggleTheme() {
    this.theme = !this.theme; // Toggle the theme boolean
  }

  constructor(private router: Router, private message: NzMessageService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout(): void {
    this.message.success('Logged out successfully');
    this.router.navigate(['/login']); // Assuming you have a login route
  }
}
