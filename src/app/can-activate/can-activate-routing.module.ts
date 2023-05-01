import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { CanActivateComponent } from "./can-activate.component";
import { CanActivateGuard } from "../guards/manyGuards/can-activate.guard";


const routes: Routes= [
    {
        path: '',
        component: CanActivateComponent,
        canActivate: [CanActivateGuard],
      }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class CanActivateRoutingModule{

}