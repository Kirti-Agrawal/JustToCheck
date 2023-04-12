import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './ng-content/child/child.component';
import { Child2Component } from './ng-content/child2/child2.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ChangeStrateyComponent } from './changedetection/change-stratey/change-stratey.component';
import { ChangeStrategyComponent } from './change-detection/change-strategy/change-strategy.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ChildrenComponent } from './content-child/children/children.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { Child1Component } from './view-encapsulation/child1/child1.component';
import { GuardsComponent } from './guards/guards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActivateGuard } from './guards/manyGuards/can-activate.guard';
import { CanActivateChildGuard } from './guards/manyGuards/can-activate-child.guard';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { OtherGuardsComponent } from './other-guards/other-guards.component';
import { AddGuardsComponent } from './other-guards/add-guards/add-guards.component';
import { CanDeactivateComponent } from './other-guards/can-deactivate/can-deactivate.component';
import { HooksComponent } from './hooks/hooks.component';
import { HookschildComponent } from './hooks/hookschild/hookschild.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    ChangeDetectionComponent,
    ViewchildComponent,
    NgContentComponent,
    ChangeStrateyComponent,
    ChangeStrategyComponent,
    ContentChildComponent,
    ChildrenComponent,
    ViewEncapsulationComponent,
    Child1Component,
    GuardsComponent,
    PageNotFoundComponent,
    CanActivateComponent,
    OtherGuardsComponent,
    AddGuardsComponent,
    CanDeactivateComponent,
    HooksComponent,
    HookschildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ CanActivateGuard , CanActivateChildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
