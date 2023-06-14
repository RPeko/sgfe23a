import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

   //baseURL = "http://localhost:8080/sgis-2.0.1";
   //baseURL = "https://sgbe21.herokuapp.com";
   baseURL = "https://93.87.76.62:8443/sgis-2.0.1";


   constructor() {
   }
 
   public setBaseURL(value: string): void {
     this.baseURL = value;
   }
 
   public getBaseURL(): string {
     return this.baseURL;
   }
 
}
