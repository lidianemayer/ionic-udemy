import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  navCtrl: any;

  constructor() {}

gototabspage () {
  this.navCtrl.push(Tab1Page)
}

}
