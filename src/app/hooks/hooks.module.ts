import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HooksComponent } from "./hooks.component";
import { HookschildComponent } from "./hookschild/hookschild.component";
import { HooksRoutingModule } from "./hooks-routing.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        HooksComponent,
        HookschildComponent
    ],
    imports: [
        CommonModule,
        HooksRoutingModule,
        FormsModule
    ]
})

export class HooksModule{

}