import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-exercice-details',
  templateUrl: './exercice-details.page.html',
  styleUrls: ['./exercice-details.page.scss'],
})
export class ExerciceDetailsPage implements OnInit {

  constructor(private router: Router,private actRoute: ActivatedRoute) { 
    console.log(this.router.getCurrentNavigation()!.extras.state)
  }

  ngOnInit() {
    /* this.actRoute.data.subscribe(data => {
      console.log(data);
  }) */
  }

}
