if(document.querySelector('.header__select') == null) {
  console.error("Нет такого селектора");
} else {

  //header-city
  const headerCity = document.querySelector('.js-choice-city');
  const choicesCity = new Choices(headerCity, {
    searchEnabled: false, //убрал строку поиска
    itemSelectText: "",    //убрал подсказку
  })

  //heder-categories
  const headerCategories = document.querySelector('.js-choice-headerCategories');
  const choicesCategories = new Choices(headerCategories, {
    searchEnabled: false, //убрал строку поиска
    itemSelectText: "",    //убрал подсказку
  })
}
