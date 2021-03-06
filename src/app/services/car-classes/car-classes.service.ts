import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CarClass } from '../../models/car-class';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarClassesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<CarClass>> {
    return this.http.get<Array<CarClass>>(`${environment.dataService}/car-classes`);
  }
}
