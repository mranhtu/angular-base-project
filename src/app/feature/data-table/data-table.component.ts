import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  customers: any [];
  constructor() { }

  ngOnInit(): void {
    this.customers = [
      { name: 'vin', country: 'Vin', company: 'tes', representative: 'ee' },
      { name: 'vin', country: 'Vin', company: 'tes', representative: 'ee' },
    ];
  }

}
