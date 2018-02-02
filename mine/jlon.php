<!DOCTYPE html>
<html>
<head>
	<title>Jlon</title>
	<link rel="stylesheet" type="text/css" href="jlon_style.css">
</head>
<body>
<?php
    $l=0;
    for ($i=1; $i<1000;) 
    { 
    	$s=time(s);
    	if ($s>$l) 
    	{
    		$i=$i+10;
    	}
    	$l=$s;
    	?>
        <img src="qaychi.png" style="position: absolute; left: <?php echo $i; ?>px;" />

        <?php  
    }
?>
</body>
</html>