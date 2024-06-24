import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AmesoTextile';
  theme = true; // true for dark theme, false for light theme
  isCollapsed = false;
  isMaximized = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMaximize(): void {
    this.isMaximized = !this.isMaximized;
  }

  logout(): void {
    // Implement your logout logic here
    console.log('Logout clicked');
    // Example: Redirect to login page
    // this.router.navigate(['/login']); // Ensure Router is imported
  }
}
