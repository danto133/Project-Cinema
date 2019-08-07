import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FilmsComponent } from './films/films.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
            {
                path: "",
                component: FilmsComponent
            },
            {
                path:"users",
                component: UserComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
