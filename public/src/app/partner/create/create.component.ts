import { Component, OnInit } from '@angular/core';
import { Company, PartnerService } from 'src/app/common/partner.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  success = false;
  constructor(private partnerService: PartnerService) {}

  ngOnInit() {}

  onSubmit(company: Company) {
    this.partnerService.add(company).then(() => {
      this.success = true;
    });
  }
}
