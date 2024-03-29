import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

declare let chrome: any;

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    searchText: string = '';
    constructor() { }

    submitForm(form: any): void {
      if (form.valid) {
        console.log('Form data:', this.searchText);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs: { id: any; }[]) => {{
          chrome.tabs.sendMessage(tabs[0].id, {msg: "setSearchForm", val: this.searchText}, function(response: any) {
            console.log("response", response);
            window.close();
          });
        }});
      }
    }
}
