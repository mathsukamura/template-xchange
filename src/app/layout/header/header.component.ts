import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  tabs = [
    { label: 'Visão geral', route: '/dashboard' },
    { label: 'Funis de vendas', route: '/funnels' },
    { label: 'Contatos', route: '/contacts' },
  ];

  progress = 72;
}
