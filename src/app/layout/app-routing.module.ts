import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { NotFoundComponent } from '../pages/not-found/not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'notfound', component: NotFoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
