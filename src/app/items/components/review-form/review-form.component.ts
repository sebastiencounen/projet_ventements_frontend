import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Review} from '../../types/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  @Output() reviewSubmit: EventEmitter<Review> = new EventEmitter<Review>();

  form: FormGroup = this.fb.group({
    stars: ['', Validators.required],
    title: ['', Validators.required],
    descriptionReview: ['', Validators.required]
  });

  stars: number[] = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onClickStar(nbStars: number) {
    const stars = document.querySelectorAll('.stars-input > div > i');

    this.form.patchValue({ stars: nbStars });

    stars.forEach((s, i) => {
      if (i < nbStars) {
        s.classList.replace('far', 'fas');
      } else {
        s.classList.replace('fas', 'far');
      }
    });
  }

  submit() {
    this.reviewSubmit.emit(this.form.value);
    this.form.reset();
    this.onClickStar(0);
  }
}
