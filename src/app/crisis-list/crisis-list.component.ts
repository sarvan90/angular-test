import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  list=[];
  observableList;
  errorMsg;

  private searchTermStream = new Subject<string>();

  constructor(private helperService:HelperService) { }

  ngOnInit() {
    //this.callHelperService();

    this.observableList = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.helperService.getQueryList(term))
  }

  /*callHelperService(){
     this.helperService.getList().subscribe(d=>{ 
      console.log(d); 
      this.list = d.json();
    });
  }*/

  searchDB(str){
    this.helperService.getQueryList(str).subscribe(d=>this.list=d,e=>this.errorMsg=e);
    //this.observableList = this.helperService.getQueryList(str).map(d=>d.json());
  }

  search(term: string) { 
    this.searchTermStream.next(term); 
  }

}
