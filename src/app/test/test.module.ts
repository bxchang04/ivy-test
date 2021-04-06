import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { MatButtonModule } from "@angular/material";
import { MatMenuModule } from "@angular/material";
import { MatIconModule } from "@angular/material";

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  entryComponents: [
    TestComponent,
  ],
  bootstrap: [TestComponent],
})
export class TestModule { }
