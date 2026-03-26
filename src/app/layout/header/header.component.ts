import { Component, inject, output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TabMenu } from '../../components/tab-menu/tab-menu';
import { Icon } from '../../components/icon/icon';

@Component({
  selector: 'app-header',
  imports: [TabMenu, Icon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  theme = inject(ThemeService);
  menuToggle = output<void>();

  tabs = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Funis', route: '/funnels' },
    { label: 'Contatos', route: '/contacts' },
    { label: 'Chat', route: '/chat' },
  ];

  allTabs = [
    { label: 'Graficos', route: '/charts' },
    { label: 'Tabelas', route: '/tables' },
    { label: 'Cards', route: '/cards' },
    { label: 'Formularios', route: '/forms' },
    { label: 'Modais', route: '/modais' },
  ];

  progress = 72;
}
