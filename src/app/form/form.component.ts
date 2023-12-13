import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() model: any;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  

  fields!: any[];
  
  
  ngOnInit() {
    this.fields = this.model.fields; 
    this.form = this.createForm();
  }

  createForm() {
    let group: { [key: string]: any } = {};
   
    this.model.fields.forEach((field: { name: string, value: any }) => {
      group[field.name] = field.value;
    });
   
    return this.formBuilder.group(group);
   }
   
}
