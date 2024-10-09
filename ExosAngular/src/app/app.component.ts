import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importer FormsModule
import { CommonModule } from '@angular/common';  // Importer CommonModule pour ngFor

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule,CommonModule]  
})
export class AppComponent {
  nom: string = '';  // Nom saisi par l'utilisateur
  selectedFont: string = 'Arial';  // Police de caractère par défaut
  listFonts: string[] = ['Arial', 'Courier New', 'Times New Roman', 'Verdana'];  // Liste des polices
  fontSize: number = 16;  // Taille de police par défaut 

  // Variables pour l'alignement
  alignLeft: boolean = true;   // Aligner à gauche par défaut
  alignCenter: boolean = false; // Aligner au centre
  alignRight: boolean = false;  // Aligner à droite

  // Méthode pour gérer les cases à cocher
  updateAlignment(alignType: string) {
    if (alignType === 'left') {
      this.alignLeft = true;
      this.alignCenter = false;
      this.alignRight = false;
    } else if (alignType === 'center') {
      this.alignLeft = false;
      this.alignCenter = true;
      this.alignRight = false;
    } else if (alignType === 'right') {
      this.alignLeft = false;
      this.alignCenter = false;
      this.alignRight = true;
    }
  }

}
