const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesContainer = document.querySelector('.gallery');


const makeGalery = ({url, alt}) => {

  return `
  <li class="galery-item">
  <img src="${url}" alt="${alt}" class="galery-img width="450px" height="300px">
  </li>
  `
}



const makeImgGalery = images
  .map(makeGalery)
  .join(' ');



imagesContainer.insertAdjacentHTML('beforeend', makeImgGalery);