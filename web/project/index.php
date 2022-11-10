<!DOCTYPE html>
<html>
	<body>

		<form action="upload.php" method="POST" enctype="multipart/form-data">
			<input type="file" name="image" accept="image/*" />
			<button type="submit">Upload</button>
		</form>



	<?php

// open this directory 
$myDirectory = opendir("/var/www/html/filesystem");

// get each entry
while($entryName = readdir($myDirectory)) {
	$dirArray[] = $entryName;
}

// close directory
closedir($myDirectory);

//	count elements in array
$indexCount	= count($dirArray);

?>

<ul>

	<?php
	// loop through the array of files and print them all in a list
	for($index=0; $index < $indexCount; $index++) {
		$extension = substr($dirArray[$index], -3);
		if ($extension == 'jpg' || $extension == 'png'){ // list only jpgs
			echo '<li><img src="filesystem/' . $dirArray[$index] . '" alt="Image" /><span></span>';
		}	
	}
	?>

</ul>	


	</body>
</html>