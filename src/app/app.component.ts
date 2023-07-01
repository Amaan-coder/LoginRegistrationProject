import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'Login_Registration_Project';
  ismenurequired= false;
  
  constructor(private route:Router){
    
  }
  ngDoCheck(): void {
    let currentURL = this.route.url;
    if(currentURL=='/login' || currentURL=='/register'){
      this.ismenurequired=false;
    }
    else{
      this.ismenurequired=true;
    }
  }
}
