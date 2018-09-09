import { Component, OnInit } from '@angular/core';
import { BundleIdentifier } from './../../models/bundleIdentifier';
import { BundleIdentifierService } from './../../services/bundle-identifier.service';

@Component({
  selector: 'app-api-set',
  templateUrl: './api-set.component.html',
  styleUrls: ['./api-set.component.css']
})
export class ApiSetComponent implements OnInit {

  private newBundleId: BundleIdentifier;
  public resp: String;

  constructor(private BundleIdentifierServ: BundleIdentifierService ) { }

  ngOnInit() {
    this.newBundleId = {
      bundle_id: '',
      build_number: 0,
      created_at: '',
      last_updated: ''
    };
  }

  public onSubmit() {
    this.BundleIdentifierServ.setBundleIdentifier(this.newBundleId).subscribe(response => {
      console.log(response);
      if (response.success === true) {
        this.resp = response.data;
      }
    }, (error => {
      console.log(error);
      this.resp = JSON.parse(error._body).message;
    } ));
  }

}
