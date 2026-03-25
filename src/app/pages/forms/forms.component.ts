import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmSwitchImports } from '@spartan-ng/helm/switch';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmFormFieldImports } from '@spartan-ng/helm/form-field';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-forms',
  imports: [
    ReactiveFormsModule,
    ...HlmInputImports,
    ...HlmLabelImports,
    ...HlmButtonImports,
    ...HlmCheckboxImports,
    ...HlmSwitchImports,
    ...HlmRadioGroupImports,
    ...HlmSelectImports,
    ...HlmCardImports,
    ...HlmSeparatorImports,
    ...HlmFormFieldImports,
    ...HlmTextareaImports,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements AfterViewInit, OnDestroy {
  private theme = inject(ThemeService);

  @ViewChild('dateInput') dateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('rangeInput') rangeInput!: ElementRef<HTMLInputElement>;

  form: FormGroup;
  submitted = false;
  private datePicker!: flatpickr.Instance;
  private rangePicker!: flatpickr.Instance;

  planos = [
    { value: 'starter', label: 'Starter' },
    { value: 'profissional', label: 'Profissional' },
    { value: 'enterprise', label: 'Enterprise' },
  ];

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
      intervalo: [''],
      notificacoes: [true],
      termos: [false, Validators.requiredTrue],
    });
  }

  ngAfterViewInit() {
    const dark = this.theme.isDark();

    const baseConfig: Partial<flatpickr.Options.Options> = {
      locale: Portuguese,
      disableMobile: true,
      dateFormat: 'd/m/Y',
    };

    this.datePicker = flatpickr(this.dateInput.nativeElement, {
      ...baseConfig,
      onChange: (dates) => {
        if (dates[0]) {
          this.form.get('dataInicio')?.setValue(dates[0].toISOString());
        }
      },
    });

    this.rangePicker = flatpickr(this.rangeInput.nativeElement, {
      ...baseConfig,
      mode: 'range',
      dateFormat: 'd/m/Y',
      onChange: (dates) => {
        if (dates.length === 2) {
          this.form.get('intervalo')?.setValue(
            dates.map(d => d.toISOString())
          );
        }
      },
    });
  }

  ngOnDestroy() {
    this.datePicker?.destroy();
    this.rangePicker?.destroy();
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
    this.datePicker?.clear();
    this.rangePicker?.clear();
  }

  onPlanoChange(value: string) {
    this.form.get('plano')?.setValue(value);
  }

  onInteresseChange(value: string) {
    this.form.get('interesse')?.setValue(value);
  }
}
