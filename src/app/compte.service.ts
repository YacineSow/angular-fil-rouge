import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  postFile(compte){
    const endpoint = 'http://localhost:8000/api/compte';
    const formData: FormData = new FormData();
    formData.append('solde', compte.solde);
    formData.append('partenaire', compte.partenaire);
    console.log(formData)
    return this.http.post(endpoint, formData);
  }
}
