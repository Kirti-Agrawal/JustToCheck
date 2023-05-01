import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ViewchildComponent } from './viewchild/viewchild.component';
import { GuardsComponent } from './guards/guards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActivateChildGuard } from './guards/manyGuards/can-activate-child.guard';
import { OtherGuardsComponent } from './other-guards/other-guards.component';
import { AddGuardsComponent } from './other-guards/add-guards/add-guards.component';
import { CanDeactivateComponent } from './other-guards/can-deactivate/can-deactivate.component';
import { PipesComponent } from './pipes/pipes.component';
import { OutputEmitComponent } from './output-emit/output-emit.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { ApiComponent } from './api/api.component';
import { ObservableSubjectsComponent } from './observable-subjects/observable-subjects.component';
import { SubjectsBehaviouralComponent } from './subjects-behavioural/subjects-behavioural.component';
import { CanDeactivateGuard } from './guards/manyGuards/can-deactivate.guard';
import { ResolveComponent } from './resolve/resolve.component';
import { ResolveGuard } from './guards/manyGuards/resolve.guard';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { SubjectReplayComponent } from './subject-replay/subject-replay.component';
import { SubjectAsyncComponent } from './subject-async/subject-async.component';
import { ServiceWorkerComponent } from './service-worker/service-worker.component';
// import { Child1Component } from './other-guards/other-guards/child1.component';
// we can not create same name child

const routes: Routes = [
  { path: '', redirectTo: 'guard', pathMatch: 'full' },
  { path: 'guard', component: GuardsComponent },

  { path: 'contentChild',
  loadChildren: ()=> import('./content-child/content-child.module').then(m => m.ContentChildModule) },

  { path: 'viewchild', component: ViewchildComponent },
  {
    path: 'viewEncapsulation',
    loadChildren: ()=> import('./view-encapsulation/view-encapsulation.module').then(m => m.ViewEncapsulationModule)
  },
  { path: 'changeDetection',
loadChildren: ()=> import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule)},

  {
    path: 'canActivate',
   loadChildren : ()=> import('./can-activate/can-activate.module').then(m => m.CanActivateModule)
  },
  {
    path: 'otherGuards',
    component: OtherGuardsComponent,
    canActivateChild: [CanActivateChildGuard],
    children: [{ path: 'addGuards', component: AddGuardsComponent },
  { path : 'deactGuard' , component : CanDeactivateComponent , canDeactivate : [CanDeactivateGuard]}]
  },
  { path : 'resolve' , component : ResolveComponent , 
  resolve : { data : ResolveGuard}
 },
{
  path : 'hooks' , 
  loadChildren : ()=> import('./hooks/hooks.module').then(m => m.HooksModule)
},
{ path : 'pipes' , component: PipesComponent},
{ path : 'output' , component : OutputEmitComponent },
{ path : 'promise-observable' , component:  PromiseObservableComponent}, 
{ path : 'api' , component : ApiComponent},
{ path : 'observable-subject' , component : ObservableSubjectsComponent},
{ path : 'subject-Behavioural' , component : SubjectsBehaviouralComponent },
{ path : 'replay' , component : SubjectReplayComponent},
{path : 'async' , component : SubjectAsyncComponent },
{ path : 'directive' , component : CustomDirectiveComponent},
{ path : 'serviceWorker' , component : ServiceWorkerComponent},
  { path: 'page404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
