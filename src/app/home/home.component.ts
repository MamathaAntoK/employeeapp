import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:HomeserviceService) { }
list:any
  ngOnInit(): void {
    this.service.getdata().subscribe((res=>{
      this.list=res;
      console.log(this.list)
    }))
  }

 

}
