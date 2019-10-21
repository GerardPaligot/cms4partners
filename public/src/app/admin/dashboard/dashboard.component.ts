import { Component, OnInit } from "@angular/core";
import { PartnerService, Company } from "src/app/common/partner.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  partners: Observable<Company[]>;
  constructor(private partnerService: PartnerService) {
    this.partners = this.partnerService.getAll();
  }

  ngOnInit() {}
}
