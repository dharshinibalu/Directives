import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // THIS IS THE CHILD COMPONENT TS
  // we can use alising name instead of property
 @Input('total') all:number = 0;
 @Input() free : number =0;
 @Input() premium : number = 0;

// create a proporty of input value and bind it with html file using Two way data binding
 selectedbuttonRadio : string = 'All'
  constructor() { }

  @Output() radiochange : EventEmitter<string> = new EventEmitter<string>();

  childraise(){

     this.radiochange.emit(this.selectedbuttonRadio)
     console.log(this.selectedbuttonRadio)
  }

  ngOnInit(): void {
  }

}
