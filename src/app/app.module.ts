import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppMaterialModule } from './app-material.module';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    PortalModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    MenuItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
