import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  form: FormGroup;
  submitted = false;

  planos = ['Starter', 'Profissional', 'Enterprise'];
  interesses = ['Marketing Digital', 'Funis de Venda', 'Trafego Pago', 'E-commerce', 'Infoprodutos'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      plano: ['', Validators.required],
      interesse: [''],
      mensagem: [''],
      valor: [null, [Validators.min(0)]],
      dataInicio: [''],
      notificacoes: [true],
      termos: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Form data:', this.form.value);
    }
  }

  onReset() {
    this.form.reset({ notificacoes: true, termos: false });
    this.submitted = false;
  }
}
