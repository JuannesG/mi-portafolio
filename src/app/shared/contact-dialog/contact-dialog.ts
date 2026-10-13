import { HttpClient } from '@angular/common/http';
import { Component, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactModal } from '../../core/contact-modal';
import { PROFILE } from '../../data/profile';

const FORM_ENDPOINT = 'https://formspree.io/f/mdeawpqe';

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-dialog.html',
  styleUrl: './contact-dialog.css',
})
export class ContactDialog {
  readonly contact = inject(ContactModal);
  private readonly http = inject(HttpClient);
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  readonly email = PROFILE.emailAddress;
  readonly status = signal<Status>('idle');

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    _gotcha: [''],
  });

  constructor() {
    effect(() => {
      const el = this.dialog()?.nativeElement;
      if (!el) return;

      if (this.contact.isOpen()) {
        if (!el.open) el.showModal();
      } else if (el.open) {
        el.close();
      }
    });
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.contact.close();
    }
  }

  onClosed() {
    this.contact.close();
    if (this.status() === 'success') {
      this.status.set('idle');
    }
  }

  hasError(control: AbstractControl) {
    return control.invalid && control.touched;
  }

  send() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');

    this.http
      .post(FORM_ENDPOINT, this.form.getRawValue(), {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          this.status.set('success');
          this.form.reset();
        },
        error: () => this.status.set('error'),
      });
  }
}
