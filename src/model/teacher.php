<?php
namespace MyApp\model;
class Teacher {
    	public $id;
        public $nId;
        public $rank;
        public $phoneNo;
        public $name;
        public $DOB;
        public $DOG;
        public $DOE;
        public $periodsExNo;
        public $periodsAcNo;
        public $subjectId;

    function __construct($id="", $nId="", $rank="", $phoneNo="", $name="", $DOB="", $DOG="", $DOE="", $periodsExNo="", $periodsAcNo="", $subjectId="") 
        {
            $this->id = $id;
            $this->nId = $nId;
            $this->rank = $rank;
            $this->phoneNo = $phoneNo;
            $this->name = $name;
            $this->DOB = $DOB;
            $this->DOG = $DOG;
            $this->DOE = $DOE;
            $this->periodsExNo = $periodsExNo;
            $this->periodsAcNo = $periodsAcNo;
            $this->subjectId = $subjectId;

        }
    static function getTeachers($con) 
            {
                $sql = "SELECT teachers.id as teacherId, teachers.name as teacherName, nId, rank, phoneNo, subjects.id as subjectId, subjects.name as subjectName FROM teachers join subjects on teachers.subjectId = subjects.id";
                $result = $con->query($sql)->fetchAll(\PDO::FETCH_ASSOC);
                
                return $result;
            }

    static function getTeacher($con, $id) 
            {
                $sql = "SELECT teachers.id as teacherId, teachers.name as teacherName, nId, rank, phoneNo, periodsAcNo, periodsExNo, DOE, DOG, DOB, subjects.id as subjectId, subjects.name as subjectName FROM teachers join subjects on teachers.subjectId = subjects.id WHERE teachers.id = $id";
                $result = $con->query($sql)->fetch(\PDO::FETCH_ASSOC);
                
                return $result;
            }
    static function addTeacher($con, $nId, $rank, $phoneNo, $name, $DOB, $DOG, $DOE, $periodsExNo, $periodsAcNo,$subjectId) 
            {
                $sql = "INSERT INTO teachers(nId, rank, phoneNo, name, DOB, DOG, DOE, periodsExNo, periodsAcNo, subjectId) VALUES ($nId, $rank, $phoneNo, $name, $DOB, $DOG, $DOE, $periodsExNo, $periodsAcNo, $subjectId)";
                $result = $con->query($sql);
                
                return $result;
            }
    static function updateTeacher($con, $id, $nId, $rank, $phoneNo, $name, $DOB, $DOG, $DOE, $periodsExNo, $periodsAcNo,$subjectId) 
            {
                $sql = "UPDATE teachers SET nId = $nId, rank = $rank, phoneNo = $phoneNo, name = $name, DOB = $DOB, DOG = $DOG, DOE = $DOE, periodsExNo = $periodsExNo, periodsAcNo = $periodsAcNo, subjectId = $subjectId WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
       static function deleteTeacher($con,$id) 
            {
                $sql = "DELETE from teachers WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
    
}
?>