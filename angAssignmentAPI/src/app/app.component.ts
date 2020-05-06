import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angAssignment';
  checkmyName;

  constructor(private service: LoginService) {

  }

  ngOnInit() {
    this.service.emitNama.subscribe((data: string) => {
      this.checkmyName = data;
    });
    
   }

}
