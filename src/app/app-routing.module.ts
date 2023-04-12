import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { GuardsComponent } from './guards/guards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { CanActivateGuard } from './guards/manyGuards/can-activate.guard';
import { CanActivateChildGuard } from './guards/manyGuards/can-activate-child.guard';
import { Child1Component } from './view-encapsulation/child1/child1.component';
import { Child2Component } from './view-encapsulation/child2/child2.component';
import { CanActivateComponent } from './can-activate/can-activate.component';
import { OtherGuardsComponent } from './other-guards/other-guards.component';
import { AddGuardsComponent } from './other-guards/add-guards/add-guards.component';
import { CanDeactivateComponent } from './other-guards/can-deactivate/can-deactivate.component';
import { HooksComponent } from './hooks/hooks.component';
import { HookschildComponent } from './hooks/hookschild/hookschild.component';
// import { Child1Component } from './other-guards/other-guards/child1.component';
// we can not create same name child

const routes: Routes = [
  { path: '', redirectTo: 'guard', pathMatch: 'full' },
  { path: 'guard', component: GuardsComponent },
  { path: 'ngContent', component: NgContentComponent },
  { path: 'viewchild', component: ViewchildComponent },
  {
    path: 'viewEncapsulation',
    component: ViewEncapsulationComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ],
  },
  { path: 'changeDetection', component: ChangeDetectionComponent },

  {
    path: 'canActivate',
    component: CanActivateComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'otherGuards',
    component: OtherGuardsComponent,
    canActivateChild: [CanActivateChildGuard],
    children: [{ path: 'addGuards', component: AddGuardsComponent },
  { path : 'deactGuard' , component : CanDeactivateComponent}]
  },
{
  path : 'hooks' , component : HooksComponent,
  children: [
    {path : 'hookchild' , component : HookschildComponent}
  ]
},
  { path: 'page404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
