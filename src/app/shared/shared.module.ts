import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [InputComponent, ContainerComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, ContainerComponent, ModalComponent],
})
export class SharedModule {}
