import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BackandService} from 'angular2bknd-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

	constructor(private router: Router, private backandService:BackandService){
		this.backandService.setAppName('aulapos');
        this.backandService.setSignUpToken('ac541553-670b-46c0-b3b5-d307e439ead3');
        this.backandService.setAnonymousToken('4cda94b7-7af1-4c76-a896-95460bcb259f');
	}

	public navigate(url) {
		this.router.navigate([url]);
	}
}
