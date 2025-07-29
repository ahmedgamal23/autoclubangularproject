import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  // zomin and zoom out functionality
  zoomLevel: number = 20;
  zoomInClick() {
    this.zoomLevel = this.zoomLevel >= 40 ? 40 : this.zoomLevel + 1;
  }

  zoomOutClick() {
    this.zoomLevel = this.zoomLevel <= 10 ? 10 : this.zoomLevel - 1;
  }

  // image slider functionality
  images: string[] = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1025/600/400',
    'https://picsum.photos/id/1040/600/400',
    'https://picsum.photos/id/1050/600/400',
    'https://picsum.photos/id/1060/600/400',
  ];

  currentImageIndex: number = 0;

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }

  // pagination functionality
  articlesHeader: string[] = [
    'Article 1: Introduction to Angular',
    'Article 2: Understanding Components',
    'Article 3: Services and Dependency Injection',
    'Article 4: Routing in Angular',
    'Article 5: Forms and Validation',
  ];

  articles: string[] = [
    'Article 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Article 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Article 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Article 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Article 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ];

  currentArticleIndex: number = 0;

  nextArticle(): void {
    if (this.currentArticleIndex < this.articles.length - 1) {
      this.currentArticleIndex++;
    }
  }

  prevArticle(): void {
    if (this.currentArticleIndex > 0) {
      this.currentArticleIndex--;
    }
  }

  goToArticle(index: number): void {
    this.currentArticleIndex = index;
  }
}
