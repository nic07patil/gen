import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as $ from 'jquery';
import { ThemesService } from '../services/themes.service';
import { MenuItems } from "./MenuItems";
import { MenuMetadata } from "./MenuMetadata";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isDark: boolean = false;
  menuItems : MenuMetadata[];
  menuIsOpen = false;
  isMobile = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemesService
  ) { }

  ngOnInit(): void {
    this.menuItems = JSON.parse(JSON.stringify(MenuItems));
    this.isMobile = window.innerWidth < 600 ? true : false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth < 600 ? true : false;
  }

  setActive(item: MenuMetadata){
    item.selected = true;
    this.menuItems.forEach((element)=>{
      if(element.icon != item.icon){
        element.selected = false;
      }
    });
  }
}
