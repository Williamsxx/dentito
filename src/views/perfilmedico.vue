<template>
<div>

    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <router-link :to="{ name: 'main' }" style="text-decoration: none;font-weight: normal;">
                <li class="nav-item d-none d-sm-inline-block">
                    <a  class="nav-link">Inicio</a>
                </li>
                </router-link>

            </ul>
            <ul class="navbar-nav ml-auto">
                <!-- Navbar Search -->
             
            <div style="margin-right: 25px;" class="dropdown">

            <i class="nav-icon fas fa-user-alt "  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <router-link :to="{ name: 'main' }" style="text-decoration: none;font-weight: normal;">
                <li><a class="dropdown-item" href="#" @click="cerrarSesion()" >Cerrar sesion</a></li>
                </router-link>
            </ul>
            </div>
             
            </ul>
        </nav>
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <router-link :to="{ name: 'main' }" style="text-decoration: none;font-weight: normal;">
            <a style="text-align: left;text-decoration: none;"  href="" class="brand-link">
                <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Dentito</span>
            </a>
        </router-link>
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <div v-if="user=='juan@hotmail.com'">
                        <a style="text-decoration: none !important;" class="d-block">Juan Mamani</a>
                        <a style="text-decoration: none !important;font-size: 15px;text-align: left;font-weight: bold;" class="d-block">Administrador</a>
                        </div>
                        <div v-else-if="user=='jhon@hotmail.com'">
                        <a style="text-decoration: none !important;" class="d-block">Jhon Quispe</a>
                        <a style="text-decoration: none !important;font-size: 15px;text-align: left;font-weight: bold;" class="d-block">Odontologo</a>
                        </div>
                        <div v-if="user=='manuel@hotmail.com'">
                        <a style="text-decoration: none !important;" class="d-block">Manuel Gonzales</a>
                        <a style="text-decoration: none !important;font-size: 15px;text-align: left;font-weight: bold;" class="d-block">Paciente</a>
                        </div>
                 

                    </div>

                </div>

                <!-- SidebarSearch Form -->
                <div class="form-inline">
                    <div class="input-group" data-widget="sidebar-search">
                        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn btn-sidebar">
                                <i class="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <nav class="mt-2" style="padding: 0;text-align: left;">
                    <div class="nav nav-pills nav-sidebar flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical" data-widget="treeview" data-accordion="false">

                        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Perfil
                            </p>
                        </a>

                        <!-- <a v-if="user=='jhon@hotmail.com'" class="nav-link " id="v-pills-medicos-tab" data-toggle="pill" href="#v-pills-atencionesodontologo" role="tab" aria-controls="v-pills-medicos" aria-selected="false">
                            <i class="nav-icon fas fa-file-alt"></i>
                            <p>
                                Atenciones
                            </p>
                        </a> -->
                        <a  class="nav-link " id="v-pills-medicos-tab" data-toggle="pill" href="#v-pills-citas" role="tab" aria-controls="v-pills-medicos" aria-selected="false">
                            <i class="nav-icon fas fa-file-alt"></i>
                            <p>
                                Citas
                            </p>
                        </a>
                        <a   class="nav-link "  data-toggle="pill" href="#v-pills-atenciones" role="tab" aria-controls="v-pills-medicos" aria-selected="false">
                            <i class="nav-icon fas fa-file-alt"></i>
                            <p>
                                Historial de Atenciones
                            </p>
                        </a>
                        <a v-if="user=='juan@hotmail.com'" class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <i class="nav-icon fas fa-user-alt"></i>
                            <p>
                                Usuarios
                            </p>
                        </a>
                        <a v-if="user=='juan@hotmail.com'" class="nav-link " id="v-pills-medicos-tab" data-toggle="pill" href="#v-pills-medicos" role="tab" aria-controls="v-pills-medicos" aria-selected="false">
                            <i class="nav-icon fas fa-user-md"></i>
                            <p>
                                Odontologos
                            </p>
                        </a>

                        <!-- <a v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-citasodontologo" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <i class="nav-icon fas fa-edit"></i>
                            <p>
                                Citas
                            </p>
                        </a> -->

                        <a v-if="user=='juan@hotmail.com'" class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <i class="nav-icon fas fa-tooth"></i>
                            <p>
                                Medicinas
                            </p>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div style="margin: 0px;" class="content-wrapper">
                            <!-- Content Header (Page header) -->
                            <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>DATOS DE USUARIO</h1>
                                    </div>
                                </div>
                            </div><!-- /.container-fluid -->
                            </section>

                            <!-- Main content -->
                            <section class="content">
                            <div class="container-fluid">
                                <div class="row">
                                <div class="col-md-3">

                                    <!-- Profile Image -->
                                    <div class="card card-primary card-outline">
                                    <div class="card-body box-profile">
                                        <div class="text-center">
                                        <img style="height: 280px;width: auto;margin-top: 12px;" class="profile-user-img img-fluid img-circle"
                                            src="img/medico.png"
                                            alt="User profile picture">
                                        </div>
                                        <div v-if="user=='juan@hotmail.com'">
                                        <h3 style="margin-top: 30px;" class="profile-username text-center">Juan Mamani</h3>
                                        <p class="text-muted text-center">Administrador</p>
                                        </div>
                                        <div v-else-if="user=='jhon@hotmail.com'">
                                        <h3 style="margin-top: 30px;" class="profile-username text-center">Jhon Quispe</h3>
                                        <p class="text-muted text-center">Odontologo</p>
                                        </div>
                                        <div v-else>
                                        <h3 style="margin-top: 30px;" class="profile-username text-center">Manuel Gonzales</h3>
                                        <p class="text-muted text-center">Paciente</p>
                                        </div>
                                        <label for="formFile" style="font-size: 17px;" class="form-label">Subir Imagen</label>
                                            <input class="form-control" type="file" id="formFile">
                                        <!-- <a href="#"  class="btn btn-primary btn-block"><b style="color: white;">Subir Imagen</b></a> -->
                                    </div>
                                    <!-- /.card-body -->
                                    </div>
                                    <!-- /.card -->

                              
                                </div>
                                <!-- /.col -->
                                <div class="col-md-9">
                                    <div class="card">
                               
                                        <div class="card-header p-2">
                                                <ul class="nav nav-pills">
                                                <li class="nav-item"><a class="nav-link active" href="#settings" data-toggle="tab">Datos Personales</a></li>
                                                </ul>
                                            </div>
                                
                                            <div class="card-body">
                                        <div class="tab-content">
                                        <div class="active tab-pane" id="settings">
                                            <form class="form-horizontal" v-on:submit.prevent="registrar">
                                            <div class="form-group row">
                                                <label for="inputName" class="col-sm-2 col-form-label">Nombres</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control"  placeholder="Nombres" v-model="medico2.nombres">
                                                <p v-if="medico2.nombres==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                              
                                            </div>

                                            <div class="form-group row">
                                                <label for="inputEmail" class="col-sm-2 col-form-label">Apellidos</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control"  placeholder="Apellidos" v-model="medico2.apellidos">
                                                <p v-if="medico2.apellidos==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">DNI</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control"  placeholder="DNI" v-model="medico2.dni">
                                                <p v-if="medico2.dni==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">Genero</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control" name="select" v-model="medico2.sexo">
                                                    <option value=null selected>Seleccione una opcion</option >
                                                    <option value="Masculino" >Masculino</option>
                                                    <option value="Femenino">Femenino</option>
                                                    </select>    
                                                    <p v-if="medico2.sexo=='null'" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                            
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">Edad</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control"  placeholder="Edad" v-model="medico2.dni">
                                                <p v-if="medico2.dni==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">Rol</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control" name="select" v-model="medico2.rol">
                                                    <option value=null selected>Seleccione una opcion</option >
                                                    <option value="Administrador" >Administrador</option>
                                                    <option value="Medico">Medico</option>
                                                    <option value="Paciente">Paciente</option>
                                                    </select>    
                                                    <p v-if="medico2.rol=='null'" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <!-- <div class="form-group row">
                                                <label for="inputExperience" class="col-sm-2 col-form-label">Direccion</label>
                                                <div class="col-sm-10">
                                                <input class="form-control" id="inputExperience" placeholder="Direccion" v-model="direccion">
                                                <p v-if="direccion==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div> -->
                                            <!-- <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                <input type="email" class="form-control" id="inputSkills" placeholder="Email" v-model="email">
                                                <p v-if="email==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Telefono</label>
                                                <div class="col-sm-10">
                                                <input type="number" class="form-control" id="inputSkills" placeholder="Telefono" v-model="telefono">
                                                <p v-if="telefono==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div> -->
                                            <!-- <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Telefono (Emergencia)</label>
                                                <div class="col-sm-10">
                                                <input type="number" class="form-control" id="inputSkills" placeholder="Telefono Emergencia" v-model="telefonoemer">
                                                <p v-if="telefonoemer==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div> -->
                                            <!-- <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">Fecha de Nacimiento</label>
                                                <div class="col-sm-10">
                                                <input type="date" class="form-control" id="inputName2" placeholder="Fecha de Nacimiento" v-model="fechanac">
                                                <p v-if="fechanac==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Observaciones</label>
                                                <div class="col-sm-10">
                                                <textarea type="number" class="form-control" id="inputSkills" placeholder="Observaciones" v-model="observaciones">
                                                </textarea>
                                                <p v-if="observaciones==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div> -->
                             
                                            <div class="form-group row">
                                                <div class="offset-sm-2 col-sm-10" style="text-align: left;">
                                                <button type="submit" class="btn btn-primary">Guardar</button>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-medicos" role="tabpanel" aria-labelledby="v-pills-medicos-tab">LISTA DE ODONTOLOGOS</div>

                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div id="listaPacientes" class="nav-bar-transition">
                        <!-- Content Header (Page header) -->
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>LISTA DE USUARIOS</h1>
                                    </div>
                                    <div style="margin-top: -37px;" class="col-sm-12">
                                        <ol id="paciente" @click="quitarAtributo()" class="breadcrumb float-sm-right nav flex-column nav-pills me-3">
                                            <button id="botonagregar" type="button" data-bs-toggle="pill" data-bs-target="#profile" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-user-plus'></i>Agregar Usuario</button>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="content">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <table id="example2" class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro</th>
                                                            <th>Nombres</th>
                                                            <th>Apellidos</th>
                                                            <th>Documento</th>
                                                            <th>Direccion</th>
                                                            <th>Email</th>
                                                            <th>Estado</th>
                                                            <th>Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                      
                                                            <td>    
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>14</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>15</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>16</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>18</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>19</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>20</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!-- /.card-body -->
                                        </div>
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.row -->
                            </div>
                            <!-- /.container-fluid -->
                        </section>
                    </div>
                    </div>
                 
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
               
                    <div style="margin: 0px;" class="content-wrapper">
                            <!-- Content Header (Page header) -->
                            <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>REGISTRAR USUARIO</h1>
                                    </div>
                                    <div style="margin-top: -37px;" class="col-sm-12">
                                   
                                        <ol id="paciente" @click="quitarAtributo2()" class="breadcrumb float-sm-right nav flex-column nav-pills me-3">
                                            <button id="botonagregar2" type="button" data-bs-toggle="pill" data-bs-target="#v-pills-profile" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-file-alt'></i>Lista de Usuarios</button>
    
                                        </ol>
                                 
                                   
                                    </div>
                                </div>
                            </div><!-- /.container-fluid -->
                            </section>

                            <!-- Main content -->
                            <section class="content">
                            <div class="container-fluid">
                                <div class="row">
                                <div class="col-md-3">

                                    <!-- Profile Image -->
                                    <div class="card card-primary card-outline">
                                    <div class="card-body box-profile">
                                        <div class="text-center">
                                        <img style="height: 280px;width: auto;margin-top: 12px;" class="profile-user-img img-fluid img-circle"
                                            src="img/sin-foto.png"
                                            alt="User profile picture">
                                        </div>

                                        <h3 style="margin-top: 30px;" class="profile-username text-center">Nuevo Usuario</h3>

                                        <p class="text-muted text-center">Paciente</p>
                                        <label for="formFile" style="font-size: 17px;" class="form-label">Subir Imagen</label>
                                            <input class="form-control" type="file" id="formFile">
                                        <!-- <a href="#"  class="btn btn-primary btn-block"><b style="color: white;">Subir Imagen</b></a> -->
                                    </div>
                                    <!-- /.card-body -->
                                    </div>
                                    <!-- /.card -->

                              
                                </div>
                                <!-- /.col -->
                                <div class="col-md-9">
                                    <div class="card">
                               
                                        <div class="card-header p-2">
                                                <ul class="nav nav-pills">
                                                <li class="nav-item"><a id="datoss" class="nav-link active" href="#personales" data-toggle="tab">Datos Personales</a></li>
                                                <li  class="nav-item"><a id="usuarioo" class="nav-link" href="#usuario" data-toggle="tab">Datos de Usuario</a></li>
                                                </ul>
                                            </div>
                                
                                    <div class="card-body">
                                        <div class="tab-content">
                                        <div class="active tab-pane" id="personales">
                                         
                                            <div class="form-group row">
                                                <label for="inputName" class="col-sm-2 col-form-label">Nombres</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control"  placeholder="Nombres" v-model="nombres">
                                                <p v-if="nombres==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                              
                                            </div>

                                            <div class="form-group row">
                                                <label for="inputEmail" class="col-sm-2 col-form-label">Apellidos</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control"  placeholder="Apellidos" v-model="apellidos">
                                                <p v-if="apellidos==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">DNI</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control"  placeholder="DNI" v-model="dni">
                                                <p v-if="dni==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">Sexo</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control" name="select" v-model="sexo">
                                                    <option value=null selected>Seleccione una opcion</option >
                                                    <option value="value2" >Masculino</option>
                                                    <option value="value3">Femenino</option>
                                                    </select>    
                                                    <p v-if="sexo=='null'" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                            
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputExperience" class="col-sm-2 col-form-label">Direccion</label>
                                                <div class="col-sm-10">
                                                <input class="form-control"  placeholder="Direccion" v-model="direccion">
                                                <p v-if="direccion==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                <input type="email" class="form-control" id="inputSkills" placeholder="Email" v-model="email">
                                                <p v-if="email==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Telefono</label>
                                                <div class="col-sm-10">
                                                <input type="number" class="form-control" id="inputSkills" placeholder="Telefono" v-model="telefono">
                                                <p v-if="telefono==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <!-- <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Telefono (Emergencia)</label>
                                                <div class="col-sm-10">
                                                <input type="number" class="form-control" id="inputSkills" placeholder="Telefono Emergencia" v-model="telefonoemer">
                                                <p v-if="telefonoemer==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div> -->
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">Fecha de Nacimiento</label>
                                                <div class="col-sm-10">
                                                <input type="date" class="form-control"  placeholder="Fecha de Nacimiento" v-model="fechanac">
                                                <p v-if="fechanac==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Observaciones</label>
                                                <div class="col-sm-10">
                                                <textarea type="number" class="form-control" id="inputSkills" placeholder="Observaciones" v-model="observaciones">
                                                </textarea>
                                                <p v-if="observaciones==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                             
                                            <div class="form-group row">
                                                <div class="offset-sm-2 col-sm-10" style="text-align: left;">
                                                <button @click="siguiente()" style="background-color: var(--bs-btn-bg);" id="siguientee" href="#usuario" data-toggle="tab" class="btn btn-primary">Siguiente</button>
                                                </div>
                                            </div>
                                  
                                        </div>
                                        <div class="tab-pane" id="usuario" v-on:submit.prevent="registrar">
                                            <form class="form-horizontal">
                                            <div class="form-group row">
                                                <label for="inputName" class="col-sm-2 col-form-label">Correo Electronico</label>
                                                <div class="col-sm-10">
                                                <input type="email" class="form-control"  placeholder="Correo Electronico" v-model="usuario2">
                                                <p v-if="usuario2==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail" class="col-sm-2 col-form-label">Contraseña</label>
                                                <div class="col-sm-10">
                                                <input type="password" class="form-control" placeholder="Contraseña" v-model="contrasenaa1">
                                                <p v-if="contrasenaa1==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">Confirmar Contraseña</label>
                                                <div class="col-sm-10">
                                                <input type="password" class="form-control"  placeholder="Conformar Contraseña" v-model="contrasenaa2">
                                                <p v-if="contrasenaa2==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                                            <div class="form-group row">

                                                <div class="offset-sm-2 col-sm-10" style="text-align: left;">
                                                <button class="btn btn-primary" style="background-color: var(--bs-btn-bg);" id="anteriorr" @click="removerclase()" href="#personales" data-toggle="tab">Anterior</button>
                                                <button style="margin-left: 10px;" class="btn btn-primary" type="submit">Registrar</button>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
                    </div>
               
                </div>
                <div class="tab-pane fade" id="agregarcita" role="tabpanel" aria-labelledby="v-pills-profile-tab">
               
               <div style="margin: 0px;" class="content-wrapper">
                       <!-- Content Header (Page header) -->
                       <section class="content-header">
                       <div class="container-fluid">
                           <div class="row mb-2">
                               <div class="col-sm-12">
                                   <h1>REGISTRAR CITA</h1>
                               </div>
                               <div style="margin-top: -37px;" class="col-sm-12">
                              
                                   <ol id="paciente" @click="quitarAtributo6()" class="breadcrumb float-sm-right nav flex-column nav-pills me-3">
                                       <button id="botonagregar6" type="button" data-bs-toggle="pill" data-bs-target="#v-pills-citas" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-file-alt'></i>Lista de Citas</button>

                                   </ol>
                            
                              
                               </div>
                           </div>
                       </div><!-- /.container-fluid -->
                       </section>

                       <!-- Main content -->
                       <section class="content">
                       <div class="container-fluid">
                           <div class="row">
                           <div class="col-md-3">

                               <!-- Profile Image -->
                               <div class="card card-primary card-outline">
                               <div class="card-body box-profile">
                                   <div class="text-center">
                                   <img style="height: 280px;width: auto;margin-top: 12px;" class="profile-user-img img-fluid img-circle"
                                       src="img/sin-foto.png"
                                       alt="User profile picture">
                                   </div>

                                   <h3 style="margin-top: 30px;" class="profile-username text-center">Nuevo Usuario</h3>

                                   <p class="text-muted text-center">Paciente</p>
                                   <label for="formFile" style="font-size: 17px;" class="form-label">Subir Imagen</label>
                                       <input class="form-control" type="file" id="formFile">
                                   <!-- <a href="#"  class="btn btn-primary btn-block"><b style="color: white;">Subir Imagen</b></a> -->
                               </div>
                               <!-- /.card-body -->
                               </div>
                               <!-- /.card -->

                         
                           </div>
                           <!-- /.col -->
                           <div class="col-md-9">
                               <div class="card">
                          
                                   <div class="card-header p-2">
                                           <ul class="nav nav-pills">
                                           <li class="nav-item"><a class="nav-link active" href="#settings" data-toggle="tab">Datos Personales</a></li>
                                           </ul>
                                       </div>
                           
                               <div class="card-body">
                                   <div class="tab-content">
                                   <div class="active tab-pane" id="settings">
                                       <form class="form-horizontal" v-on:submit.prevent="registrar">
                                       <div class="form-group row">
                                           <label for="inputName" class="col-sm-2 col-form-label">Nombres</label>
                                           <div class="col-sm-10">
                                           <input type="text" class="form-control"  placeholder="Nombres" v-model="nombres">
                                           <p v-if="nombres==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                           </div>
                                         
                                       </div>

                                       <div class="form-group row">
                                           <label for="inputEmail" class="col-sm-2 col-form-label">Apellidos</label>
                                           <div class="col-sm-10">
                                           <input type="text" class="form-control"  placeholder="Apellidos" v-model="apellidos">
                                           <p v-if="apellidos==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                           </div>
                                       </div>
                                       <div class="form-group row">
                                           <label for="inputName2" class="col-sm-2 col-form-label">DNI</label>
                                           <div class="col-sm-10">
                                           <input type="text" class="form-control" placeholder="DNI" v-model="dni">
                                           <p v-if="dni==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                           </div>
                                       </div>
                                       <div class="form-group row">
                                           <label for="inputName2" class="col-sm-2 col-form-label">Sexo</label>
                                           <div class="col-sm-10">
                                               <select class="form-control" name="select" v-model="sexo">
                                               <option value=null selected>Seleccione una opcion</option >
                                               <option value="value2" >Masculino</option>
                                               <option value="value3">Femenino</option>
                                               </select>    
                                               <p v-if="sexo=='null'" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                       
                                           </div>
                                       </div>
                                       <div class="form-group row">
                                           <label for="inputExperience" class="col-sm-2 col-form-label">Direccion</label>
                                           <div class="col-sm-10">
                                           <input class="form-control"  placeholder="Direccion" v-model="direccion">
                                           <p v-if="direccion==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                           </div>
                                       </div>
                                       <div class="form-group row">
                                           <label for="inputSkills" class="col-sm-2 col-form-label">Email</label>
                                           <div class="col-sm-10">
                                           <input type="email" class="form-control"  placeholder="Email" v-model="email">
                                           <p v-if="email==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                           </div>
                                       </div>
                                       <div class="form-group row">
                                           <label for="inputSkills" class="col-sm-2 col-form-label">Telefono</label>
                                           <div class="col-sm-10">
                                           <input type="number" class="form-control" placeholder="Telefono" v-model="telefono">
                                           <p v-if="telefono==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                           </div>
                                       </div>
                                       <!-- <div class="form-group row">
                                           <label for="inputSkills" class="col-sm-2 col-form-label">Telefono (Emergencia)</label>
                                           <div class="col-sm-10">
                                           <input type="number" class="form-control"  placeholder="Telefono Emergencia" v-model="telefonoemer">
                                           <p v-if="telefonoemer==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                           </div>
                                       </div> -->
                                       <div class="form-group row">
                                           <label for="inputName2" class="col-sm-2 col-form-label">Fecha de Nacimiento</label>
                                           <div class="col-sm-10">
                                           <input type="date" class="form-control"  placeholder="Fecha de Nacimiento" v-model="fechanac">
                                           <p v-if="fechanac==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                           </div>
                                       </div>
                                       <div class="form-group row">
                                           <label for="inputSkills" class="col-sm-2 col-form-label">Observaciones</label>
                                           <div class="col-sm-10">
                                           <textarea type="number" class="form-control"  placeholder="Observaciones" v-model="observaciones">
                                           </textarea>
                                           <p v-if="observaciones==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                           </div>
                                       </div>
                        
                                       <div class="form-group row">
                                           <div class="offset-sm-2 col-sm-10" style="text-align: left;">
                                           <button type="submit" class="btn btn-primary">Guardar</button>
                                           </div>
                                       </div>
                                       </form>
                                   </div>
                                   </div>
                               </div>
                               </div>
                           </div>
                           </div>
                       </div>
                       </section>
               </div>
          
           </div>
                
                
                    <div class="tab-pane fade" id="v-pills-citas" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div id="listaPacientes" class="nav-bar-transition">
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>LISTA DE CITAS</h1>
                                    </div>
                                    <div style="margin-top: -37px;" class="col-sm-12">
                                        <!-- <ol id="paciente" @click="quitarAtributo5()" class="breadcrumb float-sm-right nav flex-column nav-pills me-3">
                                            <button id="botonagregar5" type="button" data-bs-toggle="pill" data-bs-target="#agregarcita" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-file-alt'></i>Agregar Cita</button>
                                        </ol> -->
                                   
                                        <button style="left: 645px;position: relative;" @click="abrirModal2" type="button" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-file-alt'></i>Descargar Citas</button>

                                        <ol  class="breadcrumb float-sm-right nav flex-column nav-pills me-3">
                                        <button @click="abrirModal" type="button" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-file-alt'></i>Agregar Cita</button>
                                        </ol> 
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="content">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <table id="example3" class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro</th>
                                                            <th>Nombres</th>
                                                            <th>Apellidos</th>
                                                            <th>Documento</th>
                                                            <th>Direccion</th>
                                                            <th>Email</th>
                                                            <th>Estado</th>
                                                            <th>Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
            
                                                                <!-- <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                    </div>  
                                                                    <button style="width: 80%;margin-top: 5px;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <div style="margin-top: 5px;width: 80%;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                        <button style="width: 100%;" type="button" @click="activar()" class="btn btn-info btn-sm">Atendido</button> 
                                                                    </div>
                                                                    <div style="margin-top: 5px;width: 80%;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                        <button style="width: 100%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button> 
                                                                    </div>
                                                                    <button style="margin-top: 5px;width: 80%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Cancelar</button>
                                                                </div> -->
                                                                 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Cancelado</button> 
                                                            </td>
                                                      
                                                            <td>    
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Cancelado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Cancelado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Cancelado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Cancelado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>14</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>15</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>16</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>18</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>19</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>20</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Cancelado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="margin-top: 5px;" class="dropdown">
                                                                <button style="font-size: .875rem;" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Acciones Citas
                                                                </button>
                                                                <div style="left: 53px;top: 37.9px;" id="menuCitas" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Detalles</a>
                                                                    <a class="dropdown-item" href="#">Editar</a>
                                                                    <a @click="activar()"  v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'" class="dropdown-item" href="#">Atendido</a>
                                                                    <a @click="activar()" class="dropdown-item" href="#">Activar</a>
                                                                    <a @click="eliminar()" class="dropdown-item" href="#">Cancelar</a>
                                                                </div>
                                                                </div>
                                                            
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-atenciones" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div id="listaPacientes" class="nav-bar-transition">
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>LISTA DE ATENCIONES</h1>
                                    </div>
                                    <!-- <div style="margin-top: -37px;" class="col-sm-12">
                                        <ol id="paciente" @click="quitarAtributo5()" class="breadcrumb float-sm-right nav flex-column nav-pills me-3">
                                            <button id="botonagregar5" type="button" data-bs-toggle="pill" data-bs-target="#agregarcita" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-file-alt'></i>Agregar Cita</button>
                                        </ol>
                                    </div> -->
                                </div>
                            </div>
                        </section>

                        <section class="content">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <table id="example7" class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro</th>
                                                            <th>Nombres</th>
                                                            <th>Apellidos</th>
                                                            <th>Documento</th>
                                                            <th>Direccion</th>
                                                            <th>Email</th>
                                                            <th>Fecha y Hora</th>
                                                            <th>Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>14</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>15</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>16</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>18</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                           <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>19</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button> 
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div>
                                                                        <div style="margin-top: 5px;" >
                                                                            <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>20</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>2022-11-11</td>
                                                            <td>                                                                
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                <div style="width: 80%;">
                                                                        <button style="width: 100%;" type="button"  class="btn btn-primary btn-sm">Detalles</button>
                                                                        <div style="margin-top: 5px;" v-if="user=='juan@hotmail.com' || user=='jhon@hotmail.com'">
                                                                            <button style="width: 100%;" type="button"  class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalContactForm">Registrar Atencion</button> 
                                                                        </div> 
                                                                        <div style="margin-top: 5px;" >
                                                                        <button style="width: 100%;" type="button" @click="exportPDF"  class="btn btn-danger btn-sm" >PDF</button> 
                                                                        </div>
                                                                </div> 
                                                                </div>  
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-atencionesodontologo" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div id="listaPacientes" class="nav-bar-transition">
                        <!-- Content Header (Page header) -->
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>LISTA DE ATENCIONES</h1>
                                    </div>
                                    <div style="margin-top: -37px;" class="col-sm-12">
                                   
                                   <ol id="paciente" @click="quitarAtributo4()" class="breadcrumb float-sm-right nav flex-column nav-pills me-3">
                                       <button id="botonagregar4" type="button" data-bs-toggle="pill" data-bs-target="#atencion" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-file-alt'></i>Registrar Atencion</button>

                                   </ol>
                            
                              
                               </div>
                                </div>
                            </div>
                        </section>

                        <section class="content">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <table id="example5" class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Nro</th>
                                                            <th>Nombres</th>
                                                            <th>Apellidos</th>
                                                            <th>Documento</th>
                                                            <th>Direccion</th>
                                                            <th>Email</th>
                                                            <th>Estado</th>
                                                            <th>Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                      
                                                            <td>    
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>Pedro </td>
                                                            <td>Mamani Ramirez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>14</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>15</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>16</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>18</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>19</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 50%;pointer-events: none;" type="button" class="btn btn-success btn-sm">Activado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>20</td>
                                                            <td>Lucho Manuel</td>
                                                            <td>Quispe Fernandez</td>
                                                            <td>123456</td>
                                                            <td>Av Lima</td>
                                                            <td>lucho@hotmail.com</td>
                                                            <td>
                                                                <button style="width: 55%;pointer-events: none;" type="button" class="btn btn-danger btn-sm">Desactivado</button> 
                                                            </td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="eliminar()" class="btn btn-danger btn-sm">Desactivar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!-- /.card-body -->
                                        </div>
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.row -->
                            </div>
                            <!-- /.container-fluid -->
                        </section>
                    </div>
                    </div>
                    <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document" style="text-align: left;">
                        <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Registrar Atencion</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mx-3">
                            <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Nombres</label>
                                <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Nombres" v-model="atencion.nombres">
                                <p v-if="atencion.nombres==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Apellidos</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Apellidos" v-model="atencion.apellidos">
                                <p v-if="atencion.apellidos==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">DNI</label>
                                <input type="number" class="form-control" aria-describedby="emailHelp" placeholder="DNI" v-model="atencion.dni">
                                <p v-if="atencion.dni==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Sexo</label>
                                <select class="form-control" name="select" v-model="atencion.sexo">
                                <option value=null selected>Seleccione una opcion</option >
                                <option value="value2" >Masculino</option>
                                <option value="value3">Femenino</option>
                                </select> 
                                <p v-if="atencion.sexo=='null'" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Direccion</label>
                                <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Direccion" v-model="atencion.direccion">
                                <p v-if="atencion.direccion==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" v-model="atencion.email">
                                <p v-if="atencion.email==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Telefono</label>
                                <input type="number" class="form-control"  aria-describedby="emailHelp" placeholder="Telefono" v-model="atencion.telefono">
                                <p v-if="atencion.telefono==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Fecha de Nacimiento</label>
                                <input type="date" class="form-control"  placeholder="Fecha de Nacimiento" v-model="atencion.fechanac">
                                <p v-if="atencion.fechanac==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Fecha y Hora de Atencion</label>
                                <input type="datetime-local" class="form-control"  placeholder="Fecha y Hora de Atencion" v-model="atencion.fechaatenc">
                                <p v-if="atencion.fechaatenc==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Atencion Realizada</label>
                           
                                <textarea rows="10" v-model="atencion.atencionre" type="text" class="form-control"  placeholder="Atencion Realizada"></textarea >
                                <p v-if="atencion.atencionre==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>


                            </div>
                                             
                            </form>

                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                      
                                <button type="button" id="cancelarmodal"  class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" @click="registraraten()" class="btn btn-primary">Registrar</button>
                    
                        </div>
                        </div>
                    </div>
                    </div>
                    <b-modal  v-model="mostrarModal" title="Registrar Cita Médica" hide-footer>
                    <div class="modal-body">
                        <b-form-group label="Sede">
                        <b-form-select v-model="sede" :options="sedes"></b-form-select>
                        </b-form-group>
                        <b-form-group label="Servicio">
                        <b-form-select v-model="servicio" :options="servicios"></b-form-select>
                        </b-form-group>
                        <b-form-group label="Médico">
                        <b-form-select v-model="medico" :options="medicos"></b-form-select>
                        </b-form-group>
                        <b-form-group label="Fecha de la cita">
                        <b-form-datepicker id="fechaaa"  v-model="fecha" class="form-control"></b-form-datepicker>
                        </b-form-group>
                        <b-form-group label="Observaciones">
                        <b-form-textarea v-model="observaciones2" :rows="3"></b-form-textarea>
                        </b-form-group>
                    </div>
                    <div class="modal-footer">
                        <b-button @click="guardarCita" variant="primary">Guardar</b-button>
                        <b-button @click="cancelarCita" variant="secondary">Cancelar</b-button>
                    </div>
                    </b-modal>
                    <b-modal  v-model="mostrarPopup" title="Registro exitoso" @ok="cerrarModales">
                    <p>Sede seleccionada: {{ sede }}</p>
                    <p>Servicio seleccionado: {{ servicio }}</p>
                    <p>Médico seleccionado: {{ medico }}</p>
                    </b-modal>
                    <b-modal  v-model="mostrarModal2" title="Historial de Citas" hide-footer>
                    <div class="modal-body">
                        <b-form-group label="DNI">
                        <b-form-input v-model="dni2" :disabled="historial.length > 0" @input="validarDNI" maxlength="8"></b-form-input>
                        </b-form-group>
                        <b-button style="margin-bottom: 13px;" @click="descargarPDF" variant="primary" :disabled="dni2.length !== 8">Descargar</b-button>
                        <b-form-textarea v-model="historial" rows="5" readonly></b-form-textarea>
                    </div>
                    <div class="modal-footer">
                        <b-button @click="cerrarModal" variant="secondary">Volver</b-button>
                    </div>
                    </b-modal>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">LISTA DE MEDICINAS</div>
            </div>

        </div>

        <aside class="control-sidebar control-sidebar-dark">
        </aside>
        <footer class="main-footer">
            <strong>
            </strong>
            &nbsp;
            <div class="float-right d-none d-sm-inline-block">
            </div>
        </footer>
    </div>

</div>
</template>

<script>
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import Swal from 'sweetalert2'
import axios from 'axios'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
export default {
    name: "administradorDentito",

    data:function(){
    return{
        atencion:{
            nombres:null,
            apellidos:null,
            dni:null,
            sexo:null,
            direccion:null,
            email:null,
            telefono:null,
            fechanac:null,
            fechaatenc:null,
            atencionre:null,
        },    
        medico2:{
        nombres:'Jhon',
        apellidos:'Quispe Diaz',
        dni:'55555555',
        sexo:'Masculino',
        edad:50,
        rol:'Medico',  
        },
        mostrarlista:true,
        nombres:null,
        apellidos:null,
        dni:null,
        sexo:null,
        direccion:null,
        email:null,
        telefono:null,
        telefonoemer:null,
        fechanac:null,
        observaciones:null,
        listaPaciente:[],
        fechaatencion:null,
        url:'',
        user:'',
        password:'',
        usuario2:null,
        contrasenaa1:null,
        contrasenaa2:null,
        mostrarModal: false,
        mostrarPopup: false,
        sede: '',
        servicio: '',
        medico: '',
        fecha: null,
        observaciones2: '',
        paciente: {
           nombre: 'Jesus',
           apellido: 'Marallano Barbaran',
           edad: '36',
           sexo: 'Masculino',
       },
        sedes: [
            { value: 'Sede A', text: 'Sede A' },
            { value: 'Sede B', text: 'Sede B' },
            { value: 'Sede C', text: 'Sede C' }
        ],
        servicios: [
            { value: 'Servicio A', text: 'Servicio A' },
            { value: 'Servicio B', text: 'Servicio B' }
        ],
        medicos: [
            { value: 'Médico A', text: 'Médico A' },
            { value: 'Médico B', text: 'Médico B' },
            { value: 'Médico C', text: 'Médico C' }
        ],
        mostrarModal2: false,
        dni2: '',
        historial: ''

    }   
    },
    mounted() {
        this.user=localStorage.getItem("user")
        this.password=localStorage.getItem("password")
        if(this.user==null && this.password==null){
		this.$router.push("/");
        }
        if(localStorage.getItem("user") != 'jhon@hotmail.com'){
		this.$router.push("/");
        }
        this.tablas()
       
    },
    
    methods:{
        abrirModal2() {
      this.mostrarModal2 = true;
        },
        validarDNI() {
        if (this.dni2.length === 8) {
            // Simulación de carga de datos del historial de atenciones
            this.historial = 'Historial de Citas para el DNI ' + this.dni2 + '\n- Atención 1\n- Atención 2\n- Atención 3';
        } else {
            this.historial = '';
        }
        },
        cerrarModal() {
        // Cerrar el modal y restablecer los campos del formulario
        this.mostrarModal2 = false;
        this.dni2 = '';
        this.historial = '';
        },
        exportPDF() {
            const doc = new jsPDF()
            doc.text(this.paciente.nombre, 10, 10);
            doc.text(this.paciente.apellido, 40, 10);
            doc.text(this.paciente.edad, 100, 10);
            doc.text(this.paciente.sexo, 170, 10);

            // It can parse html:
            // <table id="my-table"><!-- ... --></table>
            autoTable(doc, { html: '#example7' })

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
            },
        descargarPDF() {
        const link = document.createElement('a');
        link.href = '/historial.pdf'; // Ruta del archivo PDF
        link.download = 'historial.pdf'; // Nombre de archivo de descarga
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        },
        abrirModal(){
            this.mostrarModal = true;
        },
        guardarCita() {
      // Lógica para guardar la cita médica

      // Mostrar el popup de registro exitoso con los datos seleccionados
      this.mostrarPopup = true;
        },
        cancelarCita() {
        // Cerrar el modal
        this.mostrarModal = false;
        },
        cerrarModales() {
        // Cerrar el modal y el popup
        this.mostrarModal = false;
        this.mostrarPopup = false;
        },
        tablas(){
            $('#example2').DataTable({
            "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
        });
        $('#example3').DataTable({
            "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
        });
        $('#example4').DataTable({
            "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
        });
        $('#example5').DataTable({
            "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
        });
        $('#example7').DataTable({
            // dom: 'Bfrtip',
            buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
        });
        $('#example6').DataTable({
            "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
        });
        },
        cerrarSesion(){
        localStorage.clear()
        this.$router.push("/");
        },
        quitarAtributo(){
            $("#botonagregar").removeClass("active")
        },
        quitarAtributo2(){
            $("#botonagregar2").removeClass("active")
        },
        quitarAtributo4(){
            $("#botonagregar4").removeClass("active")
        },
        quitarAtributo3(){
            $("#botonagregar3").removeClass("active")
        },
        quitarAtributo5(){
            $("#botonagregar5").removeClass("active")
        },
        quitarAtributo6(){
            $("#botonagregar6").removeClass("active")
        },
        listaPacientes3(){

        let vue=this;
        this.url="http://localhost:8080/"
        axios.get(this.url+"lista_pacientes")
        .then(function(response){
        vue.listaPaciente=response.data.lista;
        })
        },
        eliminar(){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
                })

                swalWithBootstrapButtons.fire({
                title: 'Estas seguro de eliminar a este usuario?',
                text: "Recuerda revisar los datos por ultima vez!",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Aceptar',
                reverseButtons: true
                }).then((result) => {
                if (result.isConfirmed) {
                    // axios.post(this.url+"registrar_paciente",formData)
                    // .then(() => {
                    //     $("#botonagregar2").trigger("click")
                       
                    // })
                    // this.listaPacientes()
                    swalWithBootstrapButtons.fire(
                    'Aceptado!',
                    'Paciente eliminado Correctamente!',
                    'success',
                    )
                  
                  
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Se ha cancelado la modificacion!',
                    'error'
                    )
                }
                })  
        },
        activar(){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
                })

                swalWithBootstrapButtons.fire({
                title: 'Estas seguro de activar a este usuario?',
                text: "Recuerda revisar los datos por ultima vez!",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Aceptar',
                reverseButtons: true
                }).then((result) => {
                if (result.isConfirmed) {
                    // axios.post(this.url+"registrar_paciente",formData)
                    // .then(() => {
                    //     $("#botonagregar2").trigger("click")
                       
                    // })
                    // this.listaPacientes()
                    swalWithBootstrapButtons.fire(
                    'Aceptado!',
                    'Paciente activado Correctamente!',
                    'success',
                    )
                  
                  
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Se ha cancelado la modificacion!',
                    'error'
                    )
                }
                })  
        },
        registraraten(){

if( this.atencion.nombres==null || this.atencion.nombres=='' || this.atencion.apellidos==null || this.atencion.apellidos=='' || this.atencion.dni==null || this.atencion.dni=='' || this.atencion.sexo==null || this.atencion.sexo=='' || this.atencion.direccion==null || this.atencion.direccion==''
|| this.atencion.email==null || this.atencion.email=='' || this.atencion.telefono==null || this.atencion.telefono=='' || this.atencion.fechanac==null || this.atencion.fechanac=='' || this.atencion.fechaatenc==null || this.atencion.fechaatenc=='' || this.atencion.atencionre==null || this.atencion.atencionre==''
){
  
    if(this.atencion.nombres==null){
        this.atencion.nombres=''
    }
    if(this.atencion.apellidos==null){
        this.atencion.apellidos=''
    }
    if(this.atencion.dni==null){
        this.atencion.dni=''
    }
    if(this.atencion.sexo==null){
        this.atencion.sexo='null'
    }
    if(this.atencion.direccion==null){
        this.atencion.direccion=''
    }
    if(this.atencion.email==null){
        this.atencion.email=''
    }
    if(this.atencion.telefono==null){
        this.atencion.telefono=''
    }
    if(this.atencion.fechanac==null){
        this.atencion.fechanac=''
    }
    if(this.atencion.fechaatenc==null){
        this.atencion.fechaatenc=''
    }
    if(this.atencion.atencionre==null){
        this.atencion.atencionre=''
    }
 
    

}else{
   
         $('#cancelarmodal').trigger('click');
       let formData = new FormData();
        formData.append( 'nombres',this.nombres);
        formData.append( 'apellidos',this.apellidos);
        formData.append('dni', this.dni);
        formData.append( 'sexo',this.sexo);
        formData.append( 'direccion',this.direccion);
        formData.append('email',this.email);
        formData.append('telefono', this.telefono);
        formData.append( 'telefonoemer',this.telefonoemer);
        formData.append('fechanac',this.fechanac);
        formData.append('observaciones',this.observaciones);
        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
        title: 'Estas seguro de registrar esto?',
        text: "Recuerda revisar los datos por ultima vez!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            // axios.post(this.url+"registrar_paciente",formData)
            // .then(() => {
            //     $("#botonagregar2").trigger("click")
               
            // })
            // this.listaPacientes()
       
            swalWithBootstrapButtons.fire(
            'Aceptado!',
            'Paciente registrado Correctamente!',
            'success',
            )
          
          
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu registro ha sido cancelado!',
            'error'
            )
        }
        })   
}   

},
        registrar(){

        if( this.nombres==null || this.nombres=='' || this.apellidos==null || this.apellidos=='' || this.dni==null || this.dni=='' || this.sexo==null || this.sexo=='' || this.direccion==null || this.direccion==''
        || this.email==null || this.email=='' || this.telefono==null || this.telefono=='' || this.telefonoemer==null || this.telefonoemer=='' || this.fechanac==null || this.fechanac=='' || this.observaciones==null || this.observaciones==''
        || this.usuario2==null || this.usuario2=='' || this.contrasenaa1==null || this.contrasenaa1=='' || this.contrasenaa2==null || this.contrasenaa2==''
        ){
          
            if(this.nombres==null){
                this.nombres=''
            }
            if(this.apellidos==null){
                this.apellidos=''
            }
            if(this.dni==null){
                this.dni=''
            }
            if(this.sexo==null){
                this.sexo='null'
            }
            if(this.direccion==null){
                this.direccion=''
            }
            if(this.email==null){
                this.email=''
            }
            if(this.telefono==null){
                this.telefono=''
            }
            if(this.telefonoemer==null){
                this.telefonoemer=''
            }
            if(this.fechanac==null){
                this.fechanac=''
            }
            if(this.observaciones==null){
                this.observaciones=''
            }
            if(this.usuario2==null){
                this.usuario2=''
            }
            if(this.contrasenaa1==null){
                this.contrasenaa1=''
            }
            if(this.contrasenaa2==null){
                this.contrasenaa2=''
            }
            
            

        }else{

               let formData = new FormData();
                formData.append( 'nombres',this.nombres);
                formData.append( 'apellidos',this.apellidos);
                formData.append('dni', this.dni);
                formData.append( 'sexo',this.sexo);
                formData.append( 'direccion',this.direccion);
                formData.append('email',this.email);
                formData.append('telefono', this.telefono);
                formData.append( 'telefonoemer',this.telefonoemer);
                formData.append('fechanac',this.fechanac);
                formData.append('observaciones',this.observaciones);
                const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
                })

                swalWithBootstrapButtons.fire({
                title: 'Estas seguro de registrar esto?',
                text: "Recuerda revisar los datos por ultima vez!",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Aceptar',
                reverseButtons: true
                }).then((result) => {
                if (result.isConfirmed) {
                    // axios.post(this.url+"registrar_paciente",formData)
                    // .then(() => {
                    //     $("#botonagregar2").trigger("click")
                       
                    // })
                    // this.listaPacientes()
                    $("#botonagregar2").trigger("click")
                    swalWithBootstrapButtons.fire(
                    'Aceptado!',
                    'Paciente registrado Correctamente!',
                    'success',
                    )
                  
                  
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Tu registro ha sido cancelado!',
                    'error'
                    )
                }
                })   
        }   

        },
        siguiente(){
    

        if( this.nombres==null || this.nombres=='' || this.apellidos==null || this.apellidos=='' || this.dni==null || this.dni=='' || this.sexo==null || this.sexo=='' || this.direccion==null || this.direccion==''
        || this.email==null || this.email=='' || this.telefono==null || this.telefono=='' || this.telefonoemer==null || this.telefonoemer=='' || this.fechanac==null || this.fechanac=='' || this.observaciones==null || this.observaciones==''
    
        ){
            if(this.nombres==null){
        this.nombres=''
        }
        if(this.apellidos==null){
            this.apellidos=''
        }
        if(this.dni==null){
            this.dni=''
        }
        if(this.sexo==null){
            this.sexo='null'
        }
        if(this.direccion==null){
            this.direccion=''
        }
        if(this.email==null){
            this.email=''
        }
        if(this.telefono==null){
            this.telefono=''
        }
        if(this.telefonoemer==null){
            this.telefonoemer=''
        }
        if(this.fechanac==null){
            this.fechanac=''
        }
        if(this.observaciones==null){
            this.observaciones=''
        }

            $("#siguientee").addClass("active") 
        }else{
            $("#usuarioo").addClass("active")
            $("#datoss").removeClass("active")
            $("#siguientee").removeClass("active")
        }


        },
        removerclase(){
            $("#usuarioo").removeClass("active")
            $("#datoss").addClass("active")
            $("#anteriorr").removeClass("active")
        },
        registrar2(){

if( this.nombres==null || this.nombres=='' || this.apellidos==null || this.apellidos=='' || this.dni==null || this.dni=='' || this.sexo==null || this.sexo=='' || this.direccion==null || this.direccion==''
|| this.email==null || this.email=='' || this.telefono==null || this.telefono=='' || this.telefonoemer==null || this.telefonoemer=='' || this.fechanac==null || this.fechanac=='' || this.observaciones==null || this.observaciones=='' ){
  
    if(this.nombres==null){
        this.nombres=''
    }
    if(this.apellidos==null){
        this.apellidos=''
    }
    if(this.dni==null){
        this.dni=''
    }
    if(this.sexo==null){
        this.sexo='null'
    }
    if(this.direccion==null){
        this.direccion=''
    }
    if(this.email==null){
        this.email=''
    }
    if(this.telefono==null){
        this.telefono=''
    }
    if(this.telefonoemer==null){
        this.telefonoemer=''
    }
    if(this.fechanac==null){
        this.fechanac=''
    }
    if(this.observaciones==null){
        this.observaciones=''
    }
    

}else{

       let formData = new FormData();
        formData.append( 'nombres',this.nombres);
        formData.append( 'apellidos',this.apellidos);
        formData.append('dni', this.dni);
        formData.append( 'sexo',this.sexo);
        formData.append( 'direccion',this.direccion);
        formData.append('email',this.email);
        formData.append('telefono', this.telefono);
        formData.append( 'telefonoemer',this.telefonoemer);
        formData.append('fechanac',this.fechanac);
        formData.append('observaciones',this.observaciones);
        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
        title: 'Estas seguro de registrar esto?',
        text: "Recuerda revisar los datos por ultima vez!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Aceptar',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            // axios.post(this.url+"registrar_paciente",formData)
            // .then(() => {
            //     $("#botonagregar2").trigger("click")
               
            // })
            // this.listaPacientes()
            $("#botonagregar3").trigger("click")
            swalWithBootstrapButtons.fire(
            'Aceptado!',
            'Paciente registrado Correctamente!',
            'success',
            )
          
          
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu registro ha sido cancelado!',
            'error'
            )
        }
        })   
}   

}
    }
}
</script>

<style>
.nav-sidebar .nav-link p {
    color: #bdc5d5;
    line-height: 1.7;
    font-size: 15.5px;
    margin-left: 5px;
}

table.dataTable thead th,
table.dataTable tfoot th {
    font-weight: bold;
    text-align: center;
}

table.dataTable tbody th,
table.dataTable tbody td {
    vertical-align: middle;
}
.swal2-cancel {

    margin-right: 20px;
}
.navbar-expand .navbar-nav .dropdown-menu {

    left: -143px;
}
/* .dropdown .dropdown-menu {
    top:30px;
    margin-top: -1px !important;
 
}
.dropdown-menu {
    display: none !important;
} */
.dropdown-menu.show {
    display: block !important;
   
}

#fechaaa__dialog_{
    display: none;
    top:40px !important; 
    transform: initial !important;
}
.b-calendar .b-calendar-grid {
    padding: 15px;
}
</style>
