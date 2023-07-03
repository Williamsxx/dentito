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
                <!-- <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li> -->
            </ul>

            <!-- Right navbar links -->
            <!-- <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <div class="media">
              <img src="img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <div class="media">
              <img src="img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <div class="media">
              <img src="img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul> -->
        </nav>
        <!-- /.navbar -->

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
                                Medicos
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
                                <div class="col-sm-6">
                                    <h1 class="m-0">Dashboard</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">Dashboard v3</li>
                                    </ol>
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
                                                <h3 class="card-title">Online Store Visitors</h3>
                                                <a href="javascript:void(0);">View Report</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <p class="d-flex flex-column">
                                                    <span class="text-bold text-lg">820</span>
                                                    <span>Visitors Over Time</span>
                                                </p>
                                                <p class="ml-auto d-flex flex-column text-right">
                                                    <span class="text-success">
                                                        <i class="fas fa-arrow-up"></i> 12.5%
                                                    </span>
                                                    <span class="text-muted">Since last week</span>
                                                </p>
                                            </div>

                                            <div class="position-relative mb-4">
                                                <canvas id="visitors-chart" height="200"></canvas>
                                            </div>

                                            <div class="d-flex flex-row justify-content-end">
                                                <span class="mr-2">
                                                    <i class="fas fa-square text-primary"></i> This Week
                                                </span>

                                                <span>
                                                    <i class="fas fa-square text-gray"></i> Last Week
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header border-0">
                                            <h3 class="card-title">Products</h3>
                                            <div class="card-tools">
                                                <a href="#" class="btn btn-tool btn-sm">
                                                    <i class="fas fa-download"></i>
                                                </a>
                                                <a href="#" class="btn btn-tool btn-sm">
                                                    <i class="fas fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="card-body table-responsive p-0">
                                            <table class="table table-striped table-valign-middle">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Sales</th>
                                                        <th>More</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img src="img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2">
                                                            Some Product
                                                        </td>
                                                        <td>$13 USD</td>
                                                        <td>
                                                            <small class="text-success mr-1">
                                                                <i class="fas fa-arrow-up"></i>
                                                                12%
                                                            </small>
                                                            12,000 Sold
                                                        </td>
                                                        <td>
                                                            <a href="#" class="text-muted">
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2">
                                                            Another Product
                                                        </td>
                                                        <td>$29 USD</td>
                                                        <td>
                                                            <small class="text-warning mr-1">
                                                                <i class="fas fa-arrow-down"></i>
                                                                0.5%
                                                            </small>
                                                            123,234 Sold
                                                        </td>
                                                        <td>
                                                            <a href="#" class="text-muted">
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2">
                                                            Amazing Product
                                                        </td>
                                                        <td>$1,230 USD</td>
                                                        <td>
                                                            <small class="text-danger mr-1">
                                                                <i class="fas fa-arrow-down"></i>
                                                                3%
                                                            </small>
                                                            198 Sold
                                                        </td>
                                                        <td>
                                                            <a href="#" class="text-muted">
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2">
                                                            Perfect Item
                                                            <span class="badge bg-danger">NEW</span>
                                                        </td>
                                                        <td>$199 USD</td>
                                                        <td>
                                                            <small class="text-success mr-1">
                                                                <i class="fas fa-arrow-up"></i>
                                                                63%
                                                            </small>
                                                            87 Sold
                                                        </td>
                                                        <td>
                                                            <a href="#" class="text-muted">
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header border-0">
                                            <div class="d-flex justify-content-between">
                                                <h3 class="card-title">Sales</h3>
                                                <a href="javascript:void(0);">View Report</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <p class="d-flex flex-column">
                                                    <span class="text-bold text-lg">$18,230.00</span>
                                                    <span>Sales Over Time</span>
                                                </p>
                                                <p class="ml-auto d-flex flex-column text-right">
                                                    <span class="text-success">
                                                        <i class="fas fa-arrow-up"></i> 33.1%
                                                    </span>
                                                    <span class="text-muted">Since last month</span>
                                                </p>
                                            </div>

                                            <div class="position-relative mb-4">
                                                <canvas id="sales-chart" height="200"></canvas>
                                            </div>

                                            <div class="d-flex flex-row justify-content-end">
                                                <span class="mr-2">
                                                    <i class="fas fa-square text-primary"></i> This year
                                                </span>

                                                <span>
                                                    <i class="fas fa-square text-gray"></i> Last year
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header border-0">
                                            <h3 class="card-title">Online Store Overview</h3>
                                            <div class="card-tools">
                                                <a href="#" class="btn btn-sm btn-tool">
                                                    <i class="fas fa-download"></i>
                                                </a>
                                                <a href="#" class="btn btn-sm btn-tool">
                                                    <i class="fas fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                                <p class="text-success text-xl">
                                                    <i class="ion ion-ios-refresh-empty"></i>
                                                </p>
                                                <p class="d-flex flex-column text-right">
                                                    <span class="font-weight-bold">
                                                        <i class="ion ion-android-arrow-up text-success"></i> 12%
                                                    </span>
                                                    <span class="text-muted">CONVERSION RATE</span>
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                                <p class="text-warning text-xl">
                                                    <i class="ion ion-ios-cart-outline"></i>
                                                </p>
                                                <p class="d-flex flex-column text-right">
                                                    <span class="font-weight-bold">
                                                        <i class="ion ion-android-arrow-up text-warning"></i> 0.8%
                                                    </span>
                                                    <span class="text-muted">SALES RATE</span>
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center mb-0">
                                                <p class="text-danger text-xl">
                                                    <i class="ion ion-ios-people-outline"></i>
                                                </p>
                                                <p class="d-flex flex-column text-right">
                                                    <span class="font-weight-bold">
                                                        <i class="ion ion-android-arrow-down text-danger"></i> 1%
                                                    </span>
                                                    <span class="text-muted">REGISTRATION RATE</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-medicos" role="tabpanel" aria-labelledby="v-pills-medicos-tab">.3434..</div>

                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div>
                        <!-- Content Header (Page header) -->
                        <section class="content-header">
                            <div class="container-fluid">
                                <div class="row mb-2">
                                    <div class="col-sm-12">
                                        <h1>LISTA DE PACIENTES</h1>
                                    </div>
                                    <div style="margin-top: -37px;" class="col-sm-12">
                                        <ol class="breadcrumb float-sm-right">
                                            <button type="button" class="btn btn-primary"><i style="margin-right: 6px;" class='fas fa-user-plus'></i>Agregar Paciente</button>
                                            <!-- <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">DataTables</li> -->
                                        </ol>
                                    </div>
                                </div>
                            </div><!-- /.container-fluid -->
                        </section>

                        <!-- Main content -->
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
                                                            <th>Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Internet
                                                                Explorer 4.0
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td> 4</td>
                                                            <td>X</td>
                                                            <td> 4</td>
                                                            <td>

                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Internet
                                                                Explorer 5.0
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td>5</td>
                                                            <td>C</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Internet
                                                                Explorer 5.5
                                                            </td>
                                                            <td>Win 95+</td>
                                                            <td>5.5</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Internet
                                                                Explorer 6
                                                            </td>
                                                            <td>Win 98+</td>
                                                            <td>6</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Internet Explorer 7</td>
                                                            <td>Win XP SP2+</td>
                                                            <td>7</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>AOL browser (AOL desktop)</td>
                                                            <td>Win XP</td>
                                                            <td>6</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>7</td>
                                                            <td>Firefox 1.0</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8</td>
                                                            <td>Firefox 1.5</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>9</td>
                                                            <td>Firefox 2.0</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>10</td>
                                                            <td>Firefox 3.0</td>
                                                            <td>Win 2k+ / OSX.3+</td>
                                                            <td>1.9</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11</td>
                                                            <td>Camino 1.0</td>
                                                            <td>OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12</td>
                                                            <td>Camino 1.5</td>
                                                            <td>OSX.3+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13</td>
                                                            <td>Netscape 7.2</td>
                                                            <td>Win 95+ / Mac OS 8.6-9.2</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>14</td>
                                                            <td>Netscape Browser 8</td>
                                                            <td>Win 98SE+</td>
                                                            <td>1.7</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>15</td>
                                                            <td>Netscape Navigator 9</td>
                                                            <td>Win 98+ / OSX.2+</td>
                                                            <td>1.8</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>16</td>
                                                            <td>Mozilla 1.0</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17</td>
                                                            <td>Mozilla 1.1</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.1</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>18</td>
                                                            <td>Mozilla 1.2</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.2</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>19</td>
                                                            <td>Mozilla 1.3</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.3</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>20</td>
                                                            <td>Mozilla 1.4</td>
                                                            <td>Win 95+ / OSX.1+</td>
                                                            <td>1.4</td>
                                                            <td>A</td>
                                                            <td> 4</td>
                                                            <td>
                                                                <div style="  display: flex;flex-direction: column;align-items: center;">
                                                                    <button style="width: 50%;" type="button" class="btn btn-success btn-sm">Editar</button>
                                                                    <button style="margin-top: 5px;width: 50%;" type="button" class="btn btn-primary btn-sm">Eliminar</button>
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
                        <!-- /.content -->
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">..213.</div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">..ghgh.</div>
            </div>

        </div>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <strong>
                <!-- Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>. -->
            </strong>
            &nbsp;
            <div class="float-right d-none d-sm-inline-block">
                <!-- <b>Version</b> 3.2.0 -->
            </div>
        </footer>
    </div>

</div>
</template>

<script>
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';

export default {
    name: "administradorDentito",
    mounted() {
        $('#example2').DataTable();
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
</style>
