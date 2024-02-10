import { Component ,OnInit, Input, Output, EventEmitter,HostListener } from '@angular/core';
import { UserService } from './user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  pageLoadUrl:string=environment.URL+"key=";
   pageSizeForSearch:number=10;
  scrollCount:number=1;



  
  @HostListener('wheel', ['$event'])
  onWheelScroll(event: WheelEvent) {
    if (Math.sign(event.deltaY) > 0) {
      // Scrolling down
      this.handleScrollDown();
    } 
  }

  handleScrollDown() {
    this.scrollCount=this.scrollCount+1
    this.PostList(this.scrollCount);
    
    // Your method logic here
  }

  POST:any;
  DataCopy:any;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [10];

  searchtext:any;


  constructor(private userSerives:UserService,private spinner1: NgxSpinnerService){
    
    
  }
  ngOnInit():void{
    this.page = 1;
    this.PostList(1);
    
  }


  handlePageChange(event: number): void {
   
    this.page = event;
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    //this.PostList();
  }
  searchTitle(searchValue:string): void {
    this.page = 1;
    this.POST= this.DataCopy.filter(
      (item:any) => item.bookInfo.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }
  
  PostList(sc:number):void{
    this.spinner1.show();
    this.userSerives.getAllPost(this.pageLoadUrl+ sc).subscribe((response:any)=>{
      console.log(response);
      this.POST=response;
      this.DataCopy=response;
      console.log(this.POST);
      setTimeout(() => {
        this.spinner1.hide();
      }, 0);
    })
  }
}
