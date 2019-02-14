import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { QuestionFilterPipe } from './questions/question-filter.pipe';
import { SubscriberPageComponent } from './subscriber-page/subscriber-page.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SafeHtmlPipe } from './safeHtml.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    QuestionFilterPipe,
    SubscriberPageComponent,
    SafeHtmlPipe
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
    CoreModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule,
    CKEditorModule,
    EditorModule,
    NgxSpinnerModule
    //NgbModule.forRoot()
   // BsDropdownModule.forRoot(),
    //CollapseModule.forRoot()
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
