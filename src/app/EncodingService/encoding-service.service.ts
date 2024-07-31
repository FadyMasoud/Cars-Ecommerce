import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodingService {

  constructor() { }

  encode(data: string): string {
    return btoa(data);
  }

  decode(data: string): string {
    return atob(data);
  }
}
