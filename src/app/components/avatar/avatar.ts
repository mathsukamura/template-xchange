import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.html',
  styles: `:host { display: inline-flex; }`
})
export class Avatar {
  initials = input('');
  size = input<'sm' | 'md' | 'lg'>('md');
  shape = input<'circle' | 'square'>('circle');
  variant = input<'default' | 'inverted' | 'accent'>('default');

  sizeClass = computed(() => {
    switch (this.size()) {
      case 'sm': return 'w-8 h-8 text-[10px]';
      case 'md': return 'w-9 h-9 text-[10px]';
      case 'lg': return 'w-10 h-10 text-xs';
    }
  });

  shapeClass = computed(() =>
    this.shape() === 'circle' ? 'rounded-full' : 'rounded-lg'
  );

  variantClass = computed(() => {
    switch (this.variant()) {
      case 'default': return 'bg-dark dark:bg-dark-card text-white';
      case 'inverted': return 'bg-dark dark:bg-white text-white dark:text-gray-900';
      case 'accent': return 'bg-dark dark:bg-lime-accent/20 text-white dark:text-lime-accent';
    }
  });
}
