import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisposableService } from '.';

@NgModule({})
export class DisposableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DisposableModule,
      providers: [DisposableService]
    };
  }
}
