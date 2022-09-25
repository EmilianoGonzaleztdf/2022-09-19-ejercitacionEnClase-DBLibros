export { }

class Libro {
    private nombre: string;
    private cantPaginas: number;
    private autor: string;
    private editorial: string;
    private lenguaje: string;
    private fechaPublicacion: string; 
    private ISBN: number;

    /* constructor */
    constructor(pNombre: string, pCantPag: number, pAutor: string, pEditorial: string, pLenguaje: string, pFechaPublicacion: string, pISBN: number) {
        this.nombre = pNombre;
        this.cantPaginas = pCantPag;
        this.autor = pAutor;
        this.editorial = pEditorial;
        this.lenguaje = pLenguaje;
        this.fechaPublicacion = pFechaPublicacion;
        this.ISBN = pISBN;

    };

    /* funciones get*/
    public getNombre(): string {
        return this.nombre
        console.log("el nombre del libro es: " + this.nombre)
    }
    public getCantPag(): void {
        this.cantPaginas;
        console.log("el libro tiene" + this.cantPaginas + " paginas.");
    }
    public getAutor(): string {
        console.log("el nombre del autor del libro es: " + this.autor);
        return this.autor;

    }
    public getEditorial(): string {
        console.log("la editorial del libro es: " + this.editorial)
        return this.editorial;
    }
    public getLenguaje(): string {
        console.log("el lenguaje del libro es: " + this.lenguaje)
        return this.lenguaje;
    }
    public getFechaPublicacion(): void {
        this.fechaPublicacion;
        console.log("la fecha de publicacion del libro es: " + this.fechaPublicacion)
    }
    public getISBN(): void {
        this.ISBN;
        console.log("el ISBN de este libro es: " + this.ISBN);
    }

    /* funciones set */

    public setNombre(pNombre:string): string {
        return this.nombre = pNombre;
        console.log("se cargo el siguiente nombre al libro: " + this.nombre)
    }
    public setCantPag(pCantPag:number): void {
        this.cantPaginas = pCantPag;
        console.log("se cargo la siguiente cantidad de paginas al libro: " + this.cantPaginas)
    }
    public setAutor(pAutor: string): string {
        console.log("se cargo el siguiente nombre como autor del libro: " + this.autor)
        return this.autor = pAutor;
    }
    public setEditorial(pEditorial:string): string {
        console.log("se cargo la siguiente editorial al libro: " + this.editorial)
        return this.editorial = pEditorial;
    }
    public setLenguaje(pLenguaje:string): string {
        console.log("se cargo el siguiente lenguaje al libro: " + this.lenguaje)
        return this.lenguaje = pLenguaje;
    }
    public setFechaPublicacion(pFechaPublicacion:string): void {
        this.fechaPublicacion = pFechaPublicacion;
        console.log("se cargo la siguiente fecha de publicacion al libro: " + this.fechaPublicacion)
    }
    public setISBN(pISBN:number): void {
        this.ISBN = pISBN;
        console.log("se cargo el siguiente ISBN: " + this.ISBN)
    }
}


let libro1 = new Libro("blanca nieves", 50, "ni idea", "CEPIT", "español", "01/01/1750", 123450);
let libro2 = new Libro("los 3 cerditos", 20, "Glamur Salvatori", "CEPIT", "ingles", "12/34/5678", 123451);
let libro3 = new Libro("cinco semanas en globo", 299, "julio verne", "EmiG", "español,ingles", "0/0/1863", 123452);
/*array de libros*/
let stockLibros = [libro1, libro2, libro3];
/*termina libro*/

/* gestor de libros */
class gestorDeLibros {
    private nombre: string;
    private stockLibros: Libro[];

    constructor(pNombre: string, pStockLibros: Libro[]) {
        this.nombre = pNombre;
        this.stockLibros = pStockLibros;
    };

    public insertLibro(libro:Libro) {
        this.stockLibros.push(libro);
        console.log("se agrego a la base de datos el siguiente libro con la siguiente informacion" + libro)
    }
    public deleteLibro(pNombre: string): void {
        for (let i = 0; i < this.stockLibros.length; i++) {
            if (stockLibros[i].getNombre() === pNombre) {
                this.stockLibros.splice(i, 1, stockLibros[i])
                console.log("se elimino el libro: " + pNombre)
            } else {
                console.log("no se encontro el libro que desea eliminar")
            }
        }
    }
    public editLibro(libro:Libro,pNombre: string, pCantPag: number, pAutor: string, pEditorial: string, pLenguaje: string, pFechaPublicacion: string, pISBN: number ): void {
        libro.setNombre(pNombre);
        libro.setCantPag(pCantPag);
        libro.setAutor(pAutor);
        libro.setEditorial(pEditorial);
        libro.setLenguaje(pLenguaje)
        libro.setFechaPublicacion(pFechaPublicacion)
        libro.setISBN(pISBN)
        console.log("se modifico el libro")
    }
    public buscarLibro ([],pLibroNombre : string){
        [].find(Libro => pLibroNombre)
    }
    
}
console.log(stockLibros)