const tasks = [
  /*
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
  */
];

function renderElements(array){
  
  const elementTaskUl = document.getElementsByClassName("tasks__list");
  elementTaskUl[0].innerHTML = ""; // evitar duplicar;
  for(i = 0; i<array.length ; i++){
    elementTaskUl[0].appendChild(createTaskItem(array[i]));
  }
}

function createTaskItem(objeto){
    const elementTaskLi = document.createElement("li");
    const elementTaskDiv = document.createElement("div");
    const elementTaskSpan = document.createElement("span");
    const elementTaskP = document.createElement("p");
    elementTaskP.innerText = objeto.title; 
    const elementTaskButton = document.createElement("button");
    
    elementTaskLi.appendChild(elementTaskDiv);
    elementTaskDiv.appendChild(elementTaskSpan);
    elementTaskDiv.appendChild(elementTaskP);
    elementTaskLi.appendChild(elementTaskButton);
  
    elementTaskLi.classList.add("task__item");
    elementTaskDiv.classList.add("task-info__container");
    elementTaskSpan.classList.add("task-type");
    if(objeto.type=="normal"){
      elementTaskSpan.classList.add("span-normal")
    }else if(objeto.type=="importante"){
      elementTaskSpan.classList.add("span-important");
    }else{
      elementTaskSpan.classList.add("span-urgent");
    }
   
    //criar verificacao se existe já o titulo com indexOf;
    const indice = tasks.indexOf(objeto.title);
    console.log(indice);
    elementTaskButton.classList.add("task__button--remove-task");
    elementTaskButton.addEventListener('click',function(event){
      event.preventDefault();
      
      tasks.splice(tasks.indexOf(indice),1);
      renderElements(tasks);
    })

     return elementTaskLi;
}

const adicionarTarefaNaLista = document.querySelector(".form__button--add-task");
adicionarTarefaNaLista.addEventListener('click', function(event){
  event.preventDefault()
  const tituloDaTarefaNova = document.getElementsByClassName("form__input--text");
  const prioridadeDaTarefaNova = document.getElementsByClassName("form__input--priority");
  console.log(tasks.indexOf({title: tituloDaTarefaNova[0].value, type: prioridadeDaTarefaNova[0].value}));
  console.log(tituloDaTarefaNova[0].value);
  if((tasks.map(x => x.title).indexOf(tituloDaTarefaNova[0].value))>=0){
    alert("A tarefa: " + '\"' + tituloDaTarefaNova[0].value + '\"' + " já está na sua lista de tarefas");
    tituloDaTarefaNova[0].value = "";
  }else{
    tasks.push( {title: tituloDaTarefaNova[0].value, type: prioridadeDaTarefaNova[0].value});
    tituloDaTarefaNova[0].value = "";
    renderElements(tasks);
  }
    
});


