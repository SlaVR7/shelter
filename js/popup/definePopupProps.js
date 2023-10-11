export function definePopupProps(petData) {
  const imgContainer = document.querySelector('.popup__image');
  const popTitle = document.querySelector('.popup__title');
  const type = document.querySelector('.type');
  const breed = document.querySelector('.breed');
  const paragraph = document.querySelector('.popup__paragraph');
  const age = document.querySelector('.age');
  const inoculations = document.querySelector('.inoculations');
  const diseases = document.querySelector('.diseases');
  const parasites = document.querySelector('.parasites');
  const img = document.createElement('img');

  img.src = 'assets/img/bigPets/' + petData.img.slice(21);
  img.classList.add('popup__image_photo');
  imgContainer.appendChild(img);
  popTitle.innerText = petData.name;
  type.innerText = petData.type;
  breed.innerHTML = petData.breed;
  paragraph.innerHTML = petData.description;
  age.innerHTML = petData.age;
  inoculations.innerHTML = petData.inoculations;
  diseases.innerHTML = petData.diseases;
  parasites.innerHTML = petData.parasites;
}
