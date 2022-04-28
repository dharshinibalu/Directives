import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  courses = [
    { id:101 , name : 'Javascript for beginners', author:'John Heikala' , duration: 35 , type: 'Free' ,
   price:0.00 , ratings : 3.5 , image :'assets/image/courses/js.png',
    description :'In this course you will learn the fundamentals of HTML. This courses purely designed for beginners'},

        { id:102 , name : 'HTML for beginners', author:'Mark Vought' , duration: 28 , type: 'Premium' ,
   price:129.00, ratings : 4 , image :'assets/image/courses/html.jpeg',
    description :'In this course you will learn the fundamentals of HTML. This courses purely designed for beginners'},

        { id:103 , name : 'CSS for beginners', author:'Steve smith' , duration: 30 , type: 'Free' ,
   price:0.00 , ratings : 3.7 , image :'assets/image/courses/css.jpeg',
    description :'In this course you will learn the fundamentals of CSS. This courses purely designed for beginners'},  

       { id:104 , name : 'Angular For beginners', author:'Steve smith' , duration: 47 , type: 'Premium' ,
   price:145.00 , ratings : 4.3 , image :'assets/image/courses/angu.png',
    description :'In this course you will learn the fundamentals of Angular. This courses purely designed for beginners'},  

    { id:105 , name : 'React For beginners', author:'John Heikala' , duration: 50 , type: 'Premium' ,
   price:139.00 , ratings : 3.9 , image :'assets/image/courses/react.png',
    description :'In this course you will learn the fundamentals of Angular. This courses purely designed for beginners'},  

       { id:106 , name : 'Advance Angular Courses', author:'John Heikala' , duration: 53 , type: 'Premium' ,
   price:140.00 , ratings : 4.8 , image :'assets/image/courses/angu.png',
    description :'In this course you will learn all the concepts from basic to advance. This courses will help you to learn easily'}, 

       { id:107 , name : 'Python For beginners', author:'Fedrick jackson' , duration: 47 , type: 'Free' ,
   price:0.00 , ratings : 2.9 , image :'assets/image/courses/py.jpeg',
    description :'In this course you will learn the fundamentals of python. This courses purely designed for beginners'},  

     { id:108 , name : 'Advance Javscript Courses', author:'John Heikala' , duration: 56 , type: 'Premium',
   price:233.00 , ratings : 3.5 , image :'assets/image/courses/js.png',
    description :'In this course you will learn all the concepts from basic to advance. This courses will help you to learn easily'}, 

      { id:109 , name : 'Java For beginners', author:'Lucy Natasha' , duration: 50 , type: 'Free' ,
   price:0.00 , ratings : 3.9 , image :'assets/image/courses/javs.png',
    description :'In this course you will learn the fundamentals of java. This courses purely designed for beginners'}, 

      { id:110 , name : 'Angular with .NET core', author:'Mark Vought' , duration: 35 , type: 'Premium' ,
   price:123.00 , ratings : 3. , image :'assets/image/courses/nnet.png',
    description :'In this course you will learn the fundamentals of dot net. This courses purely designed for beginners'},
  ]

  ngOnInit(): void {
  }

}
