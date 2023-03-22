import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educationList: Education[] = [

    {
      institute: 'IDB-BISEW IT Scholarship Project (Diploma)',
      course: 'ESAD - C# .NET',
      duration: '2018-2019',
      gpa: 'Pass',
    },
    {
      institute: 'University Of Dhaka',
      course: 'B.sc.(Hons) in Mathematics',
      duration: '2010-2015',
      gpa: '3.08',
    },
    {
      institute: 'University Laboratory School & College',
      course: 'H.S.C.',
      duration: '2008-2010',
      gpa: '4.00',
    },
    {
      institute: 'Motijheel Govt. Boys High School',
      course: 'S.S.C.',
      duration: '2005-2007',
      gpa: '5.00',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
