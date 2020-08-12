import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [ArtistCardComponent]
})
class ArtistCardModule {
}
