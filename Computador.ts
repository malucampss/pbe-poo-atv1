export class Computador {
    //ATRIBUTOS
    private processador: string;
    private armazenamento: number;
    private sistema:string;

    //CONSTRUTOR
    public constructor(_processador: string; _armazenamento: number; _sistema: string){
        this.processador = _processador;
        this.armazenamento = _armazenamento;
        this.sistema = _sistema;
    }

    //METODOS GET E SET
    public getProcessador(): string {
        return this.processador;
    }

    public setProcessador(_processador: string): void {
        this.modelo = _modelo;
    }

    public getArmazenamento(): number{
        return this.armazenamento;
    }

    public setArmazenamento(_armazenamento: number): void{
        this.armazenamento = _armazenamento;
    }

    public getSistema(): string{
        return this.sistema;
    }

    public setSistema(_sistema: string): void {
        this.sistema = _sistema;
    }
    //METODO DIAGRAMA
    public estudar(_disciplina: string):void{
        this.disciplina=_disciplina;
        //return this.disciplina;
        console.log(`Estudar determinada disciplina ajuda na escola`);
    }

    public pesquisar(_pesquisar:string):void{
        this.pesquisar = _pequiar;
        console.log(`O computador ajuda em pesquisas`);
    }
}