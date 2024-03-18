const tasks = [
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
];

function renderElements(array){
  
  const elementTaskUl = document.getElementsByClassName("tasks__list");
  elementTaskUl[0].innerHTML = ""; // evitar duplicar;
  for(i = 0; i<array.length ; i++){
    const teste = createTaskItem(array[i]);
    console.log(teste);
    elementTaskUl[0].appendChild(teste);
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
    if(objeto.type=="Normal"){
      elementTaskSpan.classList.add("span-normal")
    }else if(objeto.type=="Importante"){
      elementTaskSpan.classList.add("span-important");
    }else{
      elementTaskSpan.classList.add("span-urgent");
    }
    elementTaskButton.classList.add("ask__button--remove-task");

     return elementTaskLi;
}


renderElements(tasks);
