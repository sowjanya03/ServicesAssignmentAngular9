import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CountersService {

  constructor() { }

  count = 0;
  setCounter()
  {
    console.log(++this.count);
  }
}
