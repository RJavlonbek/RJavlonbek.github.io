<!DOCTYPE html>
<html>
<head>
	<title>My site</title>
	<link rel="stylesheet" type="text/css" href="login_style.css">
	<script type="text/javascript" src="JS.js"></script>
</head>
<body>

<?php
$file_num_of_users="num_of_users.txt";
$num_of_users=file_get_contents($file_num_of_users);
if (isset($_POST['submit']))
{
    $num_of_users++;
	$file_user_details="users/user".$num_of_users.".txt";
	file_put_contents($file_num_of_users, $num_of_users);
	$first_name=$_POST['first_name'];
	$surname=$_POST['surname'];
	$date_of_birth=$_POST['date_of_birth'];
	$password=$_POST['con_password'];
	$details = $first_name." ".$surname." ".$date_of_birth." ".$password;
	file_put_contents($file_user_details,$details);
	echo "Successfully registered<br>";
	echo "Your Login: ".$first_name.$num_of_users;
}
?>

<h1>My first page</h1>
<button onclick="show()">Show</button>

<form action="index.php" method="post" id="form">
    <fieldset id="sign_in">
<?php
    if (isset($_POST['sign_in']))
    {
	    $login=$_POST['login'];
	    $password=$_POST['password'];
	    $matches=0;
        for ($i=1; $i<=$num_of_users; $i++) 
        {
    	    if (file_exists("users/user".$i.".txt")) 
    	    {
    	        $user_details=explode(" ",file_get_contents("users/user".$i.".txt"));
                if ($login==$user_details[0].$i) 
                {
                	$matches=$matches+1;
        	        if ($password==$user_details[3]) 
        	        {
        		        ?>
        		        <meta http-equiv=Refresh content="0; url=http://localhost/mine/main.php">
        		        <?php
        	        }
        	        else
        	        {?>
        	        	<span class="incorrect">Invalid login or password</span>
        	        <?php }
                }
            }
        }
        if ($matches==0) {
        	?>
        	    <span class="incorrect">Invalid login or password</span>
            <?php
        }
    }
?>
    <legend>Sign in</legend>
    <div class="input">
	    <label for="login">
	        <span class="text">Login</span>
	        <input type="text" name="login" id="login" />
	    </label>
	</div>

	<div class="input">
	    <label for="password">
		    <span class="text">Password</span>
		    <input type="password" name="password" id="password" />
	    </label>
	</div>
	<input type="submit" name="sign_in" value="SIGN IN" />
	<a href="main.php"></a>
	</fieldset>
</form>

<span onclick="forget_password();">Forget Password?</span>
<span><a href="registration.html">Sign Up</a></span>
</body>
</html>