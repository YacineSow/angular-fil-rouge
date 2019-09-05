import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetraitService {

  constructor(private http: HttpClient) { }

  postFile(retrait){
    
    
    const endpoint = 'http://localhost:8000/api/retrait';
    // const formData: FormData = new FormData();
    // formData.append('cni',retrait.cni);
    // formData.append('codetransaction',retrait.codetransaction);
   // console.log(formData)
    return this.http.post(endpoint, retrait);
  }
}
