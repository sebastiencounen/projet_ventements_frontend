import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, OnChanges {
  @Input()
  message: string;

  @Input()
  duration: number = 3;

  @Input()
  isShown: boolean = false;
  @Output()
  isShownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isShown'].currentValue) {
      this.isShown = changes['isShown'].currentValue;
      setTimeout(() => {
        this.isShown = false;
        this.isShownChange.emit(this.isShown);
      }, this.duration * 100);
    }
  }
}
