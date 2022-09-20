

class libro {
    private nombre: string;
    private cantPaginas: number;
    private autor: string;
    private editorial: string;
    private lenguaje: string;
    private fechaPublicacion: number;
    private ISBN: number;
    
    /* constructor */
    constructor(pNombre: string, pCantPag: number, pAutor: string, pEditorial: string, pLenguaje: string, pFechaPublicacion: number, pISBN: number) {
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
        this.cantPaginas
        console.log("el libro tiene" + this.cantPaginas + " paginas.")
    }
    public getAutor(): string {
        console.log("el nombre del autor del libro es: " + this.autor)
        return this.autor
        
    }
    public getEditorial(): string {
        console.log("la editorial del libro es: " + this.editorial)
        return this.editorial;
    }
    public getLenguaje(): string {
        console.log("el lenguaje del libro es: " + this.lenguaje)
        return this.lenguaje
    }
    public getFechaPublicacion(): void {
        this.fechaPublicacion
        console.log("la fecha de publicacion del libro es: " + this.fechaPublicacion)
    }
    public getISBN(): void {
        this.ISBN
        console.log("el ISBN de este libro es: " + this.ISBN)
    }

    /* funciones set */

    private setNombre(pNombre): string {
        return this.nombre = pNombre;
        console.log("se cargo el siguiente nombre al libro: " + this.nombre)
    }
    private setCantPag(pCantPag): void {
        this.cantPaginas = pCantPag;
        console.log("se cargo la siguiente cantidad de paginas al libro: " + this.cantPaginas)
    }
    private setAutor(pAutor): string {
        console.log("se cargo el siguiente nombre como autor del libro: " + this.autor)
        return this.autor = pAutor;
    }
    private setEditorial(pEditorial): string {
        console.log("se cargo la siguiente editorial al libro: " + this.editorial)
        return this.editorial = pEditorial;
    }
    private setLenguaje(pLenguaje): string {
        console.log("se cargo el siguiente lenguaje al libro: " + this.lenguaje)
        return this.lenguaje = pLenguaje;
    }
    private setFechaPublicacion(pFechaPublicacion): void {
        this.fechaPublicacion = pFechaPublicacion;
        console.log("se cargo la siguiente fecha de publicacion al libro: " + this.fechaPublicacion)
    }
    private setISBN(pISBN): void {
        this.ISBN = pISBN;
        console.log("se cargo el siguiente ISBN: " + this.ISBN)
    }


}

export default libro;

let libro1 = new libro ("blanca nieves",50,"ni idea", "CEPIT","español",2022,123450);
let libro2 = new libro ("los 3 cerditos",20,"Glamur Salvatori", "CEPIT","ingles",1500, 123451);
let libro3 = new libro ("cinco semanas en globo",299,"julio verne","EmiG","español,ingles",1863,123452);


let stockLibros = [libro1,libro2,libro3];
