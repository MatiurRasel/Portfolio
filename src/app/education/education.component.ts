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
      institute: 'University Of Dhaka',
      course: 'B.sc.(Hons) in Mathematics',
      duration: '2010-2015',
      gpa: '3.08',
    },
    {
      institute: 'University Laboratory School & College',
      course: 'HSC',
      duration: '2008-2010',
      gpa: '4.00',
    },
    {
      institute: 'Motijheel Govt. Boys High School',
      course: 'SSC',
      duration: '2005-2007',
      gpa: '5.00',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
