import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TransactionService } from '../transaction.service';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionData = {}
  constructor(private _transactionService: TransactionService,
              private _router: Router) { }

  ngOnInit() {
  }

    postFile() {
    this._transactionService.postFile(this.transactionData)
    .subscribe(
      res => {
        console.log(res)
        //this._router.navigate(['/special'])
      },
      err => console.log(err)
    )    
  }
}
