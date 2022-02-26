import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    InputComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[InputComponent, ContainerComponent]
})
export class SharedModule { }
