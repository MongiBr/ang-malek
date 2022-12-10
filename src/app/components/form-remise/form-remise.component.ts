import { Component, OnInit } from '@angular/core';
import { Remise } from 'src/app/models/Remise';
import { PortefeuilleService } from 'src/app/services/portefeuille.service';

@Component({
  selector: 'app-form-remise',
  templateUrl: './form-remise.component.html',
  styleUrls: ['./form-remise.component.css'],
})
export class FormRemiseComponent implements OnInit {
  public remise: Remise;
  constructor(private proteFeuilleService: PortefeuilleService) {
    this.remise = new Remise();
  }

  ngOnInit(): void {}

  onSaveOperation() {
    this.proteFeuilleService.saveOpeartionAPI(this.remise).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {}
    );
  }
}
