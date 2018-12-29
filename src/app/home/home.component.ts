import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: Boolean = false;
  users: Object;

  constructor(private data: DataService) { }

  firstClick() {
    this.h1Style = true;
    this.data.firstClick();
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    }
    );

    this.data.getDataJson().subscribe(dt => {
      console.log(dt);
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });

  }
}
