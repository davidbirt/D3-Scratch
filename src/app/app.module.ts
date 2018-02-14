import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'; 

import { AppComponent } from './app.component';
import { StackedAreaComponent } from './stacked-area/stacked-area.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DataService } from './services/data-service.service';

const routes : Route[] = [
  {path: 'area', component: StackedAreaComponent},
  {path: 'bar', component: BarChartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StackedAreaComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
