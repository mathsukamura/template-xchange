import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  theme = inject(ThemeService);

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = false;

  onSubmit() {
    // placeholder
  }
}
