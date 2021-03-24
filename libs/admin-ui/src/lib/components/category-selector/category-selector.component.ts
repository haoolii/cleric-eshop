import { map, filter } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

interface Item {
  display_name: string;
  name: string;
  has_active_children: boolean;
  low_stock_value: number;
  has_children: string;
  is_default: number;
  parent_id: number;
  enable_size_chart: boolean;
  id: number;
}

@Component({
  selector: 'cleric-eshop-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {

  @Input()
  set data(data: Array<Item>) {
    this.data$.next(data);
  }
  data$ = new BehaviorSubject<Array<Item>>([]);
  groupLevel1$ = this.data$.pipe(
    map(list => list.filter(item => item.parent_id === 0))
  )
  selectedGroup1$ = new BehaviorSubject<Item>(null);

  groupLevel2$ = combineLatest([this.data$, this.selectedGroup1$]).pipe(
    map(([data, selectedGroup1]) => {
      if (data.length && selectedGroup1)  {
        return data.filter(item => item.parent_id === selectedGroup1.id);
      } else {
        return [];
      }
    })
  )
  selectedGroup2$ = new BehaviorSubject<Item>(null);

  groupLevel3$ = combineLatest([this.data$, this.selectedGroup2$]).pipe(
    map(([data, selectedGroup2]) => {
      if (data.length && selectedGroup2)  {
        return data.filter(item => item.parent_id === selectedGroup2.id);
      } else {
        return [];
      }
    })
  )
  selectedGroup3$ = new BehaviorSubject<Item>(null);

  @Input() ngModel: Array<Item> = [];
  @Output() ngModelChange = new EventEmitter<Array<Item>>();

  constructor() { }

  ngOnInit(): void {
    combineLatest([
      this.selectedGroup1$,
      this.selectedGroup2$,
      this.selectedGroup3$
    ])
    .pipe(map(list => list.filter(item => item)))
    .subscribe(list => this.ngModelChange.emit(list))
  }

  selectGroup1(item: Item): void {
    this.selectedGroup1$.next(item);
    this.selectedGroup2$.next(null);
    this.selectedGroup3$.next(null);
  }

  selectGroup2(item: Item): void {
    this.selectedGroup2$.next(item);
    this.selectedGroup3$.next(null);
  }

  selectGroup3(item: Item): void {
    this.selectedGroup3$.next(item);
  }
}
