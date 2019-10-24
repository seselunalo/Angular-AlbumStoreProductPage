// tslint:disable-next-line: import-spacing
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {
  private _albumurl = '../assets/album.json';
  constructor(private _http: Http) {}


  getAlbum(id: number) {

    return this._http.get(this._albumurl).map((response: Response) => response.json());
  }

}
