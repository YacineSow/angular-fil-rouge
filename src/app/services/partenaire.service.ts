import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partenaire } from '../models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private urlPartenaires:string="http://localhost:8000/api/partenaire/liste";
  constructor(private http:HttpClient) { }

  getPartenaires():Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.urlPartenaires);
  }

  postFile(partenaire, fileToUpload: File){
    const endpoint = 'http://localhost:8000/api/ajoutpartenaire';
    const formData: FormData = new FormData();
    formData.append('entreprise', partenaire.entreprise);
    formData.append('raisonsocial', partenaire.raisonsocial);
    formData.append('ninea', partenaire.ninea);
    formData.append('adressesociete', partenaire.adressesociete);
    formData.append('statut', partenaire.statut);
    formData.append('username', partenaire.username);
    formData.append('password', partenaire.password);
    formData.append('prenom', partenaire.prenom);
    formData.append('nom', partenaire.nom);
    formData.append('mail', partenaire.mail);
    formData.append('telephone', partenaire.telephone);
    formData.append('adresse', partenaire.adresse);
    formData.append('cni', partenaire.cni);
    formData.append('profil', partenaire.profil);
    formData.append('solde', partenaire.solde);
    formData.append('imageName', fileToUpload, fileToUpload.name);
    console.log(formData)
    return this.http.post(endpoint, formData);
  }
}
