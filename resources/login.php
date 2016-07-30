<?php
   session_start();
   unset($_SESSION['timeout']);
   unset($_SESSION['username']);
   unset($_SESSION['password']);
   $_SESSION['username'] = 'guest';
   $_SESSION['password'] = '1234';
?>
<html>
   <body>
   <?php
      if (isset($_POST['login'])) {
         if (!empty($_POST['username']) && !empty($_POST['password']) && mysqli_connect("localhost", $_POST['username'], $_POST['password'], "synapseDB")) {
            $_SESSION['timeout'] = time();
            $_SESSION['username'] = $_POST['username'];
            $_SESSION['password'] = $_POST['password'];
            echo 'Success logging in.<br>Redirecting...';
         } else {
            echo 'Failure logging in.<br>Redirecting...';
         }
         header('Refresh: 2; URL = /lynxis/index.php');
      } 
      if (isset($_POST['logout'])) {
         echo 'Success logging out.';
         header('Refresh: 2; URL = /lynxis/index.php');
      }
      $newacc=FALSE;
      if (isset($_POST['newaccount'])) {
         $newacc=TRUE;
         echo 'Success creating new account.<br>Redirecting...';
      }
   ?>
   <form id="createacc">
      <input type = "text" name = "username" placeholder = "username" required /><br>
         <input type = "password" name = "password" placeholder = "password" required /><br>
         <input id = "login" type = "submit" name = "login" value = "login" />
   </form>
   </body>
   <script>
      if("<?php echo $newacc; ?> "){

      }
   </script>
</html>