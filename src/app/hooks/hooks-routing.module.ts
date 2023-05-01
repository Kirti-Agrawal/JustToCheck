import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { HooksComponent } from "./hooks.component";
import { HookschildComponent } from "./hookschild/hookschild.component";


const routes: Routes= [
    {
        path : '' , component : HooksComponent,
        children: [
          {path : 'hookchild' , component : HookschildComponent}
        ]
      }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class HooksRoutingModule{

}