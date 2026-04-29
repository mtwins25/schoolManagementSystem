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
            const response = await fetch(url);
            if (!response.ok) 
                {
                    throw new Error(`Response status: ${response.status}`);
                }
            
            const result = await response.json();
            // result display
            //adding header
            display = "<h4>المدرسين</h4>";
            //adding search bar
            display += '<input id="search" type="text" class="form-control mb-2" placeholder="ابحث">';
            // adding table headers and then filling it with data
            display+='<table id="table"  class="table table-striped table-hover w-100" >\n<tr><th>م</th><th>الرقم القومي</th><th>الاسم</th><th>رقم الهاتف</th><th>المرتبة</th><th>المادة</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].nId}</td>\n <td>${result[i].teacherName}</td>\n <td>${result[i].phoneNo}</td>\n <td>${result[i].rank}</td>\n <td><a class="subjectLink "href="#" data-subjectId="${result[i].subjectId}">${result[i].subjectName}</a></td>\n <td><a class="teacherDetailsLink" href="#" data-teacherId="${result[i].teacherId}"> <i class="bi bi-person-lines-fill" style="font-size: 20px"></i></a> <a class="teacherEditingLink ms-3" href="#" data-teacherId="${result[i].teacherId}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="teacherDeleteLink ms-3" href="#" data-teacherId="${result[i].teacherId}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            // closing table
            display+='</table>';
            // adding pagination elements
            const totalPages = Math.ceil(result.length / 10); 
             display+=`<div class="pagination" id="pagination">\n<a href="#" id="prev">السابق</a>`;
            for (let i = 0; i < totalPages; i++)
                {
                    display+=`<a href="#" class="page-link" data-page="${i+1}">${i+1}</a>\n`;
                }
            display+=`<a href="#" id="next">التالي</a>\n</div>`;
            mainContent.innerHTML = display;

            // pagination
            const pagination = document.getElementById('pagination'); 
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

            // searching
            const searchBar=document.querySelector("#search");
            searchBar.addEventListener("keyup",()=>{search(searchBar.value,pageLinks)});

            } catch (error) {
                console.error(error.message);
            };
    });
addTeacher.addEventListener("click", async () => 
    {
        let data;
        const url = "teachers";
        try {
            const response = await fetch(url, 
                {
                    method: "POST",
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

            } catch (error) {
                console.error(error.message);
            };
    });
// students event listeners
showStudents.addEventListener("click", async () => 
    {
        const url = "students";
        try {
            const response = await fetch(url);
            if (!response.ok) 
                {
                    throw new Error(`Response status: ${response.status}`);
                }
            
            const result = await response.json();
            //adding header
            display = "<h4>الطلاب</h4>";
            //adding search bar
            display += '<input id="search"  type="text" class="form-control mb-2" placeholder="ابحث">';
            //adding table headers and then filling it with data
            display+='<table id="table" class="table table-striped table-hover w-100">\n<tr><th>م</th><th>الرقم القومي</th><th>الاسم</th><th>الصف</th><th>الفصل</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].nId}</td>\n <td>${result[i].studentName}</td>\n <td>${studentGrade.get(result[i].grade)}</td>\n <td><a class="classroomLink "href="#" data-classroomId="${result[i].classroomId}">${result[i].classroomName}</a></td>\n <td><a class="studentDetailsLink" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-person-lines-fill" style="font-size: 20px"></i></a> <a class="studentEditingLink ms-3" href="#" data-studentId="${result[i].studentId}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="studentDeleteLink ms-3" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            display+='</table>';
            mainContent.innerHTML = display;
            const searchBar=document.querySelector("#search");
            searchBar.addEventListener("keyup",()=>{search(searchBar.value)});

            } catch (error) {
                console.error(error.message);
            };
    });
addStudent.addEventListener("click", async () => 
    {
        let data;
        const url = "students";
        try {
            const response = await fetch(url, 
                {
                    method: "POST",
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

            } catch (error) {
                console.error(error.message);
            };
    });
// subjects event listeners
showSubjects.addEventListener("click", async () => 
    {
        const url = "subjects";
        try {
            const response = await fetch(url);
            if (!response.ok) 
                {
                    throw new Error(`Response status: ${response.status}`);
                }
            
            const result = await response.json();
            console.log(result);
            } catch (error) {
                console.error(error.message);
            };
    });
addSubject.addEventListener("click", async () => 
    {
        let data;
        const url = "subjects";
        try {
            const response = await fetch(url, 
                {
                    method: "POST",
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

            } catch (error) {
                console.error(error.message);
            };
    });
// classrooms event listeners
showClassrooms.addEventListener("click", async () => 
    {
        const url = "classrooms";
        try {
            const response = await fetch(url);
            if (!response.ok) 
                {
                    throw new Error(`Response status: ${response.status}`);
                }
            
            const result = await response.json();
            console.log(result);
            } catch (error) {
                console.error(error.message);
            };
    });
addClassroom.addEventListener("click", async () => 
    {
        let data;
        const url = "classrooms";
        try {
            const response = await fetch(url, 
                {
                    method: "POST",
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
            } catch (error) {
                console.error(error.message);
            };
    });
// buildings event listeners
showBuildings.addEventListener("click", async () => 
    {
        const url = "buildings";
        try {
            const response = await fetch(url);
            if (!response.ok) 
                {
                    throw new Error(`Response status: ${response.status}`);
                }
            
            const result = await response.json();
            console.log(result);
            } catch (error) {
                console.error(error.message);
            };
    });
addBuilding.addEventListener("click", async () => 
    {
        let data;
        const url = "buildings";
        try {
            const response = await fetch(url, 
                {
                    method: "POST",
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
                
            } catch (error) {
                console.error(error.message);
            };
    });
// other event listeners
// event delegation for dynamic content
mainContent.addEventListener("click",  (event) =>
    {
        if (event.target.closest(".studentDetailsLink"))
            {
                studentDetailsLink = event.target.closest(".studentDetailsLink");
                alert(studentDetailsLink.dataset.studentid);
            }
        else if (event.target.closest(".studentEditingLink"))
            {
                studentEditingLink = event.target.closest(".studentEditingLink");
                alert(studentEditingLink.dataset.studentid);
            }
        else if (event.target.closest(".studentDeleteLink"))
            {
                studentDeleteLink = event.target.closest(".studentDeleteLink");
                alert(studentDeleteLink.dataset.studentid);          
            }
        else if (event.target.closest(".classroomLink"))
            {  
                classroomLink = event.target.closest(".classroomLink");
                alert(classroomLink.dataset.classroomid);          
            }
        else if (event.target.closest(".teacherDetailsLink"))
            {
                teacherDetailsLink = event.target.closest(".teacherDetailsLink");
                alert(teacherDetailsLink.dataset.teacherid);
            }
        else if (event.target.closest(".teacherEditingLink"))
            {
                teacherEditingLink = event.target.closest(".teacherEditingLink");
                alert(teacherEditingLink.dataset.teacherid);
            }
        else if (event.target.closest(".teacherDeleteLink"))
            {
                teacherDeleteLink = event.target.closest(".teacherDeleteLink");
                alert(teacherDeleteLink.dataset.teacherid);          
            }
        
    });


//functions

// searching function
function search(input,pageLinks) 
    {
        // Declare variables
        let filter = input.toUpperCase();
        const table = document.querySelector("#table");
        let tr = table.getElementsByTagName("tr");

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
                              if (txtValue.toUpperCase().indexOf(filter)=="")
                                {
                                    displayPage(1); 
                                    updatePagination(pageLinks,1);
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
// pagination functions
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

