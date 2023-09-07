import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgApexchartsModule } from 'ng-apexcharts';
import { AppexchartComponent } from './appexchart/appexchart.component';
import { PlaneChartComponent } from './plane-chart/plane-chart.component';
import{DragDropModule} from '@angular/cdk/drag-drop';
import { DragdropComponent } from './dragdrop/dragdrop.component'
@NgModule({
  declarations: [
    AppComponent,
    AppexchartComponent,
    PlaneChartComponent,
    DragdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    DragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
