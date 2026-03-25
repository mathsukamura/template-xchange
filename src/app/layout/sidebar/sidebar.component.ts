import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
  children?: { label: string; route: string }[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  expanded = false;
  mobileOpen = false;
  expandedChange = output<boolean>();
  openDropdown: string | null = null;

  sections: MenuSection[] = [
    {
      title: 'Principal',
      items: [
        { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
        { icon: 'funnel', label: 'Funis', route: '/funnels' },
        { icon: 'contacts', label: 'Contatos', route: '/contacts' },
        { icon: 'messages', label: 'Chat', route: '/chat' },
      ]
    },
    {
      title: 'Dados',
      items: [
        {
          icon: 'charts', label: 'Graficos',
          children: [
            { label: 'Area', route: '/charts/area' },
            { label: 'Barras', route: '/charts/bar' },
            { label: 'Linha', route: '/charts/line' },
            { label: 'Pizza', route: '/charts/pie' },
          ]
        },
        { icon: 'products', label: 'Tabelas', route: '/tables' },
        { icon: 'settings', label: 'Cards', route: '/cards' },
        { icon: 'contacts', label: 'Formularios', route: '/forms' },
      ]
    },
    {
      title: 'Conta',
      items: [
        {
          icon: 'auth', label: 'Auth',
          children: [
            { label: 'Login', route: '/login' },
            { label: 'Sign Up', route: '/signup' },
          ]
        },
      ]
    },
  ];

  toggle() {
    this.expanded = !this.expanded;
    if (!this.expanded) this.openDropdown = null;
    this.expandedChange.emit(this.expanded);
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    if (this.mobileOpen) {
      this.expanded = true;
      this.expandedChange.emit(true);
    }
  }

  closeMobile() {
    this.mobileOpen = false;
  }

  onNavClick() {
    this.mobileOpen = false;
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
