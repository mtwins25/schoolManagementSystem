<?php
namespace MyApp\model;
class ClassRoom {
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
    static function getclassRooms($con) 
            {
                $sql = "SELECT buildings.id as buildingId, buildings.name as buildingName, classRooms.id as classRoomId, classRooms.name as classRoomName,grade,girlsNo,boysNO FROM buildings join classRooms on buildings.id = classRooms.buildingId";
                $result = $con->query($sql)->fetchAll(\PDO::FETCH_ASSOC);
                
                return $result;
            }

    static function getClassRoom($con, $id) 
            {
                $sql = "SELECT buildings.id as buildingId, buildings.name as buildingName,floorsNo,classRoomNo, classRooms.id as classRoomId, classRooms.name as classRoomName,grade,girlsNo,boysNO,muslimStdNo,christianStdNo,frenchStdNo,germanStdNo,italianStdNo	
                        FROM buildings join classRooms on buildings.id = classRooms.buildingId WHERE classRooms.id = $id";
                $result = $con->query($sql)->fetch(\PDO::FETCH_ASSOC);
                
                return $result;
            }
    static function addClassRoom($con, $buildingId, $name, $grade, $girlsNo, $boysNo, $muslimStdNo, $christianStdNo, $frenchStdNo, $germanStdNo, $italianStdNo) 
            {
                $sql = "INSERT INTO classRooms(buildingId, name, grade, girlsNo, boysNo, muslimStdNo, christianStdNo, frenchStdNo, germanStdNo, italianStdNo) VALUES ($buildingId, $name, $grade, $girlsNo, $boysNo, $muslimStdNo, $christianStdNo, $frenchStdNo, $germanStdNo, $italianStdNo)";
                $result = $con->query($sql);
                
                return $result;
            }
    static function updateClassRoom($con, $id, $buildingId, $name, $grade, $girlsNo, $boysNo, $muslimStdNo, $christianStdNo, $frenchStdNo, $germanStdNo, $italianStdNo) 
            {
                $sql = "UPDATE classRooms SET buildingId = $buildingId, name = $name, grade = $grade, girlsNo = $girlsNo, boysNo = $boysNo, muslimStdNo = $muslimStdNo, christianStdNo = $christianStdNo, frenchStdNo = $frenchStdNo, germanStdNo = $germanStdNo, italianStdNo = $italianStdNo WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
       static function deleteClassRoom($con,$id) 
            {
                $sql = "DELETE from classRooms WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
    
}
?>