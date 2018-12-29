import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // public id: String;

  constructor(private http: HttpClient) { }

  getUsers() {
    // return this.http.get('https://reqres.in/api/users');
    return this.http.get('assets/users.json');
  }

  getDataJson() {
    return this.http.get('assets/test.json');
  }

  getDepartemenAgenda() {
    return this.http.get('assets/agenda.json');
  }

  getPengurus() {
    return this.http.get('assets/pengurus.json');
  }

  getAnggota() {
    return this.http.get('assets/anggota.json');
  }

  firstClick() {
    return console.log('clicked');
  }

  getAngkatan() {
    return this.http.get('assets/angkatan.json');
  }
}
