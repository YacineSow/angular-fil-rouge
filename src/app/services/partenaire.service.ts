import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partenaire } from '../models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private urlPartenaires:string="http://localhost:8000/api/partenaire";
  constructor(private http:HttpClient) { }

  getPartenaires():Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.urlPartenaires);
  }
}
