import { Component, inject } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  bitCoinService = inject(BitcoinService)
  userService = inject(UserService)

  bitcoinRate!: number
  user: User =this.userService.getUser()

  constructor() {
    this.bitCoinService.getRate()
      .subscribe(rate => this.bitcoinRate = rate)

  }


}
