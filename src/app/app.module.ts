import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [BrowserModule, FormsModule,
    HighchartsChartModule, AppRoutingModule,
    HttpClientModule, MatAutocompleteModule, MatFormFieldModule,BrowserModule,
    FormsModule,MatInputModule,
    ReactiveFormsModule],
  declarations: [AppComponent, DashboardComponent,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
