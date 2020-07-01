import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`Product rating: ${this.rating} stars`);
  }
}
