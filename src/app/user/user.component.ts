import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public id: Number;
  public sId: String;
  public angkatan: Object;
  public metaAnggota: Object;
  public metaId: Object;
  a: String;
  constructor(private activateRoute: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params.id;
      this.sId = this.id.toString().slice(2);

      console.log(this.sId);
    });

    this.data.getAnggota().subscribe(res => {
      const angg = {};
      for (let i = 0; i < Object.keys(res).length; i++) {
        this.a = res[i].no_induk;
        this.metaId = this.a.split('.');
        if (this.metaId[1] == this.sId) {
          angg[i] = res[i];
        }
      }

      const obj = Object.keys(angg);
      this.metaAnggota = [];
      for (let j = 0; j < Object.keys(angg).length; j++) {
        this.metaAnggota[j] = angg[obj[j]];
        // console.log(angg[obj[j]]);
      }

      console.log(this.metaAnggota);
    });


    this.data.getAngkatan().subscribe(res => {
      for (let i = 0; i < Object.keys(res).length; i++) {
        if (res[i].tahun == this.id) {
          this.angkatan = res[i];
          console.log(this.angkatan);
        }

      }
    });
  }
}
