import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Link{
  label: string;
  path: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  //Links to tabs
  links: Link[] = [
    {label: 'First', path: '/home' },
    {label: 'Second', path: 'home' },
    {label: 'Third', path: 'home' },
  ];
  activeLink = this.links[0];
  
  constructor() { }

  ngOnInit() {
  }

}
