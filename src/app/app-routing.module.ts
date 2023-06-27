import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'screen1',
        pathMatch: 'full'
    },
    {
        path: 'screen1',
        loadChildren: () =>
            import ('./Screen1/Screen1.module').then(m => m.Screen1PageModule),
    },
    {
        path: 'screen2',
        loadChildren: () =>
            import ('./Screen2/Screen2.module').then(m => m.Screen2PageModule),
    },
    {
        path: 'profile1',
        loadChildren: () =>
            import ('./Profile1/Profile1.module').then(m => m.Profile1PageModule),
    },
    {
        path: 'menu',
        loadChildren: () =>
            import ('./menu/menu.module').then(m => m.menuPageModule),
    },
    {
        path: 'screen3',
        loadChildren: () =>
            import ('./Screen3/Screen3.module').then(m => m.Screen3PageModule),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}