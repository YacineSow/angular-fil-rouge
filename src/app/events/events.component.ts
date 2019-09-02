import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  //providers:[EventService]
})
export class EventsComponent implements OnInit {
  imageUrl : string = "/assets/img/user.png";
  fileToUpload : File = null;
  events = []
  constructor(private eventService: EventService) { }

  ngOnInit() {
    // this._eventService.getEvents()
    //   .subscribe(
    //     res => this.events = res,
    //     err => console.log(err)
    //   )
  }

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

    //show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

OnSubmit(username,password,prenom,nom,mail,telephone,adresse,cni,compte,profil,Image){
  this.eventService.postFile(username.value,password.value,prenom.value,nom.value,mail.value,telephone.value,adresse.value,cni.value,compte.value,profil.value,this.fileToUpload).subscribe(
    data =>{
      console.log('done');
      username.value = null;
      password.value = null;
      prenom.value = null;
      nom.value = null;
      mail.value = null;
      telephone.value = null;
      adresse.value = null;
      cni.value = null;
      compte.value = null;
      profil.value = null;
      Image.value = null;
      this.imageUrl = "/assets/img/user.png";
    },
    error=>console.log(error)
  );
}
}
