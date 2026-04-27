<?php
namespace MyApp\model;
class Building {
    public $id;
    public $name;
    public $address;
    public $floorsNo;
    public $classroomsNo;

    function __construct($id="", $name="", $address="", $floorsNo="", $classroomsNo="") 
        {
            $this->id = $id;
            $this->name = $name;
            $this->address = $address;
            $this->floorsNo = $floorsNo;
            $this->classroomsNo = $classroomsNo;

        }
    static function getBuildings($con) 
            {
                $sql = "SELECT * FROM buildings";
                $result = $con->query($sql)->fetchAll(\PDO::FETCH_ASSOC);
                
                return $result;
            }

    static function getBuilding($con, $id) 
            {
                $sql = "SELECT buildings.id as buildingId, buildings.name as buildingName,floorsNo,classroomsNo, classrooms.id as classroomId, classrooms.name as classroomName,grade FROM buildings join classrooms on buildings.id = classrooms.buildingId WHERE buildings.id = $id";
                $result = $con->query($sql)->fetch(\PDO::FETCH_ASSOC);
                
                return $result;
            }
    static function addBuilding($con, $name, $floorsNo, $classroomsNo) 
            {
                $sql = "INSERT INTO buildings(name, floorsNo, classroomsNo) VALUES ($name, $floorsNo, $classroomsNo)";
                $result = $con->query($sql);
                
                return $result;
            }
    static function updateBuilding($con,$id, $name, $floorsNo, $classroomsNo) 
            {
                $sql = "UPDATE buildings SET name = $name, floorsNo = $floorsNo, classroomsNo = $classroomsNo WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
       static function deleteBuilding($con,$id) 
            {
                $sql = "DELETE from buildings WHERE id = $id";
                $result = $con->query($sql);
                
                return $result;
            }
    
}
?>