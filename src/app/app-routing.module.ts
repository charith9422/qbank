import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth.guard';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionsComponent } from './questions/questions.component';
import { UiModule } from './ui/ui.module';
import { LayoutComponent } from './ui/layout/layout.component';








const appRoutes: Routes = [
  
    //{ path:'' , redirectTo: '/login' , pathMatch: 'full' },
    //{ path: 'login' , component: LoginComponent },
    //{ path:'home', component: HomeComponent },
    { path: 'questions' , component: QuestionsComponent },
    { path: 'add-question' , component: AddQuestionComponent }
    
    
    //, canActivate: [AuthGuard]
    //{ path: '**', component: PageNotFoundComponent } 
 
   
 ];

@NgModule({
    
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ LoginComponent,QuestionsComponent , AddQuestionComponent ]  