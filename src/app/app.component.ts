import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private config: ConfigService) {}
  
  title;
  configKey = "appMain";

  ngOnInit(): void {
    this.config.getConfig(this.configKey)
      .subscribe(config => {
        this.title = config[this.configKey].title;
      });
  }


}
