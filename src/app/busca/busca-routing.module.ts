import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscaComponent } from './busca.component';

// export const BuscaRoutes: Routes = [
//     {
//         path: 'search',
//         component: BuscaComponent,
//         /* children: [
//             {
//                 path:  '', //deve ser vazio para dizer que a url definido direciona 
//                 component: BuscaComponent
//             }
//         ] */
//     }
// ];

@NgModule({
    /* imports: [
        RouterModule.Busca
    ], */
    exports: [
        RouterModule
    ]
})

export class BuscaRoutingModule {

}
