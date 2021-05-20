import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-edit-addres',
  templateUrl: './form-edit-addres.component.html',
  styleUrls: ['./form-edit-addres.component.scss']
})
export class FormEditAddresComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backNavigate() {
    this.route.navigate(['/endereco'])
  }
}
