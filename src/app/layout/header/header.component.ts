import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  theme = inject(ThemeService);

  tabs = [
    { label: 'Visao geral', route: '/dashboard' },
    { label: 'Funis de vendas', route: '/funnels' },
    { label: 'Contatos', route: '/contacts' },
  ];

  progress = 72;
}
