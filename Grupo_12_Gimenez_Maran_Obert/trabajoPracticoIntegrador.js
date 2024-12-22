// Array de libros
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
 
// Array de usuarios
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
    
    console.log('Usuario registrado: ', usuarioNuevo)




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