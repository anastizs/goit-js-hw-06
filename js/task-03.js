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


const galleryEl = document.querySelector('.gallery');
const makeGallaryImageRowMarkup = image => {
  const { url, alt } = image;

  return `
  <li style = 'display: block'>
    <img src = ${url}, alt = ${alt}, width = 240>
  </li>
  `;
};

const gallaryImageRowMarkup = images
  .map(makeGallaryImageRowMarkup)
  .join('');

galleryEl.insertAdjacentHTML('beforeend', gallaryImageRowMarkup);









// const galleryEl = document.querySelector('.gallery');

// const elements = images.map(option =>{
//   const itemEl = document.createElement("li");
//   itemEl.style.display = 'block';

//   const imgEl = document.createElement("img");
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;
//   imgEl.width = 240;
//   itemEl.append(imgEl);
//   return itemEl;
// });

// const makeGalleryEl = images =>{
//   return images.map(option =>{
//   const itemEl = document.createElement("li");
//   itemEl.style.display = 'block';

//   const imgEl = document.createElement("img");
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;
//   imgEl.width = 240;
//   itemEl.append(imgEl);
//   return itemEl;
// });
// };
// const elements = makeGalleryEl(images);
// galleryEl.append(...elements);


