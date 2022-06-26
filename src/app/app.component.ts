import { Component } from '@angular/core';
import Highcharts from 'highcharts/highmaps';
import worldMap from '@highcharts/map-collection/custom/world.geo.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartData = [
    { code3: 'ABW', z: 105 },
    { code3: 'AFG', z: 35530 },
  ];
   countryData = [{
    "key": "Marshall Islands",
    "index": 2,
  }, {
    "key": "Wallis and Futuna",
    "index": 3,
    "value": 200
  }, 
  {
    "key": "India",
    "index": 4,
    "value": 200
  },
  {
    "key": "Russia",
    "index": 7,
  },
  {
    "key": "China",
    "index": 8,
    "value": 0
  }];

   pointData = [{
    "countryCode": "india",
  }];

  chartOptions: Highcharts.Options = {
    chart: {
      map: worldMap
    },
    title: {
      text: null,
      style: {
        display: 'none'
    }
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: true,
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        type: 'map',
        name: 'covid 19 - data',
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        // joinBy: ['hc-key', 'key'],
        joinBy: ['name', 'key'],
  
        allAreas: false,
        data:this.countryData
      },
    ],
  };

}
