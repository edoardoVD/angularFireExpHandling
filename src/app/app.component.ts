import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularFire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _af: AngularFire) {
    console.log('app component constructor');
  }

  ngOnInit() {
    console.log('testing here');
    this._af.database.list('items').push({some: 'data'})
      .then(resolve => {
        console.log('all good');
      }, reject => {
        console.log('error');
      })
      .catch(reject => {
        console.log('catch');
      });
  }
}
