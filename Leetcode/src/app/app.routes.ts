import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'Leetcode', component: HomeComponent },
    { path: 'profile', title: 'Profile', component: ProfileComponent },
    { path: '**', title: '404 Not Found', component: NotFoundComponent }
];