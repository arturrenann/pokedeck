import { Component, OnInit } from '@angular/core';
import { PokedataService } from '../pokedata.service';


@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  pokelist: any[] = [];
  fundo = '#f1f3f5'

  constructor(
    private pokeService: PokedataService
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((response: any)=>{
      response.results.forEach((pokename: { name: any; }) => {
        this.pokeService.getMorePokemons(pokename.name)
        .subscribe((uniqueResponse:any) =>{
          this.pokelist.push(uniqueResponse)
          console.log(uniqueResponse)
        });
      });
     });
  }
  
  getBackgroundColor(tipo:any){
           switch (tipo) {
            case "bug":
              return '#ffd9b3'
            case "water":
              return '#cce6ff'
            case "grass":
              return '#e6ffe6'
            case "fire":
              return '#ffe6e6'
            
        }
        return '#f1f3f5'
  }
  


}
