import { Component } from '@angular/core'
import { HeaderService} from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  constructor(public headerService: HeaderService) {

  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.headerService.menuOpen$.next(true);
    console.log(this.menuOpen)
    if(this.menuOpen === false) {
      this.headerService.menuOpen$.next(false);
    }
}
}