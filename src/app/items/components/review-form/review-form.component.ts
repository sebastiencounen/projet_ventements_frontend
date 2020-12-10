import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    stars: ['', Validators.required],
    descriptionReview: ['', Validators.required]
  });

  stars: number[] = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onClickStar(nbStars: number) {
    const stars = document.querySelectorAll('.stars-input > div > i');
    const radios = document.querySelectorAll('input[type="radio"]');

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
    console.log(this.form.value);
  }
}
