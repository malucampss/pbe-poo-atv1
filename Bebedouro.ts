export class Bebedouro {
    //ATRIBUTOS
    private capacidade: number;
    private tipo: string;
    private material:string;

    //CONSTRUTOR
    public constructor(_capacidade: number, _tipo: string, _material: string){
        this.capacidade = _capacidade;
        this.tipo = _tipo;
        this.material = _material;
    }

    //METODOS GET E SET
    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }

    public getTipo(): string{
        return this.tipo;
    }

    public setTipo(_tipo: string): void{
        this.tipo = _tipo;
    }

    public getMaterial(): string{
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }
    //METODO DIAGRAMA
    public beber agua(_saude: string):void{
        this.saude=_saude;
        //return this.saude;
        console.log(`Beber agua tras beneficios a saude`);
    }

    public encher garrafa(_encher garrafa:string):void{
        this.encher garrafa = _encher garrafa;
        console.log(`O bebedouro serve para encher a garrafa`);
    }
}