import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './ng-content/child/child.component';
import { Child2Component } from './ng-content/child2/child2.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { GuardsComponent } from './guards/guards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActivateChildGuard } from './guards/manyGuards/can-activate-child.guard';
import { OtherGuardsComponent } from './other-guards/other-guards.component';
import { AddGuardsComponent } from './other-guards/add-guards/add-guards.component';
import { CanDeactivateComponent } from './other-guards/can-deactivate/can-deactivate.component';
import { PipesComponent } from './pipes/pipes.component';
import { OutputEmitComponent } from './output-emit/output-emit.component';
import { EmitEventComponent } from './output-emit/emit-event/emit-event.component';

import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { ApiComponent } from './api/api.component';
import { ObservableSubjectsComponent } from './observable-subjects/observable-subjects.component';
import { SubjectsBehaviouralComponent } from './subjects-behavioural/subjects-behavioural.component';
import { AgePipe } from './pipes/age.pipe';
import { CanDeactivateGuard } from './guards/manyGuards/can-deactivate.guard';
import { ResolveComponent } from './resolve/resolve.component';
import { ResolveGuard } from './guards/manyGuards/resolve.guard';
import { InterceptorInterceptor } from './common/interceptor.interceptor';
import { LoggingInterceptor } from './common/logging.interceptor';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { SubjectReplayComponent } from './subject-replay/subject-replay.component';
import { SubjectAsyncComponent } from './subject-async/subject-async.component';
import { ServiceWorkerComponent } from './service-worker/service-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    ViewchildComponent,
    NgContentComponent,
    GuardsComponent,
    PageNotFoundComponent,
    OtherGuardsComponent,
    AddGuardsComponent,
    CanDeactivateComponent,
    PipesComponent,
    OutputEmitComponent,
    EmitEventComponent,
    PromiseObservableComponent,
    ApiComponent,
    ObservableSubjectsComponent,
    SubjectsBehaviouralComponent,
    AgePipe,
    ResolveComponent,
    CustomDirectiveComponent,
    SubjectReplayComponent,
    SubjectAsyncComponent,
    ServiceWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [  CanActivateChildGuard , CanDeactivateGuard , ResolveGuard , {
    provide : HTTP_INTERCEPTORS , useClass : InterceptorInterceptor , multi : true
  },
{ provide : HTTP_INTERCEPTORS , useClass: LoggingInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
