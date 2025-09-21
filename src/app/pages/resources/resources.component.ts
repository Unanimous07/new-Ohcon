import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SEOService } from '../../shared/services/seo.service';

interface Resource {
  title: string;
  type: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readingTime: number;
  downloads: number;
  rating: number;
  date: Date;
  tags: string[];
  featured: boolean;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  searchQuery: string = '';
  filteredResources: Resource[] = [];
  selectedType: string = '';
  selectedDifficulty: string = '';
  selectedTopic: string = '';
  sortBy: string = 'newest';
  
  resources: Resource[] = [
    {
      title: 'One Health Basics',
      type: 'Article',
      description: 'Introduction to One Health concepts and principles',
      category: 'educational',
      difficulty: 'Beginner',
      readingTime: 15,
      downloads: 1250,
      rating: 4.8,
      date: new Date('2024-01-15'),
      tags: ['basics', 'introduction', 'concepts'],
      featured: true
    },
    {
      title: 'Disease Surveillance Guide',
      type: 'Guide',
      description: 'Comprehensive guide for disease surveillance',
      category: 'practical',
      difficulty: 'Intermediate',
      readingTime: 45,
      downloads: 890,
      rating: 4.6,
      date: new Date('2024-02-10'),
      tags: ['surveillance', 'disease', 'monitoring'],
      featured: false
    },
    {
      title: 'Research Methods',
      type: 'Research Paper',
      description: 'Research methodologies in One Health',
      category: 'educational',
      difficulty: 'Advanced',
      readingTime: 30,
      downloads: 567,
      rating: 4.9,
      date: new Date('2024-01-28'),
      tags: ['research', 'methodology', 'academic'],
      featured: false
    },
    {
      title: 'Community Engagement',
      type: 'Workshop',
      description: 'Best practices for community engagement',
      category: 'training',
      difficulty: 'Intermediate',
      readingTime: 60,
      downloads: 723,
      rating: 4.7,
      date: new Date('2024-02-05'),
      tags: ['community', 'engagement', 'participation'],
      featured: true
    },
    {
      title: 'Implementation Toolkit',
      type: 'Guide',
      description: 'Tools and templates for One Health implementation',
      category: 'practical',
      difficulty: 'Intermediate',
      readingTime: 25,
      downloads: 1100,
      rating: 4.5,
      date: new Date('2024-02-20'),
      tags: ['implementation', 'toolkit', 'templates'],
      featured: false
    },
    {
      title: 'Certification Program',
      type: 'Course',
      description: 'Professional certification in One Health approaches',
      category: 'training',
      difficulty: 'Advanced',
      readingTime: 120,
      downloads: 445,
      rating: 4.9,
      date: new Date('2024-01-10'),
      tags: ['certification', 'professional', 'training'],
      featured: true
    }
  ];

  constructor(
    private router: Router,
    private seoService: SEOService
  ) {
    this.applyFilters();
  }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Resources - OHCON | One Health Educational Materials',
      description: 'Access comprehensive One Health resources including research papers, toolkits, guides, and educational materials for healthcare professionals in Malawi.',
      keywords: 'One Health resources, healthcare education, research papers, toolkits, guides, AMR, zoonotic diseases, environmental health',
      url: 'https://ohconmw.org/resources',
      image: 'https://ohconmw.org/assets/images/resources-hero.jpg'
    });

    this.seoService.generateStructuredData('WebPage', {
      title: 'Resources - OHCON',
      description: 'Comprehensive One Health educational resources and materials',
      url: 'https://ohconmw.org/resources'
    });
  }

  get featuredResources(): Resource[] {
    return this.resources.filter(r => r.featured).slice(0, 3);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact-us']);
  }

  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = this.resources;

    // Search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.type.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Type filter
    if (this.selectedType) {
      filtered = filtered.filter(resource => resource.type.toLowerCase() === this.selectedType.toLowerCase());
    }

    // Difficulty filter
    if (this.selectedDifficulty) {
      filtered = filtered.filter(resource => resource.difficulty.toLowerCase() === this.selectedDifficulty.toLowerCase());
    }

    // Topic filter (using tags)
    if (this.selectedTopic) {
      filtered = filtered.filter(resource => 
        resource.tags.some(tag => tag.toLowerCase().includes(this.selectedTopic.toLowerCase()))
      );
    }

    // Sort results
    this.sortResources(filtered);
  }

  sortResources(resources: Resource[]): void {
    switch (this.sortBy) {
      case 'newest':
        this.filteredResources = resources.sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case 'popular':
      case 'downloads':
        this.filteredResources = resources.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'rating':
        this.filteredResources = resources.sort((a, b) => b.rating - a.rating);
        break;
      case 'alphabetical':
        this.filteredResources = resources.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        this.filteredResources = resources;
    }
  }

  hasActiveFilters(): boolean {
    return !!(this.searchQuery || this.selectedType || this.selectedDifficulty || this.selectedTopic);
  }

  clearFilter(filterType: string): void {
    switch (filterType) {
      case 'type':
        this.selectedType = '';
        break;
      case 'difficulty':
        this.selectedDifficulty = '';
        break;
      case 'topic':
        this.selectedTopic = '';
        break;
    }
    this.applyFilters();
  }

  clearAllFilters(): void {
    this.searchQuery = '';
    this.selectedType = '';
    this.selectedDifficulty = '';
    this.selectedTopic = '';
    this.applyFilters();
  }

  getFilterLabel(filterType: string, value: string): string {
    const labels: { [key: string]: { [key: string]: string } } = {
      type: {
        'article': 'Articles',
        'guide': 'Guides',
        'toolkit': 'Toolkits',
        'video': 'Videos',
        'webinar': 'Webinars',
        'case-study': 'Case Studies'
      },
      topic: {
        'antimicrobial-resistance': 'AMR',
        'zoonotic-diseases': 'Zoonotic Diseases',
        'food-safety': 'Food Safety',
        'environmental-health': 'Environmental Health',
        'community-health': 'Community Health',
        'policy': 'Policy & Advocacy'
      },
      difficulty: {
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced'
      }
    };
    return labels[filterType]?.[value] || value;
  }

  filterByCategory(category: string): void {
    this.clearFilters();
    this.filteredResources = this.resources.filter(resource => 
      resource.category === category
    );
  }

  clearFilters(): void {
    this.clearAllFilters();
  }

  getAutocompleteSuggestions(): string[] {
    if (!this.searchQuery) return [];
    return Array.from(new Set(this.resources
      .map(resource => resource.title)
      .filter(title => 
        title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    )).slice(0, 5);
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getSortLabel(sortBy: string): string {
    switch (sortBy) {
      case 'newest': return 'Newest First';
      case 'popular': return 'Most Popular';
      case 'downloads': return 'Most Downloaded';
      case 'alphabetical': return 'A-Z';
      case 'rating': return 'Highest Rated';
      default: return 'Default';
    }
  }
}