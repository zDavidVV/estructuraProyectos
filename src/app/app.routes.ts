import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent }        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: '/notfound' },

];
