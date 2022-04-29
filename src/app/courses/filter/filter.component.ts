import { Component, OnInit , Input} from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
