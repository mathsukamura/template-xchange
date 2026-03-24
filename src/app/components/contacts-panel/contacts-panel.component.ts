import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-panel',
  imports: [],
  templateUrl: './contacts-panel.component.html',
  styleUrl: './contacts-panel.component.scss'
})
export class ContactsPanelComponent {
  stats = {
    total: '04',
    messages: '240.400',
  };

  contacts = [
    { label: 'Sqltes adquirido mais proprietário', value: '180.000', percentage: 75 },
    { label: 'Sqltes que compraram e cancelaram', value: '40.000', percentage: 17 },
    { label: 'Sqltes da lista cancelamento', value: '15.000', percentage: 6 },
    { label: 'Sqltes lista proprietário somente', value: '5.000', percentage: 2 },
  ];
}
