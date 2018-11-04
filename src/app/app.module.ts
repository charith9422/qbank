import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { QuestionsService } from './services/questions.service';

import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './ui/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent
  
    
  
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase,'qbank'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    CoreModule
    //NgbModule.forRoot()
   // BsDropdownModule.forRoot(),
    //CollapseModule.forRoot()
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
