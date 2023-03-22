import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'MD. Matiur Rahman Mondol(Rasel)'],
    ['DOB', '25th December, 1992'],
    ['Work Exp', '4 Years'],
    ['Education', 'B.SC (2015)'],
    ['Interests', 'Cycling & Photography'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 4 years of experience in efficient and large-scale web-based systems development in software industry.',
    'Highly experienced in backend development in .NET.',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as Senior Programmer of DUPL.'
  
  ];
  constructor() {}

  ngOnInit(): void {}
}
