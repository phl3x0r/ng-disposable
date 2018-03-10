# ng-disposable

## Description

## Usage

Implement the Disposable interface:

```typescript
export class MyService implements Disposable {
  public dispose() {
    // tear down
  }
}
```

Add your disposable service to the module:

```typescript
@NgModule({
  imports: [DisposableModule.forRoot()],
  providers: [
    MyService,
    {
      provide: DISPOABLES,
      useExisting: MyService,
      multi: true
    }
  ]
})
export class AppModule {}
```

use the DisposableService to tear down all disposables:

```typescript
export class AppComponent {
  constructor(private service: DisposableService) {}

  public logout() {
    this.service.dispose();
  }
}
```

## Contribute
