import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
 displayNotification : boolean = false;
  constructor() { }
  searchValue: string = ''
  closeEvent(){
    this.displayNotification = true;
  }
   products = [
    {
      name: 'Nishant',
      age: 25,
      status: 'Available'
    },
    {
      name: 'Shailesh',
      age: 45,
      status: 'Available'
    },
    {
      name: 'Abhishek',
      age: 36,
      status: 'Not Available'
    },
    {
      name: 'Akshay',
      age: 65,
      status: 'Available'
    },
    {
      name: 'Ashish',
      age: 12,
      status: 'Available'
    },
    {
      name: 'Uday',
      age: 31,
      status: 'Not Available'
    },
    {
      name: 'Mayank',
      age: 45,
      status: 'Not Available'
    },
    {
      name: 'Raju',
      age: 74,
      status: 'Available'
    },
   ]

  ngOnInit(): void {
  }

}
