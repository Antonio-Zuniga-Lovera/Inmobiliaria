const contenedorAlquiler = document.querySelector('#alquiler .cards-template');
let htmlAlquiler = '';

const propiedadesAlquiler = [
    {
      titulo: "Apartamento en el centro de la ciudad",
      descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      direccion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2000,
      fumarPermitido: false,
      mascotasPermitidas: true,
      imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
      titulo: "Apartamento luminoso con vista al mar",
      descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
      direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 2500,
      fumarPermitido: true,
      mascotasPermitidas: true,
      imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      titulo: "Condominio moderno en zona residencial",
      descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      direccion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2200,
      fumarPermitido: false,
      mascotasPermitidas: false,
      imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
    }
];

for (const propiedad of propiedadesAlquiler) {
    htmlAlquiler += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${propiedad.imagen}" class="card-img-top" alt="Imagen de la propiedad">
          <div class="card-body">
            <h5 class="card-title">${propiedad.titulo}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
            <p class="${propiedad.fumarPermitido ? 'text-success' : 'text-danger'}">
              <i class="fas fa-smoking${propiedad.fumarPermitido ? '' : '-ban'}"></i> ${propiedad.fumarPermitido ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.mascotasPermitidas ? 'text-success' : 'text-danger'}">
              <i class="fas fa-paw${propiedad.mascotasPermitidas ? '' : '-ban'}"></i> ${propiedad.mascotasPermitidas ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
}

contenedorAlquiler.innerHTML = htmlAlquiler;