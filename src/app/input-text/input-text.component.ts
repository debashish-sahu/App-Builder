import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() property: string;
  id :string;

  constructor() { }

  ngOnInit() {
    this.id = this.property.toLowerCase().replace(/\s/g, '')
  }

}
