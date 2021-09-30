import { Component } from '@angular/core';
import {AuthServiceService} from "../auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: AuthServiceService ) {

  }

}
