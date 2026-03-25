import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  sidebarExpanded = false;
  isMobile = false;

  constructor() {
    this.checkMobile();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  private checkMobile() {
    this.isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  }

  onSidebarExpand(expanded: boolean) {
    this.sidebarExpanded = expanded;
  }
}
