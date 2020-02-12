import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopupScreenComponent } from './components/popup-screen/popup-screen.component';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDisable: boolean = false;

  constructor(public dialog: MatDialog) {
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2 && !this.isDisable) {
      this.openDialog();
    }
  }

  public openDialog(): void {
    this.isDisable = true;
    const dialogRef = this.dialog.open(PopupScreenComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => this.isDisable = false, 3000);
    });
  }
}
