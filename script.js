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
  const elementUl = document.createElement("ul");

}

function createTaskItem(title,type){
  const contador = title.length;
  while(contador>=0){
    const elementTaskLi[contador] = document.createElement("li");
    const elementTaskDiv[contador] = document.createElement("div");
    const elementTaskSpan[contador] = document.createElement("span");
    const elementTaskP[contador] = document.createElement("p");
    elementTaskP[contador].innerText = title; 
    const elementTaskButton[contador] = document.createElement("button");
    
    elementTaskLi[contador].appendChild(elementTaskDiv);
    elementTaskDiv[contador].appendChild(elementTaskSpan);
    elementTaskDiv[contador].appendChild(elementTaskP);
    elementTaskLi[contador].appendChild(elementTaskButton);
  
    elementTaskLi[contador].classList.add("task__item");
    elementTaskDiv.classList.add("task-info__container");
    elementTaskSpan[contador].classList.add("task-type");
    if(type[contador]=="Normal"){
      elementTaskSpan[contador].classList.add("span-normal")
    }else if(type[contador]=="Importante"){
      elementTaskSpan[contador].classList.add("span-important");
    }else{
      elementTaskSpan[contador].classList.add("span-urgent")
    }
    elementTaskButton.classList.add("task__button--remove-task");

  }
}