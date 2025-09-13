import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-involved',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css']
})
export class GetInvolvedComponent implements OnInit {
  // Volunteer Positions Data
  volunteerPositions = [
    {
      title: 'Community Health Educator',
      description: 'Lead workshops and training sessions to educate communities about One Health principles, preventive healthcare, and environmental sustainability.',
      commitment: '4-6 hours/week',
      skills: ['Teaching', 'Public Speaking', 'Health Education']
    },
    {
      title: 'Research Assistant',
      description: 'Support our research team in collecting and analyzing data related to One Health initiatives, helping us understand the intersection of human, animal, and environmental health.',
      commitment: '6-8 hours/week',
      skills: ['Data Analysis', 'Research Methods', 'Scientific Writing']
    },
    {
      title: 'Community Outreach Coordinator',
      description: 'Build relationships with local communities and organizations, organize health awareness campaigns, and coordinate volunteer activities.',
      commitment: 'Flexible',
      skills: ['Project Management', 'Communication', 'Community Relations']
    },
    {
      title: 'Environmental Health Advocate',
      description: 'Work on projects that promote environmental sustainability and its connection to public health, including educational programs and community initiatives.',
      commitment: '4-5 hours/week',
      skills: ['Environmental Science', 'Advocacy', 'Program Development']
    }
  ];

  // Volunteer Form
  showVolunteerForm = false;
  submitSuccess = false;
  volunteerForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^(0?[89][89]\d{7}|\+265[89][89]\d{7}|\+\(265\)[89][89]\d{7})$/)]],
    position: ['', Validators.required],
    experience: ['', [Validators.required, Validators.minLength(50)]],
    availability: ['', [Validators.required, Validators.minLength(20)]],
    motivation: ['', [Validators.required, Validators.minLength(50)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  toggleVolunteerForm() {
    this.showVolunteerForm = !this.showVolunteerForm;
    if (!this.showVolunteerForm) {
      this.volunteerForm.reset();
      this.submitSuccess = false;
    }
  }

  onSubmit() {
    if (this.volunteerForm.valid) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.volunteerForm.value);
      this.submitSuccess = true;
      
      // Reset form and show success message for 3 seconds
      setTimeout(() => {
        this.volunteerForm.reset();
        this.showVolunteerForm = false;
        this.submitSuccess = false;
      }, 3000);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.volunteerForm.controls).forEach(key => {
        const control = this.volunteerForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  // Helper method to get error message for a form control
  getErrorMessage(fieldName: string): string {
    const control = this.volunteerForm.get(fieldName);
    if (!control) return '';
    
    if (control.hasError('required')) {
      return `${this.formatFieldName(fieldName)} is required`;
    }
    
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `${this.formatFieldName(fieldName)} must be at least ${minLength} characters`;
    }
    
    if (control.hasError('pattern')) {
      if (fieldName === 'phone') {
        return 'Please enter a valid Malawian phone number (e.g., 998997400, 0998997400, or +265998997400)';
      }
    }
    
    return '';
  }

  private formatFieldName(fieldName: string): string {
    return fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, ' $1');
  }
}
