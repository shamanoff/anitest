import { Component, OnInit } from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('panelState', [
      transition('*=>*', [
        query('home', [
          style({
            transform: 'translateY(-100%)'
          }),
          animate(300)
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
