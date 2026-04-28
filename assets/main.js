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
        const url = "teachers";
        try {
            const response = await fetch(url);
            if (!response.ok) 
                {
                    throw new Error(`Response status: ${response.status}`);
                }
            
            const result = await response.json();
            display = '<input id="search" type="text" class="form-control mb-2" placeholder="ابحث">';
            display+='<table id="table"  class="table table-striped table-hover w-100">\n<tr><th>م</th><th>الرقم القومي</th><th>الاسم</th><th>رقم الهاتف</th><th>المرتبة</th><th>المادة</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].nId}</td>\n <td>${result[i].teacherName}</td>\n <td>${result[i].rank}</td>\n <td>${result[i].phoneNo}</td>\n <td><a class="subjectLink "href="#" data-subjectId="${result[i].subjectId}">${result[i].subjectName}</a></td>\n <td><a class="teacherDetailsLink" href="#" data-teacherId="${result[i].teacherId}"> <i class="bi bi-person-lines-fill" style="font-size: 20px"></i></a> <a class="teacherEditingLink ms-3" href="#" data-teacherId="${result[i].teacherId}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="teacherDeleteLink ms-3" href="#" data-teacherId="${result[i].teacherId}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            display+='</table>';
            mainContent.innerHTML = display;
            console.log(result);
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
            display = '<input id="search"  type="text" class="form-control mb-2" placeholder="ابحث">';
            display+='<table id="table" class="table table-striped table-hover w-100">\n<tr><th>م</th><th>الرقم القومي</th><th>الاسم</th><th>الصف</th><th>الفصل</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].nId}</td>\n <td>${result[i].studentName}</td>\n <td>${studentGrade.get(result[i].grade)}</td>\n <td><a class="classroomLink "href="#" data-classroomId="${result[i].classroomId}">${result[i].classroomName}</a></td>\n <td><a class="studentDetailsLink" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-person-lines-fill" style="font-size: 20px"></i></a> <a class="studentEditingLink ms-3" href="#" data-studentId="${result[i].studentId}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="studentDeleteLink ms-3" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            display+='</table>';
            mainContent.innerHTML = display;
            const searchBar=document.querySelector("#search");
            searchBar.addEventListener("keyup",search(searchBar.value));

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

function search(input) {
  // Declare variables
  let filter, table, tr, td, i, j, txtValue;
  filter = input.value.toUpperCase();
  table = document.querySelector("#table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) 
    {
        for(j=0; j<tr[i].getElementsByTagName("td").length; j++)
            {

            
                td = tr[i].getElementsByTagName("td")[j];
                if (td) {
                  txtValue = td.textContent || td.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } else {
                    tr[i].style.display = "none";
                  }
            }
        }
    }
}

