<?php
if(isset($_POST['musicFile'])){
  $target_dir = "uploads/";
  $target_file = $target_dir . basename($_FILES["musicFile"]["name"]);
  $uploadOk = 1;
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

  
echo "Sorry, your file was not uploaded.";
echo "The file ". htmlspecialchars( basename( $_FILES["musicFile"]["name"])). " has been uploaded.";
echo "Sorry, there was an error uploading your file.";
}
?>