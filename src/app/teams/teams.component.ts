import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  public teamModel = {
    fields: [
      { name: 'teamName', value: '' },
      { name: 'location', value: '' },
      
    ]
  };
}
