import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService, ContactFormData } from '../../shared/services/email.service';
import { SEOService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styles: []
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  submitMessage = '';
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private seoService: SEOService
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Contact Us - OHCON | Get in Touch',
      description: 'Contact OHCON for partnerships, collaborations, or inquiries about One Health initiatives in Malawi. We\'d love to hear from you.',
      keywords: 'contact OHCON, partnerships, collaborations, One Health inquiries, Malawi healthcare contact',
      url: 'https://ohconmw.org/contact-us',
      image: 'https://ohconmw.org/assets/images/contact-hero.jpg'
    });

    this.seoService.generateStructuredData('WebPage', {
      title: 'Contact Us - OHCON',
      description: 'Get in touch with OHCON for partnerships and inquiries',
      url: 'https://ohconmw.org/contact-us'
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;

      try {
        const formData: ContactFormData = this.contactForm.value;
        const success = await this.emailService.sendContactEmail(formData);

        this.isSubmitting = false;

        if (success) {
          this.isSubmitted = true;
          this.submitError = false;
          this.submitMessage = 'Thank you for your message! We\'ve received your inquiry and will get back to you within 24 hours.';
          
          // Reset form after successful submission
          this.contactForm.reset();
        } else {
          this.submitError = true;
          this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact us directly at message@ohconmw.org.';
        }
      } catch (error) {
        this.isSubmitting = false;
        this.submitError = true;
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact us directly at message@ohconmw.org.';
        console.error('Form submission error:', error);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldDisplayName(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const minLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldDisplayName(fieldName)} must be at least ${minLength} characters`;
      }
    }
    return '';
  }

  private getFieldDisplayName(fieldName: string): string {
    const displayNames: { [key: string]: string } = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      reason: 'Reason for Contact',
      message: 'Message'
    };
    return displayNames[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }

  dismissMessage(): void {
    this.isSubmitted = false;
    this.submitMessage = '';
    this.submitError = false;
  }
}
