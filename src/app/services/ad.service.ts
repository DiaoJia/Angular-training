import { AdItemModel } from './../models/ad-item.model';
import { HeroProfileComponent } from './../pages/dynamic-components/hero-profile.component';
import { HeroJobAdComponent } from './../pages/dynamic-components/hero-job-ad.component';
import { Injectable }           from '@angular/core';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItemModel(HeroJobAdComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItemModel(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItemModel(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItemModel(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}
