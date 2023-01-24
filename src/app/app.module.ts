import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { AutoComponent } from './components/auto/auto.component';
import { MenubarComponent } from './components/auto/menubar/menubar.component';
import {TabMenuModule} from "primeng/tabmenu";
import { StrategyComponent } from './components/auto/strategy/strategy.component';
import {TabViewModule} from "primeng/tabview";
import { RatesComponent } from './components/auto/rates/rates.component';
import { ModeSelectorComponent } from './components/auto/mode-selector/mode-selector.component';
import {SidebarModule} from "primeng/sidebar";
import {SplitterModule} from "primeng/splitter";
import { LitegraphComponent } from './components/auto/litegraph/litegraph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutoComponent,
    MenubarComponent,
    StrategyComponent,
    RatesComponent,
    ModeSelectorComponent,
    LitegraphComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ChipsModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    TabMenuModule,
    RouterTestingModule,
    TabViewModule,
    SidebarModule,
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
