export class Bicicleta {
    //ATRIBUTOS
    private aro: number;
    private velocidade: number;
    private cor:string;

    //CONSTRUTOR
    public constructor(_aro: number; _velocidade: number; _cor: string){
        this.aro = _aro;
        this.velocidade = _velocidade;
        this.cor = _cor;
    }

    //METODOS GET E SET
    public getAro(): number {
        return this.aro;
    }

    public setModelo(_aro: number): void {
        this.aro = _aro;
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
    public pedalar(_saude: string):void{
        this.saude= _saude;
        //return this.saude;
        console.log(`A bicicleta trás beneficios a saude`);
    }

    public freiar(_velocidade: number):void{
        this.velocidade = _velocidade;
        console.log(`A bicicleta freiou a ${this.velocidade} km`);
    }
}