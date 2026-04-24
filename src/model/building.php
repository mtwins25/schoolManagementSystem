<?php
namespace MyApp\model;
class Building {
    public $id;
    public $name;
    public $address;
    public $floorsNo;
    public $classRoomsNo;

    function __construct($id="", $name="", $address="", $floorsNo="", $classRoomsNo="") 
        {
            $this->id = $id;
            $this->name = $name;
            $this->address = $address;
            $this->floorsNo = $floorsNo;
            $this->classRoomsNo = $classRoomsNo;

        }
    static function getBuildings($con) 
            {
                $sql = "SELECT * FROM buildings";
                $result = $con->query($sql)->fetchAll(\PDO::FETCH_ASSOC);
                
                return $result;
            }

    static function getBuilding($con, $id) 
            {
                $sql = "SELECT buildings.id as buildingId, buildings.name as buildingName,floorsNo,classRoomsNo, classRooms.id as classRoomId, classRooms.name as classRoomName,grade FROM buildings join classRooms on buildings.id = classRooms.buildingId WHERE buildings.id = $id";
                $result = $con->query($sql)->fetch(\PDO::FETCH_ASSOC);
                
                return $result;
            }
    static function addBuilding($con, $name, $floorsNo, $classRoomsNo) 
            {
                $sql = "INSERT INTO buildings(name, floorsNo, classRoomsNo) VALUES ($name, $floorsNo, $classRoomsNo)";
                $result = $con->query($sql);
                
                return $result;
            }
    static function updateBuilding($con,$id, $name, $floorsNo, $classRoomsNo) 
            {
                $sql = "UPDATE buildings SET name = $name, floorsNo = $floorsNo, classRoomsNo = $classRoomsNo WHERE id = $id";
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