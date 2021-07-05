import { Component, OnInit } from '@angular/core';
import { ThemesService } from './services/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gen-dash-app';
  currentTheme: string;
  constructor(
    private themeService: ThemesService
  ){ }

  ngOnInit(): void {
    this.currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(this.currentTheme);
  }
}
