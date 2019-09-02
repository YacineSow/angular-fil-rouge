import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
   
export class EventService {

  //private _eventsUrl = "http://localhost:8000/partenaire/new";
  //private _specialEventsUrl = "http://localhost:8000/api/users/bloquer";

  constructor(private http: HttpClient) { }

  // getEvents(){
  //   return this.http.get<any>(this._eventsUrl)
  // }

  // getSpecialEvents(){
  //   return this.http.get<any>(this._specialEventsUrl)
  // }

  postFile(username: string, password: string, prenom: string, nom: string, mail: string, telephone: string, adresse: string, cni: string, compte: string, profil: string, fileToUpload: File){
    const endpoint = 'http://localhost:8000/api/new';
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('prenom', prenom);
    formData.append('nom', nom);
    formData.append('mail', mail);
    formData.append('telephone', telephone);
    formData.append('adresse', adresse);
    formData.append('cni', cni);
    formData.append('compte', compte);
    formData.append('profil', profil);
    formData.append('imageName', fileToUpload, fileToUpload.name);
    console.log(formData)
    return this.http.post(endpoint, formData);
  }
}
