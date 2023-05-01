import { NgModule } from "@angular/core";
import { ViewEncapsulationComponent } from "./view-encapsulation.component";
import { CommonModule } from "@angular/common";
import { ViewEncapsulationRoutingModule } from "./view-encapsulation-routing.module";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";

@NgModule({
    declarations : [
        ViewEncapsulationComponent,
        Child1Component,
        Child2Component
    ],
    imports: 
    [ CommonModule,
        ViewEncapsulationRoutingModule,
       
    ],
    exports:[
        ViewEncapsulationComponent,
        Child1Component,
        Child2Component
    ]
})

export class ViewEncapsulationModule{

}