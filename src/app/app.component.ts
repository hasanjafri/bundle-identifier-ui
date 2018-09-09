import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    {path: 'home', label: 'Home'},
    {path: 'api/read', label: 'Read a Bundle Identifier'},
    {path: 'api/set', label: 'Set a Bundle Identifier'},
    {path: 'api/bump', label: 'Bump a Bundle Identifier'}
  ];

  constructor() {}
}
