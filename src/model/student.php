<?php
namespace MyApp\model;
class Student {
    	public $id;
        public $nId;
        public $name;
        public $DOB;
        public $gender;
        public $religion;
        public $guardianName;
        public $guardianPhoneNo;
        public $grade;
        public $feesPaid;
        public $passed;
        public $classRoomId;

    function __construct($id="", $nId="", $name="", $DOB="", $gender="", $religion="", $guardianName="", $guardianPhoneNo="", $grade="", $feesPaid="", $passed="", $classRoomId="") 
        {
            $this->id = $id;
            $this->nId = $nId;
            $this->name = $name;
            $this->DOB = $DOB;
            $this->gender = $gender;
            $this->religion = $religion;
            $this->guardianName = $guardianName;
            $this->guardianPhoneNo = $guardianPhoneNo;
            $this->grade = $grade;
            $this->feesPaid = $feesPaid;
            $this->passed = $passed;
            $this->classRoomId = $classRoomId;
 

        }
    static function getStudents($con) 
            {
                $sql = "SELECT students.id as studentId,nId, students.name as studentName, grade, classRooms.id as classRoomId, classRooms.name as classRoomName FROM students join classRooms on students.classRoomId = classRooms.id";
                $result = $con->query($sql)->fetchAll(\PDO::FETCH_ASSOC);
                
                return $result;
            }

    static function getStudent($con, $id) 
            {
                $sql = "SELECT students.id as studentId, students.name as studentName, students.grade as studentGrade, nId, DOB, gender, passed, feesPaid, guardianPhoneNo, guardianName, religion, classRooms.id as classRoomId, classRooms.name as classRoomName, studentsSubjects.grade as subjectGrade, subjects.id as subjectId, subjects.name as subjectName
                        FROM students join classRooms on students.classRoomId = classRooms.id join studentsSubjects on students.id=studentsSubjects.studentId joins subjects on studentsSubjects.subjectId=subjects.id WHERE students.id = $id";
                $result = $con->query($sql)->fetch(\PDO::FETCH_ASSOC);
                
                return $result;
            }
    static function addStudent($con, $nId, $name, $DOB, $gender, $religion, $guardianName, $guardianPhoneNo, $grade, $feesPaid, $passed, $classRoomId) 
            {
                $sql = "INSERT INTO students(nId, name, DOB, gender, religion, guardianName, guardianPhoneNo, grade, feesPaid, passed, classRoomId) VALUES ($nId, $name, $DOB, $gender, $religion, $guardianName, $guardianPhoneNo, $grade, $feesPaid, $passed, $classRoomId)";
                $result = $con->query($sql);
                
                return $result;
            }
    static function updateStudent($con, $id, $nId, $name, $DOB, $gender, $religion, $guardianName, $guardianPhoneNo, $grade, $feesPaid, $passed, $classRoomId) 
            {
                $sql = "UPDATE students SET nId = $nId, name = $name, DOB = $DOB, gender = $gender, religion = $religion, guardianName = $guardianName, guardianPhoneNo = $guardianPhoneNo, grade = $grade, feesPaid = $feesPaid, passed = $passed, classRoomId = $classRoomId WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
       static function deleteStudent($con,$id) 
            {
                $sql = "DELETE from students WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
    
}
?>