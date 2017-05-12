import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  routeInfo:string;
  obsRouteInfo:number;
  obsRouteCount:number=0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeInfo = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => { 
      this.obsRouteCount++;
      this.obsRouteInfo = (+params['id'])
    })
  }

}
