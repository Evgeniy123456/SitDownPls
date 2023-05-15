
if(document.getElementById('ratingBtn') == null) {
  console.error("Нет такого селектора");
} else {
//add card to block
  const ratingBtn = document.getElementById('ratingBtn')
  let ratingCard = document.querySelectorAll('.rating__card').length;
  let items = 6;

  ratingBtn.addEventListener('click', function() {
    items +=2;
    const array = Array.from(document.querySelector('.rating__block').children);
    const visItem = array.slice(0, items);

    visItem.forEach(el => el.classList.add('is-visible'));

    if (visItem.length === ratingCard) {
      ratingBtn.setAttribute('disabled', 'disabled');
    }
  })
};
