import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
  children?: { label: string; route: string }[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  expanded = false;
  expandedChange = output<boolean>();
  openDropdown: string | null = null;

  menuItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'funnel', label: 'Funis', route: '/funnels' },
    { icon: 'contacts', label: 'Contatos', route: '/contacts' },
    { icon: 'messages', label: 'Chat', route: '/chat' },
    {
      icon: 'charts', label: 'Gráficos',
      children: [
        { label: 'Área', route: '/charts/area' },
        { label: 'Barras', route: '/charts/bar' },
        { label: 'Linha', route: '/charts/line' },
        { label: 'Pizza', route: '/charts/pie' },
      ]
    },
    { icon: 'products', label: 'Tabelas', route: '/tables' },
    { icon: 'settings', label: 'Cards', route: '/cards' },
    {
      icon: 'auth', label: 'Auth',
      children: [
        { label: 'Login', route: '/login' },
        { label: 'Sign Up', route: '/signup' },
      ]
    },
  ];

  toggle() {
    this.expanded = !this.expanded;
    if (!this.expanded) this.openDropdown = null;
    this.expandedChange.emit(this.expanded);
  }

  toggleDropdown(label: string) {
    if (!this.expanded) {
      this.expanded = true;
      this.expandedChange.emit(true);
    }
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  isDropdownOpen(label: string): boolean {
    return this.openDropdown === label;
  }
}
