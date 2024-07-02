import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBlogComponent } from './single-blog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SingleBlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SingleBlogModule { }
