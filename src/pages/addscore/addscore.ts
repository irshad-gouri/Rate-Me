import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CategoryModel } from '../../models/category'
import {SharedDataServiceProvider} from '../../providers/shared-data-service/shared-data-service'

/**
 * Generated class for the AddscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addscore',
  templateUrl: 'addscore.html',
})
export class AddscorePage {
newCategory:string;
categoryObj:CategoryModel=new CategoryModel();
  constructor(public modalCtrl: ViewController,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public dataService: SharedDataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddscorePage');
  }

   goBack(){
     console.log(this.newCategory)
     let categories=this.dataService.getCategories();
     this.categoryObj.name=this.newCategory;
     this.categoryObj.id=categories.length + 1;
     this.categoryObj.rating=0;
     this.dataService.setCategory(this.categoryObj);
     this.modalCtrl.dismiss();
  }

}
