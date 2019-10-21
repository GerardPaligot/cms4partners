import { Component, OnInit } from "@angular/core";
import { Company, PartnerService } from "src/app/common/partner.service";
import { ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-partner",
  templateUrl: "./partner.component.html",
  styleUrls: ["./partner.component.scss"]
})
export class PartnerComponent implements OnInit {
  partner$: Observable<Company>;
  constructor(private partnerService: PartnerService, route: ActivatedRoute) {
    this.partner$ = this.partnerService.get(route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {}

  onSubmit(company: Company) {}
}
