import { Component, input, output } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-modal-wrapper',
  imports: [Icon],
  templateUrl: './modal-wrapper.html',
  styles: `:host { display: contents; }`
})
export class ModalWrapper {
  title = input('');
  subtitle = input('');
  maxWidth = input<'sm' | 'md' | 'lg'>('md');
  type = input<'modal' | 'drawer'>('modal');
  closed = output<void>();

  get maxWidthClass() {
    switch (this.maxWidth()) {
      case 'sm': return 'max-w-sm';
      case 'md': return 'max-w-md';
      case 'lg': return 'max-w-lg';
    }
  }

  onBackdropClick() {
    this.closed.emit();
  }

  onClose() {
    this.closed.emit();
  }
}
