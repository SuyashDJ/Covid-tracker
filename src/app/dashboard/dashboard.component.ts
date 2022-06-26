import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts/highmaps';
import worldMap from '@highcharts/map-collection/custom/world.geo.json';
import { MapService } from '../services/map-service.service';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pointData: { countryCode: string; }[];
  copyCountryData: any[];
  dropdownDatadata: any;
  filteredOptions: any;
  control = new FormControl('');
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;

  constructor(public covidSerive:MapService) { }
  countryData=[]
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartData = [
    { code3: 'ABW', z: 105 },
    { code3: 'AFG', z: 35530 },
  ];

  myControl = new FormControl('');
  // chartOptions: Highcharts.Options

  ngOnInit(): void {
    this.covidSerive.getCovidCountries("").subscribe((data: any) => {
      data=data.response;
      for(let i=0;i<=data.length;i++){
        let countryObj = {};
        countryObj['key']=data[i]
        countryObj['index']=i
        this.countryData.push(countryObj);
      }
      this.dropdownDatadata=['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua-and-Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia-and-Herzegovina', 'Botswana', 'Brazil', 'British-Virgin-Islands', 'Brunei', 'Bulgaria', 'Burkina-Faso', 'Burundi', 'Cabo-Verde', 'Cambodia', 'Cameroon', 'Canada', 'CAR', 'Caribbean-Netherlands', 'Cayman-Islands', 'Chad', 'Channel-Islands', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Cook-Islands', 'Costa-Rica', 'Croatia', 'Cuba', 'Cura&ccedil;ao', 'Cyprus', 'Czechia', 'Denmark', 'Diamond-Princess', 'Diamond-Princess-', 'Djibouti', 'Dominica', 'Dominican-Republic', 'DPRK', 'DRC', 'Ecuador', 'Egypt', 'El-Salvador', 'Equatorial-Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Faeroe-Islands', 'Falkland-Islands', 'Fiji', 'Finland', 'France', 'French-Guiana', 'French-Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong-Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq'];
      console.log(this.dropdownDatadata)

      this.copyCountryData = this.countryData;
       this.pointData = [{
        "countryCode": "india",
      }];
      this.chartOptions = {
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
    })

    this.createChartPie(); 

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.dropdownDatadata.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

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

  createChartPie(): void {
    const chart = Highcharts.chart('chart-pie', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'statistics of country',
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }],
    } as any);
  }
}
