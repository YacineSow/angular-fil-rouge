import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';
import { Partenaire } from '../models/partenaire';
@Component({
  selector: 'app-listepartenaires',
  templateUrl: './listepartenaires.component.html',
  styleUrls: ['./listepartenaires.component.scss']
})
export class ListepartenairesComponent implements OnInit {
  imageUrl : string = "/assets/img/user.png";
  fileToUpload : File = null;
  partenaireData = {}
  partenaires :Partenaire[];
  constructor(private _partService: PartenaireService) { }

  ngOnInit() {
    this.getPart();
  }
getPart(){
  this._partService.getPartenaires().subscribe(
    res=>{
      this.partenaires=res;
      console.log(this.partenaires);
    },
    error=>{
      console.log(error)
    }
  )
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

postFile() {
  this._partService.postFile(this.partenaireData,this.fileToUpload)
  .subscribe(
    res => {
      console.log(res)
      this.imageUrl = "/assets/img/user.png";
      //this._router.navigate(['/special'])
    },
    err => console.log(err)
  )    
}
}
