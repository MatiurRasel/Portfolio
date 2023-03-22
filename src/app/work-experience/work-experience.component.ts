import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Senior Programmer',
      company: 'Desh Universal Pvt. Limited',
      duration: 'Jul 2022 - Present',
      description: [
        'Develop & Maintain',
        'Heavily involved in development of the EIMS (Educational Institute Management System) applications using Microsoft .Net Technologies.',
        'Multi-Tiered application development, including user-facing features, business functionalities, database objects and reports.',
        'Actively contributed to the process of continual improvement, with regard to self, team and systems.',
        'Training new team members and providing technical leadership to existing members if required.',
      ],
      environment:'Environment: C#, ASP.NET MVC 5, HTML, CSS, Bootstrap, JavaScript, jQuery, GITLAB, Visual Studio, VS Code, MS SQL Server, IIS, Crystal Report.'
    },
    {
      role: 'Programmer',
      company: 'Desh Universal Pvt. Limited',
      duration: 'Apr 2020 - Jun 2022',
      description: [
        'Involved in gathering business requirements, planning and project documentation.',
        'Heavily involved in development of the EIMS (Educational Institute Management System) applications using Microsoft .Net Technologies.',
        'Multi-Tiered application development, including user-facing features, business functionalities, database objects and reports.',
        'Actively contributed to the process of continual improvement, with regard to self, team and systems.',
        'Training new team members and providing technical leadership to existing members if required.',
      ],
      environment:'Environment: C#, ASP.NET MVC 5, HTML, CSS, Bootstrap, JavaScript, jQuery, GITLAB, Visual Studio, VS Code, MS SQL Server, IIS, Crystal Report.'
    },
    {
      role: 'Junior Programmer',
      company: 'Desh Universal Pvt. Limited',
      duration: 'Sep 2019 - Mar 2020',
      description: [
        'Migrating, Developed and enhance features from desktop to web-based applications and web-based application',
        'Implement software/application for different clients and provide software training to Clients/IT Officer.',
        'Maintaining regular client communication, and support through Email, Skype, TeamViewer, Anydesk.',
      ],
      environment:'Environment: C#, ASP.NET, Bootstrap, jQuery, MS SQL Server and Crystal Report.'
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

