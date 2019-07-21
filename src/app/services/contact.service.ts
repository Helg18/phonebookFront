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
    // post(url: string, body: any, options: { headers?: HttpHeaders | { [hea
    this.http.post(this.URL + '/create',
      JSON.stringify(contact),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).subscribe(res => {
      console.log(res);
    });
    return this.getAll();
  }
}
