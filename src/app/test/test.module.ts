import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatMenuModule, MatButtonToggleModule} from '@angular/material';
import { MatIconModule } from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [TestComponent],
  imports: [
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    TestComponent,
  ],
  bootstrap: [TestComponent],
})
export class TestModule { }
