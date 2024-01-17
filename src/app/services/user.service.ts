import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(){
    return { 
      name: "Ochoa Hyde", 
      coins: 100, 
      moves: [] 
     }
  }

  // private _loggedInUser$ = new BehaviorSubject(this.user)
  // public loggedInUser$ = this._loggedInUser$.asObservable()

  // getLoggedInUser() {
  //     return this._loggedInUser$.value
  // }
}
