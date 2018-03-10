import { InjectionToken } from '@angular/core/src/di/injection_token';
import { Disposable } from './disposable.interface';

export const DISPOSABLES = new InjectionToken<Disposable>('DISPOSABLE');
