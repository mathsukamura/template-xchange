import { Component, input, computed, contentChildren, TemplateRef, Directive } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface TableColumn {
  key: string;
  label: string;
  hideBelow?: 'sm' | 'md' | 'lg';
}

@Directive({ selector: '[appCellTemplate]' })
export class CellTemplateDirective {
  column = input.required<string>({ alias: 'appCellTemplate' });
  constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
  selector: 'app-data-table',
  imports: [NgTemplateOutlet],
  templateUrl: './data-table.html',
  styles: `:host { display: block; }`
})
export class DataTable<T = any> {
  columns = input.required<TableColumn[]>();
  data = input.required<T[]>();
  pageSize = input(10);
  showHeader = input(true);
  trackBy = input<string>('id');

  cellTemplates = contentChildren(CellTemplateDirective);

  currentPage = 1;

  totalPages = computed(() => Math.ceil(this.data().length / this.pageSize()));

  pagedData = computed(() => {
    const start = (this.currentPage - 1) * this.pageSize();
    return this.data().slice(start, start + this.pageSize());
  });

  pages = computed(() => {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, i) => i + 1);
  });

  paginationLabel = computed(() => {
    const total = this.data().length;
    const start = (this.currentPage - 1) * this.pageSize() + 1;
    const end = Math.min(this.currentPage * this.pageSize(), total);
    return `Mostrando ${start}-${end} de ${total} resultados`;
  });

  getCellTemplate(key: string): TemplateRef<any> | null {
    const found = this.cellTemplates().find(t => t.column() === key);
    return found ? found.templateRef : null;
  }

  getHideClass(col: TableColumn): string {
    if (!col.hideBelow) return '';
    switch (col.hideBelow) {
      case 'sm': return 'hidden sm:table-cell';
      case 'md': return 'hidden md:table-cell';
      case 'lg': return 'hidden lg:table-cell';
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

  prevPage() { this.goToPage(this.currentPage - 1); }
  nextPage() { this.goToPage(this.currentPage + 1); }
}
