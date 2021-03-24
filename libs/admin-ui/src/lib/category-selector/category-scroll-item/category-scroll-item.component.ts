import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'cleric-eshop-category-scroll-item',
  templateUrl: './category-scroll-item.component.html',
  styleUrls: ['./category-scroll-item.component.scss']
})
export class CategoryScrollItemComponent implements OnInit {

  @Input() list: Array<Category> = [];
  @Input() editable = false;

  @Input() value: Category;
  @Output() valueChange = new EventEmitter<Category>();
  @Output() edit = new EventEmitter<Category>();
  @Output() delete = new EventEmitter<Category>();

  constructor() { }

  ngOnInit(): void {}

  select(v: Category): void {
    this.valueChange.emit(v);
  }

}
