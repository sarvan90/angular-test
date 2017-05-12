import { Component, ViewEncapsulation } from '@angular/core';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  modules: string[];
  constructor(private preloadStrategy: SelectivePreloadingStrategyService){
    this.modules = preloadStrategy.preloadedModules;
  }
}
