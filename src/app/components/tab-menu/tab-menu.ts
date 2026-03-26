import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../icon/icon';

export interface TabItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-tab-menu',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './tab-menu.html',
  styleUrl: './tab-menu.scss'
})
export class TabMenu {
  tabs = input.required<TabItem[]>();
  moreTabs = input<TabItem[]>([]);
  expanded = false;
}
