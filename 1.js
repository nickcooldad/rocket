function descendants(catalog, id) {
  return searchParent(findNote(catalog, id))
  }

function findNote(catalog, id){
  if(catalog.id === id){
     return catalog
  }
  for(const child of catalog.children){
  const childResult = findNote(child, id)
    if(childResult !== undefined){
     return childResult
    }
  }
}

function searchParent(obj){
  const cache = []
  for(const child of obj.children){
    cache.push(child.id)
    const resultChild = searchParent(child)
    cache.push(...resultChild)
  }
  return cache
 }







  const catalog = {
    id: "1",
    name: "Электроника",
    children: [
      {
        id: "2",
        name: "Товары для компьютера",
        children: [
          { id: "3", name: "Оперативная память", children: [] },
          { id: "4", name: "Процессоры", children: [] },
        ],
      },
      { id: "5", name: "Мобильные телефоны", children: [] },
    ],
  };
  

  console.log(descendants(catalog, "1"));
// ["2", "3", "4", "5"]

console.log(descendants(catalog, "2"));
// ["3", "4"]

console.log(descendants(catalog, "4"));
// []
//console.log(searchParent(catalog))