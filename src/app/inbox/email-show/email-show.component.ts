import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email : Email;
  constructor(private router : ActivatedRoute
  ) {
    this.email = router.snapshot.data['email'] ;
    this.router.data.subscribe(({ email })=>{
       this.email = email;
    });
   }

  ngOnInit(): void {

  //  this.router.params.subscribe(({ id })=>{
  //   this.emailservice.getEmail(id).subscribe(email=>{
  //     console.log(email);
  //   })
  //  });
  // this.router.params.pipe(
  //   switchMap(({id})=>{
  //    return  this.emailservice.getEmail(id);
  //   })
  // ).subscribe(email=>{
  //   this.email = email;
  // })
   }
  

}
