import { Component } from '@angular/core';
import { Contact } from './models/contact';

import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private contactService: ContactService) {
    this.getAllContacts();
  }

  contactArray: Contact[] = [];

  selectedContact: Contact = new Contact();

  getAllContacts() {
    this.contactArray = [];
    this.contactService.getAll().subscribe(res => {
      res.map(x => {
        this.contactArray.push(x);
      });
    });
  }

  addoredit() {
    this.contactArray = [];
    if (this.selectedContact.id <= 0) {
      this.contactService.create(this.selectedContact).subscribe(() => {
        this.getAllContacts();
      });
    } else {
      this.contactService.update(this.selectedContact).subscribe(res => {
        this.contactArray = [];
        res.map(x => {
          this.contactArray.push(x);
        });
      });
    }
    this.selectedContact = new Contact();
    this.getAllContacts();
  }

  openForEdit(contact: Contact) {
    this.selectedContact = contact;
  }

  cleareditform() {
    this.selectedContact = new Contact();
  }

  deleteContact(contact: Contact) {
    if ( confirm('Do you really sure to delete it?') ) {
      this.contactArray = this.contactArray.filter(x => x !== contact );
    }
  }
}
