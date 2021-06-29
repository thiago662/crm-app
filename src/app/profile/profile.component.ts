import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.profile();
  }

  profile() {
    this.profileService.getProfile()
      .then((data: any) => {
        console.log(data);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
      });
  }

}
