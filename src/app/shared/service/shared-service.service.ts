import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  Loged:BehaviorSubject<any> = new BehaviorSubject(false);
  username:BehaviorSubject<any> = new BehaviorSubject(null);
  email:BehaviorSubject<any> = new BehaviorSubject(null);
  password:BehaviorSubject<any> = new BehaviorSubject(null);
  img:BehaviorSubject<any> = new BehaviorSubject(null);
  id:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { 
    
  }

}
