import { Injectable } from '@angular/core';

export interface OptionMenu {
  label: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class OptionMenuService {

  constructor() { }

  getOptions(): OptionMenu[] {
    return [
      {label: 'Home', link: '/home'}
    ];
  }
}
