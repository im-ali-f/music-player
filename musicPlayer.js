const editBTN=document.querySelector(".edit");
editBTN.addEventListener("click",(e)=>{
    const editMenu=document.querySelector(".editMenu")
    editMenu.classList.toggle("editMenuOp")
})
/* get music  and its info */
const addBTN = document.querySelector("#musicMenuBTN")
addBTN.addEventListener("click",(e)=>{
    uploadFile()
})

function getInfo(file) {
    let newMusic={}
    let Mname=file.name;
    newMusic["name"]=Mname.split(".")[0]
    newMusic["id"]=1/*fix it */
    newMusic["duration"]=time
    console.log(newMusic)
}


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
                let minutes = Math.floor(duration / 60);
                let seconds = Math.floor(duration - minutes * 60);
                time=`${minutes}:${seconds}`
            },false);
        };
        reader.readAsDataURL(file);
    }
}, false);



async function uploadFile() {
    const fileupload =document.querySelector("#musicFile")
    if(fileupload.files[0]){
         let formData = new FormData();
        formData.append("file", fileupload.files[0]);
        await fetch('musicPlayer.php', {
        method: "POST", 
        body: formData
        }); 
        getInfo(fileupload.files[0])
        }
    else{
        return;
    }
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