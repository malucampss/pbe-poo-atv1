export class Banco {
    //ATRIBUTOS
    private tamanho: number;
    private material: string;
    private formato:string;

    //CONSTRUTOR
    public constructor(_tamanho: number, _material: tring, _formato: string){
        this.tamanho = _tamanho;
        this.material = _material;
        this.formato = _formato;
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

    public getFormato(): string{
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }
    //METODO DIAGRAMA
    public sentar(_descansar: string):void{
        this.descansar=_descansar;
        //return this.descansar;
        console.log(`O banco é usado para descansar`);
    }

    public subir(_pegar algo:string):void{
        this.pegar algo = _pegar algo;
        console.log(`O banco pode ser usado como apoio para pegar algo`);
    }
}