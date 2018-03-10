import { DisposableService } from './disposable.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({})
export class DisposableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DisposableModule,
      providers: [DisposableService]
    };
  }
}
