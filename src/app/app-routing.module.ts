import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth.guard';


const appRoutes: Routes = [
  
    { path:'' , redirectTo: '/login' , pathMatch: 'full' },
    { path: 'login' , component: LoginComponent },
    { path: 'add-question' , component: AddQuestionComponent},
    { path: '**', component: PageNotFoundComponent } 
 
   
 ];

@NgModule({
    
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ LoginComponent , AddQuestionComponent ]  