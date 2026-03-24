import { Component } from '@angular/core';
import { ContactsPanelComponent } from '../../components/contacts-panel/contacts-panel.component';

@Component({
  selector: 'app-contacts',
  imports: [ContactsPanelComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  recentContacts = [
    { name: 'Darlene Robertson', email: 'darlene@email.com', date: 'Janeiro, 2025', avatar: 'DR' },
    { name: 'Carlos Silva', email: 'carlos@email.com', date: 'Fevereiro, 2025', avatar: 'CS' },
    { name: 'Ana Oliveira', email: 'ana@email.com', date: 'Março, 2025', avatar: 'AO' },
    { name: 'Pedro Santos', email: 'pedro@email.com', date: 'Março, 2025', avatar: 'PS' },
    { name: 'Maria Costa', email: 'maria@email.com', date: 'Março, 2025', avatar: 'MC' },
  ];
}
