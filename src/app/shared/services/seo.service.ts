import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private readonly baseUrl = 'https://ohconmw.org';
  private readonly defaultImage = 'https://ohconmw.org/assets/images/logo.png';

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateSEO(data: SEOData): void {
    // Update title
    this.title.setTitle(data.title);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: data.description });
    
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: data.image || this.defaultImage });
    this.meta.updateTag({ property: 'og:url', content: data.url || this.baseUrl });
    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.image || this.defaultImage });

    // Update canonical URL
    this.updateCanonicalUrl(data.url || this.baseUrl);
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    
    link.setAttribute('href', url);
  }

  generateStructuredData(type: 'Organization' | 'WebPage' | 'Article', data: any): void {
    let script = this.document.querySelector('script[type="application/ld+json"]');
    
    if (script) {
      script.remove();
    }

    script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    
    let structuredData: any;

    switch (type) {
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "OHCON - One Health Collaborative Network",
          "url": "https://ohconmw.org",
          "logo": "https://ohconmw.org/assets/images/logo.png",
          "description": "OHCON advances One Health principles through integrated solutions connecting human, animal, and environmental health in Malawi.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "MW",
            "addressLocality": "Lilongwe"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "message@ohconmw.org",
            "contactType": "General Inquiry"
          },
          "sameAs": [
            "https://www.facebook.com/ohconmw",
            "https://www.linkedin.com/company/ohconmw"
          ]
        };
        break;
      
      case 'WebPage':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.title,
          "description": data.description,
          "url": data.url,
          "isPartOf": {
            "@type": "WebSite",
            "name": "OHCON",
            "url": "https://ohconmw.org"
          }
        };
        break;
      
      case 'Article':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "OHCON"
          },
          "publisher": {
            "@type": "Organization",
            "name": "OHCON",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ohconmw.org/assets/images/logo.png"
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString()
        };
        break;
    }

    script.innerHTML = JSON.stringify(structuredData);
    this.document.head.appendChild(script);
  }
}