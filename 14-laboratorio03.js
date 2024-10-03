/***********  Laboratorio 3  ************
 * 
 * En este laboratorio deberás crear el objeto images y lo utilizarás
 * para almacenar imágenes.  El objeto "images" debe contener una propiedad
 * "list", que será una matriz de objetos de imagen y métodos:
 * 
 *    1.  contains -- toma como argumento el título de la imagen y retorna
 *                    true si la imagen ya está colocada en la lista 
 *                    (de lo contrario retorna false).
 *    2.  add      -- toma tres argumentos (title, artist, y date) y crea
 *                    un nuevo objeto basado en ellos y lo agrega a la lista
 *                    (si aún no se ha agregado).
 *    3.  show     -- que muestra todas las imágenes de la lista.
 *    4.  clear    -- que elimina todos los objetos de la lista.
 * 
 * Al crear el objeto, utilice el constructor Image preparado en la tarea
 * anterior
 * 
 * Pruebe el xcript llamando a la secuencia: 
 */

function Image(title, artist, date) {
    this.title = title;  
    this.artist = artist;  
    this.date = date; 
}

let images = {
    list: [],  
    contains: function(title) {
        return this.list.some(image => image.title === title);
    },

    add: function(title, artist, date) {
        if (!this.contains(title)) {
            let newImage = new Image(title, artist, date);
            this.list.push(newImage);  
        } else {
            console.log(`${title} ya está en la lista.`);
        }
    },

    
    show: function() {
        
        if (this.list.length === 0) {
            console.log("No hay imágenes en la lista.");
        } else {
            this.list.forEach(image => {
                console.log(`${image.title} (${image.artist}, ${image.date})`);
            });
        }
    },

    clear: function() {
        this.list = [];  
        console.log("La lista ha sido vaciada.");
    }
};



images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
images.clear();
images.show();
