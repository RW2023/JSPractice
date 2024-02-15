const titleDiv = document.querySelector('#title');
const h1 = document.createElement('h1');
h1.textContent = 'Dom Manipulation';
titleDiv.appendChild(h1);
const classList = ['gridBox']

const grids = document.querySelectorAll('.gridBox');
grids.forEach((grid) => {
    classList.forEach((className) => {
        grid.classList.add(className);
    });
});

const paragraphs = document.querySelectorAll('p');
const textContents = ['First paragraph', 'Second paragraph', 'Third paragraph'];
const [firstParagraph, secondParagraph, thirdParagraph] = paragraphs;

let paragraph1Text='This paragraph is a dynamic text that is displayed once the button is clicked. The other boxes will display text as well';
let paragraph2Text='';
let paragraph3Text='';

const button = document.querySelector('button');
button.addEventListener('click', () => {
    firstParagraph.textContent = paragraph1Text;
    secondParagraph.textContent = paragraph2Text;
    thirdParagraph.textContent = paragraph3Text;
    paragraph1Text  = "this is the first paragraph";
    paragraph2Text  = "this is the second paragraph";
    paragraph3Text  = "this is the third paragraph";
});




paragraphs.forEach((paragraph, index) => {
    if (index < textContents.length) {
        paragraph.textContent = textContents[index];
    }
});