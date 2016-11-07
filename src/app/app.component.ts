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

    var pushingToList = this._af.database.list('items').push(null);
    console.log('push list test', pushingToList);

    
    var settingObject = this._af.database.object('someObj').set(null);
    console.log('push object test', settingObject);

    settingObject
      .then(() => {
        console.log('setting Object OK');
      }).catch(e => {
        console.log('Catched object set:' + e.message);
      })
  }
}
