import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  compteData = {}
  constructor(private _compteService: CompteService) { }

  ngOnInit() {
  }

  postFile() {
    console.log(this.compteData)
    this._compteService.postFile(this.compteData)
    .subscribe(
      res => {
        console.log(res)
        //this._router.navigate(['/special'])
      },
      err => console.log(err)
    )    
  }
}
