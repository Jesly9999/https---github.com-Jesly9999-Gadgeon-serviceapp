import { Component, OnInit } from '@angular/core';
import { MyService } from '../Service/info_service';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css']
})
export class InnovativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="Innovative"
btnclick()
 {
  // alert("Hello from "+ this.title);
  const service=new MyService();
  service.onClickbtn(this.title);
 }
}
