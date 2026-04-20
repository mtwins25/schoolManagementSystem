<?php
require 'databaseConnection.php';
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
$route=explode('/',$_SERVER['REQUEST_URI']);
// echo "method is : $method and route is : $route";
$result=match ($route[2]) 
    {
        'students' =>
            $innerResult=match ($method) 
                {
                    'GET' => getStudents($con),
                    'POST' => addStudent($con),
                    'PUT' => updateStudent($con),
                    'DELETE' => deleteStudent($con),
                    default => http_response_code(405)
                },
    
        'teachers' =>
            $innerResult=match ($method) 
                {
                    'GET' => getTeachers($con),
                    'POST' => addTeacher($con),
                    'PUT' => updateTeacher($con),
                    'DELETE' => deleteTeacher($con),
                    default => http_response_code(405)
              },
              
        'subjects' =>
            $innerResult=match ($method) 
                {
                    'GET' => getSubjects($con),
                    'POST' => addSubject($con),
                    'PUT' => updateSubject($con),
                    'DELETE' => deleteSubject($con),
                    default => http_response_code(405)
                },

        'classRooms' =>
            $innerResult=match ($method) 
                {
                    'GET' => getClassrooms($con),
                    'POST' => addClassroom($con),
                    'PUT' => updateClassroom($con),
                    'DELETE' => deleteClassroom($con),
                    default => http_response_code(405)
                },

        'buildings' =>
            $innerResult=match ($method) 
                {
                    'GET' => getBuildings($con),
                    'POST' => addBuilding($con),
                    'PUT' => updateBuilding($con),
                    'DELETE' => deleteBuilding($con),
                    default => http_response_code(405)
                },
        default => http_response_code(405)
    };













?>