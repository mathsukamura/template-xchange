import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.html',
  styles: `:host { display: block; }`
})
export class SearchInput {
  placeholder = input('Buscar...');
  value = model('');
}
