import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-exercices-list',
  templateUrl: './exercices-list.page.html',
  styleUrls: ['./exercices-list.page.scss'],
})
export class ExercicesListPage implements OnInit {

  bodyPart:string | null ;
  constructor(private router: Router,private actRoute: ActivatedRoute) { 
    this.bodyPart=this.actRoute.snapshot.paramMap.get('bodyPart');
    console.log(this.bodyPart)
  }

  ngOnInit() {
  }

}
