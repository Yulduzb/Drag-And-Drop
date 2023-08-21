const sortableList=document.querySelector(".sortable-list");
const items=document.querySelectorAll(".item");


items.forEach(item => {
  //dragstart olayı, bir öğenin sürüklemesi başladığında tetiklenir.
  item.addEventListener("dragstart", () => {
   setTimeout(() =>  item.classList.add("dragging"),0);
  

  });
  item.addEventListener("dragend", () =>{
    item.classList.remove("dragging");
  })
    
});


//Bu fonksiyon, öğeleri sıralamak için kullanılır 
const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem=sortableList.querySelector(".dragging");

  // sıralanabilir liste içindeki tüm öğelerden sürüklenen
  // öğeyi dışarıda bırakan kardeş öğeler seçilir. Bu seçilen kardeş öğeler, siblings adlı bir dizi içine atanır.
    const siblings=[...sortableList.querySelectorAll(".item:not(.dragging")];
    let nextSibling=siblings.find(sibling=> {
      return e.clientY <= sibling.offsetTop+sibling.offsetHeight / 2;

    });
    sortableList.insertBefore(draggingItem,nextSibling);
}


sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());