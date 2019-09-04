import { Component, OnInit } from '@angular/core';
import { DepotService } from '../depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  depotData = {}
  constructor(private _depotService: DepotService) { }

  ngOnInit() {
  }

  postFile() {
    console.log(this.depotData)
    this._depotService.postFile(this.depotData)
    .subscribe(
      res => {
        console.log(res)
        //this._router.navigate(['/special'])
      },
      err => console.log(err)
    )    
  }
}
