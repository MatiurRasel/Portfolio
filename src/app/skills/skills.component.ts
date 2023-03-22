import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  implements OnInit {
  skills:Skill[]=[
    
    {
      name: 'Microsoft SQL Server',
      level:'Expert',
      rating : 90
    },
    {
      name: 'C#,ASP.NET, WEB-FORM, MVC, LINQ, Crystal Report',
      level:'Expert',
      rating : 90,
    },
    {
      name: 'HTML, CSS, JS',
      level:'Expert',
      rating : 80,
    },
    {
      name: 'ASP.NET Core, EF Core',
      level:'Intermidiate',
      rating : 70,
    },
    {
      name: 'Angular,Angular Material',
      level:'Beginner',
      rating : 50,
    }
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
