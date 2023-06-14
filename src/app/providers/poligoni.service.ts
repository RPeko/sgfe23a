import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Layer } from 'src/models/layer';
import { Observable, retry } from 'rxjs';
import { KO } from 'src/models/ko';
import { Poligon } from 'src/models/poligon';
import { GlobalVarsService } from './global-vars.service';

@Injectable({
  providedIn: 'root'
})
export class PoligoniService {
  constructor(private http: HttpClient, private globalVars: GlobalVarsService) { }

  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          // tslint:disable-next-line:object-literal-key-quotes
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
      })};

  getListaPoligona(layer: Layer, ko: number): Observable<Poligon[]> {
      const listaUrl = this.globalVars.baseURL + '/layers/poligoni';
      const searchstring: string[] = [];
      for (let i = 0; i < 3; i++) {
          if (layer && layer.filteri && layer.filteri[i] && layer.filteri[i].searchstring) {
              searchstring[i] = layer.filteri[i].searchstring;
          } else {
              searchstring[i] = '';
          }
      }
      const params = new HttpParams()
      .append('layer', '' + layer.id)
      .append('ko', '' + ko)
      .append('searchstring0', searchstring[0])
      .append('searchstring1', searchstring[1])
      .append('searchstring2', searchstring[2]);
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*'
          }),
          params
          };
      // console.log(JSON.stringify(httpOptions));

      return this.http.get<Poligon[]>(listaUrl,  httpOptions)
           .pipe(retry(1));
  }

  pripadaKO(poligon: Poligon, ko: KO) {
      let res = false;
      const coord = poligon.geom.coordinates[0][0];
      try {
          const rel = Math.abs(coord[0] - ko.centarx) + Math.abs(coord[1] - ko.centary);
          if (ko.idKO === 7) {
              if (rel && (rel < 0.08)) {
                  res = true;
              }
          } else {
              if (rel && rel < 0.04) {
                  res = true;
              }
          }
      } catch (e) {

      }
      return res;
  }
}
