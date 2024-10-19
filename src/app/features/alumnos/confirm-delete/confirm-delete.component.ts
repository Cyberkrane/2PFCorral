import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent {

  constructor(private readonly dialogRef: MatDialogRef<ConfirmDeleteComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Cierra el dialog y devuelve true
  }

  onCancel(): void {
    this.dialogRef.close(false); // Cierra el dialog y devuelve false
  }
}
