import { ventas, arriendos } from './data.js';

const visualPropiedades = (propiedad, contenedorId) => {
    const contenedor = document.getElementById(contenedorId);
    const limite = propiedad.slice(0,3);

    for (const propiedad of limite) {
        const card = document.createElement('div')
        card.className = 'col-md-4 mb-4'
        const cardContent = `
        <div class="card h-100 shadow rounded bg-dark text-light text-center p-3">
        <img src="${propiedad.src}" class="card-img-top img-fluid mx-auto" alt="${propiedad.nombre}
        <h3>${propiedad.nombre}</h3>
        <h6>${propiedad.ubicacion}</h6>
        <p><i class="fa-solid fa-bed"></i> ${propiedad.habitaciones} habitaciones.</p>
        <p><i class="fa-solid fa-toilet"></i> ${propiedad.baños} baños.</p>
        <h5>${propiedad.costo}</h5>
        <i class="${propiedad.smoke ? 'fa-solid  fa-smoking' : 'fa-solid fa-ban-smoking' }"></i>
        <p>${propiedad.smoke ? 'Permitido fumar' : 'Prohibido fumar'}</p>
        <i class="${propiedad.pets ? 'fa-solid fa-paw' : 'fa-solid fa-ban'}"></i>
        <p>${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
        </div>`

        card.innerHTML = cardContent;
        contenedor.appendChild(card);
    }
}

visualPropiedades(ventas, 'ventaPropiedades')
visualPropiedades(arriendos, 'arriendoPropiedades')