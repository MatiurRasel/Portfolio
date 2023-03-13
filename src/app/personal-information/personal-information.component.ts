import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Matiur Rahman Rasel'],
    ['DOB', '25/12/1992'],
    ['Work Exp', '4 Years'],
    ['Education', 'B.SC (2015)'],
    ['Interests', 'Cycling'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 4 years of experience in software industry.',
    'Worked as Junior Programmer then Programmer in DUPL(Desh Universal Pvt. Limited.) for various projects (Web-Form, MVC, .Net Core).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as Senior Programmer of DUPL',
  ];
  constructor() {}

  ngOnInit(): void {}
}
