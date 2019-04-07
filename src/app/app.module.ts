import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef,Type, ComponentFactoryResolver} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';

const components = [
  AppComponent, SigninComponent,SignupComponent,
  NavComponent, AccueilComponent,ExercicesComponent, EvenementComponent,
  ProfilComponent, ContactComponent];


const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup',      component: SignupComponent }, 
  { path: '',      component: SigninComponent },
  { path: 'home',      component: NavComponent },  
  { path: 'accueil',      component: AccueilComponent }, 
  { path: 'exercices',      component: ExercicesComponent },
  { path: 'evenement',      component: EvenementComponent }, 
  { path: 'profil',      component: ProfilComponent },  
  { path: 'contact',      component: ContactComponent },  
  
];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavComponent,
    AccueilComponent,
    ExercicesComponent,
    EvenementComponent,
    ProfilComponent,
    ContactComponent
      
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
    ],
  entryComponents: components,

  providers: [],
})
export class AppModule { 
  constructor(private resolver: ComponentFactoryResolver) { }
    ngDoBootstrap(appRef: ApplicationRef) {
        components.forEach((componentDef: Type<{}>) => {
            const factory = this.resolver.resolveComponentFactory(componentDef);
            if (document.querySelector(factory.selector)) {
                appRef.bootstrap(factory);
            }
        });
    }
}
