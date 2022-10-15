import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // title="Kerala";
  // today=Date();
  // number=20;
  user={
    id:10,
    name:'Raju',
    DOB:'01/03/1999',
    salary:35500
  }
}
