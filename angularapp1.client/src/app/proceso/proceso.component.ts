import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrl: './proceso.component.css'
})

export class ProcesoComponent {
  constructor(private router: Router) { }
}
