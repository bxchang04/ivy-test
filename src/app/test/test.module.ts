import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {Router, RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  entryComponents: [
    TestComponent,
  ],
  bootstrap: [TestComponent],
})
export class TestModule { }
