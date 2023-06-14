import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Detalj } from 'src/models/detalj';
import { GlobalVarsService } from './global-vars.service';

@Injectable({
  providedIn: 'root'
})
export class DetaljiService {

   constructor(private http: HttpClient, private globalVarsService: GlobalVarsService) { }

  getDetalji(layerId: number, objectId: number): Observable<Detalj[]> {
      const url = this.globalVarsService.baseURL + '/layers/detalji';
      const params = new HttpParams()
      .append('layerId', '' + layerId)
      .append('objectId', '' + objectId)
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              // tslint:disable-next-line:object-literal-key-quotes
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
          }),
          params
          };

      return this.http.get<any>(url,  httpOptions)
          .pipe(retry(1));
  }
}
