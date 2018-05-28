import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  
  configUrl = "assets/config.json";

  getConfig(...sections) {
    let retConfigs= {};
    
    return this.http.get(this.configUrl).pipe(
      map(config => {
        if(!sections) retConfigs = config;
        else sections.forEach(sec => retConfigs[sec] = config[sec]);
        return retConfigs;
      })
    );
  }
}
