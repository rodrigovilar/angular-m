import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class FlashMessageService {

  private messageChangedSource = new Subject<string>();
  public messageChanged$ = this.messageChangedSource.asObservable();

  changeMessage(message: string) {
    this.messageChangedSource.next(message);
  }

  clearMessage() {
    this.messageChangedSource.next(null);
  }
}
