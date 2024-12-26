const prompt = require('prompt-sync')();
// TP INTEGRADOR GRUPO 12: Lara Gimenez, María Jose Maran, Zoe Obert
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
//console.log("Libros:", libros);
//console.log("Usuarios:", usuarios);


// 2. Funciones de Gestión de Libros

// 2.a Función para agregar un nuevo libro
function agregarLibro(id, titulo, autor, año, genero) {
    const nuevoLibro = { id, titulo, autor, año, genero, disponible: true };
    libros.push(nuevoLibro);
    console.log(`El libro "${titulo}" ha sido agregado.`);
}

// 2.b Función para buscar un libro por título, autor o género
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

// 2.c Función para ordenar los libros por título o año
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

// 2.d Función para borrar un libro por ID
function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        const libroBorrado = libros.splice(index, 1);
        console.log(`El libro "${libroBorrado[0].titulo}" ha sido borrado.`);
    } else {
        console.log("No se encontró el libro para borrar.");
    }
}

// 3. Funciones de Gestión de Usuarios

// 3.a Función para registrar un usuario

function pedirDatos() {
    const nombre = prompt('Por favor ingrese su nombre:');
    const email = prompt('Por favor ingrese su email:');
    return { nombre, email };
}

function registrarUsuario({ nombre, email }) {
    let usuarioNuevo = {
        id: usuarios[usuarios.length - 1].id + 1, // Busca ID del último usuario y le suma 1
        nombre,
        email,
        librosPrestados: [],
    };

    usuarios.push(usuarioNuevo);
    console.log('Usuario nuevo registrado: ', usuarioNuevo);

    return usuarioNuevo;
}

const datos = pedirDatos();
registrarUsuario(datos);

// 3.b Función para mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
    console.log(usuarios);
    return usuarios;
}

// 3.c Función para buscar un usuario por email
function emailBuscado(){
    const email = prompt('Ingrese el email del usuario que esta buscando: ');
    return { email }
}

function buscarUsuario ({ email }) {
    resultado = usuarios.find(usuario => usuario.email === email);

    if (resultado) {
        console.log('Resultado de busqueda:' , resultado);
    } else {
        console.log('Ningún usuario coincide con el email indicado.')
    };
}

// para llamar funcion buscarUsuario agegar lieas:
//  const filtroEmail = emailBuscado()
//  buscarUsuario(filtroEmail)

// 3.d Función para borrar un usuario
const usuarioSeleccionado = emailBuscado()

function borrarUsuario({ nombre, email }){
    const indiceAEliminar = usuarios.indexOf(usuario => usuario.nombre === nombre && usuario.email === email);

    usuarios.splice(indiceAEliminar, 1);
    console.log(`El usuario ${email} ha sido eliminado`)
    return ;
}


// IMPORTANTE: este comentario es pura y exclusivamente para avisar que los ultimos dos commits realizados por mi (Lara Gimenez), pertenecen
// al punto 3 del TPIntegrador. Me confundi al tippear el mensaje en ambos casos.
// Por lo tanto me referia a los ejercicios a y b del punto 3.


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



/////////////////////////////////////////////


//6. . Identificación Avanzada de libros

function librosConPalabrasEnTitulo(_libros) {
    const librosFiltrados = _libros.filter(libro => {
       return libro.titulo.split(" ").length > 1 && /^[\p{L}\s]+$/u.test(libro.titulo)
    });

    const titulosEncontrados = librosFiltrados.map(libro => libro.titulo);
  
    console.log(titulosEncontrados);
    return titulosEncontrados;
}


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


//8.Manejo de Cadenas
//Crear una función normalizarDatos() que utilice métodos de strings para:
//✓ Convertir todos los títulos a mayúsculas.
//✓ Eliminar espacios en blanco al inicio y final de los nombres de autores.

// Función para normalizar los datos
function normalizarDatos() {

// Normalizar los títulos de los libros (convertir a mayúsculas)
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
    });

// Normalizar los nombres de los autores (eliminar espacios en blanco al inicio y al final)
    libros.forEach(libro => {
        libro.autor = libro.autor.trim();
    });

// Normalizar los emails de los usuarios (convertir a minúsculas)
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });


}
// 9. Interfaz de Usuario por Consola
// Punto 9: Interfaz de Usuario por Consola
// Función para mostrar el menú

function mostrarMenu() {
    console.log("\nElige una opción:");
    console.log("1. Buscar libro");
    console.log("2. Prestar libro");
    console.log("3. Devolver libro");
    console.log("4. Generar reporte de libros");
    console.log("5. Salir");
}

// Función principal que ejecuta las opciones del menú
function ejecutarOpcion(opcion) {
    switch (opcion) {
        case '1':
            const criterio = prompt("¿Qué criterio deseas usar para buscar? (titulo/autor/genero): ");
            const valor = prompt("Introduce el valor a buscar: ");
            buscarLibro(criterio, valor); // Llamada a la función buscarLibro
            break;
        case '2':
            const idLibro = parseInt(prompt("Introduce el ID del libro a prestar: "));
            const idUsuario = parseInt(prompt("Introduce el ID del usuario: "));
            prestarLibro(idLibro, idUsuario); // Llamada a la función prestarLibro
            break;
        case '3':
            const idLibroDevolver = parseInt(prompt("Introduce el ID del libro a devolver: "));
            const idUsuarioDevolver = parseInt(prompt("Introduce el ID del usuario: "));
            devolverLibro(idLibroDevolver, idUsuarioDevolver); // Llamada a la función devolverLibro
            break;
        case '4':
            generarReporteLibros(); // Llamada a la función generarReporteLibros
            break;
        case '5':
            console.log("Saliendo del programa.");
            process.exit(); // Termina el programa
            break;
        default:
            console.log("Opción inválida, por favor selecciona nuevamente.");
    }
}

// Ciclo para mostrar el menú y ejecutar la opción seleccionada
function iniciar() {
    while (true) {
        mostrarMenu();
        const opcionSeleccionada = prompt("Elige una opción (1-5): ");
        ejecutarOpcion(opcionSeleccionada);
    }
}

iniciar();
