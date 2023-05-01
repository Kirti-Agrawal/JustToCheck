import { NgModule } from "@angular/core";
import { CanActivateComponent } from "./can-activate.component";
import { CanActivateGuard } from "../guards/manyGuards/can-activate.guard";
import { CommonModule } from "@angular/common";
import { CanActivateRoutingModule } from "./can-activate-routing.module";

@NgModule({
    declarations: [
        CanActivateComponent
    ],
    imports: [
        CommonModule,
        CanActivateRoutingModule
    ],
   
    providers: [ 
        CanActivateGuard
    ]
})

export class CanActivateModule{

}