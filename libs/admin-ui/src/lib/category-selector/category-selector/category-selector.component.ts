import { Category } from './../category';
import { map, filter } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'cleric-eshop-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Input()
  set data(data: Array<Category>) {
    this.data$.next(data);
  }
  data$ = new BehaviorSubject<Array<Category>>([]);
  groupLevel1$ = this.data$.pipe(
    map(list => list.filter(category => category.parent_id === 0))
  )
  selectedGroup1$ = new BehaviorSubject<Category>(null);

  groupLevel2$ = combineLatest([this.data$, this.selectedGroup1$]).pipe(
    map(([data, selectedGroup1]) => {
      if (data.length && selectedGroup1)  {
        return data.filter(category => category.parent_id === selectedGroup1.id);
      } else {
        return [];
      }
    })
  )
  selectedGroup2$ = new BehaviorSubject<Category>(null);

  groupLevel3$ = combineLatest([this.data$, this.selectedGroup2$]).pipe(
    map(([data, selectedGroup2]) => {
      if (data.length && selectedGroup2)  {
        return data.filter(category => category.parent_id === selectedGroup2.id);
      } else {
        return [];
      }
    })
  )
  selectedGroup3$ = new BehaviorSubject<Category>(null);

  @Input() editable = false;
  @Input() value: Array<Category> = [];
  @Output() valueChange = new EventEmitter<Array<Category>>();

  @Output() edit = new EventEmitter<Category>();
  @Output() delete = new EventEmitter<Category>();

  constructor() { }

  ngOnInit(): void {
    combineLatest([
      this.selectedGroup1$,
      this.selectedGroup2$,
      this.selectedGroup3$
    ])
    .pipe(map(list => list.filter(item => item)))
    .subscribe(list => this.valueChange.emit(list))
  }

  selectGroup1(category: Category): void {
    this.selectedGroup1$.next(category);
    this.selectedGroup2$.next(null);
    this.selectedGroup3$.next(null);
  }

  selectGroup2(category: Category): void {
    this.selectedGroup2$.next(category);
    this.selectedGroup3$.next(null);
  }

  selectGroup3(category: Category): void {
    this.selectedGroup3$.next(category);
  }
}
