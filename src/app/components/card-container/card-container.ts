import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card-container.html',
  styles: `:host { display: block; }`
})
export class CardContainer {
  padding = input<'none' | 'sm' | 'md'>('md');
  rounded = input(true);
  variant = input<'default' | 'inverted'>('default');

  variantClass = computed(() =>
    this.variant() === 'inverted'
      ? 'bg-dark-card dark:bg-white text-white dark:text-gray-900'
      : 'bg-white dark:bg-dark-lighter'
  );
}
