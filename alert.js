const isArr = (arr) => arr !== undefined && arr.length !== 0

function breadcrumbs(catalog, id, prev = [catalog.name]) {
  let result = []
if (catalog.id === id){
  return prev
}

if(isArr(catalog.children)){
  for (key of catalog.children){
     result.push(...breadcrumbs(key, id, [...prev, key.name]))
      }
  } 

  return result
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


console.log(breadcrumbs(catalog, "1"));
// ["Электроника"]

console.log(breadcrumbs(catalog, "3"));
// ["Электроника", "Товары для компьютера", "Оперативная память"]

console.log(breadcrumbs(catalog, "5"));
// ["Электроника", "Мобильные телефоны"]
