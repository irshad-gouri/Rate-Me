import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditscorePage } from '../editscore/editscore';
import { CategoryModel } from '../../models/category';
import {SharedDataServiceProvider} from '../../providers/shared-data-service/shared-data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
categories:CategoryModel[]=[];
  constructor(public navCtrl: NavController,
  			  public dataSharedService: SharedDataServiceProvider) {

  }
ionViewDidLoad() {
     this.categories=this.dataSharedService.categoryList;
  }
  public doEditScore(){
    this.navCtrl.push(EditscorePage);
  }

}
