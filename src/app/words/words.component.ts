import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';
@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  words: Word[];



  constructor(private wordService: WordService) {
     }
    // getWords(): void {
   //this.wordService.getWords().subscribe(words => this.words = words);
    // }

     submit(N: number): void {
       if (!N) { return; }
       console.log(N);
       
       this.wordService.getWords().subscribe(words => this.words = words.slice(1,N));
       //console.log(this.words);
     }
  ngOnInit() {
    //this.getWords();
  }

}
