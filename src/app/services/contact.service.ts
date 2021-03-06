import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8080/contacts';

  getAll() {
    return this.http.get<Contact[]>(this.URL + '/all');
  }

  create(contact) {
    return this.http.post(this.URL + '/create',
      JSON.stringify(contact),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  update(contact) {
    return this.http.put(this.URL + '/update/' + contact.id,
      JSON.stringify(contact),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
  delete(contact) {
    return this.http.delete(this.URL + '/delete/' + contact);
  }
}
