import { ChangeDetectionStrategy, Component, Type, ɵmarkDirty as markDirty } from '@angular/core';
import { ArtistCardComponent } from './artist-card/artist-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'lazy-load-with-ivy';

  comp!: Type<ArtistCardComponent>;

  constructor() {
  }

  async loadComponent(): Promise<void> {
    const {ArtistCardComponent: comp} = await import('./artist-card/artist-card.component');
    this.comp = comp;
    markDirty(this);
  }
}
