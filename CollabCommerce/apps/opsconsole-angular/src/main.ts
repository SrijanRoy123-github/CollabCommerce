
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container my-4">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="brand">🛠️ CollabCommerce — OpsConsole (Angular + Bootstrap)</h1>
      <nav>
        <a class="me-3" href="../../">Home</a>
        <a class="me-3" href="../../shop/">Shop</a>
        <a class="" href="../../community/">Community</a>
      </nav>
    </div>
    <hr/>
    <p class="text-muted">Inventory from mock API. Edit quantities in-memory.</p>
    <table class="table table-striped">
      <thead><tr><th>SKU</th><th>Name</th><th>Qty</th><th>Vendor</th></tr></thead>
      <tbody>
        <tr *ngFor="let item of inventory">
          <td>{{item.sku}}</td>
          <td>{{item.name}}</td>
          <td><input class="form-control form-control-sm" type="number" [(ngModel)]="item.qty"/></td>
          <td>{{item.vendor}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})
class AppComponent {
  inventory = []
  constructor(){
    fetch('../../data/inventory.json').then(r=>r.json()).then(d=>this.inventory = d)
  }
}

bootstrapApplication(AppComponent);
