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
  const elementTaskUl = document.createElement("ul");
  const listaLi;
  const i;
  for(i=0; i<array.length ; i++){
    listaLi[i] = createTaskItem(array[i][0],array[i][0]);
    elementTaskUl.appendChild(listaLi[i]);
  }
}

function createTaskItem(title,type){
    const elementTaskLi = document.createElement("li");
    const elementTaskDiv = document.createElement("div");
    const elementTaskSpan = document.createElement("span");
    const elementTaskP = document.createElement("p");
    elementTaskP.innerText = title; 
    const elementTaskButton = document.createElement("button");
    
    elementTaskLi.appendChild(elementTaskDiv);
    elementTaskDiv.appendChild(elementTaskSpan);
    elementTaskDiv.appendChild(elementTaskP);
    elementTaskLi.appendChild(elementTaskButton);
  
    elementTaskLi.classList.add("task__item");
    elementTaskDiv.classList.add("task-info__container");
    elementTaskSpan.classList.add("task-type");
    if(type=="Normal"){
      elementTaskSpan.classList.add("span-normal")
    }else if(type=="Importante"){
      elementTaskSpan.classList.add("span-important");
    }else{
      elementTaskSpan.classList.add("span-urgent");
    }
     return elementTaskLi;
}

