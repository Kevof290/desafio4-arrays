import {ventas} from './data.js'

const content = (propiedad, contenedorId) => {
    const contenedor = document.getElementById(contenedorId);

    for (const propiedad of ventas) {
        const card = document.createElement('div')
        const cardContent = `
        <div class="card h-100 shadow rounded bg-dark text-light text-center p-3">
        <img src="${propiedad.src}" alt="${propiedad.nombre}
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

content(ventas, 'content')