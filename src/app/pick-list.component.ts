import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {PickListItem} from "./pick-list-item";

import {faAngleDown, faAngleUp, faArrowsAltV, faSearch, faTrash} from '@fortawesome/free-solid-svg-icons';
import {PICKLIST_ANIMATION} from "./pick-list.animations";

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: [],
  animations: [PICKLIST_ANIMATION]
})
export class PickListComponent implements OnInit {

  faSearch = faSearch;
  faTrash = faTrash;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faArrowsAltV = faArrowsAltV;

  @Input() withDescription: boolean = false;

  @Input() selectedItems: PickListItem[] = [];
  @Output() selectedItemsChange: EventEmitter<PickListItem[]> = new EventEmitter();

  _items: PickListItem[];

  @Input() set items(items: PickListItem[]) {
    this._items = items.slice();
    this._items.forEach((value: PickListItem) => value.selected = false)
  }

  get items(): PickListItem[] {
    this._items.forEach((value: PickListItem) => delete value.selected);
    return this._items;
  }

  constructor() {

  }

  ngOnInit() {
  }

  addItem(item: PickListItem) {
    if (!item.selected) {
      item.selected = true;
      this.selectedItems.push(item);
    }
  }

  removeItem(item: PickListItem) {
    if (item.selected) {
      item.selected = false;
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
    }
  }

  toggleItem(item: PickListItem) {
    if (item.selected)
      this.removeItem(item);
    else
      this.addItem(item);
  }

  itemUp(item: PickListItem) {
    this.selectedItems.splice(this.selectedItems.indexOf(item) - 1, 0, this.selectedItems.splice(this.selectedItems.indexOf(item), 1)[0])
  }

  itemDown(item: PickListItem) {
    this.selectedItems.splice(this.selectedItems.indexOf(item) + 1, 0, this.selectedItems.splice(this.selectedItems.indexOf(item), 1)[0])
  }

}
