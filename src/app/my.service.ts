import { Disposable } from '../lib/public_api';

export class MyService implements Disposable {
  public dispose() {
    // tear down
  }
}
