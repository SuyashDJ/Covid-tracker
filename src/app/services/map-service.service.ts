import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "d97b25eddfmsh2de5f78b6c194fep1e547bjsn230df22bfa8a"
  })
};

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private APIbaseURL = "https://covid-193.p.rapidapi.com/";
  country: string;

  constructor(private http: HttpClient) { }

 
  getCovidCountries(country:string): Observable<any> {
    const options= this.getParameter(country);
       return this.http.get<any>(this.APIbaseURL + 'countries' , httpOptions);
  }

  getCovidStatistics(country:string): Observable<any> {
   let options= this.getParameter(country);
    return this.http.get<any>(this.APIbaseURL + 'statistics?country='+this.country, httpOptions);
  }

  getCovidHistory(country:string): Observable<any> {
   let options= this.getParameter(country);
   return this.http.get<any>(this.APIbaseURL+ 'history?country='+this.country, httpOptions);
  }

  getParameter(country:string){
    if(country){
      this.country=country;
    }else{
      this.country="All";
    }
  }

}
