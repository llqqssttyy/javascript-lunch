import './GNB.css';

import '../../statics/imgs/add-button.png';
import RestaurantForm from '../RestaurantForm/RestaurantForm';

export default class GNB extends HTMLElement {
  constructor() {
    super();

    const template = document.querySelector('#template-header');
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }

  connectedCallback() {
    const button = this.querySelector('.gnb__button');

    button.addEventListener('click', () => {
      const modal = document.querySelector('app-modal');
      const title = this.#createRestaurantFormTitle();
      const body = this.#createRestaurantForm();
      modal.openModal({ title, body });
    });
  }

  #createRestaurantFormTitle() {
    const restaurantFormTitle = document.createElement('h2');
    restaurantFormTitle.setAttribute('class', 'modal-title text-title');
    restaurantFormTitle.textContent = '새로운 음식점';
    return restaurantFormTitle;
  }

  #createRestaurantForm() {
    const restaurantForm = new RestaurantForm();
    restaurantForm.setAttribute('is', 'app-restaurant-form');
    restaurantForm.setAttribute('id', 'restaurant-form');
    return restaurantForm;
  }
}
