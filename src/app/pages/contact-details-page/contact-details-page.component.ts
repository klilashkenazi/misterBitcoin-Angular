import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Observable, switchMap } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent implements OnInit{
  private contactService=inject(ContactService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  contact$!: Observable<Contact>

  ngOnInit(): void {
    this.contact$=this.route.params.pipe(
      switchMap(params=>this.contactService.getContactById(params['id']))
    )
  }
  
  onBack() {
    this.router.navigateByUrl('/contact')
}
}
