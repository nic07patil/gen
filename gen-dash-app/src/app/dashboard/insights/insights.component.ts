import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Subscription } from 'rxjs';
import { ThemesService } from 'src/app/services/themes.service';
import { ChartMetadata } from './ChartMetadata';
import { UsecaseChartConfig } from "./InsightsMetadata";


@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  currentTheme: string;
  myChart: ChartMetadata = UsecaseChartConfig;
  usecaseChart : any;
  gradientFill : any;
  ctx: any;
  baseColor = {
    'dark':{
      color1: '#d52ae5',
      color2: '#424242'
    },
    'light':{
      color1: '#3f51b5',
      color2: 'white'
    }
  };
  w : Subscription;
  constructor(
    private themeService: ThemesService
  ) { }

  ngOnInit(): void {
    this.onThemeChange();
    this.currentTheme = this.themeService.getTheme();
    var canvas = <HTMLCanvasElement>document.getElementById('usecaseCanvas');
    this.ctx = canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(40, 0, 620, 0);
    gradientStroke.addColorStop(0, this.baseColor[this.currentTheme].color2);
    gradientStroke.addColorStop("0.2", this.baseColor[this.currentTheme].color1);
    gradientStroke.addColorStop("0.8", this.baseColor[this.currentTheme].color1);
    gradientStroke.addColorStop(1, this.baseColor[this.currentTheme].color2);
    this.gradientFill = this.ctx.createLinearGradient(0, 0, 0, 220);
    this.gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.5)");
    this.gradientFill.addColorStop(1, "rgba(66, 66, 66, 0)");
    
    this.myChart.data.datasets = [{
      label: "Data",
      borderColor: gradientStroke,
      pointBorderColor: gradientStroke,
      pointBackgroundColor: gradientStroke,
      pointHoverBackgroundColor: gradientStroke,
      pointHoverBorderColor: gradientStroke,
      pointBorderWidth: 0,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 3,
      pointRadius: 5,
      fill: true,
      backgroundColor: this.gradientFill,
      borderWidth: 5,
      data: [50, 100, 200, 150, 250, 180, 300, 140, 250, 150, 200, 100]
    }];
    this.usecaseChart = new Chart(this.ctx, this.myChart);
    this.usecaseChart.update();
  }

  onThemeChange(){
    this.w =this.themeService.watchStorage().subscribe((result)=>{
      console.log(result);
      this.currentTheme = this.themeService.getTheme();
      var gradientStroke = this.ctx.createLinearGradient(40, 0, 620, 0);
      gradientStroke.addColorStop(0, this.baseColor[this.currentTheme].color2);
      gradientStroke.addColorStop("0.2", this.baseColor[this.currentTheme].color1);
      gradientStroke.addColorStop("0.8", this.baseColor[this.currentTheme].color1);
      gradientStroke.addColorStop(1, this.baseColor[this.currentTheme].color2);
      this.myChart.data.datasets = [{
        label: "Data",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 3,
        pointRadius: 5,
        fill: true,
        backgroundColor: this.gradientFill,
        borderWidth: 5,
        data: [50, 100, 200, 150, 250, 180, 300, 140, 250, 150, 200, 100]
      }];
      this.usecaseChart = new Chart(this.ctx, this.myChart);
      this.usecaseChart.update();
    });
  }

}
