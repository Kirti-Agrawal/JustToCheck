import { NgModule } from "@angular/core";
import { ContentChildComponent } from "./content-child.component";
import { ContentChildRoutingModule } from "./content-child-routing.module";
import { CommonModule } from "@angular/common";
import { ChildrenComponent } from "./children/children.component";


@NgModule({
    declarations: [
        ContentChildComponent,
        ChildrenComponent
    ],
    imports: [
        CommonModule,
        ContentChildRoutingModule
    ],
    exports:[
        ContentChildComponent,
        ChildrenComponent
    ]
})

export class ContentChildModule{

}