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

        </nav>
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a style="text-align: left;text-decoration: none;" href="index3.html" class="brand-link">
                <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Dentito</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a style="text-decoration: none !important;" class="d-block">Manuel Fernandez</a>
                        <a style="text-decoration: none !important;font-size: 15px;text-align: left;font-weight: bold;" class="d-block">Administrador</a>

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
                                Inicio
                            </p>
                        </a>

                        <a class="nav-link " id="v-pills-medicos-tab" data-toggle="pill" href="#v-pills-medicos" role="tab" aria-controls="v-pills-medicos" aria-selected="false">
                            <i class="nav-icon fas fa-user-md"></i>
                            <p>
                                Odontologos
                            </p>
                        </a>

                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <i class="nav-icon fas fa-user-alt"></i>
                            <p>
                                Pacientes
                                <!-- <i class="fas fa-angle-left right"></i> -->
                            </p>
                        </a>

                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <i class="nav-icon fas fa-edit"></i>
                            <p>
                                Citas
                            </p>
                        </a>

                        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
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
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-12">
                                    <h1 class="m-0">INICIO</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header border-0">
                                            <div class="d-flex justify-content-between">
                                                <h3 class="card-title">Odontologos</h3>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <p class="d-flex flex-column">
                                                    <span class="text-bold text-lg">10</span>
                                                    <span>Cantidad de Odontologos</span>
                                                </p>
                                    
                                            </div>

                                            <div class="position-relative mb-4">
                                                <canvas id="visitors-chart" height="200"></canvas>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div class="card">
                                        <div class="card-header border-0">
                                            <div class="d-flex justify-content-between">
                                                <h3 class="card-title">Citas</h3>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <p class="d-flex flex-column">
                                                    <span class="text-bold text-lg">100</span>
                                                    <span>Cantidad total de citas registradas</span>
                                                </p>
                                    
                                            </div>

                                            <div class="position-relative mb-4">
                                                <canvas id="visitors-chart" height="200"></canvas>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header border-0">
                                            <div class="d-flex justify-content-between">
                                                <h3 class="card-title">Pacientes</h3>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <p class="d-flex flex-column">
                                                    <span class="text-bold text-lg">20</span>
                                                    <span>Cantidad total de pacientes registrados</span>
                                                </p>
                                            </div>

                                            <div class="position-relative mb-4">
                                                <canvas id="sales-chart" height="200"></canvas>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header border-0">
                                            <div class="d-flex justify-content-between">
                                                <h3 class="card-title">Medicinas</h3>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <p class="d-flex flex-column">
                                                    <span class="text-bold text-lg">20</span>
                                                    <span>Cantidad total de medicinas registradas</span>
                                                </p>
                                            </div>

                                            <div class="position-relative mb-4">
                                                <canvas id="sales-chart" height="200"></canvas>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <h1>LISTA DE PACIENTES</h1>
                                    </div>
                                    <div style="margin-top: -37px;" class="col-sm-12">
                                   
                                        <ol id="paciente" @click="quitarAtributo()" class="breadcrumb float-sm-right nav flex-column nav-pills me-3">
                                            <button id="botonagregar" type="button" data-bs-toggle="pill" data-bs-target="#profile" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-user-plus'></i>Agregar Paciente</button>
    
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
                                            <!-- <div class="card-header">
                <h3 class="card-title">DataTable with minimal features & hover style</h3>
              </div> -->
                                            <!-- /.card-header -->
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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" @click="activar()" class="btn btn-primary btn-sm">Activar</button>                                                                </div>

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
                                            <button id="botonagregar2" type="button" data-bs-toggle="pill" data-bs-target="#v-pills-profile" class="btn btn-primary"><i style="margin-right: 6px;" class='fa fa-file'></i>Lista de Pacientes</button>
    
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
                                                <input type="text" class="form-control" id="inputName" placeholder="Nombres" v-model="nombres">
                                                <p v-if="nombres==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                              
                                            </div>

                                            <div class="form-group row">
                                                <label for="inputEmail" class="col-sm-2 col-form-label">Apellidos</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control" id="inputEmail" placeholder="Apellidos" v-model="apellidos">
                                                <p v-if="apellidos==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>

                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputName2" class="col-sm-2 col-form-label">DNI</label>
                                                <div class="col-sm-10">
                                                <input type="text" class="form-control" id="inputName2" placeholder="DNI" v-model="dni">
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
                                                <input class="form-control" id="inputExperience" placeholder="Direccion" v-model="direccion">
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
                                            <div class="form-group row">
                                                <label for="inputSkills" class="col-sm-2 col-form-label">Telefono (Emergencia)</label>
                                                <div class="col-sm-10">
                                                <input type="number" class="form-control" id="inputSkills" placeholder="Telefono Emergencia" v-model="telefonoemer">
                                                <p v-if="telefonoemer==''" style="text-align: left;margin: 0;color: red;" class="text-danger">Complete este campo</p>
                                                </div>
                                            </div>
                                            <div class="form-group row">
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
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">LISTA DE CITAS</div>
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
export default {
    name: "administradorDentito",

    data:function(){
    return{
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
        url:'',

    }   
    },
    mounted() {
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
    },
    methods:{
        quitarAtributo(){
            $("#botonagregar").removeClass("active")
        },
        quitarAtributo2(){
            $("#botonagregar2").removeClass("active")
        },
        listaPacientes(){

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
        registrar(){

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

</style>
