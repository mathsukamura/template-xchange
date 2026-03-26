import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface TabItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-tab-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-menu.html',
  styleUrl: './tab-menu.scss'
})
export class TabMenu {
  tabs = input.required<TabItem[]>();
  moreTabs = input<TabItem[]>([]);
  expanded = false;
}
