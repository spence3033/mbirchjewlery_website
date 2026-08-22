import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  aspect: 'tall' | 'wide' | 'square';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent {
  items: GalleryItem[] = [
    { id: 1, title: 'Woven Copper Ring',     subtitle: 'One of a kind',  aspect: 'tall'   },
    { id: 2, title: 'Stone & Silver',        subtitle: 'Handcrafted',    aspect: 'square' },
    { id: 3, title: 'Birch Series',          subtitle: 'Limited edition',aspect: 'wide'   },
    { id: 4, title: 'Textured Band',         subtitle: 'Forged by hand', aspect: 'square' },
    { id: 5, title: 'Layered Pendant',       subtitle: 'One of a kind',  aspect: 'tall'   },
    { id: 6, title: 'Hammered Earrings',     subtitle: 'Handcrafted',    aspect: 'square' },
  ];
}
