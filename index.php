<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/bootstrap-5.3.8-dist/css/bootstrap.rtl.min.css">
    <link rel="stylesheet" href="assets/main.css">
    <link rel="stylesheet" href="assets/bootstrap-icons-1.13.1/bootstrap-icons.min.css">
    <title>Document</title>
</head>
<body>
    <!-- navBar -->
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <!-- logo and title -->
            <a class="navbar-brand col-5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <img src="assets\images\school logo.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-center">
               <span > مدرسة المستقبل المتميزة للغات</span>
            </a>
            <!-- end of logo and title -->
            <!-- settings and search -->
            <div class="d-flex align-items-center justify-content-end col-6">
                <!-- settings  -->
                <div class="nav-item  dropstart">
                    <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-three-dots-vertical"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">بيانات المدرسة</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">اضافة حساب</a></li>
                      <li><a class="dropdown-item" href="#">تسجيل الخروج</a></li>
                    </ul>
                </div>
                <!-- end of settings -->
                <!-- search  -->
                <div class="input-group w-50" role="search">
                    <input class="form-control" type="text" placeholder="ابحث" aria-label="Search"/>
                    <a href="#" class="input-group-text">
                        <i class="bi bi-search"></i>
                    </a>
                </div>
                <!-- end of search -->
            </div>
            <!-- end of settings and search -->
        </div>
    </nav>
    <!-- end of navBar -->
    <!-- offcanvas -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <!-- offcanvas header -->
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">القائمة الرئيسية</h5>
            <a href="#"  data-bs-dismiss="offcanvas" aria-label="Close">
              <i class="bi bi-arrow-right-short" style="font-size: 30px"></i>
            </a>
        </div>
        <!-- end of offcanvas header -->
        <!-- offcanvas body -->
        <div class="offcanvas-body">
            <h5>
                <a id="dashboard" href="#"  data-bs-dismiss="offcanvas" >
                    <i class="bi bi-clipboard-data-fill"></i>
                    <span class="ms-2">لوحة التحكم</span>
                </a>
            </h5>
            <hr>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <a href="#" class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <i class="bi bi-person-fill"></i>
                            <span class=ms-2>المدرسين</span> 
                        </a>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li><a id="showTeachers" href="#"  data-bs-dismiss="offcanvas">عرض</a></li>
                                <hr>
                                <li><a id="addTeacher" href="#"  data-bs-dismiss="offcanvas">اضافة</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <a href="#" class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i class="bi bi-people-fill"></i>
                            <span class=ms-2>الطلاب</span>            
                        </a>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li><a id="showStudents" href="#"  data-bs-dismiss="offcanvas">عرض</a></li>
                                <hr>
                                <li><a id="addStudent" href="#"  data-bs-dismiss="offcanvas">اضافة</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class=" myAccordionHeader accordion-header">
                        <a href="#" class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <i class="bi bi-book-half"></i>
                            <span class=ms-2>المواد</span>
                        </a>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li><a id="showSubjects" href="#"  data-bs-dismiss="offcanvas">عرض</a></li>
                                <hr>
                                <li><a id="addSubject" href="#"  data-bs-dismiss="offcanvas">اضافة</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <a href="#" class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                            <i class="bi bi-door-open-fill"></i>
                            <span class=ms-2>الفصول</span>
                        </a>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li><a id="showClassRooms" href="#"  data-bs-dismiss="offcanvas">عرض</a></li>
                                <hr>
                                <li><a id="addClassRoom" href="#"  data-bs-dismiss="offcanvas">اضافة</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <a href="#" class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <i class="bi bi-building-fill"></i>
                            <span class=ms-2>المباني</span>
                        </a>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li><a id="showBuildings" href="#"  data-bs-dismiss="offcanvas">عرض</a></li>
                                <hr>
                                <li><a id="addBuilding" href="#"  data-bs-dismiss="offcanvas">اضافة</a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                     
                    

            </div>
        </div>
        <!-- end of offcanvas body -->
    </div>
    <!-- end of offcanvas  -->
    <!-- main container -->
    <div id="mainContent" class="container text-center">
        
        <!-- main page content -->
        <div class="row">
            <div class="col">
           
            </div>
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
        </div>
        <!-- end of main page content -->
    </div>
    <!-- end of main container -->
 
    
<script src="assets/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/main.js"></script>

</body>
</html>