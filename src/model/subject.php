<?php
namespace MyApp\model;
class subject {
    	public $id;

        public $name;



    function __construct($id="", $name="",) 
        {
            $this->id = $id;
            $this->name = $name;

        }
    static function getSubjects($con) 
            {
                $sql = "SELECT * FROM subjects";
                $result = $con->query($sql)->fetchAll(\PDO::FETCH_ASSOC);
                
                return $result;
            }

    static function getSubject($con, $id) 
            {
                $sql = "SELECT subjects.id as subjectId,subjects.name as subjectsName, teachers.id as teacherId, teachers.name as teacherNameFROM teachers join subjects on teachers.subjectId = subjects.id WHERE teachers.id = $id";
                $result = $con->query($sql)->fetch(\PDO::FETCH_ASSOC);
                
                return $result;
            }
    static function addSubject($con,$name) 
            {
                $sql = "INSERT INTO subjects(name) VALUES ($name)";
                $result = $con->query($sql);
                
                return $result;
            }
    static function updateSubject($con, $id, $name) 
            {
                $sql = "UPDATE subjects SET name = $name WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
       static function deleteSubject($con,$id) 
            {
                $sql = "DELETE from subjects WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
    
}
?>