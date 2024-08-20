export class Planta {
    //ATRIBUTOS
    private tamanho: number;
    private material: string;
    private cor:string;

    //CONSTRUTOR
    public constructor(_tamanho: number, _material: tring, _cor: string){
        this.tamanho = _tamanho;
        this.material = _material;
        this.cor= _cor;
    }

    //METODOS GET E SET
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getMaterial(): string{
        return this.material;
    }

    public setMaterial(_material: string): void{
        this.material = _material;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }
    //METODO DIAGRAMA
    public destilar(_destilar: string):void{
        this.destilar=_destilar;
        //return this.destilar;
        console.log(`AS planta serve para destilar`);
    }

    public Armazenar(_armazenar:number):void{
        this.Armazenar = _armazenar;
        console.log(`A planta é usada para armazenar`);
    }
}