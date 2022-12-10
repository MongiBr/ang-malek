import { Component, OnInit } from '@angular/core';
import { Retirer } from 'src/app/models/retirer';
import { PortefeuilleService } from 'src/app/services/portefeuille.service';

@Component({
  selector: 'app-form-retirer',
  templateUrl: './form-retirer.component.html',
  styleUrls: ['./form-retirer.component.css'],
})
export class FormRetirerComponent implements OnInit {
  public retirer: Retirer;
  constructor(private proteFeuilleService: PortefeuilleService) {
    this.retirer = new Retirer();
  }

  ngOnInit(): void {}

  onSaveOperation() {
    this.proteFeuilleService.saveOpeartionAPI(this.retirer).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {}
    );
  }
}
