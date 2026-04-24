<?php
require '../model/databaseConnection.php';
use MyApp\model\Building;
use MyApp\model\ClassRoom;
use MyApp\model\Student;
use MyApp\model\Teacher;
use MyApp\model\Subject;
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
$route=explode('/',$_SERVER['REQUEST_URI']);
if($method == 'POST' || $method == 'PUT')
    {
        $data = json_decode(file_get_contents('php://input'), true);
    }
{
    http_response_code(200);
    exit();
}
// var_dump($route);
// echo "method is : $method and route is : $route";
$result=match ($route[2]) 
    {
        'students' =>
            $innerResult=match ($method) 
                {
                    'GET' => isset($route[3])? Student::getStudent($con, $route[3]):Student::getStudents($con),
                    'POST' => Student::addStudent($con, $data['nId'], $data['name'], $data['D_O_B'], $data['gender'], $data['religion'], $data['guardianName'], $data['guardianPhoneNo'],$data['grade'], $data['feesPaid'], $data['passed'], $data['classRoomId']),
                    'PUT' => Student::updateStudent($con,$data['id'], $data['nId'], $data['name'], $data['D_O_B'], $data['gender'], $data['religion'], $data['guardianName'], $data['guardianPhoneNo'],$data['grade'], $data['feesPaid'], $data['passed'], $data['classRoomId']),
                    'DELETE' => Student::deleteStudent($con,$route[3]),
                    default => http_response_code(405)
                },
    
        'teachers' =>
            $innerResult=match ($method) 
                {
                    'GET' =>isset($route[3])? Teacher::getTeacher($con, $route[3]):Teacher::getTeachers($con),
                    'POST' => Teacher::addTeacher($con, $data['nId'], $data['rank'], $data['phoneNo'], $data['name'], $data['D_O_B'], $data['D_O_G'], $data['D_O_E'], $data['periodsExNo'], $data['periodsAcNo'],$data['subjectId']),
                    'PUT' => Teacher::updateTeacher($con,$data['id'], $data['nId'], $data['rank'], $data['phoneNo'], $data['name'], $data['D_O_B'], $data['D_O_G'], $data['D_O_E'], $data['periodsExNo'], $data['periodsAcNo'],$data['subjectId']),
                    'DELETE' => Teacher::deleteTeacher($con,$route[3]),
                    default => http_response_code(405)
              },
              
        'subjects' =>
            $innerResult=match ($method) 
                {
                    'GET' => isset($route[3])? Subject::getSubject($con, $route[3]):Subject::getSubjects($con),
                    'POST' => Subject::addSubject($con, $data['name']),
                    'PUT' => Subject::updateSubject($con, $data['id'], $data['name']),
                    'DELETE' => Subject::deleteSubject($con, $route[3]),
                    default => http_response_code(405)
                },

        'classRooms' =>
            $innerResult=match ($method) 
                {
                    'GET' => isset($route[3])? ClassRoom::getClassRoom($con, $route[3]):ClassRoom::getClassRooms($con),
                    'POST' => ClassRoom::addClassroom($con, $data['buildingId'], $data['name'], $data['grade'], $data['girlsNo'], $data['boysNo'], $data['muslimStdNo'], $data['christianStdNo'], $data['frenchStdNo'], $data['germanStdNo'], $data['italianStdNo']),
                    'PUT' => ClassRoom::updateClassroom($con, $data['id'], $data['buildingId'], $data['name'], $data['grade'], $data['girlsNo'], $data['boysNo'], $data['muslimStdNo'], $data['christianStdNo'], $data['frenchStdNo'], $data['germanStdNo'], $data['italianStdNo']),
                    'DELETE' => ClassRoom::deleteClassroom($con, $route[3]),
                    default => http_response_code(405)
                },

        'buildings' =>
            $innerResult=match ($method) 
                {
                    'GET' => isset($route[3])? Building::getBuilding($con, $route[3]):Building::getBuildings($con),
                    'POST' => Building::addBuilding($con, $data['name'], $data['floorsNo'], $data['classRoomNo']),
                    'PUT' => Building::updateBuilding($con, $data['id'], $data['name'], $data['floorsNo'], $data['classRoomNo']),
                    'DELETE' => Building::deleteBuilding($con, $route[3]),
                    default => http_response_code(405)
                },
        default => http_response_code(405)
    };
echo json_encode($result);













?>