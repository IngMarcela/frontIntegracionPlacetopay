import { Component, OnInit, Input, Inject } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Purchase } from "../../models/purchase";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from "../listPurchase/listPurchase.component";


@Component({
  selector: 'app-detail-purchase',
  templateUrl: './detailPurchase.component.html',
  styleUrls: ['./detailPurchase.component.scss'],
  providers: [DataService]
})
export class DetailPurchaseComponent implements OnInit {
  public titulo: string;
  public purchase: Purchase[];
  public parameter;
  public mensaje: string;
  public id: number;

  constructor(
    public dialogRef: MatDialogRef<DetailPurchaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data);

  }
}



