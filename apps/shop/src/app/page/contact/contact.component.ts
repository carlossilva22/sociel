/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sociel-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  required: any;

  contactForm: FormGroup;

  constructor(private toastr: ToastrService, private http: HttpClient) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl(''),
      message: new FormControl(''),
    });
  }

  mail() {
    // eslint-disable-next-line prefer-const
    let params = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      title: this.contactForm.value.title,
      message: this.contactForm.value.message,
    };
    //console.log(params);

    this.showToastr();

    this.http.post('http://localhost:3000/mail', params).subscribe((res) => {
      //console.log(res);
    });
  }

  showToastr() {
    this.toastr.success('Correio', 'Mensagem enviada.');
  }
}
