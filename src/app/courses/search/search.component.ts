import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit { 
  entersearchvalue : string = '';  // if we give little bit space inside the empty string it will not give the proper result


  constructor() { }
  @Output()
  searchTextchange : EventEmitter<string> = new EventEmitter<string>();

  onsearchValue(){
this.searchTextchange.emit(this.entersearchvalue);
console.log(this.entersearchvalue)
  }

  ngOnInit(): void {
  }

}
