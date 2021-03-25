import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavStateService {

  private isOpenSubject$ = new BehaviorSubject(true);

  constructor() { }

  open() {
    this.isOpenSubject$.next(true)
  }

  close() {
    this.isOpenSubject$.next(false)
  }

  get isOpen$() {
    return this.isOpenSubject$.asObservable();
  }
}
