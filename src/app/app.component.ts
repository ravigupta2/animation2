import { Component } from '@angular/core';
import {dropdown, fader, item, sample, slider, stage} from './core/animation/animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    sample, dropdown ,
    slider , fader , item , stage
  ],
})
export class AppComponent {
  state = 'normal';
  dropdownState = 'normal';
  value;
  list = [ { value: 'Demo'}];
  animate(): any{
    console.log(this.state);
    this.state = this.state === 'normal' ? 'change' : 'normal';
    console.log(this.state);
  }
  // tslint:disable-next-line:typedef
  dropdown(){
    this.dropdownState = this.dropdownState === 'normal' ? 'change' : 'normal';
  }
  // tslint:disable-next-line:typedef
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData &&  outlet.activatedRouteData.animation;
  }
  addToList(): any{
    this.value = this.value.replace(/ /g, '');
    if ( this.value && this.value.length > 0) {
      const obj = { value: this.value};
      if ( this.list){
        this.list.push(obj);
      }
      this.value = '';
    }
  }
  delete(index): any{
    if ( index !== 0) {
      this.list.splice(index , 1);
    }
    else {
      alert('first item cannot be deleted');
    }
  }
}
