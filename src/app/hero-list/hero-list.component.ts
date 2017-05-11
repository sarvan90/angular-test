import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  list = [1,2,3,4,5];
  routeData;
  commonData;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.commonData = this.route.snapshot.data['title'];
    this.routeData = this.route.snapshot.params['id'];
  }

  onSelect(i){
    this.router.navigate(['/heroes',i]);
  }

}
