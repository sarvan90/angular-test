import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';


@Component({
  selector: 'app-aj-module-home',
  templateUrl: './aj-module-home.component.html',
  styleUrls: ['./aj-module-home.component.css']
})
export class AjModuleHomeComponent implements OnInit {
  private itemList = [];
  constructor(private helperService:HelperService) { }

  ngOnInit() {
    this.callHelperService();
  }

  callHelperService(){
     this.helperService.getItems().subscribe(d=>{ 
        this.itemList = d;
      })
  }

  addItem(name){
    this.helperService.createItem(name).subscribe(d=>{ 
        this.callHelperService();
    })
  }

}
