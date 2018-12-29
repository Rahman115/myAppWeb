import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-angkatan',
  templateUrl: './angkatan.component.html',
  styleUrls: ['./angkatan.component.scss']
})
export class AngkatanComponent implements OnInit {

  public angkatan: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAngkatan().subscribe(res => {
      this.angkatan = res;
      console.log(res);
    });
  }

}
