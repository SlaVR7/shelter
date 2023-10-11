import {createElement} from '../slider/сreateElement.js';

export function createElements(randArr, arr, pets) {
  let random = Math.floor(Math.random() * 40);
  if (random === randArr.at(-1)) {
    random++;
  }
  randArr.push(random);

  const imageArr = [];
  const nameArr = [];
  const btnArr = [];

  for (let i = random; i <= random + 7; i++) {
    const image = createElement('img', 'animal__pet_photo', undefined, arr[i].img);
    const name = createElement('h3', 'animal__pet_name', arr[i].name);
    const btn = createElement('button', 'animal__pet_btn', 'Learn more');

    imageArr.push(image);
    nameArr.push(name);
    btnArr.push(btn);
  }

  for (let i = 0; i <= 7; i++) {
    pets[i].innerHTML = '';
    pets[i].append(imageArr[i], nameArr[i], btnArr[i]);
  }
}
