import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Icon } from '../../components/icon/icon';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, Icon],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  theme = inject(ThemeService);
  private route = inject(ActivatedRoute);

  isLogin = true;

  ngOnInit() {
    if (this.route.snapshot.data['mode'] === 'signup') {
      this.isLogin = false;
    }
  }

  // Login fields
  loginEmail = '';
  loginPassword = '';
  showLoginPassword = false;

  // Signup fields
  signupName = '';
  signupEmail = '';
  signupPassword = '';
  signupConfirmPassword = '';
  showSignupPassword = false;

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onLogin() {
    // placeholder
  }

  onSignup() {
    // placeholder
  }
}
