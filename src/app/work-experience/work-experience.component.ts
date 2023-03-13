import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Chief Executing Officer',
      company: 'Google (Aplhabet)',
      duration: 'Aug 2015 - Now',
      description: [
        'Working to expand google in remote areas.',
        'Working to develop new technologies to make life easier.',
      ],
    },
    {
      role: 'Senior Vice President',
      company: 'Google',
      duration: 'Apr 2012 - Aug 2015',
      description: [
        'Involved in various Public talks',
        'Open Sourced Google VP8',
      ],
    },
    {
      role: 'Vice President',
      company: 'Google',
      duration: 'Jul 2008 - Mar 2012',
      description: [
        'Included Android in Google',
        'Worked on Development of Google Maps',
      ],
    },
    {
      role: 'Product Manager',
      company: 'Google',
      duration: 'Apr 2004 - Jun 2008',
      description: [
        'Worked on Google Toolbar',
        'Involved in team to develop Google Chrome',
      ],
    },
    {
      role: 'Junior Programmer',
      company: 'Desh Universal Pvt. Limited',
      duration: 'Sep 2019 - Mar 2020',
      description: [
        'Worked with multiple teams to develop desktop and web applications',
        'Worked on different technologies such as (Dotnet, C++, Java)',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

