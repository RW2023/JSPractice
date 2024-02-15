const titleDiv = document.querySelector('#title');
const h1 = document.createElement('h1');
h1.textContent = 'Dom Manipulation';
titleDiv.appendChild(h1);
const classList = ['gridBox'];

const grids = document.querySelectorAll('.gridBox');
grids.forEach((grid) => {
  classList.forEach((className) => {
    grid.classList.add(className);
  });
});

const paragraphs = document.querySelectorAll('p');
const textContents = [
  [
    'First paragraph',
    ' I am practicing dom manipulation. This paragraph is a dynamic text that is displayed once the button is clicked. The other boxes will display text as well',
    '',
  ],
  [
    'Second paragraph',
    'The button click moves through the array of text to display the next message',
    '',
  ],
  [
    'Third paragraph',
    '',
    'this is the last paragraph to be displayed on the button click. All other boxes will be empty at this point.',
  ],
];

// Array to store the current index of the message for each paragraph
let currentMessageIndex = [0, 0, 0];

const button = document.querySelector('button');
button.addEventListener('click', () => {
  paragraphs.forEach((paragraph, index) => {
    // Update the text content of the paragraph based on the current index
    paragraph.textContent = textContents[index][currentMessageIndex[index]];

    // Increment the index for the next click
    currentMessageIndex[index] =
      (currentMessageIndex[index] + 1) % textContents[index].length;
  });
});

// Initial text content setup
paragraphs.forEach((paragraph, index) => {
  paragraph.textContent = textContents[index][0];
});
