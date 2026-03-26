import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule, Icon],
  templateUrl: './search-input.html',
  styles: `:host { display: block; }`
})
export class SearchInput {
  placeholder = input('Buscar...');
  value = model('');
}
