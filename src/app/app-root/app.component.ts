import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mister-bitcoin';

  private contactService = inject(ContactService)
  subscription!: Subscription
  ngOnInit(): void {
    this.subscription = this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => console.log('err:', err)

      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe?.()
  }
}
