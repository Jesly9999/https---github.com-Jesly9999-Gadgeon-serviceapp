import { Component, OnInit } from '@angular/core';
import { MyService } from '../Service/info_service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Agile";
 btnclick()
 {
  // alert("Hello from "+ this.title);
  const service=new MyService;
  service.onClickbtn(this.title);
 }
}
