import { NgModule } from "@angular/core";
import { ChangeDetectionComponent } from "./change-detection.component";
import { ChangeStrategyComponent } from "./change-strategy/change-strategy.component";
import { CommonModule } from "@angular/common";
import { ChangeDetectionRoutingModule } from "./change-detection-routing.module";

@NgModule({
    declarations: [
        ChangeDetectionComponent,
        ChangeStrategyComponent
    ],
imports:[
    CommonModule,
    ChangeDetectionRoutingModule
]
,
exports : [
    ChangeDetectionComponent,
    ChangeStrategyComponent
]
})

export class ChangeDetectionModule{

}