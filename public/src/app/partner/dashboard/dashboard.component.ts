import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Company, PartnerService } from "src/app/common/partner.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  partner$: Observable<Company>;
  constructor(private partnerService: PartnerService, route: ActivatedRoute) {
    this.partner$ = this.partnerService.get(route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {}

  onSubmit(company: Company) {}
}
