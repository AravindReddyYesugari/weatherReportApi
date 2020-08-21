import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather.service'
@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {

  constructor(private service : WeatherService){}

  ngOnInit() {

  }
  temp :any;
  ans:any;
  a:boolean=false;
  b:boolean=false;
 box1(){
  this.a=true;
 }
 box2(){
  this.b=true;
 }

  city_name:any;
  sys_country:any;
  weather_description:any;
  windspeed:any;
  sunset_time:any;
  wind_deg:any;
  weather_icon:any;
  isDay:any;
  WeatherData_temp_celcius:any;
  WeatherData_temp_min:any;
  WeatherData_temp_max :any;
  WeatherData_temp_feels_like:any;
  humidity:any;
  name:string ='';
  error:string;
  visible:boolean = false;

  public getDataByName(){
    this.a=false;
    this.service.getlinks(this.name).subscribe(
      (resp) => {
        var info = resp;
        if(info.status == true){
        let sunsetTime = new Date(resp['sys']['sunset']*1000)
        this.sunset_time = sunsetTime.toLocaleTimeString();
        let currentDate = new Date();
        this.isDay = (currentDate.getTime() < sunsetTime.getTime());
        this.WeatherData_temp_celcius = (resp['main']['temp'] - 273.15).toFixed(0);
        this.WeatherData_temp_min = (resp['main']['temp_min'] -273.15).toFixed(0);
        this.WeatherData_temp_max = (resp['main']['temp_max'] - 273.15).toFixed(0);
        this.WeatherData_temp_feels_like = (resp['main']['feels_like'] -273.15).toFixed(0);
        this.city_name = resp['name'];
        this.humidity = resp['main']['humidity'];
        let data = this.humidity ;
        }
        else{
          this.visible = true;
            this.error="area not found";
        }
      });
     
}

// 1st end

name1:string=""
sunset_time1:any;
isDay1:any;
WeatherData_temp_celcius1:any;
WeatherData_temp_min1:any;
WeatherData_temp_max1:any;
WeatherData_temp_feels_like1:any;
city_name1:any; 
humidity1:any;
public getDataByName1(){
  this.b=false;
  this.service.getlinks1(this.name1).subscribe(
    (resp) => {
      let sunsetTime1 = new Date(resp['sys']['sunset']*1000)
      this.sunset_time1 = sunsetTime1.toLocaleTimeString();
      let currentDate1 = new Date();
      this.isDay1 = (currentDate1.getTime() < sunsetTime1.getTime());
      this.WeatherData_temp_celcius1 = (resp['main']['temp'] - 273.15).toFixed(0);
      this.WeatherData_temp_min1 = (resp['main']['temp_min'] -273.15).toFixed(0);
      this.WeatherData_temp_max1 = (resp['main']['temp_max'] - 273.15).toFixed(0);
      this.WeatherData_temp_feels_like1 = (resp['main']['feels_like'] -273.15).toFixed(0);
      this.city_name1 = resp['name'];
      this.humidity1 = resp['main']['humidity'];
    });
}

  // 2nd end

c:boolean=false;
box3(){
  this.c=true;
 }
name12:string=""
sunset_time12:any;
isDay12:any;
WeatherData_temp_celcius12:any;
WeatherData_temp_min12:any;
WeatherData_temp_max12:any;
WeatherData_temp_feels_like12:any;
city_name12:any; 
humidity12:any;
public getDataByName12(){
  this.c=false;
  this.service.getlinks12(this.name12).subscribe(
    (resp) => {
      let sunsetTime12 = new Date(resp['sys']['sunset']*1000)
      this.sunset_time12 = sunsetTime12.toLocaleTimeString();
      let currentDate12 = new Date();
      this.isDay12 = (currentDate12.getTime() < sunsetTime12.getTime());
      this.WeatherData_temp_celcius12 = (resp['main']['temp'] - 273.15).toFixed(0);
      this.WeatherData_temp_min12 = (resp['main']['temp_min'] -273.15).toFixed(0);
      this.WeatherData_temp_max12 = (resp['main']['temp_max'] - 273.15).toFixed(0);
      this.WeatherData_temp_feels_like12 = (resp['main']['feels_like'] -273.15).toFixed(0);
      this.city_name12 = resp['name'];
      this.humidity12 = resp['main']['humidity'];
    });
}

// 3rd end


d:boolean=false;
box4(){
  this.d=true;
 }
name13:string=""
sunset_time13:any;
isDay13:any;
WeatherData_temp_celcius13:any;
WeatherData_temp_min13:any;
WeatherData_temp_max13:any;
WeatherData_temp_feels_like13:any;
city_name13:any; 
humidity13:any;
public getDataByName13(){
  this.d=false;
  this.service.getlinks13(this.name13).subscribe(
    (resp) => {
      let sunsetTime13 = new Date(resp['sys']['sunset']*1000)
      this.sunset_time13 = sunsetTime13.toLocaleTimeString();
      let currentDate13 = new Date();
      this.isDay13 = (currentDate13.getTime() < sunsetTime13.getTime());
      this.WeatherData_temp_celcius13 = (resp['main']['temp'] - 273.15).toFixed(0);
      this.WeatherData_temp_min13 = (resp['main']['temp_min'] -273.15).toFixed(0);
      this.WeatherData_temp_max13 = (resp['main']['temp_max'] - 273.15).toFixed(0);
      this.WeatherData_temp_feels_like13 = (resp['main']['feels_like'] -273.15).toFixed(0);
      this.city_name13 = resp['name'];
      this.humidity13 = resp['main']['humidity'];
    });
}

// 4th end 


e:boolean=false;
box5(){
  this.e=true;
 }
name14:string=""
sunset_time14:any;
isDay14:any;
WeatherData_temp_celcius14:any;
WeatherData_temp_min14:any;
WeatherData_temp_max14:any;
WeatherData_temp_feels_like14:any;
city_name14:any; 
humidity14:any;
public getDataByName14(){
  this.e=false;
  this.service.getlinks14(this.name14).subscribe(
    (resp) => {
      let sunsetTime14 = new Date(resp['sys']['sunset']*1000)
      this.sunset_time14 = sunsetTime14.toLocaleTimeString();
      let currentDate14 = new Date();
      this.isDay14 = (currentDate14.getTime() < sunsetTime14.getTime());
      this.WeatherData_temp_celcius14 = (resp['main']['temp'] - 273.15).toFixed(0);
      this.WeatherData_temp_min14 = (resp['main']['temp_min'] -273.15).toFixed(0);
      this.WeatherData_temp_max14 = (resp['main']['temp_max'] - 273.15).toFixed(0);
      this.WeatherData_temp_feels_like14 = (resp['main']['feels_like'] -273.15).toFixed(0);
      this.city_name14 = resp['name'];
      this.humidity14 = resp['main']['humidity'];
    });
}
  // 5th end 

  f:boolean=false;
  box6(){
    this.f=true;
   }
  name15:string=""
  sunset_time15:any;
  isDay15:any;
  WeatherData_temp_celcius15:any;
  WeatherData_temp_min15:any;
  WeatherData_temp_max15:any;
  WeatherData_temp_feels_like15:any;
  city_name15:any; 
  humidity15:any;
  public getDataByName15(){
    this.f=false;
    this.service.getlinks15(this.name15).subscribe(
      (resp) => {
        let sunsetTime15 = new Date(resp['sys']['sunset']*1000)
        this.sunset_time15 = sunsetTime15.toLocaleTimeString();
        let currentDate15 = new Date();
        this.isDay15 = (currentDate15.getTime() < sunsetTime15.getTime());
        this.WeatherData_temp_celcius15 = (resp['main']['temp'] - 273.15).toFixed(0);
        this.WeatherData_temp_min15 = (resp['main']['temp_min'] -273.15).toFixed(0);
        this.WeatherData_temp_max15 = (resp['main']['temp_max'] - 273.15).toFixed(0);
        this.WeatherData_temp_feels_like15 = (resp['main']['feels_like'] -273.15).toFixed(0);
        this.city_name15 = resp['name'];
        this.humidity15 = resp['main']['humidity'];
      });
  }

}




















  // name : string = "london";    tried with this getting data 
//  public getDataByName(){
//     this.service.getlinks(this.name).subscribe((resp)=>{
//       this.temp = resp;
//         console.log(this.temp);
//     });
//   }


