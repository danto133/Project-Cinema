import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-fix',
  templateUrl: './menu-fix.component.html',
  styleUrls: ['./menu-fix.component.scss']
})
export class MenuFixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() showFiller: boolean;

}
