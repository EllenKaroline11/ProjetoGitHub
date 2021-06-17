import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './modules/home/home.component';

import {Component} from '@angular/core';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatFormFieldModule} from '@angular/material/form-field';
import { BuscaComponent } from './busca/busca.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
