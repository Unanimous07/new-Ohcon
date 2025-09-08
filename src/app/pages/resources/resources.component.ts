import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface Resource {
  title: string;
  type: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimationDirective],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  searchQuery: string = '';
  filteredResources: Resource[] = [];
  
  resources: Resource[] = [
    {
      title: 'One Health Basics',
      type: 'Article',
      description: 'Introduction to One Health concepts and principles',
      category: 'educational'
    },
    {
      title: 'Disease Surveillance Guide',
      type: 'Guide',
      description: 'Comprehensive guide for disease surveillance',
      category: 'practical'
    },
    {
      title: 'Research Methods',
      type: 'Research Paper',
      description: 'Research methodologies in One Health',
      category: 'educational'
    },
    {
      title: 'Community Engagement',
      type: 'Workshop',
      description: 'Best practices for community engagement',
      category: 'training'
    },
    {
      title: 'Implementation Toolkit',
      type: 'Guide',
      description: 'Tools and templates for One Health implementation',
      category: 'practical'
    },
    {
      title: 'Certification Program',
      type: 'Course',
      description: 'Professional certification in One Health approaches',
      category: 'training'
    }
  ];

  constructor(private router: Router) {
    this.filteredResources = this.resources;
  }

  navigateToContact(): void {
    this.router.navigate(['/contact-us']);
  }

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    if (!query) {
      this.filteredResources = this.resources;
      return;
    }
    
    this.filteredResources = this.resources.filter(resource =>
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.type.toLowerCase().includes(query)
    );
  }

  filterByCategory(category: string): void {
    this.searchQuery = '';
    this.filteredResources = this.resources.filter(resource => 
      resource.category === category
    );
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.filteredResources = this.resources;
  }

  getAutocompleteSuggestions(): string[] {
    return Array.from(new Set(this.resources
      .map(resource => resource.title)
      .filter(title => 
        title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    ));
  }
}