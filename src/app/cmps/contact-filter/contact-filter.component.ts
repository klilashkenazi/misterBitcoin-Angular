import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactFilter } from '../../models/contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.scss'
})
export class ContactFilterComponent implements OnInit , OnDestroy{
  contactService = inject(ContactService)
  filterBy!: ContactFilter
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.contactService.filterBy$
      .subscribe(filterBy => {
        this.filterBy = filterBy
      })
  }

  onSetFilter(val: string) {
    this.contactService.setFilterBy(this.filterBy)
  }

  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe?.()
}
}
