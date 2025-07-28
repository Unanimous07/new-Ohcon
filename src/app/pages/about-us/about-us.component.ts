import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'Master Zambezi',
      role: 'Founder',
      image: 'assets/images/team/master.jpg',
      bio: 'Leading OHCON\'s initiatives with a passion for public health and community well-being.',
      location: 'Lilongwe, Bunda',
      email: 'masterzambezi@gmail.com'
    },
    {
      name: 'Kelvin Mulera',
      role: 'Publications Director',
      image: 'assets/images/team/kelvin.jpg',
      bio: 'Overseeing OHCON\'s publications with expertise in scientific research and communication.',
      location: 'Lilongwe, Bunda',
      email: 'kelvin@renai-labs.com'
    },
    {
      name: 'Lauren Mbewe',
      role: 'Vet Expert',
      image: 'assets/images/team/lauren.jpg',
      bio: 'Providing veterinary expertise to OHCON\'s initiatives, promoting animal health and welfare.',
      location: 'Lilongwe, Bunda',
      email: 'laurenmbewe@gmail.com'
    }
  ];

  values = [
    {
      title: 'Collaboration',
      description: 'Working together across disciplines for better health outcomes',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in all our initiatives',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Compassion',
      description: 'Putting care and empathy at the heart of our work',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    }
  ];

  contactTeamMember(email: string) {
    window.location.href = `mailto:${email}`;
  }
}
