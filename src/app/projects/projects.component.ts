import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects: Project[]=[
 
{
  title:'Library Management System (LMS)',
  technologies:'MVC 5, SQL Server, CSS, Bootstrap, JavaScript, jQuery, Crystal Report.',
  description:[
    'Core member of LMS application development team.',
    'Perform design and develop the Service layer, Data Layer and Presentation Layer using MVC 5, Entity Framework and Generic Repository Pattern.',
    'Developed various reports according to the client’s business policy.',
    'Designed frontend of the application using Bootstrap 4 and jQuery.',
  ],
},
{
  title:'Inventory Management System (IMS)',
  technologies:'MVC 5, SQL Server, CSS, Bootstrap, JavaScript, jQuery, Crystal Report.',
  description:[
    'Core member of IMS application development team.',
    'Perform design and develop the Service layer, Data Layer and Presentation Layer using MVC 5, Entity Framework and Generic Repository Pattern.',
    'Developed various reports according to the client’s business policy.',
    'Designed frontend of the application using Bootstrap 4 and jQuery.',
  ],
},
{
  title:'Attendance Notification System (ANS)',
  technologies:'MVC 5, SQL Server, CSS, Bootstrap, JavaScript, jQuery, Crystal Report.',
  description:[
    'Migrated the legacy application to MVC 5 with generic repository pattern.',
    'Rewrite the frontend using Bootstrap 4 and jQuery.',
    'Develop and managing reports according to client’s business policy.',
    'Deploy the application, maintenance and support.',
  ],
},
{
  title:'Human Resource Management System (HRM)',
  technologies:'MVC 5, SQL Server, CSS, Bootstrap, JavaScript, jQuery, Crystal Report.',
  description:[
    'Migrated the legacy application to MVC 5 with generic repository pattern.',
    'Rewrite the frontend using Bootstrap 4 and jQuery.',
    'Develop and managing reports according to client’s business policy.',
    'Deploy the application, maintenance and support.',
  ],
},
{
  title:'Class Routine Management System (CRMS)',
  technologies:'MVC 5, SQL Server, CSS, Bootstrap, JavaScript, jQuery, Crystal Report.',
  description:[
    'Migrated the legacy application to MVC 5 with generic repository pattern.',
    'Rewrite the frontend using Bootstrap 4 and jQuery.',
    'Develop and managing reports according to client’s business policy.',
    'Deploy the application, maintenance and support.',
  ],
},
{
  title:'Student Information & Collection System (SICS)',
  technologies:'MVC 5, SQL Server, CSS, Bootstrap, JavaScript, jQuery, Crystal Report.',
  description:[
    'Migrated the legacy application to MVC 5 with generic repository pattern.',
    'Rewrite the frontend using Bootstrap 4 and jQuery.',
    'Develop and managing reports according to client’s business policy.',
    'Deploy the application, maintenance and support.',
  ],
},
{
  title:'Result Management System (RMS)',
  technologies:'MVC 5, SQL Server, CSS, Bootstrap, JavaScript, jQuery, Crystal Report.',
  description:[
    'Migrated the legacy application to MVC 5 with generic repository pattern.',
    'Rewrite the frontend using Bootstrap 4 and jQuery.',
    'Develop and managing reports according to client’s business policy.',
    'Deploy the application, maintenance and support.',
  ],
},
{
  title:'Point Of Sale (POS)',
  technologies:'MVC 5, SQL Server, CSS, Bootstrap, JavaScript, jQuery, Crystal Report.',
  description:[
    'Core member of POS application development team.',
    'Perform design and develop the Service layer, Data Layer and Presentation Layer using MVC 5, Entity Framework and Generic Repository Pattern.',
    'Develop and managing reports according to client’s business policy.',
    'Designed frontend of the application using Bootstrap 4 and jQuery.',
  ],
}


];

  
  constructor() {}

  ngOnInit(): void {}
}
