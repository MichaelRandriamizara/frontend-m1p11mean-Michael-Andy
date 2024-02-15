import {Component, OnInit} from '@angular/core';

import {CustomNavData, navItems} from './_nav';
import {StorageService} from "../../services/auth/storage.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {

  public navItems: CustomNavData[] = [];


  constructor(private service : StorageService) {}

  ngOnInit(): void {
    const role = this.service.getRole();
    console.log(role);
    this.navItems = navItems.filter((nav) => {
      return nav.auth === undefined || nav.auth <= role.value
    })
    console.log(this.navItems);
  }
}
