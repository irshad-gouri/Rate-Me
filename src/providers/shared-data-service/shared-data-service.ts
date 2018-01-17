
import { Injectable } from '@angular/core';
import { CategoryModel } from '../../models/category'
/*
  Generated class for the SharedDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedDataServiceProvider {
categoryList:CategoryModel[]=[];
  constructor() {
    
  }
setCategory(category: CategoryModel){
this.categoryList.push(category);
}
getCategories(){
	return this.categoryList;
}
}
