import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: 'earrings' | 'bracelet' | 'necklace';
  price: number;
  tag?: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class ShopComponent {
  activeFilter = 'all';

  filters = ['all', 'earrings', 'bracelets', 'necklaces'];

  products: Product[] = [
    { id: 1,  name: 'Hammered Hoop Earrings',     category: 'earrings',  price: 18.00, tag: 'Popular' },
    { id: 2,  name: 'Copper Leaf Drops',           category: 'earrings',  price: 22.00 },
    { id: 3,  name: 'Textured Stud Earrings',      category: 'earrings',  price: 12.00 },
    { id: 4,  name: 'Stone & Wire Dangles',        category: 'earrings',  price: 26.00, tag: 'One of a kind' },
    { id: 5,  name: 'Birch Series Earrings',       category: 'earrings',  price: 20.00 },
    { id: 6,  name: 'Woven Copper Earrings',       category: 'earrings',  price: 24.00, tag: 'Popular' },
    { id: 7,  name: 'Braided Leather Bracelet',    category: 'bracelet',  price: 28.00 },
    { id: 8,  name: 'Hammered Cuff',               category: 'bracelet',  price: 30.00, tag: 'One of a kind' },
    { id: 9,  name: 'Stone Wrap Bracelet',         category: 'bracelet',  price: 25.00 },
    { id: 10, name: 'Layered Pendant Necklace',    category: 'necklace',  price: 28.00, tag: 'Popular' },
    { id: 11, name: 'Copper Birch Necklace',       category: 'necklace',  price: 30.00, tag: 'One of a kind' },
    { id: 12, name: 'Simple Stone Necklace',       category: 'necklace',  price: 22.00 },
  ];

  get filtered(): Product[] {
    if (this.activeFilter === 'all') return this.products;
    const map: Record<string, string> = {
      earrings: 'earrings',
      bracelets: 'bracelet',
      necklaces: 'necklace',
    };
    return this.products.filter(p => p.category === map[this.activeFilter]);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
}
