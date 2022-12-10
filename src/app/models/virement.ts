export class Virement {
  /*  num_compte_recepteur: String;
  num_compte: String;
  date_operation: Date; */

  codeCpte: Number;
  codeCompte2: Number;
  montant: Number;
  type_operation: String = 'VIREMENT';
  commentaire: String;
  statut: String;
}
