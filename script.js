
fetch("data.json") // Se utiliza fetch() para solicitar el archivo 'data.json'
.then(response=>response.json()) // Se convierte la respuesta obtenida en formato JSON para trabajar con los datos en JS

// Una vez que se tiene el JSON convertido, se ejecuta esta función para trabajar con los datos
.then(data=>{ 
    const myFragment= document.createDocumentFragment();

data.forEach( character => {

    // Se crea una nueva fila para la tabla
    const row = document.createElement('tr');
    
    // Se crean tres celdas (elementos 'td') para contener las columnas de la fila
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    const col3 = document.createElement('td');
    col1.textContent = character.id;
    col2.textContent = character.nombre;
    col3.textContent = character.casa;

   // Se añaden las celdas a la fila (tr)
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    
    // Se añade la fila completa al DocumentFragment
    myFragment.appendChild(row);
});

const table = document.querySelector('#table');  // Se selecciona la tabla en el DOM usando su ID 

// Se añade el DocumentFragment con todas las filas a la tabla en una sola operación
// Esto es más eficiente que añadir una fila a la vez al DOM
table.appendChild(myFragment)
})

.catch(error => console.error('Error al cargar los datos:', error));// Si ocurre algún error durante el proceso, esta función puede ser añadida para manejarlo




