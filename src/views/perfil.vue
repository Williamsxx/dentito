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
                    <button class="btn btn-primary" type="button">Reservar Cita</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header">Datos Personales</div>
                <div id="datos" class="col-md-7 ps-md-4">
                <div style="margin: 0;" class="row">
                    <div class="col-12 bg-white px-3 mb-3 pb-3">
                        <div class="d-flex align-items-center justify-content-between border-bottom">
                            <p class="py-2">Nombres</p>
                            <p class="py-2 text-muted">Juan Pablo</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between border-bottom">
                            <p class="py-2">Apellidos</p>
                            <p class="py-2 text-muted">Quispe Mamani</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between border-bottom">
                            <p class="py-2">Celular</p>
                            <p class="py-2 text-muted">999999999</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between border-bottom">
                            <p class="py-2">Direccion</p>
                            <p class="py-2 text-muted">Av Peru</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="py-2">DNI</p>
                            <p class="py-2 text-muted"> 12345678</p>
                        </div>
                    </div>
              
                </div>
            </div>
            </div>
        </div>
        <div>
          <div class="card">
          <h4 style="padding: 30px;">Hisotrial de Atenciones</h4>
          <table class="table ">
  <thead>
    <tr>
      <th scope="col">Nro</th>
      <th scope="col">Fecha y hora</th>
      <th scope="col">Diente picado</th>
      <th scope="col">Luis Alberto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>2023-04-11 07:00</td>
      <td>Diente picado</td>
      <td>Luis Alberto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2023-06-15 14:00</td>
      <td>Diente picado</td>
      <td>Luis Alberto</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>2023-02-11 07:00</td>
      <td>Diente picado</td>
      <td>Luis Alberto</td>
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
export default{
    name:"PerfilUsuario"
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