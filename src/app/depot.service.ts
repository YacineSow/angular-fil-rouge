import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http: HttpClient) { }

  postFile(depot){
    const endpoint = 'http://localhost:8000/api/depot';
    const formData: FormData = new FormData();
    formData.append('montant', depot.montant);
    formData.append('compte', depot.compte);
    console.log(formData)
    return this.http.post(endpoint, formData);
  }
}
