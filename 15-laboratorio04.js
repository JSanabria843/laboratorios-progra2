/**********    Laboratorio 04  ********************
 * 
 * 
 * Complementa el objeto images de la tarea anterior con dos nuevos 
 * métodos (sin reescribir todo el objeto):

    1.    edit- que toma tres argumentos ( title, artist, y date) y 
          si encuentra una imagen con el título dado en la lista, 
          cambia sus propiedades artisty date;
    2.    delete- que toma el argumento title y si encuentra una imagen 
          con este título en la lista, la elimina 
          (para eliminar un elemento de la lista, use el método splice)
*   

    Además, agregue un método show al Imageconstructor que mostrará 
    información sobre esta imagen. No reescriba el constructor.
    Utilice prototipos para este propósito. 
    Luego, modifyel showmétodo del objeto de imágenes de modo 
    que utilice el showmétodo de imagen única recién creado para 
    mostrar la información.

    Pruebe el script llamando a la secuencia:
 */
function Image(title, artist, date) {
      this.title = title;
      this.artist = artist;
      this.date = date;
  }
  
  Image.prototype.show = function() {
      console.log(`${this.title} (${this.artist}, ${this.date})`);
  };
  
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
                  image.show();  
              });
          }
      },
  
      edit: function(title, newArtist, newDate) {
          let image = this.list.find(img => img.title === title);
          if (image) {
              image.artist = newArtist;
              image.date = newDate;
              console.log(`La imagen "${title}" ha sido actualizada.`);
          } else {
              console.log(`No se encontró una imagen con el título "${title}".`);
          }
      },
  
      delete: function(title) {
          let index = this.list.findIndex(img => img.title === title);
          if (index !== -1) {
              this.list.splice(index, 1);
              console.log(`La imagen "${title}" ha sido eliminada.`);
          } else {
              console.log(`No se encontró una imagen con el título "${title}".`);
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
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
