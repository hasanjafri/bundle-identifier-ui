import { Component, OnInit } from '@angular/core';

import { BundleIdentifier } from './../../models/bundleIdentifier';
import { BundleIdentifierService } from './../../services/bundle-identifier.service';

@Component({
  selector: 'app-api-read',
  templateUrl: './api-read.component.html',
  styleUrls: ['./api-read.component.css']
})
export class ApiReadComponent implements OnInit {

  private list: BundleIdentifier;
  private resp: BundleIdentifier;
  public message: String;

  constructor(private BundleIdentifierServ: BundleIdentifierService) { }

  ngOnInit() {
    this.list = {
      bundle_id: '',
      build_number: 0,
      created_at: '',
      last_updated: ''
    },
    this.resp = {
      bundle_id: '',
      build_number: null,
      created_at: '',
      last_updated: ''
    },
    this.message = '';
  }

  public onSubmit() {
    this.BundleIdentifierServ.readBundleIdentifier(this.list).subscribe(response => {
      if (response.success === true) {
        if (response.data) {
          this.resp.bundle_id = response.data.bundle_id;
          this.resp.build_number = response.data.build_number;
          this.resp.created_at = response.data.created_at;
          this.resp.last_updated = response.data.last_updated;
          this.message = 'Pulled information for bundle_id: ' + response.data.bundle_id;
        } else {
          this.message = '' + this.list.bundle_id + ' does not exist';
          this.resp = {
            bundle_id: '',
            build_number: null,
            created_at: '',
            last_updated: ''
          };
        }
      }
    });
  }
}
