import { Component, OnInit } from '@angular/core';
import { LojaService } from '../loja-service';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss'
})
export class Produtos implements OnInit {

  produtos: any[] = [];

  constructor(private lojaService: LojaService) {}

  ngOnInit(): void {
    console.log('1 - Componente iniciou');
    this.obterProdutos();
  }

  obterProdutos(): void {
    console.log('2 - Chamando serviço');

    this.lojaService.obterTodos().subscribe({
      next: (dados: any) => {
        console.log('3 - DADOS RECEBIDOS:', dados);
        this.produtos = dados;
        console.log('4 - QUANTIDADE:', this.produtos.length);
      },
      error: (erro) => {
        console.error('ERRO:', erro);
      }
    });
  }
}