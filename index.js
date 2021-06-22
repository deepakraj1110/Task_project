const taskContainer=document.querySelector(".task__container");
const newCard=({id,
    imageurl,
    taskTitle,
    taskDescription,
    taskType,})=> `<div class="col-md-6 col-lg-4" id=${id}>
            <div class="card rounded-3 border-dark ">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-user-edit"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-dumpster"></i></button>
  </div>
  <img src=${imageurl} class="card-img-top" alt="car">
  <div class="card-body">
    <h5 class="card-title">${taskTitle}</h5>
    <p class="card-text">${taskDescription}</p>
    <span class="badge bg-primary">${taskType}</span>
  </div>
  <div class="card-footer text-muted ">
    <button type="button" class="btn btn-outline-primary float-end">Open Task </button>
  </div>
</div>
 </div>`;




const SaveChanges = () => {
    const taskData ={
       id:`${Date.now()}`,
       imageurl: document.getElementById("imageurl").value,
       taskTitle:document.getElementById("tasktitle").value,
       taskType:document.getElementById("tasktype").value,
       taskDescription:document.getElementById("taskdescription").value, 


    };
    const createnewcard =newCard(taskData);
        taskContainer.insertAdjacentHTML("beforeend",createnewcard)
};