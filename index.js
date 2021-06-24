const taskContainer=document.querySelector(".task__container");
let globalStore=[];
const newCard=(taskData)=> `<div class="col-md-6 col-lg-4" id=${taskData.id}>
            <div class="card rounded-3 border-dark ">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-user-edit"></i></button>
    <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"><i id=${taskData.id} onclick="deleteCard.apply(this,arguments)" class="fas fa-dumpster"></i></button>
  </div>
  <img src=${taskData.imageurl} class="card-img-top" alt="car">
  <div class="card-body">
    <h5 class="card-title">${taskData.taskTitle}</h5>
    <p class="card-text">${taskData.taskDescription}</p>
    <span class="badge bg-primary">${taskData.taskType}</span>
  </div>
  <div class="card-footer text-muted ">
    <button type="button" class="btn btn-outline-primary float-end">Open Task </button>
  </div>
</div>
 </div>`;


const loadData = () =>{
  const intialData=localStorage.getItem("tasky");
  if(!intialData) return;

  const {cards} = JSON.parse(intialData);
   cards.map((card) =>{const createNewCard =newCard(card);
  taskContainer.insertAdjacentHTML("beforeend",createNewCard);
  globalStore.push(card);

});
  
};

const SaveChanges = () => {
    const taskData ={
       id:`${Date.now()}`,
       imageurl: document.getElementById("imageurl").value,
       taskTitle:document.getElementById("tasktitle").value,
       taskType:document.getElementById("tasktype").value,
       taskDescription:document.getElementById("taskdescription").value, 


    };
    const createNewCard =newCard(taskData);
        taskContainer.insertAdjacentHTML("beforeend",createNewCard);
        globalStore.push(taskData);
        localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
};

const deleteCard = (event) =>{
 // event=window.event;
  const targetID=event.target.id;
 const tagname=event.target.tagName;
 

globalStore=globalStore.filter((taskData)=>taskData.id!==targetID);
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
 
if (tagname==="BUTTON"){
  return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
}

return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);

 };






