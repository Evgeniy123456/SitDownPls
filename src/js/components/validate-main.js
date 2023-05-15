import GraphModal from 'graph-modal';
import { validateForms } from '../functions/validate-forms.js';

const regForm = document.querySelector('.registration-form');
if(regForm == null) {
  console.error("Нет такого селектора");
} else {
  const rules1 = [
    {
      ruleSelector: '.registration-form__input-name',
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
      ruleSelector: '.registration-form__input-tel',
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
      ruleSelector: '.registration-form__input-email',
      rules: [
        {
          rule: 'required',
          errorMessage: 'Введите ваш email'
        },
        {
          rule: 'email',
          errorMessage: 'Введите корректный email',
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

  const regInpName = document.querySelector('.registration-form__input-name');
  const regInpTel = document.querySelector('.registration-form__input-tel');
  const regInpMail = document.querySelector('.registration-form__input-email');
  const regcheck = document.querySelector('.custom-checkbox__field');
  const regBtn = document.querySelector('.registration-form__btn');

  const afterForm = () => {
    const modal = new GraphModal();

    regBtn.click()

    regBtn.setAttribute('disabled', 'disabled');
    regInpName.setAttribute('disabled', 'disabled');
    regInpTel.setAttribute('disabled', 'disabled');
    regInpMail.setAttribute('disabled', 'disabled');
    regcheck.setAttribute('disabled', 'disabled');
  };

  validateForms('.registration-form', rules1, afterForm);
}
