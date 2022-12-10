import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Virement } from '../models/virement';

@Injectable({
  providedIn: 'root',
})
export class PortefeuilleService {
  BASE_URL = 'http://localhost:8089/';
  constructor(private _http: HttpClient) {}

  saveOpeartionAPI(data: Virement) {
    return this._http.post(
      `${this.BASE_URL}/PortefeuilleOperation
    /saveOperation`,
      data
    );
  }
}
