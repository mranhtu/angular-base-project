import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  EventEmitter,
  Injectable,
  Injector
} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Subject} from 'rxjs';

export class ConfirmModel {
  constructor(
    public message: string,
    public cancelCallback?: Function,
  ) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  componentRef: ComponentRef<{}>;
  confirmChange = new EventEmitter();
  // end old notify, will be removed when applly new framework
  noticeSubject = new EventEmitter<{
    // 0 - hide notice
    // 1 - show notice
    type: number,
    message: string,
    source: any
  }>();
  triggerLoading = false;
  loadingSubject: Subject<boolean> = new Subject();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private translate: TranslateService) {
    let timeoutRef = null;
  }

  hideNotify() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }

  showLoading(): void {
    this.loadingSubject.next(true);
  }

  hideLoading(): void {
    if (!this.triggerLoading) {
      this.loadingSubject.next(false);
    }
  }
}
