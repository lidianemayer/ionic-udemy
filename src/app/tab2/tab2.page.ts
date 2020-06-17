import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public nome_usuario:string = "Lidiane Mayer"; 
  navCtrl: any;
  constructor() {}

  public somaDoisNumeros (num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad () {
   // this.somaDoisNumeros(10,99);
}

  gotoTab2 (){
    this.navCtrl.push(Tab2Page) 
  }

}

