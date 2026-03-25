import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modais',
  imports: [ReactiveFormsModule],
  templateUrl: './modais.html',
  styleUrl: './modais.scss'
})
export class Modais {
  showBasicModal = false;
  showConfirmModal = false;
  showAlertModal = false;
  showDrawer = false;
  showFormModal = false;

  drawerForm: FormGroup;
  formModal: FormGroup;

  constructor(private fb: FormBuilder) {
    this.drawerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cargo: [''],
      departamento: [''],
      mensagem: [''],
    });

    this.formModal = this.fb.group({
      titulo: ['', Validators.required],
      descricao: [''],
      prioridade: ['media'],
      prazo: [''],
    });
  }

  onDrawerSubmit() {
    if (this.drawerForm.valid) {
      console.log('Drawer form:', this.drawerForm.value);
      this.showDrawer = false;
      this.drawerForm.reset();
    }
  }

  onFormModalSubmit() {
    if (this.formModal.valid) {
      console.log('Form modal:', this.formModal.value);
      this.showFormModal = false;
      this.formModal.reset({ prioridade: 'media' });
    }
  }

  onConfirm() {
    console.log('Confirmado!');
    this.showConfirmModal = false;
  }
}
