-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2026 at 11:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schoolmanagementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `buildings`
--

CREATE TABLE `buildings` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `floorsNo` int(11) NOT NULL,
  `classRoomsNo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buildings`
--

INSERT INTO `buildings` (`id`, `name`, `floorsNo`, `classRoomsNo`) VALUES
(1, 'Mahmoud', 3, 3),
(2, 'Nowell', 2, 3),
(3, 'Cassie', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `classrooms`
--

CREATE TABLE `classrooms` (
  `id` int(11) NOT NULL,
  `buildingId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `grade` int(11) NOT NULL,
  `girlsNo` int(11) NOT NULL,
  `boysNO` int(11) NOT NULL,
  `muslimStdNo` int(11) NOT NULL,
  `christianStdNo` int(11) NOT NULL,
  `frenchStdNo` int(11) NOT NULL,
  `germanStdNo` int(11) NOT NULL,
  `italianStdNo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classrooms`
--

INSERT INTO `classrooms` (`id`, `buildingId`, `name`, `grade`, `girlsNo`, `boysNO`, `muslimStdNo`, `christianStdNo`, `frenchStdNo`, `germanStdNo`, `italianStdNo`) VALUES
(1, 3, '086/32', 6, 25, 99, 100, 42, 62, 25, 99),
(2, 2, '102/77', 3, 57, 48, 99, 86, 30, 46, 72),
(3, 1, '050/66', 9, 93, 32, 14, 21, 60, 5, 74),
(4, 1, '443/67', 9, 49, 47, 10, 13, 68, 43, 27),
(5, 3, '352/96', 9, 20, 9, 84, 19, 52, 3, 58),
(6, 2, '827/02', 10, 97, 48, 90, 59, 28, 26, 72),
(7, 1, '062/04', 4, 14, 54, 21, 47, 37, 57, 84),
(8, 2, '108/41', 3, 69, 57, 12, 33, 7, 83, 67),
(9, 3, '011/78', 4, 98, 91, 80, 56, 73, 30, 28),
(10, 3, '248/35', 11, 3, 44, 79, 13, 38, 70, 22);

-- --------------------------------------------------------

--
-- Table structure for table `classroomsteachers`
--

CREATE TABLE `classroomsteachers` (
  `classRoomId` int(11) NOT NULL,
  `teacherId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `nId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `gender` varchar(255) NOT NULL,
  `religion` varchar(255) NOT NULL,
  `guardianName` varchar(255) NOT NULL,
  `guardianPhoneNo` varchar(255) NOT NULL,
  `grade` int(11) NOT NULL,
  `feesPaid` tinyint(1) NOT NULL,
  `passed` tinyint(1) NOT NULL,
  `classRoomId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `nId`, `name`, `DOB`, `gender`, `religion`, `guardianName`, `guardianPhoneNo`, `grade`, `feesPaid`, `passed`, `classRoomId`) VALUES
(1, 898, 'Cristionna Kleis', '0000-00-00', 'Female', 'Christianity', 'Jaymee Shotton', '5228907174', 5, 0, 0, 4),
(2, 273, 'Ware Cordero', '0000-00-00', 'Male', 'Islam', 'Dallon Caswall', '2223176563', 12, 0, 1, 1),
(3, 216, 'Piper Elix', '0000-00-00', 'Female', 'Islam', 'Helyn Mallock', '4246008910', 11, 1, 1, 2),
(4, 794, 'Sheffy Riggulsford', '0000-00-00', 'Male', 'Christianity', 'Arlin Naptin', '5554447960', 4, 1, 0, 2),
(5, 638, 'Kevin Perche', '0000-00-00', 'Male', 'Christianity', 'Gunner Dabourne', '5594166219', 1, 0, 1, 6),
(6, 404, 'Trude Sherry', '0000-00-00', 'Female', 'Christianity', 'Addi Insworth', '1062026429', 3, 0, 1, 6),
(7, 811, 'Addy Petel', '0000-00-00', 'Female', 'Christianity', 'Edyth Dunguy', '9171604581', 9, 0, 1, 5),
(8, 628, 'Regan Hitter', '0000-00-00', 'Male', 'Christianity', 'Eugene Bains', '1457305351', 2, 0, 1, 10),
(9, 598, 'Benyamin Clendennen', '0000-00-00', 'Male', 'Islam', 'Harper Conlaund', '2147090973', 5, 0, 0, 4),
(10, 605, 'Emera Lister', '0000-00-00', 'Female', 'Islam', 'Adriane Stubbert', '4396265646', 7, 1, 0, 9),
(11, 695, 'Jami Tremoille', '0000-00-00', 'Female', 'Christianity', 'Lebbie Safe', '6374759777', 5, 1, 0, 7),
(12, 530, 'Darelle Giovannilli', '0000-00-00', 'Female', 'Christianity', 'Diahann Duinkerk', '6209503668', 5, 0, 0, 2),
(13, 708, 'Aland Doblin', '0000-00-00', 'Male', 'Christianity', 'Silvan Antuoni', '8894334180', 1, 0, 1, 8),
(14, 312, 'Max Espadate', '0000-00-00', 'Female', 'Islam', 'Karie Curnokk', '8509476174', 6, 0, 0, 6),
(15, 367, 'Barnie Lambole', '0000-00-00', 'Male', 'Christianity', 'Burty Kuhnhardt', '9251605786', 9, 1, 0, 3),
(16, 851, 'Neale Clitheroe', '0000-00-00', 'Male', 'Islam', 'Gabie Reany', '6549557306', 12, 0, 1, 4),
(17, 532, 'Phyllys Bothe', '0000-00-00', 'Female', 'Christianity', 'Anne-marie Dooler', '3017929847', 1, 0, 0, 7),
(18, 154, 'Leicester Tanner', '0000-00-00', 'Male', 'Christianity', 'Gardy Madsen', '9244752729', 4, 1, 1, 8),
(19, 277, 'Kimberly Knutton', '0000-00-00', 'Female', 'Christianity', 'Siusan Sacker', '8788003829', 4, 1, 1, 8),
(20, 618, 'Thorstein Cockle', '0000-00-00', 'Male', 'Christianity', 'Boyd Jeppensen', '3079086262', 8, 0, 1, 8),
(21, 357, 'Berny Fleming', '0000-00-00', 'Male', 'Christianity', 'Wakefield Bremner', '8888183129', 9, 0, 1, 1),
(22, 395, 'Husein Heisman', '0000-00-00', 'Polygender', 'Islam', 'Anabal Stansell', '7966854841', 7, 1, 1, 2),
(23, 827, 'Matthus Santostefano.', '0000-00-00', 'Genderfluid', 'Islam', 'Patricia McAless', '7726497547', 6, 0, 1, 8),
(24, 514, 'Woodman McMurtyr', '0000-00-00', 'Male', 'Christianity', 'Codie Allibone', '5601120172', 1, 1, 1, 6),
(25, 662, 'Shannen Hilland', '0000-00-00', 'Female', 'Christianity', 'Dinny Kermode', '6883910168', 9, 0, 0, 2),
(26, 337, 'Dolli Grunwall', '0000-00-00', 'Female', 'Christianity', 'Celestina Muldoon', '1705561497', 10, 0, 1, 2),
(27, 609, 'Geno Heis', '0000-00-00', 'Male', 'Islam', 'Cary Tomsa', '1495365930', 12, 0, 0, 1),
(28, 190, 'Juan Bothams', '0000-00-00', 'Male', 'Christianity', 'Hunfredo Ikins', '5814979927', 12, 0, 1, 5),
(29, 801, 'Alie Domenici', '0000-00-00', 'Female', 'Islam', 'Sarena Yemm', '7098933318', 12, 0, 0, 2),
(30, 853, 'Shayna Cayzer', '0000-00-00', 'Female', 'Christianity', 'Olwen Taffe', '8684911963', 5, 0, 1, 9),
(31, 346, 'Karyl Roderighi', '0000-00-00', 'Genderfluid', 'Christianity', 'Marcel Jeannel', '4055763433', 9, 1, 0, 3),
(32, 634, 'Karon Larkcum', '0000-00-00', 'Female', 'Islam', 'Lucy Strahan', '7371321685', 8, 1, 0, 1),
(34, 285, 'Hartley Delouch', '0000-00-00', 'Male', 'Islam', 'Thaxter Cannicott', '8154026939', 1, 0, 0, 7),
(35, 774, 'Dotti Fishley', '0000-00-00', 'Female', 'Christianity', 'Elsi Norwell', '1105841199', 7, 1, 0, 1),
(36, 509, 'Nyssa Bucktharp', '0000-00-00', 'Female', 'Islam', 'Leodora Roskilly', '6904922601', 11, 1, 1, 9),
(37, 474, 'Alair Pecey', '0000-00-00', 'Male', 'Christianity', 'Kennith Pyott', '4347039478', 10, 1, 1, 4),
(38, 256, 'Amara Neal', '0000-00-00', 'Female', 'Islam', 'Raquel Mair', '3005729910', 1, 1, 0, 10),
(39, 529, 'Ernestus Sinnatt', '0000-00-00', 'Male', 'Islam', 'Walton Shucksmith', '5338185168', 7, 0, 1, 7),
(40, 157, 'Caleb Kayes', '0000-00-00', 'Male', 'Christianity', 'Urson De\'Ath', '7827346792', 9, 0, 1, 8),
(41, 332, 'Evania Trask', '0000-00-00', 'Genderqueer', 'Christianity', 'Gradeigh Licas', '1062335669', 3, 1, 0, 9),
(42, 386, 'Dawna Baldry', '0000-00-00', 'Female', 'Islam', 'Robby Pury', '3953923754', 12, 1, 1, 9),
(43, 844, 'Thomasa Breheny', '0000-00-00', 'Female', 'Islam', 'Hadria Brownstein', '4816311888', 8, 0, 0, 8),
(44, 145, 'Ron Kusick', '0000-00-00', 'Male', 'Islam', 'Nester Ostrich', '2076284620', 10, 1, 0, 8),
(45, 177, 'Madonna Dummett', '0000-00-00', 'Female', 'Islam', 'Misty Wigglesworth', '7456881536', 4, 1, 1, 6),
(46, 646, 'Daren Warlaw', '0000-00-00', 'Male', 'Islam', 'Lucien Hansom', '7324518449', 6, 0, 1, 9),
(47, 444, 'Rochella Duffree', '0000-00-00', 'Female', 'Islam', 'Madella Kubis', '5636513346', 12, 0, 1, 10),
(48, 728, 'Carey Josofovitz', '0000-00-00', 'Female', 'Christianity', 'Ashely McConway', '3063171451', 4, 1, 1, 1),
(49, 258, 'Abigail Shepton', '0000-00-00', 'Female', 'Islam', 'Kelcie Hylands', '9457052587', 1, 0, 1, 4),
(50, 799, 'Lorette Vizor', '0000-00-00', 'Female', 'Islam', 'Toinette Bridgewater', '2139395400', 12, 1, 1, 1),
(51, 231, 'Kennan Cassimer', '0000-00-00', 'Male', 'Islam', 'Skelly O\'Brogan', '8217524250', 4, 0, 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `studentssubjects`
--

CREATE TABLE `studentssubjects` (
  `studentId` int(11) NOT NULL,
  `subjectId` int(11) NOT NULL,
  `grade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `nID` int(11) NOT NULL,
  `rank` varchar(255) NOT NULL,
  `phoneNo` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `DOG` date NOT NULL,
  `DOE` date NOT NULL,
  `periodsExNo` int(11) NOT NULL,
  `periodsAcNo` int(11) NOT NULL,
  `subjectId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `nID`, `rank`, `phoneNo`, `name`, `DOB`, `DOG`, `DOE`, `periodsExNo`, `periodsAcNo`, `subjectId`) VALUES
(1, 118, 'beginner', '8355202019', 'Ingmar Ruddin', '0000-00-00', '0000-00-00', '0000-00-00', 3, 34, 9),
(2, 895, 'experienced', '4064607418', 'Alphard Burrells', '0000-00-00', '0000-00-00', '0000-00-00', 20, 19, 3),
(3, 605, 'expert', '3456062265', 'Vail Schutte', '0000-00-00', '0000-00-00', '0000-00-00', 22, 21, 14),
(4, 816, 'experienced', '8247857188', 'Lowe Meade', '0000-00-00', '0000-00-00', '0000-00-00', 48, 28, 6),
(5, 815, 'experienced', '4411912981', 'Kristopher Carmody', '0000-00-00', '0000-00-00', '0000-00-00', 19, 27, 15),
(6, 207, 'expert', '1925708689', 'Agna Lynock', '0000-00-00', '0000-00-00', '0000-00-00', 26, 8, 7),
(7, 855, 'expert', '4233000756', 'Hillard Frances', '0000-00-00', '0000-00-00', '0000-00-00', 44, 26, 6),
(8, 476, 'intermediate', '1539942091', 'Corny Digby', '0000-00-00', '0000-00-00', '0000-00-00', 29, 43, 15),
(9, 142, 'beginner', '9903496632', 'Enrico Corradetti', '0000-00-00', '0000-00-00', '0000-00-00', 32, 14, 15),
(10, 851, 'expert', '3441185743', 'Cassi Schroeder', '0000-00-00', '0000-00-00', '0000-00-00', 9, 7, 9),
(11, 800, 'beginner', '5415514180', 'Alexandr Luffman', '0000-00-00', '0000-00-00', '0000-00-00', 39, 22, 6),
(12, 160, 'intermediate', '5346048553', 'Johannah Firidolfi', '0000-00-00', '0000-00-00', '0000-00-00', 40, 7, 5),
(13, 673, 'intermediate', '5973030448', 'Llywellyn Cauldwell', '0000-00-00', '0000-00-00', '0000-00-00', 45, 2, 14),
(14, 298, 'expert', '3015865786', 'Ellerey Adamczewski', '0000-00-00', '0000-00-00', '0000-00-00', 49, 19, 4),
(15, 676, 'intermediate', '9761131385', 'Sollie Bulgen', '0000-00-00', '0000-00-00', '0000-00-00', 10, 47, 11),
(16, 538, 'intermediate', '5542196516', 'Dodie Matiebe', '0000-00-00', '0000-00-00', '0000-00-00', 19, 24, 3),
(17, 480, 'expert', '3074464551', 'Haleigh Smaile', '0000-00-00', '0000-00-00', '0000-00-00', 17, 7, 1),
(18, 165, 'expert', '8524852267', 'Davin Downe', '0000-00-00', '0000-00-00', '0000-00-00', 31, 12, 9),
(19, 185, 'experienced', '4263117658', 'Mickie Danilchev', '0000-00-00', '0000-00-00', '0000-00-00', 41, 12, 11),
(20, 857, 'expert', '7755855277', 'Claire Cavell', '0000-00-00', '0000-00-00', '0000-00-00', 1, 6, 11),
(21, 729, 'intermediate', '1305228758', 'Brodie Van der Hoeven', '0000-00-00', '0000-00-00', '0000-00-00', 45, 23, 15),
(22, 400, 'intermediate', '7072866527', 'Elicia Macourek', '0000-00-00', '0000-00-00', '0000-00-00', 5, 35, 9),
(23, 434, 'intermediate', '4581556184', 'Nichole Elfe', '0000-00-00', '0000-00-00', '0000-00-00', 10, 5, 5),
(24, 893, 'experienced', '2394914692', 'Ulises Eusden', '0000-00-00', '0000-00-00', '0000-00-00', 17, 23, 11),
(25, 367, 'intermediate', '1371853308', 'Filberto Diment', '0000-00-00', '0000-00-00', '0000-00-00', 44, 25, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classrooms`
--
ALTER TABLE `classrooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `bId` (`buildingId`);

--
-- Indexes for table `classroomsteachers`
--
ALTER TABLE `classroomsteachers`
  ADD PRIMARY KEY (`classRoomId`,`teacherId`),
  ADD KEY `teacherId` (`teacherId`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nId` (`nId`),
  ADD KEY `classRoomId` (`classRoomId`);

--
-- Indexes for table `studentssubjects`
--
ALTER TABLE `studentssubjects`
  ADD PRIMARY KEY (`studentId`,`subjectId`),
  ADD KEY `subjectId` (`subjectId`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phoneNo` (`phoneNo`),
  ADD UNIQUE KEY `nID` (`nID`),
  ADD KEY `teacher_ibfk_1` (`subjectId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buildings`
--
ALTER TABLE `buildings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classrooms`
--
ALTER TABLE `classrooms`
  ADD CONSTRAINT `classrooms_ibfk_1` FOREIGN KEY (`buildingId`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `classroomsteachers`
--
ALTER TABLE `classroomsteachers`
  ADD CONSTRAINT `classroomsteachers_ibfk_1` FOREIGN KEY (`classRoomId`) REFERENCES `classrooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classroomsteachers_ibfk_2` FOREIGN KEY (`teacherId`) REFERENCES `teachers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`classRoomId`) REFERENCES `classrooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `studentssubjects`
--
ALTER TABLE `studentssubjects`
  ADD CONSTRAINT `studentssubjects_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studentssubjects_ibfk_2` FOREIGN KEY (`subjectId`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teachers`
--
ALTER TABLE `teachers`
  ADD CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`subjectId`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
