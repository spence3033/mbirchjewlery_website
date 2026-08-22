import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav';
import { HeroComponent } from '../../components/hero/hero';
import { GalleryComponent } from '../../components/gallery/gallery';
import { ShopComponent } from '../../components/shop/shop';
import { AboutComponent } from '../../components/about/about';
import { ContactComponent } from '../../components/contact/contact';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroComponent, GalleryComponent, ShopComponent, AboutComponent, ContactComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
