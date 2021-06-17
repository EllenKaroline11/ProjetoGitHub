import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from 'src/app/busca/busca.component';

import { HomeComponent } from './home.component';

/* export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path:  '', //deve ser vazio para dizer que a url definido direciona 
                component: BuscaComponent
            }
        ]
    }
]; */

@NgModule({
    /* imports: [
        RouterModule.forChild(HomeComponent)
    ],
    exports: [
        RouterModule
    ] */
})

export class BuscaRoutingModule {

}
