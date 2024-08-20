export class Cartola {
    //ATRIBUTOS
    private formato: string;
    private medida: number;
    private cor:string;

    //CONSTRUTOR
    public constructor(_formato: string; _medida: number; _cor: string){
        this.formato = _formato;
        this.medida = _medida;
        this.cor = _cor;
    }

    //METODOS GET E SET
    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }

    public getMedida(): number{
        return this.medida;
    }

    public setMedida(_medida: number): void{
        this.medida = _medida;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }
    //METODO DIAGRAMA
    public protejer(_sol: string):void{
        this.sol=_sol;
        //return this.sol;
        console.log(`A cartola proteje do sol`);
    }

    public tirar coelho(_tirar coelho: string):void{
        this.tirar coelho = _tirar coelho;
        console.log(`A cartola de um magico tira um coelho`);
    }
}