import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditscorePage } from '../pages/editscore/editscore';
import { AddscorePage } from '../pages/addscore/addscore';
import { SharedDataServiceProvider } from '../providers/shared-data-service/shared-data-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditscorePage,
    AddscorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditscorePage,
    AddscorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedDataServiceProvider
  ]
})
export class AppModule {}
