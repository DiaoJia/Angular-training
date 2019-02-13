import { AdService } from './../../services/ad.service';
import { AdItemModel } from './../../models/ad-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss']
})
export class DynamicComponentsComponent implements OnInit {

  public ads:AdItemModel[];
  constructor(private _adService:AdService) { }

  ngOnInit() {
    this.ads = this._adService.getAds();
  }
}
