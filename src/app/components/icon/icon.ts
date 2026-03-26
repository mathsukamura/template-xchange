import { Component, input } from '@angular/core';

export type IconName =
  | 'dashboard'
  | 'funnel'
  | 'contacts'
  | 'messages'
  | 'charts'
  | 'products'
  | 'settings'
  | 'modals'
  | 'auth'
  | 'hamburger'
  | 'sun'
  | 'moon'
  | 'bell'
  | 'chevron-down'
  | 'chevron-double-left'
  | 'close'
  | 'search'
  | 'eye'
  | 'eye-off'
  | 'trend-up'
  | 'trend-down'
  | 'dots'
  | 'logo'
  | 'archive'
  | 'google'
  | 'github';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styles: `:host { display: inline-flex; }`,
})
export class Icon {
  name = input.required<IconName>();
}
