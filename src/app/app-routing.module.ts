import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth.guard';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './ui/header/header.component';
import { AdminGuard } from './core/admin.guard';
import { CanReadGuard } from './core/can-read.guard';









const appRoutes: Routes = [

    //{ path:'' , redirectTo: '/login' , pathMatch: 'full' },
    //{ path: 'login' , component: LoginComponent },
    //{ path:'home', component: HomeComponent },
    { path: '', redirectTo: '/questions', pathMatch: 'full' },
    { path: 'questions', component: QuestionsComponent },
    { path: 'add-question', component: AddQuestionComponent },


    //, canActivate: [AuthGuard]
    { path: '**', component: PageNotFoundComponent }


];

@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, QuestionsComponent, AddQuestionComponent, PageNotFoundComponent]  