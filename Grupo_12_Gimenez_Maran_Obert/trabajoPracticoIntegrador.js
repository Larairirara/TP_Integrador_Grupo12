const prompt = require('prompt-sync')();
// TP INTEGRADOR: Gimenez, Maran, Obert
/////////////////////////////////////



//1. Estructura de Datos
// 1. a. Array de libros
const libros = [
    { id: 1, titulo: "Once minutos", autor: "Paulo Coelho", año: 2003, genero: "Ficción", disponible: true },
    { id: 2, titulo: "Tal vez nunca", autor: "Colleen Hoover", año: 2023, genero: "Romance", disponible: false },
    { id: 3, titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943, genero: "Novela infatil", disponible: true },
    { id: 4, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997, genero: "Alta fantasía", disponible: true },
    { id: 5, titulo: "Demian", autor: "Hermann Hesse", año: 1919, genero: "Ficción", disponible: false },
    { id: 6, titulo: "Correr o morir", autor: "James Dashner", año: 2009, genero: "Ciencia ficción apocalíptica", disponible: true },
    { id: 7, titulo: "La casa de los espíritus", autor: "Isabel Allende", año: 1982, genero: "Realismo mágico", disponible: false },
    { id: 8, titulo: "El psicoanalista", autor: "John Katzenbach", año: 2002, genero: "Thriller", disponible: true },
    { id: 9, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963, genero: "Ficción", disponible: true },
    { id: 10, titulo: "El hombre más rico del mundo", autor: "Rafael Vidac", año: 2015, genero: "Autoayuda", disponible: true },  
];
 

// 1. b. Array de usuarios
const usuarios = [
    { id: 1, nombre: "Zoe Obert", email: "zoe.obert@gmail.com", librosPrestados: [1, 2] },
    { id: 2, nombre: "Lara Gimenez", email: "lara.gimenez@gmail.com", librosPrestados: [3, 4] },
    { id: 3, nombre: "Silvia Romariz", email: "silvia.romariz@gmail.com", librosPrestados: [5, 6] },
    { id: 4, nombre: "Joxi Maran", email: "joxi.maran@gmail.com", librosPrestados: [7, 8] },
    { id: 5, nombre: "Mateo Alves", email: "mateo.alves@gmail.com", librosPrestados: [9, 10] },
];

// Verificar con console.log
console.log("Libros:", libros);
console.log("Usuarios:", usuarios);


//2. Funciones de Gestión de Libros
/////////////////////////////////////

//2.a Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
function agregarLibro(id, titulo, autor, año, genero) {
    const nuevoLibro = { id, titulo, autor, año, genero, disponible: true };
    libros.push(nuevoLibro);
    console.log(`El libro "${titulo}" ha sido agregado.`);
}


//2.b Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor) {
    const libroEncontrado = libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
    if (libroEncontrado.length > 0) {
        console.log("Libros encontrados:");
        libroEncontrado.forEach(libro => {
            console.log(`${libro.titulo} de ${libro.autor}, ${libro.año}, Género: ${libro.genero}`);
        });
    } else {
        console.log("No se encontró ningún libro con ese criterio.");
    }
}


//2.c Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola
function ordenarLibros(criterio) {
    if (criterio === "titulo") {
        libros.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (criterio === "año") {
        libros.sort((a, b) => a.año - b.año);
    }
    console.log(`Libros ordenados por ${criterio}:`);
    libros.forEach(libro => {
        console.log(`${libro.titulo} de ${libro.autor}, ${libro.año}`);
    });
}


//2.d Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        const libroBorrado = libros.splice(index, 1);
        console.log(`El libro "${libroBorrado[0].titulo}" ha sido eliminado.`);
    } else {
        console.log("No se encontró el libro con ese ID.");
    }
}



// 3. Gestion de usuarios

// a. Implementar una función registrarUsuario(nombre, email) que agregue un 
//nuevo usuario al array usuarios.

const usuarioNuevo = {
    nombre: 'Rodolfo',
    email: 'Ibañes.rodolfo@gmail.com'
}
function registrarUsuario(nombre, email){
    return 'usuarioNuevo'
};

    usuarios.push(usuarioNuevo)
    
    console.log('Usuario nuevo registrado: ', usuarioNuevo)


// b.  Implementar una función mostrarTodosLosUsuarios() que me devuelva el array 
//completo de usuarios

function mostrarTodosLosUsuarios(nombre) {
    return 'usuarios';
}
   console.log(usuarios)

   // IMPORTANTE: este comentario es pura y exclusivamente para avisar que los ultimos dos commits realizados por mi (Lara Gimenez), pertencen
   // al punto 3 del TPIntegrador. Me confundi al tippear el mensaje en ambos casos.
   // Por lo tanto me referia a los ejercicio a y b del punto 3.


// 4. Sistema de Prestamos
// Función para prestar un libro a un usuario
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro); // Buscar el libro por su ID
    const usuario = usuarios.find(usuario => usuario.id === idUsuario); // Buscar el usuario por su ID

    if (libro && libro.disponible) { // Verificar si el libro existe y está disponible
        libro.disponible = false; 
        usuario.librosPrestados.push(libro.id); // Añadir el libro a la lista de libros prestados del usuario
        console.log(`${usuario.nombre} ha prestado el libro "${libro.titulo}".`);
    } else {
        console.log("Este libro no está disponible para prestar.");
    }
}

// Función para devolver un libro
function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro); // Buscar el libro por su ID
    const usuario = usuarios.find(usuario => usuario.id === idUsuario); // Buscar el usuario por su ID

    if (libro && usuario.librosPrestados.includes(idLibro)) { 
        libro.disponible = true; 
        usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
        console.log(`${usuario.nombre} ha devuelto el libro "${libro.titulo}".`);
    } else {
        console.log("Este libro no fue prestado por el usuario.");
    }
}

// 5. Reportes
//a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
//✓ Cantidad total de libros.
//✓ Cantidad de libros prestados.
//✓ Cantidad de libros por género.
//✓ Libro más antiguo y más nuevo

//✓ Cantidad total de libros.
// Función generarReporteLibros

function generarReporteLibros() {
    // Cantidad total de libros
    const totalLibros = libros.length;

    // Cantidad de libros prestados (los que no están disponibles)
    const librosPrestados = libros.filter(libro => !libro.disponible).length;

    // Cantidad de libros por género
    const cantidadPorGenero = libros.reduce((acc, libro) => {
        if (acc[libro.genero]) {
            acc[libro.genero]++;
        } else {
            acc[libro.genero] = 1;
        }
        return acc;
    }, {});

    // Libro más antiguo (con el año más bajo)
    const libroMasAntiguo = libros.reduce((antiguo, libro) => {
        return (libro.año < antiguo.año) ? libro : antiguo;
    });

    // Libro más nuevo (con el año más alto)
    const libroMasNuevo = libros.reduce((nuevo, libro) => {
        return (libro.año > nuevo.año) ? libro : nuevo;
    });

    // Mostrar los resultados
    console.log("Reporte de Libros:");
    console.log(`1. Cantidad total de libros: ${totalLibros}`);
    console.log(`2. Cantidad de libros prestados: ${librosPrestados}`);
    console.log("3. Cantidad de libros por género:", cantidadPorGenero);
    console.log(`4. Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.año})`);
    console.log(`5. Libro más nuevo: "${libroMasNuevo.titulo}" (${libroMasNuevo.año})`);
}

// Llamamos la función para ver el reporte
generarReporteLibros();




// 7. Función para calcular estadísticas de los libros
function calcularEstadisticas() {
    const totalLibros = libros.length;

    // Promedio de años de publicación
    const totalAños = libros.reduce((sum, libro) => sum + libro.año, 0);
    const promedioAños = totalAños / totalLibros;
    console.log(`El promedio de años de publicación es: ${promedioAños.toFixed(2)}`);

    // Año de publicación más frecuente
    const añosFrecuentes = libros.reduce((acc, libro) => {
        acc[libro.año] = (acc[libro.año] || 0) + 1;
        return acc;
    }, {});
    const añoFrecuente = Object.keys(añosFrecuentes).reduce((a, b) => añosFrecuentes[a] > añosFrecuentes[b] ? a : b);
    console.log(`El año de publicación más frecuente es: ${añoFrecuente}`);

    // Diferencia en años entre el libro más antiguo y el más nuevo
    const añosLibros = libros.map(libro => libro.año);
    const añoMásAntiguo = Math.min(...añosLibros);
    const añoMásNuevo = Math.max(...añosLibros);
    const diferenciaAños = añoMásNuevo - añoMásAntiguo;
    console.log(`La diferencia de años entre el libro más antiguo (${añoMásAntiguo}) y el más nuevo (${añoMásNuevo}) es de ${diferenciaAños} años.`);
}

// Función calcularEstadisticas
calcularEstadisticas();