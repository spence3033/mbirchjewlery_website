import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav';
import { HeroComponent } from '../../components/hero/hero';
import { GalleryComponent } from '../gallery/gallery';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroComponent, GalleryComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
