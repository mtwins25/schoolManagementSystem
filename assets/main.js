// main constants
// dashboard constant
const dashboard = document.querySelector("#dashboard");
//teachers constants
const showTeachers = document.querySelector("#showTeachers");
const addTeacher = document.querySelector("#addTeacher");
// students constants
const showStudents = document.querySelector("#showStudents");
const addStudent = document.querySelector("#addStudent");
// subjects constants
const showSubjects = document.querySelector("#showSubjects");
const addSubject = document.querySelector("#addSubject");
// classrooms constants
const showClassrooms = document.querySelector("#showClassrooms");
const addClassroom = document.querySelector("#addClassroom");
// buildings constants
const showBuildings = document.querySelector("#showBuildings");
const addBuilding = document.querySelector("#addBuilding");
// main content constant
const mainContent = document.querySelector("#mainContent");


//student grade map
const studentGrade = new Map();

studentGrade.set(1,"الاول الابتدائي");
studentGrade.set(2,"الثاني الابتدائي");
studentGrade.set(3,"الثالث الابتدائي");
studentGrade.set(4,"الرابع الابتدائي");
studentGrade.set(5,"الخامس الابتدائي");
studentGrade.set(6,"السادس الابتدائي");
studentGrade.set(7,"الاول الاعدادي");
studentGrade.set(8,"الثاني الاعدادي");
studentGrade.set(9,"الثالث الاعدادي");
studentGrade.set(10,"الاول الثانوي");
studentGrade.set(11,"الثاني الثانوي");
studentGrade.set(12,"الثالث الثانوي");

// event listeners
dashboard.addEventListener("click", async () => 
    {
        mainContent.innerHTML = "<h1>لوحة التحكم</h1>";
    });
// teachers event listeners
showTeachers.addEventListener("click", async () => 
    {
        // fetching data
        const url = "teachers";
        try {

            //sending request 
            const result = await sendNoBodyRequest(url,"GET");

            // result display
            //adding header
            display = "<h4>المدرسين</h4>";
            //adding search bar
            display += '<input id="search" type="text" class="form-control mb-2" placeholder="ابحث">';
            // adding table headers and then filling it with data
            display+='<table id="table"  class="table table-striped table-hover w-100" >\n<tr><th>م</th><th>الرقم القومي</th><th>الاسم</th><th>رقم الهاتف</th><th>المرتبة</th><th>المادة</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].nId}</td>\n <td>${result[i].teacherName}</td>\n <td>${result[i].phoneNo}</td>\n <td>${result[i].rank}</td>\n <td><a class="subjectLink "href="#" data-subjectId="${result[i].subjectId}">${result[i].subjectName}</a></td>\n <td><a class="detailsLink" href="#" data-teacherId="${result[i].teacherId}"> <i class="bi bi-person-lines-fill" style="font-size: 20px"></i></a> <a class="editingLink ms-3" href="#" data-teacherId="${result[i].teacherId}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="deleteLink ms-3" href="#" data-teacherId="${result[i].teacherId}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            // closing table
            display+='</table>';
            // displaying content
            mainContent.innerHTML = display;
            
            //pagination
            paginationResult=paginationFunction(result.length);

            // searching
            const searchBar=document.querySelector("#search");
            searchBar.addEventListener("keyup",()=>{search(searchBar.value,paginationResult.pageLinks,paginationResult.paginationContainer)});

            } catch (error) {
                console.error(error.message);
            };
    });
addTeacher.addEventListener("click", async () => 
    {
        let data;
        const url = "teachers";
        try {

            //sending request 
            const result = await sendpostRequest(url,data);
           
            } catch (error) {
                console.error(error.message);
            };
    });
// students event listeners
showStudents.addEventListener("click", async () => 
    {
        const url = "students";
        try {

            //sending request 
            const result = await sendNoBodyRequest(url,"GET");

            // result display
            //adding header
            display = "<h4>الطلاب</h4>";
            //adding search bar
            display += '<input id="search"  type="text" class="form-control mb-2" placeholder="ابحث">';
            //adding table headers and then filling it with data
            display+='<table id="table" class="table table-striped table-hover w-100">\n<tr><th>م</th><th>الرقم القومي</th><th>الاسم</th><th>الصف</th><th>الفصل</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].nId}</td>\n <td>${result[i].studentName}</td>\n <td>${studentGrade.get(result[i].grade)}</td>\n <td><a class="classroomLink "href="#" data-classroomId="${result[i].classroomId}">${result[i].classroomName}</a></td>\n <td><a class="detailsLink" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-person-lines-fill" style="font-size: 20px"></i></a> <a class="editingLink ms-3" href="#" data-studentId="${result[i].studentId}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="deleteLink ms-3" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            // closing table
            display+='</table>';
            // displaying content
            mainContent.innerHTML = display;

            //pagination
            paginationResult=paginationFunction(result.length);

            // searching
            const searchBar=document.querySelector("#search");
            searchBar.addEventListener("keyup",()=>{search(searchBar.value,paginationResult.pageLinks,paginationResult.paginationContainer)});

            } catch (error) {
                console.error(error.message);
            };
    });
addStudent.addEventListener("click", async () => 
    {
        let data;
        const url = "students";
        try {
            
            //sending request 
            const result = await sendpostRequest(url,data);

            } catch (error) {
                console.error(error.message);
            };
    });
// subjects event listeners
showSubjects.addEventListener("click", async () => 
    {
        const url = "subjects";
        try {
            
            //sending request 
            const result = await sendNoBodyRequest(url,"GET");

            // result display
            //adding header
            display = "<h4>المواد</h4>";
            //adding search bar
            display += '<input id="search" type="text" class="form-control mb-2" placeholder="ابحث">';
            // adding table headers and then filling it with data
            display+='<table id="table"  class="table table-striped table-hover w-100" >\n<tr><th>م</th><th>الاسم</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].name}</td>\n <td><a class="detailsLink" href="#" data-subjectId="${result[i].id}"> <i class="bi bi-info-circle-fill"style="font-size: 20px"></i></a> <a class="editingLink ms-3" href="#" data-subjectId="${result[i].id}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="deleteLink ms-3" href="#" data-subjectId="${result[i].id}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            // closing table
            display+='</table>';
            // displaying content
            mainContent.innerHTML = display;

            //pagination
            paginationResult=paginationFunction(result.length);

            // searching
            const searchBar=document.querySelector("#search");
            searchBar.addEventListener("keyup",()=>{search(searchBar.value,paginationResult.pageLinks,paginationResult.paginationContainer)});

            } catch (error) {
                console.error(error.message);
            };
    });
addSubject.addEventListener("click", async () => 
    {
        let data;
        const url = "subjects";
        try {
            
            //sending request 
            const result = await sendpostRequest(url,data);

            } catch (error) {
                console.error(error.message);
            };
    });
// classrooms event listeners
showClassrooms.addEventListener("click", async () => 
    {
        const url = "classrooms";
        try {
            
            //sending request 
            const result = await sendNoBodyRequest(url,"GET");

            // result display
            //adding header
            display = "<h4>الفصول</h4>";
            //adding search bar
            display += '<input id="search" type="text" class="form-control mb-2" placeholder="ابحث">';
            // adding table headers and then filling it with data
            display+='<table id="table"  class="table table-striped table-hover w-100" >\n<tr><th>م</th><th>الاسم</th><th>الصف</th><th>المبنى</th><th>عدد الطلاب</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n  <td>${result[i].classroomName}</td>\n <td><a class="gradeLink "href="#" data-grade="${result[i].grade}">${studentGrade.get(result[i].grade)}</a></td>\n <td><a class="buildingLink "href="#" data-buildingtId="${result[i].buildingId}">${result[i].buildingName}</a></td>\n <td>${result[i].boysNO+result[i].girlsNo}</td>\n <td><a class="detailsLink" href="#" data-classroomId="${result[i].classroomId}"> <i class="bi bi-info-circle-fill"style="font-size: 20px"></i></a> <a class="editingLink ms-3" href="#" data-classroomId="${result[i].classroomId}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="deleteLink ms-3" href="#" data-classroomId="${result[i].classroomId}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            // closing table
            display+='</table>';
            // displaying content
            mainContent.innerHTML = display;

            //pagination
            paginationResult=paginationFunction(result.length);

            // searching
            const searchBar=document.querySelector("#search");
            searchBar.addEventListener("keyup",()=>{search(searchBar.value,paginationResult.pageLinks,paginationResult.paginationContainer)});

            } catch (error) {
                console.error(error.message);
            };
    });
addClassroom.addEventListener("click", async () => 
    {
        let data;
        const url = "classrooms";
        try {
            
            //sending request 
            const result = await sendpostRequest(url,data);

            } catch (error) {
                console.error(error.message);
            };
    });
// buildings event listeners
showBuildings.addEventListener("click", async () => 
    {
        const url = "buildings";
        try {
            
            //sending request 
            const result = await sendNoBodyRequest(url,"GET");

            // result display
            //adding header
            display = "<h4>المباني</h4>";
            //adding search bar
            display += '<input id="search" type="text" class="form-control mb-2" placeholder="ابحث">';
            // adding table headers and then filling it with data
            display+='<table id="table"  class="table table-striped table-hover w-100" >\n<tr><th>م</th><th>الاسم</th><th>عدد الادوار</th><th>عدد الفصول</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].name}</td>\n <td>${result[i].floorsNo}</td>\n <td>${result[i].classroomsNo}</td>\n <td><a class="detailsLink" href="#" data-buildingId="${result[i].id}"> <i class="bi bi-info-circle-fill" style="font-size: 20px"></i></a> <a class="editingLink ms-3" href="#" data-buildingId="${result[i].id}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="deleteLink ms-3" href="#" data-buildingId="${result[i].id}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            // closing table
            display+='</table>';
            // displaying content
            mainContent.innerHTML = display;

            //pagination
            paginationResult=paginationFunction(result.length);

            // searching
            const searchBar=document.querySelector("#search");
            searchBar.addEventListener("keyup",()=>{search(searchBar.value,paginationResult.pageLinks,paginationResult.paginationContainer)});

            } catch (error) {
                console.error(error.message);
            };
    });
addBuilding.addEventListener("click", async () => 
    {
        let data;
        const url = "buildings";
        try {
           
            //sending request 
            const result = await sendpostRequest(url,data);
            
                
            } catch (error) {
                console.error(error.message);
            };
    });
// other event listeners
// event delegation for dynamic content
mainContent.addEventListener("click",  (event) =>
    {
  
        if (event.target.closest(".detailsLink"))
            {
                detailsLink = event.target.closest(".detailsLink");

                if(detailsLink.dataset.teacherid)
                    {
                        alert(detailsLink.dataset.teacherid);
                    }
                else if(detailsLink.dataset.studentid)
                    {
                        alert(detailsLink.dataset.studentid);
                    }
                else if(detailsLink.dataset.subjectid)
                    {
                        alert(detailsLink.dataset.subjectid);
                    }
                else if(detailsLink.dataset.classroomid)
                    {
                        alert(detailsLink.dataset.classroomid);
                    }
                else if(detailsLink.dataset.buildingid)
                    {
                        alert(detailsLink.dataset.buildingid);
                    }
    
            }
        if (event.target.closest(".editingLink"))
            {
                editingLink = event.target.closest(".editingLink");

                if(editingLink.dataset.teacherid)
                    {
                        alert(editingLink.dataset.teacherid);
                    }
                else if(editingLink.dataset.studentid)
                    {
                        alert(editingLink.dataset.studentid);
                    }
                else if(editingLink.dataset.subjectid)
                    {
                        alert(editingLink.dataset.subjectid);
                    }
                else if(editingLink.dataset.classroomid)
                    {
                        alert(editingLink.dataset.classroomid);
                    }
                else if(editingLink.dataset.buildingid)
                    {
                        alert(editingLink.dataset.buildingid);
                    }
    
            }
        if (event.target.closest(".deleteLink"))
            {
                deleteLink = event.target.closest(".deleteLink");

                if(deleteLink.dataset.teacherid)
                    {
                        alert(deleteLink.dataset.teacherid);
                    }
                else if(deleteLink.dataset.studentid)
                    {
                        alert(deleteLink.dataset.studentid);
                    }
                else if(deleteLink.dataset.subjectid)
                    {
                        alert(deleteLink.dataset.subjectid);
                    }
                else if(deleteLink.dataset.classroomid)
                    {
                        alert(deleteLink.dataset.classroomid);
                    }
                else if(deleteLink.dataset.buildingid)
                    {
                        alert(deleteLink.dataset.buildingid);
                    }
    
            }
        //student links
        else if (event.target.closest(".classroomLink"))
            {  
                classroomLink = event.target.closest(".classroomLink");
                alert(classroomLink.dataset.classroomid);          
            }

        //teacher links
        else if (event.target.closest(".subjectLink"))
            {
                subjectLink = event.target.closest(".subjectLink");
                alert(subjectLink.dataset.subjectid);          
            }

        //classroom links
        else if (event.target.closest(".buildingLink"))            {
                buildingLink = event.target.closest(".buildingLink");
                alert(buildingLink.dataset.buildingid);          
            }
        else if (event.target.closest(".gradeLink"))            {
                gradeLink = event.target.closest(".gradeLink");
                alert(gradeLink.dataset.grade);          
            }
        
    });


//functions
// request functions
async function sendNoBodyRequest(url,method,data=null)
    {
            const response = await fetch(url,
                {
                    method:method
                });
                
            if (!response.ok) 
                {
                    throw new Error(`Response status: ${response.status}`);
                }
            
            const result = await response.json();
            return result;
    }

async function sendBodyRequest(url,method,data)
    {
             const response = await fetch(url, 
                {
                    method: method,
                    headers: 
                        {
                            "Content-Type": "application/json",
                        },
                    body: JSON.stringify(data),
                });

            if (!response.ok) 
                {
                    throw new Error(`Response status: ${response.status}`);
                }
            
            const result = await response.json();
            return result;
    }

// async function sendRequest(url,method,data=null)
//     {
//             const response = await fetch(url);
//             if (!response.ok) 
//                 {
//                     throw new Error(`Response status: ${response.status}`);
//                 }
            
//             const result = await response.json();
//     }


// pagination functions
//pagination logic function
function paginationFunction(resultLength)
    {
        // adding pagination elements
        const totalPages = Math.ceil(resultLength / 10); 
         paginationElements=`<div class="pagination" id="pagination">\n<a href="#" id="prev">السابق</a>\n`;
        for (let i = 0; i < totalPages; i++)
            {
                paginationElements+=`<a href="#" class="page-link" data-page="${i+1}">${i+1}</a>\n`;
            }
        paginationElements+=`<a href="#" id="next">التالي</a>\n</div>`;
        console.log(paginationElements);

        //adding pagination to main content
        // mainContent.insertAdjacentHTML("beforeend",pagination);
        mainContent.innerHTML += paginationElements;
        // pagination
        const paginationContainer = document.getElementById('pagination'); 
        const prevButton = document.getElementById('prev'); 
        const nextButton = document.getElementById('next'); 
        const pageLinks = document.querySelectorAll('.page-link'); 
        // console.log(pageLinks);
        let currentPage = 1;
        // Event listener for "Previous" button 
        prevButton.addEventListener('click', () => { 
        	if (currentPage > 1) 
                { 
        	    	currentPage--; 
        	    	displayPage(currentPage); 
        	    	updatePagination(pageLinks,currentPage); 
        	    } 
        }); 
        // Event listener for "Next" button 
        nextButton.addEventListener('click', () => { 
        	if (currentPage < totalPages) 
                { 
        	    	currentPage++; 
        	    	displayPage(currentPage); 
        	    	updatePagination(pageLinks,currentPage); 
        	    } 
        }); 
        // Event listener for page number buttons 
        pageLinks.forEach((link) => { 
        	link.addEventListener('click', (e) => { 
        		e.preventDefault(); 
        		const page = parseInt(link.dataset.page); 
        		if (page !== currentPage) 
                    { 
        		    	currentPage = page; 
        		    	displayPage(currentPage); 
        		    	updatePagination(pageLinks,currentPage); 
        		    } 
        	}); 
        });
        
        // Initial page load 
        displayPage(currentPage); 
        updatePagination(pageLinks,currentPage);
        return {pageLinks:pageLinks,paginationContainer:paginationContainer};
    }

// Function to display rows for a specific page 
function displayPage(page) 
    { 
    	const startIndex = (page - 1) * 10; 
    	const endIndex = startIndex + 10; 
        const table= document.querySelector('#table');
        const trs= table.querySelectorAll('tr');

        for (let i = 1; i < trs.length; i++) 
            {
   
    		    if (i > startIndex && i <= endIndex) 
                    { 
    		    	    trs[i].style.display = ''; 
    		        } 
                else 
                    { 
    		    	trs[i].style.display = 'none'; 
    		        } 
            }
                
            
    } 

// Function to update pagination buttons and page numbers 
function updatePagination(pageLinks,currentPage) 
    { 
     	pageLinks.forEach((link) => { 
    		const page = parseInt(link.dataset.page); 
    		link.classList.toggle('active', page === currentPage); 
    	}); 
    } 


// searching function
function search(input,pageLinks,pagination) 
    {
        // Declare variables
        let filter = input.toUpperCase();
        const table = document.querySelector("#table");
        let tr = table.getElementsByTagName("tr");
        // to remove pagination buttons and numbers while searching and show all results
        pagination.style.display = "none";

        // Loop through all table rows, and hide those who don't match the search query
        for (let i = 0; i < tr.length; i++) 
          {
              for(let j=0; j<tr[i].getElementsByTagName("td").length; j++)
                  {


                      let td = tr[i].getElementsByTagName("td")[j];
                      if (td) 
                          {
                            // to handle pagination correctly
                              let txtValue = td.textContent || td.innerText;
                              if (filter=="")
                                {
                                    displayPage(1); 
                                    updatePagination(pageLinks,1);
                                    pagination.style.display = "";
                                }
                              else if (txtValue.toUpperCase().indexOf(filter) > -1) 
                                  {
                                    console.log("found");
                                      tr[i].style.display = "";
                                      break;
                                  } 
                              else 
                                  {
                                      tr[i].style.display = "none";
                                  }
                          }
                  }
          }
    }


