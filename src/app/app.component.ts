import { Component } from '@angular/core';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  modules: string[];
  constructor(private preloadStrategy: SelectivePreloadingStrategyService){
    this.modules = preloadStrategy.preloadedModules;
  }
}
