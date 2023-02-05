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
    
})
async function uploadFile() {
    let formData = new FormData(); 
    formData.append("file", fileupload.files[0]);
    await fetch('/upload.php', {
      method: "POST", 
      body: formData
    }); 
    alert('The file has been uploaded successfully.');
    }