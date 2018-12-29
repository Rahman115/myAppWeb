import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pengurus',
  templateUrl: './pengurus.component.html',
  styleUrls: ['./pengurus.component.scss']
})
export class PengurusComponent implements OnInit {
  public pengurus: Object;
  public users: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPengurus().subscribe(data => {
      this.pengurus = data;
      for (let i = 0; i < Object.keys(this.pengurus).length; i++) {
        // const element = data[i];
        this.users = [];
        // loop second
        // for (const myId of data[i].user) {
        for (let j = 0; j < Object.keys(data[i].user).length; j++) {
          this.dataService.getAnggota().subscribe(myData => {
            // this.users[i][myId] = myData[myId.id - 1].nama;
            // this.users = myData[myId.id - 1];
            // console.log(myData[data[i].user[j].id - 1]);
            // console.log(i + " - " + j);
            // this.users[i][j] = myData[data[i].user[j].id - 1];

          });
          // console.log(this.users);
        }
      } // enf for i

      // console.log(this.users);

    });
  }

  myAppData(id: String) {
    console.log(id);
  }

}
