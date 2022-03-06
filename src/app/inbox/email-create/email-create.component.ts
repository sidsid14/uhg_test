import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal: boolean = false;
  email: Email;
  constructor() {
    this.email = {
      id: '',
      to: '',
      from: 'sudhanshu@angular-email.com',
      subject: '',
      html: '',
      text: '',
    };
  }

  ngOnInit(): void {}
}
