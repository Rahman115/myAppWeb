import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  agenda: Object;
  constructor(private myData: DataService) { }

  ngOnInit() {
    this.myData.getDepartemenAgenda().subscribe( data => {
      console.log(data);
      this.agenda = data;
    });
  }

}
