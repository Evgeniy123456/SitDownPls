import GraphModal from 'graph-modal';
import { validateForms } from '../functions/validate-forms.js';


if(document.querySelector('.card-form') == null) {
  console.error("Нет такого селектора");
} else {
  const rules2 = [
    {
      ruleSelector: '.card-form__input-name',
      rules: [
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Введите минимум 3 символа'
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },

    {
      ruleSelector: '.card-form__input-tel',
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },

    {
      ruleSelector: '.custom-checkbox__field',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните форму'
        }
      ]
    }
  ];

  const afterFormCard = () => {
    const modal = new GraphModal();
    const cardBtn = document.querySelector('.card-form__btn');
    cardBtn.setAttribute('data-graph-path', 'cardThanks')
    cardBtn.click();
  };

  validateForms('.card-form', rules2, afterFormCard);
}

//
