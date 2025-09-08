import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // EmailJS configuration
  private readonly serviceId = 'service_ohcon'; // You'll need to replace this
  private readonly templateId = 'template_contact'; // You'll need to replace this
  private readonly publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to replace this

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.publicKey);
  }

  async sendContactEmail(formData: ContactFormData): Promise<boolean> {
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        reason: formData.reason,
        message: formData.message,
        to_email: 'message@ohconmw.org',
        reply_to: formData.email,
        subject: `New Contact Form Submission - ${formData.reason}`,
        // Additional template variables for better email formatting
        full_name: `${formData.firstName} ${formData.lastName}`,
        contact_reason: this.getReasonDisplayName(formData.reason)
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return response.status === 200;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  private getReasonDisplayName(reason: string): string {
    const reasonMap: { [key: string]: string } = {
      donate: 'Donation Inquiry',
      partner: 'Partnership Opportunity',
      volunteer: 'Volunteer Application',
      media: 'Media Inquiry',
      other: 'General Inquiry'
    };
    return reasonMap[reason] || 'General Inquiry';
  }
}
