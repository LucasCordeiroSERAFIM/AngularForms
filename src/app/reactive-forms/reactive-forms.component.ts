import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

 public  myForm:FormGroup = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required]],
  message: ['', [Validators.required, Validators.minLength(15)]],
 })
  constructor(private fb: FormBuilder) { }

  ngOnInit():void{

  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
