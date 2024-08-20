export class Casaco {
    //ATRIBUTOS
    private cor: string;
    private tipo: string;
    private tamanho:number;

    //CONSTRUTOR
    public constructor(_cor: string; _tipo: string; _tamanho: number){
        this.cor = _cor;
        this.tipo = _tipo;
        this.tamanho = _tamanho;
    }

    //METODOS GET E SET
    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getTipo(): string{
        return this.tipo;
    }

    public setTipo(_tipo: string): void{
        this.tipo = _tipo;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }
    //METODO DIAGRAMA
    public vestir(_esquentar: string):void{
        this.esquentar=_esquentar;
        //return this.esquentar;
        console.log(`O casaco esquenta o corpo`);
    }

    public tirar(_esfriar: string):void{
        this.esfriar = _esfriar;
        console.log(`Tirar o casaco esfria o corpo`);
    }
}