export class Cobra {
    //ATRIBUTOS
    private tamanho: number;
    private cor: string;
    private especie:string;

    //CONSTRUTOR
    public constructor(_tamanho: number; _cor: string; _especie: string){
        this.tamanho = _tamanho;
        this.cor = _cor;
        this.especie = _especie;
    }

    //METODOS GET E SET
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getCor(): string{
        return this.cor;
    }
    

    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    public getEspecie(): string{
        return this.especie;
    }

    public setEspecie(_especie: string): void {
        this.especie = _especie;
    }
    //METODO DIAGRAMA
    public rastejar(_velocidade: number):void{
        this.velocidade=_velocidade;
        //return this.velocidade;
        console.log(`A cobra rasteja a ${this.velocidade}km`);
    }

    public pica(_pica: string):void{
        this.pica = _pica;
        console.log(`A cobra pica para se defender`);
    }
}