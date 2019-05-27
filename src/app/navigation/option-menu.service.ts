import { Injectable } from '@angular/core';

export interface OptionMenu {
  label: string;
  url?: string;
  icon?: string;
  routerLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class OptionMenuService {

  constructor() { }

  getOptions(): OptionMenu[] {
    return [
      {label: 'Home', url: 'http://google.com'},
      {label: 'Material', routerLink: '/home'}
    ];
  }
}
