const editBTN=document.querySelector(".edit");
editBTN.addEventListener("click",(e)=>{
    const editMenu=document.querySelector(".editMenu")
    editMenu.classList.toggle("editMenuOp")
    console.log("#")
})
const addBTN = document.querySelector("#musicMenuBTN")
addBTN.addEventListener("click",(e)=>{
    e.preventDefault()
    const musicFile=document.querySelector("#musicFile").value;
    console.log(typeof(musicFile))
    uploadFile()
    /*call storage*/
})
async function uploadFile() {
    const fileupload =document.querySelector("#musicFile")
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    console.log(fileupload.files[0])
    await fetch('/musicPlayer.php', {
      method: "POST", 
      body: formData
    }); 
    alert('The file has been uploaded successfully.');
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