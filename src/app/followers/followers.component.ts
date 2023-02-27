import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitFollowersService } from '../services/git-followers.service';
import { combineLatest, switchMap } from 'rxjs';


@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {
  followers: any;
  constructor(
    private route: ActivatedRoute,
    private service:GitFollowersService){
  }

  ngOnInit(): void {
  
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap])
      .pipe(
        switchMap(
          combined => {            
            //Required parameters
            let id = combined[0].get('id');
            let location = combined[0].get('location');
            
            //Optional parameters
            let page = combined[1].get('page');
            let newest = combined[1].get('newest');
            let cheapest = combined[1].get('cheapest');
 
            //Followers data
            return this.service.getAll();
          }
        )
      )
      .subscribe(data => this.followers = data);

   
    
  }

}
