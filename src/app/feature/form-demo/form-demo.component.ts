import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {

  formUser: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formUser = formBuilder.group({
      amount: this.formBuilder.control(null, [Validators.required]),
      otp: this.formBuilder.control(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9\/\_\-]*$/)])
    });
  }

  ngOnInit(): void {
  }

}
