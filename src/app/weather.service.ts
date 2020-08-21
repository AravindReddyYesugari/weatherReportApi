import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  public getlinks(name:string):any{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+name+"&APPID=fedcf9b5fced4ce120760336485d0675",{responseType :  'json'});
  }

  public getlinks1(name1:string):any{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+name1+"&APPID=fedcf9b5fced4ce120760336485d0675",{responseType :  'json'});
  }


  public getlinks12(name12:string):any{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+name12+"&APPID=fedcf9b5fced4ce120760336485d0675",{responseType :  'json'});
  }

  public getlinks13(name13:string):any{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+name13+"&APPID=fedcf9b5fced4ce120760336485d0675",{responseType :  'json'});
  }

  public getlinks14(name14:string):any{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+name14+"&APPID=fedcf9b5fced4ce120760336485d0675",{responseType :  'json'});
  }

  public getlinks15(name15:string):any{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+name15+"&APPID=fedcf9b5fced4ce120760336485d0675",{responseType :  'json'});
  }
}
