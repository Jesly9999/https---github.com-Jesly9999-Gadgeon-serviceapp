import { Component, OnInit } from '@angular/core';
import { MyService } from '../Service/info_service';

@Component({
  selector: 'app-simplifyiot',
  templateUrl: './simplifyiot.component.html',
  styleUrls: ['./simplifyiot.component.css']
})
export class SimplifyiotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="Simplify IoT"
btnclick()
 {
  // alert("Hello from "+ this.title);
  const service = new MyService();
  service.onClickbtn(this.title);
 }
}
