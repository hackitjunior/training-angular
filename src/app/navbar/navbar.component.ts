import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OptionMenu } from '../navigation/option-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Input() public options: Array<OptionMenu> = [];

  constructor() { }
 
  ngOnInit() {
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
