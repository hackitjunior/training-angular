import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OptionMenu } from '../navigation/option-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _options: Array<OptionMenu> = [];
  @Output() public sidenavToggle = new EventEmitter();
  
  @Input()
  get options(): Array<OptionMenu>{return this._options}
  set options(values: Array<OptionMenu>){
    this._options = values;
  }

  constructor() { }
 
  ngOnInit() {
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
