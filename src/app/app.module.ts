import { BundleIdentifierService } from './services/bundle-identifier.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ApiReadComponent } from './components/api-read/api-read.component';
import { ApiSetComponent } from './components/api-set/api-set.component';
import { ApiBumpComponent } from './components/api-bump/api-bump.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api/read', component: ApiReadComponent },
  { path: 'api/set', component: ApiSetComponent },
  { path: 'api/bump', component: ApiBumpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApiReadComponent,
    ApiSetComponent,
    ApiBumpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [BundleIdentifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
