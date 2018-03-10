import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisposableModule } from '../../dist/ng-disposable';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DisposableModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
