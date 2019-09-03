import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  postFile(transaction){
    const endpoint = 'http://localhost:8000/api/transaction';
    const formData: FormData = new FormData();
    formData.append('prenomexpediteur', transaction.prenomexpediteur);
    formData.append('nomexpediteur', transaction.nomexpediteur);
    formData.append('telephoneexpediteur', transaction.telephoneexpediteur);
    formData.append('prenombeneficiaire', transaction.prenombeneficiaire);
    formData.append('nombeneficiaire', transaction.nombeneficiaire);
    formData.append('telephonebeneficiaire', transaction.telephonebeneficiaire);
    formData.append('montant', transaction.montant);
    formData.append('cni', transaction.cni);
    formData.append('typetransaction', transaction.typetransaction);
    console.log(formData)
    return this.http.post(endpoint, formData);
  }
}
