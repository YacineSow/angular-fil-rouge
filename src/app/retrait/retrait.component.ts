import { Component, OnInit } from '@angular/core';
import { RetraitService } from '../retrait.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {

  retraitData = {}
  constructor(private _retraitService: RetraitService) { }

  ngOnInit() {
  }

  postFile() {
    console.log(this.retraitData);
    
    this._retraitService.postFile(this.retraitData)
    .subscribe(
      res => {
        console.log(res)
        //this._router.navigate(['/special'])
      },
      err => console.log(err)
    )    
  }
}
