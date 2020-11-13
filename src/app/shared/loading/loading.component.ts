import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { distinctUntilChanged, filter, startWith, takeUntil } from "rxjs/operators";
import {AppService} from '../../services/app.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  private showTime = 0;

  constructor(
    private appService: AppService,
    private elementRef: ElementRef,
    private render: Renderer2) {
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  ngOnInit(): void {
    this.appService.loadingSubject.pipe(distinctUntilChanged()).subscribe(isLoading => {
      if (isLoading) {
        this.render.addClass(this.elementRef.nativeElement, 'show');
        interval(100).pipe(
          startWith(100)
          , takeUntil(this.appService.loadingSubject.pipe(
            filter(isLoading2 => !isLoading2)
          ))
        ).subscribe(() => {
          this.showTime += 100;
        });

      } else {
        if (this.showTime <= 1500) {
          this.render.removeClass(this.elementRef.nativeElement, 'show');
          return;
        }
        this.render.addClass(this.elementRef.nativeElement, 'prepare-close');
        this.render.removeClass(this.elementRef.nativeElement, 'show');
        setTimeout(() => {
          this.render.removeClass(this.elementRef.nativeElement, 'prepare-close');
          this.showTime = 0;
        }, 200);
      }
    });
  }

}
