import { Component, OnInit } from '@angular/core';
import { OptionMenu, OptionMenuService } from './navigation/option-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'responsiveFlexAngular';
  optionsMenu: OptionMenu[];

  constructor(private options: OptionMenuService) {}

  ngOnInit(): void {
    this.optionsMenu = this.options.getOptions();
  }
}
