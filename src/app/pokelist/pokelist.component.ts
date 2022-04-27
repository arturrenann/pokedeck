import { Component, OnInit } from '@angular/core';
import { PokedataService } from '../pokedata.service';


@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  pokelist: any[] = [];
  
  constructor(
    private pokeService: PokedataService
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((response: any)=>{
      response.results.forEach((pokename: { name: any; }) => {
        this.pokeService.getMorePokemons(pokename.name)
        .subscribe((uniqueResponse:any) =>{
          this.pokelist.push(uniqueResponse)
        });
      });
      });
  }

}