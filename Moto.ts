export class Moto {
    //ATRIBUTOS
    private modelo: string;
    private velocidade: number;
    private cor:string;

    //CONSTRUTOR
    public constructor(_modelo: string; _velocidade: number; _cor: string){
        this.modelo = _modelo;
        this.velocidade = _velocidade;
        this.cor = _cor;
    }

    //METODOS GET E SET
    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getVelocidade(): number{
        return this.velocidade;
    }

    public setVelocidade(_velocidade: number): void{
        this.velocidade = _velocidade;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }
    //METODO DIAGRAMA
    public acelerar(_velocidade: number):void{
        this.velocidade=_velocidade;
        //return this.velocidade;
        console.log(`A moto acelerou e agora esta a ${this.velocidade}km`);
    }

    public darGrau(_velocidade:number):void{
        this.velocidade = _velocidade;
        console.log(`A moto deu grau a ${this.velocidade} km`);
    }
}