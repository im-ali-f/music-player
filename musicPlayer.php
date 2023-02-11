<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title>
    <link rel="stylesheet" href="musicPlayer.css">
    <script src="https://kit.fontawesome.com/917d68c74c.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="wholePage">
        <div class="accSection">
            <div class="accInfo">
                <div class="profilePic"></div>
                <div class="profileName siteFont">fwdwwffqqdqdwejhwf</div>
            </div>
            <div class="edit"><i class="fa-solid fa-pen"></i></div>
            <div class="editMenu">
                <form action="musicPlayer.php" method="post" id="formMenu" enctype="multipart/form-data">
                    <input type="file" name="musicFile" id="musicFile" class="siteFont">
                    <button type="submit" value="Add" id="musicMenuBTN" class="siteFont">Add</button>
                    <input type="reset" class="siteFont" id="resetMenuBTN">
                </form>
            </div>
        </div>
        <div class="musicPlayerContainer">
            <div class="musicPlayerList">
               
            </div>
            <div class="controllers">
                <div class="volume">
                    <div class="volumeShape control"><i class="fa-solid fa-volume-high"></i></i></div>
                    <div class="volumeRange">
                        <input class="range" type="range" name="volumeRange" id="volumeRange">
                    </div>
                </div>
                <div class="center">
                    <div class="previous control"><i class="fa-solid fa-backward"></i></div>
                    <div class="playOrpuase control"><i class="fa-solid fa-play"></i></div>
                    <div class="next control"><i class="fa-solid fa-forward"></i></div>
                </div>
                <div class="musicTimer">
                    <input class="range" type="range" name="musicTimer" id="musicTimer">
                </div>
            </div>
        </div>
    </div>
    <script src="musicPlayer.js"></script>
</body>

</html>
<?php
if (isset($_FILES["musicFile"])){
  $uploaddir = "C:\\musicWebSite\\";
  if(is_dir($uploaddir)){
  }
  else{
    mkdir($uploaddir);
  }
  $file = $_FILES['musicFile']['name'];
	$path = pathinfo($file);
  $filename = $path['filename'];
  $ext = $path['extension'];
  $path_filename_ext = $uploaddir.$filename.".".$ext;
  echo $path_filename_ext;
    if (move_uploaded_file($_FILES['musicFile']['tmp_name'], $path_filename_ext)) {
      echo "File successfully uploaded.";
    } else {
        echo "Error!";
    }

}
?>