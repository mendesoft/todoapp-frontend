import { Routes } from '@angular/router';
import { LabsComponent } from './pages/labs/labs.component';
import { HomeComponent } from './pages/home/home.component';
import { Labs2Component } from './pages/labs2/labs2.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'labs', component:LabsComponent},
    {
      path:'labs2', component:Labs2Component
    }
];
