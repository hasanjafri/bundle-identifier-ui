import { Component, OnInit } from '@angular/core';

import { BundleIdentifier } from './../../models/bundleIdentifier';
import { BundleIdentifierService } from './../../services/bundle-identifier.service';

@Component({
  selector: 'app-api-bump',
  templateUrl: './api-bump.component.html',
  styleUrls: ['./api-bump.component.css']
})
export class ApiBumpComponent implements OnInit {

  private bundleId: BundleIdentifier;
  public resp: String;

  constructor(private BundleIdentifierServ: BundleIdentifierService) { }

  ngOnInit() {
    this.bundleId = {
      bundle_id: '',
      build_number: 0,
      created_at: '',
      last_updated: ''
    };
  }

  public onSubmit() {
    this.BundleIdentifierServ.bumpBundleIdentifier(this.bundleId).subscribe(response => {
      if (response.success === true) {
        this.resp = response.data;
      }
    }, (error => {
      console.log(error);
      this.resp = JSON.parse(error._body).message;
    }));
  }

}
