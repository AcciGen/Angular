import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  constructor(private router: Router) { }

  redirectToProfile(): void {
    sessionStorage.setItem('previousPage', 'true');

    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
    sessionStorage.removeItem('visitedBefore');
  }
}
