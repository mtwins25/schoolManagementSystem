// main constants
const dashboard = document.querySelector("#dashboard");
const showTeachers = document.querySelector("#showTeachers");
const addTeacher = document.querySelector("#addTeacher");
const showStudents = document.querySelector("#showStudents");
const addStudent = document.querySelector("#addStudent");
const showSubjects = document.querySelector("#showSubjects");
const addSubject = document.querySelector("#addSubject");
const showClasseRooms = document.querySelector("#showClassRooms");
const addClassRoom = document.querySelector("#addClassRoom");
const showBuildings = document.querySelector("#showBuildings");
const addBuilding = document.querySelector("#addBuilding");
const mainContent = document.querySelector("#mainContent");

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
                    display+=`<tr><td>${i+1}</td><td>${result[i].nId}</td><td>${result[i].studentName}</td><td>${result[i].grade}</td><td>,<a href="#" data-classRoomId="${result[i].classRoomId}">${result[i].classRoomName}</a></td><td><a class="detailsLink ms-3" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-person-lines-fill"></i></a><a class="editingLink ms-3" href="#" data-studentId="${result[i].studentId}"><i class="bi bi-pen-fill"></i></a><a class="deleteLink ms-3" href="#" data-studentId="${result[i].studentId}"> <i class="bi bi-trash-fill"></i></a></td></tr>`;
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
