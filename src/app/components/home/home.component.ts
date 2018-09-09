import { Component, OnInit } from '@angular/core';

import { BundleIdentifier } from './../../models/bundleIdentifier';
import { BundleIdentifierService } from './../../services/bundle-identifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private lists: BundleIdentifier[] = [];

  constructor(private BundleIdentifierServ: BundleIdentifierService) { }

  ngOnInit() {
    this.loadlists();
  }

  public loadlists() {
    this.BundleIdentifierServ.getAllLists().subscribe(response => this.lists = response);
  }

}
