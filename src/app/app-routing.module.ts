import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { NewsComponent } from './pages/news/news.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
