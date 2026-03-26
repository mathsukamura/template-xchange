import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.html',
  styles: `:host { display: block; }`
})
export class PageHeader {
  title = input.required<string>();
  subtitle = input('');
}
