import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SEOService } from '../../shared/services/seo.service';

interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  features: string[];
  impact: string;
  status: 'Active' | 'Planning' | 'Completed';
  participants: number;
  duration: string;
  location: string;
  featured: boolean;
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedStatus: string = '';
  filteredPrograms: Program[] = [];

  programs: Program[] = [
    {
      id: 'education',
      title: 'Education & Capacity Building',
      description: 'Build knowledge and skills across communities and sectors to prevent One Health risks and strengthen local capacity.',
      category: 'Education',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      color: 'blue',
      features: ['One Health clubs with starter kits', 'Certified courses and training', 'AMR awareness campaigns', 'Professional development workshops'],
      impact: '150+ professionals trained annually',
      status: 'Active',
      participants: 150,
      duration: 'Ongoing',
      location: 'Multiple districts',
      featured: true
    },
    {
      id: 'clinics',
      title: 'Integrated One Health Clinics',
      description: 'Joint human-animal community outreach services combining medical screening, vaccination, and preventive care.',
      category: 'Healthcare',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      color: 'green',
      features: ['Joint human & veterinary outreach', 'Community health screening', 'Vaccination campaigns', 'Zoonotic disease prevention'],
      impact: '300+ people reached annually',
      status: 'Active',
      participants: 300,
      duration: 'Monthly clinics',
      location: 'Rural communities',
      featured: true
    },
    {
      id: 'wash',
      title: 'WASH & Environmental Health',
      description: 'Improving water, sanitation, and hygiene infrastructure while promoting environmental stewardship.',
      category: 'Environment',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      color: 'cyan',
      features: ['School latrine construction', 'Clean water access projects', 'Animal waste management', 'Environmental health education'],
      impact: '5 schools with improved facilities',
      status: 'Active',
      participants: 200,
      duration: '2-year projects',
      location: 'School communities',
      featured: false
    },
    {
      id: 'amr',
      title: 'AMR & Antimicrobial Stewardship',
      description: 'Combating antimicrobial resistance through responsible use practices and stewardship programs.',
      category: 'Research',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'red',
      features: ['AMR awareness campaigns', 'Responsible use training', 'Stewardship program development', 'Multi-sector collaboration'],
      impact: 'Reduced inappropriate antibiotic use by 25%',
      status: 'Active',
      participants: 75,
      duration: '18 months',
      location: 'Healthcare facilities',
      featured: true
    },
    {
      id: 'research',
      title: 'Surveillance & Research',
      description: 'Conducting operational research and surveillance to inform evidence-based One Health interventions.',
      category: 'Research',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'purple',
      features: ['Disease surveillance systems', 'Operational research studies', 'Data collection & analysis', 'Evidence generation'],
      impact: '3 research publications in peer-reviewed journals',
      status: 'Active',
      participants: 50,
      duration: 'Ongoing',
      location: 'Multiple sites',
      featured: false
    },
    {
      id: 'policy',
      title: 'Policy & Advocacy',
      description: 'Influencing policy development and advocating for One Health approaches at local and national levels.',
      category: 'Policy',
      icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
      color: 'orange',
      features: ['Policy brief development', 'Government engagement', 'Advocacy campaigns', 'Multi-sectoral coordination'],
      impact: '2 policy briefs adopted by government',
      status: 'Planning',
      participants: 25,
      duration: '12 months',
      location: 'National level',
      featured: false
    }
  ];

  categories = ['Education', 'Healthcare', 'Environment', 'Research', 'Policy'];
  statuses = ['Active', 'Planning', 'Completed'];

  constructor(
    private router: Router,
    private seoService: SEOService
  ) {
    this.applyFilters();
  }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Programs - OHCON | One Health Initiatives in Malawi',
      description: 'Discover OHCON\'s comprehensive One Health programs including education, community clinics, research, and environmental health initiatives across Malawi.',
      keywords: 'One Health programs, Malawi healthcare initiatives, community clinics, health education, AMR prevention, environmental health',
      url: 'https://ohconmw.org/programs',
      image: 'https://ohconmw.org/assets/images/programs-hero.jpg'
    });

    this.seoService.generateStructuredData('WebPage', {
      title: 'Programs - OHCON',
      description: 'Comprehensive One Health programs and initiatives',
      url: 'https://ohconmw.org/programs'
    });
  }

  get featuredPrograms(): Program[] {
    return this.programs.filter(p => p.featured);
  }

  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = this.programs;

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(program =>
        program.title.toLowerCase().includes(query) ||
        program.description.toLowerCase().includes(query) ||
        program.category.toLowerCase().includes(query)
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(program => program.category === this.selectedCategory);
    }

    if (this.selectedStatus) {
      filtered = filtered.filter(program => program.status === this.selectedStatus);
    }

    this.filteredPrograms = filtered;
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.selectedStatus = '';
    this.applyFilters();
  }

  getColorClasses(color: string): { bg: string; text: string; border: string } {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colors[color] || colors['blue'];
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  navigateToProgram(programId: string): void {
    this.router.navigate(['/programs', programId]);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact-us']);
  }

  navigateToGetInvolved(): void {
    this.router.navigate(['/get-involved']);
  }
}
