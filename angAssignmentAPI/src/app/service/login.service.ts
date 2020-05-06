import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  emitNama = new EventEmitter();
  constructor() {
   
  }

  loginDetails() {
    return [
      {username: "smita" , password : "smita", role: ['admin']},
      {username: "bharat" , password : "bharat",  role: ['customer']},
    ];

  }
 

}
