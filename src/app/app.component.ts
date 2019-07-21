import { Component } from '@angular/core';

import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactArray: Contact[] = [
    { id: 1, nombre: 'Henry', apellido: 'Esteban', email: 'pongo@gmail.com', telefono: 542659850215},
    { id: 2, nombre: 'Alex', apellido: 'Galvan', email: 'pinta@gmail.com', telefono: 694580379462},
    { id: 3, nombre: 'Robert', apellido: 'Pilar', email: 'reobert@gmail.com', telefono: 3498564479460},
  ];

  selectedContact: Contact = new Contact();

  addoredit() {
    if (this.selectedContact.id === 0) {
      this.selectedContact.id = this.contactArray.length + 1;
      this.contactArray.push(this.selectedContact);
    }
    this.selectedContact = new Contact();
  }

  openForEdit(contact: Contact) {
    this.selectedContact = contact;
  }
}
