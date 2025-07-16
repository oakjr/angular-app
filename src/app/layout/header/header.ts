import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  private auth = inject(AuthService);

  username = computed(() => this.auth.getUsername());
  isLoggedIn = computed(() => this.auth.isLoggedIn());

  logout() {
    this.auth.logout();
  }
}
