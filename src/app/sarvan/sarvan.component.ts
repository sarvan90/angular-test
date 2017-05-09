import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sarvan',
  templateUrl: './sarvan.component.html',
  styleUrls: ['./sarvan.component.css']
})
export class SarvanComponent implements OnInit {
  list = [1,2,3,4,5];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(i){
    this.router.navigate(['/heroes',i]);
  }

}
