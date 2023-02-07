const editBTN=document.querySelector(".edit");
editBTN.addEventListener("click",(e)=>{
    const editMenu=document.querySelector(".editMenu")
    editMenu.classList.toggle("editMenuOp")
    console.log("#")
})
/* get music  and its info */
const addBTN = document.querySelector("#musicMenuBTN")
addBTN.addEventListener("click",(e)=>{
    e.preventDefault()
    uploadFile()
})

function getInfo(file) {
    let newMusic={}
    console.log(file.name)
    let Mname=file.name;
    newMusic["name"]=Mname[0]
    newMusic["id"]=1/*fix it */
    newMusic["duration"]=getDuration()
}

function getDuration() {
var audio = document.createElement('audio');
var duration=0;
document.querySelector("#musicFile").addEventListener('change', function(event){
    var target = event.currentTarget;
    var file = target.files[0];
    var reader = new FileReader();
  
    if (target.files && file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            audio.src = e.target.result;
            audio.addEventListener('loadedmetadata', function(){
                duration = audio.duration;
                console.log("The duration of the song is of: " + duration + " seconds");
            },false);
        };
        reader.readAsDataURL(file);
    }
}, false);
const minutes = Math.floor(duration / 60);
const seconds = duration - minutes * 60;
const time=`${minutes}:${seconds}`
return time;
}

async function uploadFile() {
    const fileupload =document.querySelector("#musicFile")
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    console.log(fileupload.files[0])
    await fetch('/musicPlayer.php', {
      method: "POST", 
      body: formData
    }); 
    getInfo(fileupload.files[0])
    }

whole=[{"id":1,"name":"mu1","duration":"2:34"},
{"id":2,"name":"mu2","duration":"1:54"},
{"id":3,"name":"mu3","duration":"0:14"},
{"id":4,"name":"mu4","duration":"8:44"}]
/* refresh the page */
function refresh() {
    let globalMC=1;
    const musicList=document.querySelector(".musicPlayerList")
    whole.forEach(wholeMusic => {
      const mydiv= document.createElement("div")
      mydiv.classList.add("musicContainer")
      mydiv.innerHTML=`
        <div class="musicIMG"></div>
        <div class="musicName siteFont">${wholeMusic["name"]}</div>
        <div class="musicTime siteFont">${wholeMusic["duration"]}</div>
        <div class="musicCounter siteFont">${globalMC}</div>
      `
      musicList.appendChild(mydiv)
    });
}
refresh()