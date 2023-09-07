import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-appexchart',
  templateUrl: './appexchart.component.html',
  styleUrls: ['./appexchart.component.css']
})
export class AppexchartComponent {
series:any= [23, 11, 54, 72, 12]
labels= ["Apple", "Mango", "Banana", "Papaya", "Orange"]

chartTitle:ApexTitleSubtitle={
  text:'FRUITS',
  align:'left'
}

  chartdetails:ApexChart={
    type:'donut',
    toolbar:{show:true}
}
constructor(){}



}
