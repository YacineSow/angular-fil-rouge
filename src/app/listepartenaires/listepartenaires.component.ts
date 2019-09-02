import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';
import { Partenaire } from '../models/partenaire';
@Component({
  selector: 'app-listepartenaires',
  templateUrl: './listepartenaires.component.html',
  styleUrls: ['./listepartenaires.component.scss']
})
export class ListepartenairesComponent implements OnInit {
  partenaires :Partenaire[];
  constructor(private partService:PartenaireService) { }

  ngOnInit() {
    this.getPart();
  }
getPart(){
  this.partService.getPartenaires().subscribe(
    res=>{
      this.partenaires=res;
      console.log(this.partenaires);
    },
    error=>{
      console.log(error)
    }
  )
}
}
