<template >
<div class="container-xl px-4 mt-4">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button style="color: black;" class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Perfil</button>
  </li>
  <li class="nav-item" role="presentation">
    <button style="color: black;"  class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Mensajes</button>
  </li>
  <!-- <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li> -->
</ul>

<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <hr class="mt-0 mb-4">
    <div class="row">
        <div class="col-xl-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Imagen</div>
                <div class="card-body text-center">
                    <!-- Profile picture image-->
                    <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                    <!-- Profile picture help block-->
                    <div class="small font-italic text-muted mb-4"></div>
                    <!-- Profile picture upload button-->
                    <router-link :to="{ name: 'reservarCita' }">
                    <button class="btn btn-primary" type="button">Tus atenciones</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header">Busqueda de Historial de Paciente</div>
                <div id="datos" class="col-md-7 ps-md-4">
                <div style="margin: 0;" class="row">
                    <div class="col-12 bg-white px-3 mb-3 pb-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="py-2">DNI</p>
                            <input type="text" class="login__input" placeholder="Ingrese un DNI">
                        </div>
                    </div>
              
                </div>
            </div>
            </div>
        </div>
        <div>
          <div class="card">
          <h4 style="padding: 30px;">Historial de Atenciones</h4>
   
  <!-- Tabla de historial de atenciones -->

  <table id="my-reptable" class="table">
  <thead>
    <tr>
      <th scope="col">Nro</th>
      <th scope="col">Fecha y hora</th>
      <th scope="col">Sede</th>
      <th scope="col">Médico</th>
      <th scope="col">Ver Historial</th>
    </tr>
  </thead>
  <tbody>
     <tr v-for="atencion in atenciones" :key="atencion.id">
         <td>{{atencion.id}}</td>
         <td>{{atencion.fechaHora}}</td>
         <td>{{atencion.sede}}</td>
         <td>{{atencion.medico}}</td>
         <!-- <td>{{atencion.historial}}</td> -->
        <td><b-button variant="danger"  @click="exportPDF">PDF</b-button></td>
    </tr>
  </tbody>
</table>
        </div>
        </div>
    </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
  
</div>
 

</template>

<script>

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { formToJSON } from 'axios';

export default{
  
  Name : 'Reporte',

  mounted(){
	document.body.style.backgroundColor = '#f2f5fa';
  },

  data(){
    return {
      search: '',
      todos: [
        {title: 'Paciente 1', description: 'Curación'},
        {title: 'Paciente 2', description: 'Profolaxis'},
        {title: 'Paciente 3', description: 'Brackets'},
      ],

      paciente: {
           nombre: 'Jesus',
           apellido: 'Marallano Barbaran',
           edad: '36',
           sexo: 'Masculino',
       },

       atenciones: 
       [
         { id: 1, fechaHora: '10-02-2023  15:30', sede: 'Los Olivos' , medico:'Dr. Jose Perez Albela', historial: 'Ver' },
         { id: 2, fechaHora: '11-02-2023  15:30', sede: 'Los Olivos' , medico:'Dr. Jose Perez Albela', historial: 'Ver' },
         { id: 3, fechaHora: '11-02-2023  15:30', sede: 'Los Olivos' , medico:'Dr. Jose Perez Albela', historial: 'Ver' }
       ],
    }
  },


computed: {
    filteredData() {
      return this.atenciones
        .filter(
          (entry) => this.atenciones.length
            ? Object.keys(this.allData[0])
                .some(key => ('' + entry[key]).toLowerCase().includes(this.search.toLowerCase()))
            : true
        );
    }
  },

   methods: {
    exportPDF() {
     const doc = new jsPDF()
     doc.text(this.paciente.nombre, 10, 10);
     doc.text(this.paciente.apellido, 40, 10);
     doc.text(this.paciente.edad, 100, 10);
     doc.text(this.paciente.sexo, 170, 10);

    // It can parse html:
    // <table id="my-table"><!-- ... --></table>
    autoTable(doc, { html: '#my-reptable' })

    // Or use javascript directly:

 
/*     autoTable(doc, {
    head: [['Name', 'Email', 'Country']],
    body: [
        ['David', 'david@example.com', 'Sweden'],
        ['Castille', 'castille@example.com', 'Spain'],
        // ... 
    ],
    })  */

    //

    //doc.save('table.pdf')
   doc.output('dataurlnewwindow'); 
    }
  }
}

</script>
<style scoped>
#datos{
  width: 100%;padding-left: 50px !important;
    padding-right: 50px;
    padding-top: 50px;
    padding-bottom: 30px;
}
body{margin-top:20px;
background-color:#f2f6fc;
color:#69707a;
background: #ddd4d4 !important;
}
.img-account-profile {
    height: 10rem;
}
.rounded-circle {
    border-radius: 50% !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.form-control, .dataTable-input {
    display: block;
    width: 100%;
    padding: 0.875rem 1.125rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1;
    color: #69707a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c5ccd6;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
    color: #0061f2;
    border-bottom-color: #0061f2;
}
.nav-borders .nav-link {
    color: #69707a;
    border-bottom-width: 0.125rem;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>