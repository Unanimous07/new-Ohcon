import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'News & Updates - OHCON | Latest One Health News',
      description: 'Stay updated with the latest news, events, and developments from OHCON\'s One Health initiatives in Malawi.',
      keywords: 'OHCON news, One Health updates, Malawi healthcare news, health events, medical news',
      url: 'https://ohconmw.org/news',
      image: 'https://ohconmw.org/assets/images/news-hero.jpg'
    });

    this.seoService.generateStructuredData('WebPage', {
      title: 'News & Updates - OHCON',
      description: 'Latest news and updates from OHCON',
      url: 'https://ohconmw.org/news'
    });
  }
}
