export class Extintor {
    //ATRIBUTOS
    private tipo: string;
    private tamanho: number;
    private peso:number;

    //CONSTRUTOR
    public constructor(_tipo: string, _tamanho: number, _peso: number){
        this.tipo = _tipo;
        this.tamanho = _tamanho;
        this.peso = _peso;
    }

    //METODOS GET E SET
    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }

    public getPeso(): number{
        return this.peso;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }
    //METODO DIAGRAMA
    public Apagarfogo(_apagarfogo: string):void{
        this.apagarfogo=_apagarfogo;
        //return this.apagar fogo;
        console.log(`O extintor serve para apagar o fogo`);
    }

    public controlarfogo(_controlar fogo:string):void{
        this.controlar = _controlar;
        console.log(`O extintor contola o fogo `);
    }
}