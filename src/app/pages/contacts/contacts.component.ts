import { Component } from '@angular/core';
import { Avatar } from '../../components/avatar/avatar';
import { ContactsPanelComponent } from '../../components/contacts-panel/contacts-panel.component';
import { PageHeader } from '../../components/page-header/page-header';
import { DataTable, CellTemplateDirective, TableColumn } from '../../components/data-table/data-table';

@Component({
  selector: 'app-contacts',
  imports: [Avatar, ContactsPanelComponent, PageHeader, DataTable, CellTemplateDirective],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  columns: TableColumn[] = [
    { key: 'name', label: 'Contato' },
    { key: 'date', label: 'Data', hideBelow: 'sm' },
  ];

  recentContacts = [
    { name: 'Darlene Robertson', email: 'darlene@email.com', date: 'Janeiro, 2025', avatar: 'DR' },
    { name: 'Carlos Silva', email: 'carlos@email.com', date: 'Fevereiro, 2025', avatar: 'CS' },
    { name: 'Ana Oliveira', email: 'ana@email.com', date: 'Março, 2025', avatar: 'AO' },
    { name: 'Pedro Santos', email: 'pedro@email.com', date: 'Março, 2025', avatar: 'PS' },
    { name: 'Maria Costa', email: 'maria@email.com', date: 'Março, 2025', avatar: 'MC' },
  ];
}
