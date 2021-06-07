<?php
  header('Access-Control-Allow-Origin: *');

        //mysqli_connect(host,username,password,dbname,port,socket);
  $link = mysqli_connect("localhost","myuser","mypassword", "parking2");
  
  if(mysqli_connect_error()) {
    die("There was an error");
  }

  $query = "UPDATE parkinglots SET a=" . "'0'" . ",".
  "b=". "'0'" . ",".
  "c=". "'0'" . ",".
  "d=". "'0'" . ",".
  "e=". "'0'" . ",".
  "f=". "'0'" . ",".
  "g=". "'0'" . ",".
  "h=". "'0'" . ",".
  "cmd=". "'0'";

  if($result = mysqli_query($link, $query)) {  
    echo "success";
  } else {
    echo "Error updating record: " . $link->error;
  }

  $link->close();
?>