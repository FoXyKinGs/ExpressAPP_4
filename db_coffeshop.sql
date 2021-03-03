-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 03 Mar 2021 pada 07.40
-- Versi Server: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_coffeshop`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(3154, 'coffe'),
(4123, 'desert'),
(4523, 'Snack'),
(5234, 'desert'),
(7539, 'boba');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `invoice` int(11) NOT NULL,
  `cashier` varchar(32) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `orders` text NOT NULL,
  `amount` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`invoice`, `cashier`, `date`, `orders`, `amount`) VALUES
(43124, 'Cashier 2', '2021-01-31 11:42:02', 'Americano 1, Red Velvet 1', 44000),
(1231412, 'Cashier 1', '2021-01-17 17:36:40', 'Americano 1,Red Velvet 1,Avocado 1,', 56100),
(11462571, 'foxy', '2021-03-03 12:20:07', 'Americano 2,Tubruk 1,', 66000),
(12455121, 'Cashier 1', '2021-01-17 18:37:40', 'Red Velvet 1,Cappucino 1,', 22000),
(15854232, 'foxy', '2021-03-03 12:27:27', 'Red Velvet 1,', 18700),
(18771305, 'foxy', '2021-03-03 12:50:02', 'Cappucino 1,Salmon 1,', 40700),
(32981472, 'foxy', '2021-02-08 00:56:51', 'Red Velvet 1,Americano 1,', 46200),
(36212545, 'amai', '2021-03-03 13:16:56', 'Red Velvet 1,Vanilla cake 1,Cappucino 4,', 117700),
(37028789, 'foxy', '2021-02-08 10:16:49', 'Tubruk 1,Salmon 1,', 40700),
(42337626, 'foxy', '2021-03-03 12:26:32', 'Americano 1,', 27500),
(49489317, 'foxy', '2021-03-03 12:48:53', 'Americano 1,', 27500),
(58801845, 'amai', '2021-03-03 13:25:59', 'Americano 1,Red Velvet 3,', 83600),
(59352071, 'foxy', '2021-03-03 12:54:59', 'Kapal api 1,Tubruk 1,', 33000),
(91685295, 'foxy', '2021-02-08 10:17:13', 'Tubruk 1,Vanilla cake 1,', 66000),
(92420168, 'foxy', '2021-03-03 12:50:47', 'Americano 1,', 27500);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `product_name` varchar(32) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `id_category`, `product_name`, `image`, `price`) VALUES
(1, 3154, 'Cappucino', '1612719220453.png', 10000),
(2, 3154, 'Red Velvet', '1612719291508.png', 17000),
(3, 3154, 'Americano', '1612719186339.png', 25000),
(20, 4523, 'Salmon', '1612719959066.png', 27000),
(21, 3154, 'Tubruk', '1612710081789.png', 10000),
(22, 5234, 'Vanilla cake', '1612726338674.png', 50000),
(23, 3154, 'Tubruk', '1612710082110.png', 10000),
(24, 3154, 'Tubruk', '1612710082613.png', 10000),
(26, 3154, 'Kapal api', '1612710217095.png', 20000),
(27, 3154, 'Luwak', '1612710301425.png', 12000),
(28, 4523, 'Chicken katsu', '1612720339281.png', 28000),
(29, 4123, 'Choco cake', '1612745811903.png', 17000),
(30, 4123, 'Chicken Katsu', '1612754161122.png', 27000),
(31, 3154, 'Kopi ABC', '1614750799915.jpg', 5000),
(33, 3154, 'Kopi', '1614751925353.jpg', 7000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `access` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `access`) VALUES
(1, 'foxy', 'foxy@g.c', '$2b$10$BFuqopDabFrs0yeQsd57x.U4lQm8OXdRMS1FAeUWVAGuLVkFvEAbO', 0),
(2, 'fox', 'fox@g.c', '$2b$10$yWbUhcH1A2p7/xttqUlP5.D0Rm1OBrM6Hw4IS00lXmrAAW8818J7a', 1),
(3, 'fennec', 'fennec@g.c', '$2b$10$MCuu.J8Zs4.ksTG1yf2XQe5SW8tMq4g9hj38Pw.obd4XA8..iSUtK', 1),
(4, 'Fennec', 'Fen@g.c', '$2b$10$QDxmyjbxbmQDQw9JM/vaQelrPPTPsxqkbnNPdc8AO1c/4y2yWkmgC', 0),
(5, 'Snow', 'Snow@g.c', '$2b$10$yfQvUor0mvRu6zHk/fLA7OqPPrEs0Lx5T7NUYmCAed.71vdYC.9wS', 0),
(6, 'firefox', 'firefox@g.c', '$2b$10$RWodX98X9saXZUqa/.JKF.QZyC.c6zFk5mkKsr7O23G2xJIhf9Jbi', 1),
(7, 'amai', 'Amai@gmail.com', '$2b$10$jHgbDOyyyZtcOX9iMwAWZeIZ20xsAEydTIhFhmn8AV3arDLOjWfKO', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`invoice`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
