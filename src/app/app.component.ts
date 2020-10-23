import { Component } from '@angular/core';
import { CurrentWeatherService } from './services/current-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'WeatherAngular';


  constructor(private weather: CurrentWeatherService){

  }

  ngOnInit(){
    this.weather.get();
  }
}
