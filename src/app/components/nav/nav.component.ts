import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPopover(popover: any) {
    // if (popover.isOpen()) {
    //   popover.close();
    // } else {
    //   popover.open();
    // }

    popover.open();
  }

  closePopover(popover: any) {
    popover.close();
  }

}
