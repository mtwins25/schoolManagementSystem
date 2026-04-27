<?php
namespace MyApp\model;
class Classroom {
    	public $id;
        public $buildingId;
        public $name;
        public $grade;
        public $girlsNo;
        public $boysNo;
        public $muslimStdNo;
        public $christianStdNo;
        public $frenchStdNo;
        public $germanStdNo;
        public $italianStdNo;

    function __construct($id="", $buildingId="", $name="", $grade="", $girlsNo="", $boysNo="", $muslimStdNo="", $christianStdNo="", $frenchStdNo="", $germanStdNo="", $italianStdNo="") 
        {
            $this->id = $id;
            $this->buildingId = $buildingId;
            $this->name = $name;
            $this->grade = $grade;
            $this->girlsNo = $girlsNo;
            $this->boysNo = $boysNo;
            $this->muslimStdNo = $muslimStdNo;
            $this->christianStdNo = $christianStdNo;
            $this->frenchStdNo = $frenchStdNo;
            $this->germanStdNo = $germanStdNo;
            $this->italianStdNo = $italianStdNo;

        }
    static function getclassrooms($con) 
            {
                $sql = "SELECT buildings.id as buildingId, buildings.name as buildingName, classrooms.id as classroomId, classrooms.name as classroomName,grade,girlsNo,boysNO FROM buildings join classrooms on buildings.id = classrooms.buildingId";
                $result = $con->query($sql)->fetchAll(\PDO::FETCH_ASSOC);
                
                return $result;
            }

    static function getClassroom($con, $id) 
            {
                $sql = "SELECT buildings.id as buildingId, buildings.name as buildingName,floorsNo,classroomNo, classrooms.id as classroomId, classrooms.name as classroomName,grade,girlsNo,boysNO,muslimStdNo,christianStdNo,frenchStdNo,germanStdNo,italianStdNo	
                        FROM buildings join classrooms on buildings.id = classrooms.buildingId WHERE classrooms.id = $id";
                $result = $con->query($sql)->fetch(\PDO::FETCH_ASSOC);
                
                return $result;
            }
    static function addClassroom($con, $buildingId, $name, $grade, $girlsNo, $boysNo, $muslimStdNo, $christianStdNo, $frenchStdNo, $germanStdNo, $italianStdNo) 
            {
                $sql = "INSERT INTO classrooms(buildingId, name, grade, girlsNo, boysNo, muslimStdNo, christianStdNo, frenchStdNo, germanStdNo, italianStdNo) VALUES ($buildingId, $name, $grade, $girlsNo, $boysNo, $muslimStdNo, $christianStdNo, $frenchStdNo, $germanStdNo, $italianStdNo)";
                $result = $con->query($sql);
                
                return $result;
            }
    static function updateClassroom($con, $id, $buildingId, $name, $grade, $girlsNo, $boysNo, $muslimStdNo, $christianStdNo, $frenchStdNo, $germanStdNo, $italianStdNo) 
            {
                $sql = "UPDATE classrooms SET buildingId = $buildingId, name = $name, grade = $grade, girlsNo = $girlsNo, boysNo = $boysNo, muslimStdNo = $muslimStdNo, christianStdNo = $christianStdNo, frenchStdNo = $frenchStdNo, germanStdNo = $germanStdNo, italianStdNo = $italianStdNo WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
       static function deleteClassroom($con,$id) 
            {
                $sql = "DELETE from classrooms WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
    
}
?>