import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddscorePage } from '../addscore/addscore';
import { CategoryModel } from '../../models/category';
import {SharedDataServiceProvider} from '../../providers/shared-data-service/shared-data-service';
/**
 * Generated class for the EditscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editscore',
  templateUrl: 'editscore.html',
})
export class EditscorePage {
categories:CategoryModel[]=[];

  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
   public modalCtrl: ModalController,
   public dataSharedService:SharedDataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditscorePage');
     this.categories=this.dataSharedService.categoryList;
     console.log(this.categories);
  }

  goBack(){
    	this.navCtrl.pop();
  }

  showAddScorePage() {
	let myModal = this.modalCtrl.create(AddscorePage);
    myModal.present();
    myModal.onDidDismiss(data => {
      console.log(data);
    this.categories=this.dataSharedService.categoryList;
   });
	}

}
