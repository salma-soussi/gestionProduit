import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 // constructor(private ar:ActivatedRoute)
  ngOnInit(): void {
 //   let id=this.ar.snapshot.params['id']
  }

}
