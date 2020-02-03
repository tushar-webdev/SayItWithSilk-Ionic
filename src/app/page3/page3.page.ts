import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
  id: any;
  dayName: any;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("Page3 Starting......");
  }
  selectDay(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let id = idAttr.nodeValue;
    this.id = id;
    this.dayName = target.alt;
    event.target.classList.add('small')
    console.log(`Selected day is ${id}............`,this.dayName)
    setTimeout(() => {
      event.target.classList.remove('small')
      this.router.navigate(['page4',{'id':id,'dayName':this.dayName}])
    }, 200);

  }
}
