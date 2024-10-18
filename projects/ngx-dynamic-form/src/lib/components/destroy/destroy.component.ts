import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '<ng-content></ng-content>',
})
export class DestroyComponent implements OnDestroy {
  /**
   * Subject that emits a boolean value and completes when the component is destroyed.
   * This Subject can be used to unsubscribe from observables and avoid memory leaks.
   */
  destroy$ = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
