<!DOCTYPE html>
<html lang="en">
<head>
	<title>Andrew Harris | About</title>
	<meta name="viewport" content="width=device-width initial-scale=1">
	<link rel="stylesheet" href="style.css">
</head>
<body>

<header>
	<nav class="navbar">
		<a href="index.php" class="nav-branding">Andrew Harris</a>
		<ul class="nav-menu">
			<li class="nav-item">
				<a href="index.php" class="nav-link">Home</a>
			</li>
			<li class="nav-item">
				<a href="about.php" class="nav-link">About me</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">Forecast</a>
			</li>
		</ul>
		<div class="hamburger">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</div>
	</nav>
</header>

<div class="content">
	<div class="row1">
		<input class="button" type="submit" value="Get forecast">
		<p class="cityName">City:</p>
		<p class="desc">Description:</p>
		<p class="temp">Temperature (Celsius):</p>
	</div>
</div>

<footer>
  <p>Current year: <?php echo date("Y"); ?> </p>
</footer>
<script src="script.js"></script>
</body>
</html>
