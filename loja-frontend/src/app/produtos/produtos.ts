import { Component, OnInit } from '@angular/core';
import { LojaService } from '../loja-service';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss',
})
export class Produtos implements OnInit {

  produtos: any[] = [];

  constructor(private lojaService: LojaService) { }

  ngOnInit(): void {
    this.lojaService.obterTodos().subscribe({
      next: (dados: any) => {
        console.log(dados);
        this.produtos = dados;
      },
      error: (erro: any) => {
        console.error('erro ao buscar produtos', erro);
      }
    });
  }
}
