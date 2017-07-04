import { Component, OnInit } from '@angular/core';

import { Enquiry } from '../model/enquiry.model';

@Component({
  selector: 'cv-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {
  private submitted = false;

  constructor() { }

  ngOnInit() {
  }

  public onsubmit() {
    this.submitted = true;
  }

}
