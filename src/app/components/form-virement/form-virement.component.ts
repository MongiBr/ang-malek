import { Component, OnInit } from '@angular/core';
import { Virement } from 'src/app/models/virement';
import { PortefeuilleService } from 'src/app/services/portefeuille.service';

@Component({
  selector: 'app-form-virement',
  templateUrl: './form-virement.component.html',
  styleUrls: ['./form-virement.component.css'],
})
export class FormVirementComponent implements OnInit {
  public virement: Virement;
  public successMsg = '';
  public errorMsg = '';
  constructor(private proteFeuilleService: PortefeuilleService) {
    this.virement = new Virement();
  }

  ngOnInit(): void {}

  onSaveOperation() {
    this.proteFeuilleService.saveOpeartionAPI(this.virement).subscribe(
      (res) => {
        console.log(res);
        this.successMsg = 'Virement saved successfully!';
      },
      (err) => {
        this.errorMsg = 'Vérifier votre données SVP!';
      }
    );
  }
}
