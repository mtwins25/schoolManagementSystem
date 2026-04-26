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
// classRooms constants
const showClassRooms = document.querySelector("#showClassRooms");
const addClassRoom = document.querySelector("#addClassRoom");
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
            display='<table class="table table-striped table-hover">\n<tr><th>م</th><th>الرقم القومي</th><th>الاسم</th><th>الصف</th><th>الفصل</th><th>العمليات</th></tr>';
            for (let i = 0; i < result.length; i++)
                 {
                    display+=`<tr> <td>${i+1}</td>\n <td>${result[i].nId}</td>\n <td>${result[i].studentName}</td>\n <td>${studentGrade.get(result[i].grade)}</td>\n <td><a class="classRoomLink "href="#" data-classRoomId="${result[i].classRoomId}">${result[i].classRoomName}</a></td>\n <td><a class="studentDetailsLink" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-person-lines-fill" style="font-size: 20px"></i></a> <a class="studentEditingLink ms-3" href="#" data-studentId="${result[i].studentId}"><i class="bi bi-pen-fill" style="font-size: 20px"></i></a> <a class="studentDeleteLink ms-3" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-trash-fill" style="font-size: 20px"></i></a> </td> </tr>\n`;
                 }
            display+='</table>';
            mainContent.innerHTML = display;

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
// classRooms event listeners
showClassRooms.addEventListener("click", async () => 
    {
        const url = "classRooms";
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
addClassRoom.addEventListener("click", async () => 
    {
        let data;
        const url = "classRooms";
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
                alert("student details");
                studentDetailsLink = event.target.closest(".studentDetailsLink");
                console.log(studentDetailsLink.dataset.studentId);
            }
        else if (event.target.closest(".studentEditingLink"))
            {
                alert("student editing");
                studentEditingLink = event.target.closest(".studentEditingLink");
                console.log(studentEditingLink.dataset.studentId);   
            }
        else if (event.target.closest(".studentDeleteLink"))
            {
                alert("student delete");
                studentDeleteLink = event.target.closest(".studentDeleteLink");
                console.log(studentDeleteLink.dataset.studentId);          
            }
        else if (event.target.closest(".classRoomLink"))
            {  
                 alert("class room details");
                classRoomLink = event.target.closest(".classRoomLink");
                console.log(classRoomLink.dataset.classRoomId);          
            }
    });

