import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'about-us', loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent) },
    { path: 'programs', loadComponent: () => import('./pages/programs/programs.component').then(m => m.ProgramsComponent) }, 
    { path: 'news', loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent) },
    { path: 'resources', loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent) },
    { path: 'get-involved', loadComponent: () => import('./pages/get-involved/get-involved.component').then(m => m.GetInvolvedComponent) },
    { path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent)},
    { path: '404', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
    { path: '**', redirectTo: '/404' }
];
