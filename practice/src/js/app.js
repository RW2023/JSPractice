
  // Form handling
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Extract and log form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formData = { firstName, lastName, email, message };
    console.table('Form Data:', formData);

     

      // Clear the form
      form.reset();
    });

  // Family object
  const family = {
    name: 'Wilson',
    man: {
      title1: 'husband',
      title2: 'daddy',
      occupation: 'Truck Driver',
      age: 46,
      sex: 'male',
      firstName: 'Ryan',
      lastName: 'Wilson',
      mother: 'Yvette',
      father: 'Carl',
      canCook: true,
      siblings: [
        {
          brother: {
            firstName: 'Clayton',
            lastName: 'Cooke',
            occupation: 'Welder',
            mother: { firstName: 'Yvette', lastName: 'Miller' },
            father: 'Ruel Cooke',
          },
          sister: {
            firstName: 'Athene',
            lastName: 'Glover',
            occupation: 'singer',
            mother: { firstName: 'Yvette', lastName: 'Miller' },
            father: 'Carl Wilson',
          },
        },
      ],
    },
    woman: {
      title1: 'Wife',
      title2: 'Mommy',
      occupation: 'Bus Driver',
      age: 48,
      sex: 'Female',
      firstName: 'Veronique',
      lastName: 'Dasey',
      mother: 'Lillian',
      father: 'Kal',
      canCook: true,
    },
    kids: [
      {
        firstName: 'Melanie',
        lastName: 'Wilson',
        school: 'Clark Road Secondary',
        age: 16,
        grade: 11,
        canCook: true,
      },
      {
        firstName: 'Dominic',
        lastName: 'Wilson',
        nickname: ['Dom', 'I am Him', 'The One Who Knocks'],
        school: 'Princess Anne French Immersion',
        grade: 7,
        age: 12,
        canCook: false,
      },
    ],
    pets: {
      type: 'cat',
      name: 'shadow',
    },
  };

  function getCooks(family) {
    let cooks = [];
    if (canCook(family.man)) {
      cooks.push(family.man.firstName);
    }
    if (canCook(family.woman)) {
      cooks.push(family.woman.firstName);
    }
    family.kids.forEach((kid) => {
      if (canCook(kid)) {
        cooks.push(kid.firstName);
      }
    });
    return cooks.join(', ');
  }

  // Destructuring
  const { man, woman, kids, pets } = family;
  const [firstKid, secondKid] = kids;
  const ryan = man;
  const veronique = woman;
  const dominic = kids[1];
  const melanie = kids[0];
  const numbers = [1, 2, 3, 4, 5];
  const persons ={name: 'Ryan', age: 46, occupation: 'Truck Driver'};
  for(const person in persons) {
    console.log(persons[person]);
  }

  for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
  }

  
  const appendFirstDiv = (heading) => {
    const divs = document.querySelectorAll('div'); // Assuming 'div' is a NodeList
    if (divs.length > 0) {
      document.body.appendChild(divs[0]);
    }
  };

  // Call the function
  appendFirstDiv('Your Heading Here');


  // Update HTML Content
  const familyInfoElement = document.getElementById('family-intro');
  if (familyInfoElement) {
    familyInfoElement.innerHTML += `We are the ${man.lastName} family. We have a ${pets.type} named ${pets.name}. Let us introduce ourselves. My name is ${man.firstName}, my kids are named ${firstKid.firstName} and ${secondKid.firstName}. My ${woman.title1}'s name is ${woman.firstName}. She is a ${woman.occupation}, and I am a ${man.occupation}.`;
  }

  // Get and update family members list
  const ulElement = document.querySelector('.familyMembers');
  if (ulElement) {
    let familyMembers = [man, woman, ...kids];
    familyMembers.forEach((member) => {
      let li = document.createElement('li');
      li.textContent = member.firstName + ' ' + member.lastName;
      ulElement.appendChild(li);
    });
  }

  function getFullName(member) {
  return member.firstName + ' ' + member.lastName;
}

console.log(getFullName(ryan)); 


function isAdult(member, adultAge = 18) {
  return member.age >= adultAge;
}

console.log(isAdult(man)); // true
console.log(isAdult(dominic)); // false (assuming the kid's age is below 18)

if (isAdult(man) === true) {
   console.log('true');
} else {
  console.log('false');
}

function canCook(person) {
  return person.canCook;
}

function getFullName(member) {
  return member.firstName + ' ' + member.lastName;
}

console.log(getFullName(ryan));

function isAdult(member, adultAge = 18) {
  return member.age >= adultAge;
}

console.log(isAdult(man)); // true
console.log(isAdult(dominic)); // false (assuming the kid's age is below 18)

function listOccupations(family) {
  const occupations = [family.man.occupation, family.woman.occupation];
  return `Occupations in the family: ${occupations.join(', ')}`;
}

function reportKidsSchoolStatus(family) {
  family.kids.forEach((kid) => {
    const status = kid.school
      ? `${kid.firstName} is in school at ${kid.school}.`
      : `${kid.firstName} is not in school.`;
    console.log(status);
  });
}

reportKidsSchoolStatus(family);
function findFamilyMembersByRole(family, role) {
  switch (role.toLowerCase()) {
    case 'father':
      return getFullName(family.man);
    case 'mother':
      return getFullName(family.woman);
    case 'child':
      return family.kids.map((kid) => getFullName(kid)).join(', ');
    default:
      return 'Role not found';
  }
}

console.log(findFamilyMembersByRole(family, 'child'));
// function createFamilyGreeting(family) {
//   const kidsNames = family.kids.map((kid) => kid.firstName).join(' and ');
//   return `Hello from the ${family.man.lastName} family! We are ${family.man.firstName}, ${family.woman.firstName}, ${kidsNames}, and our pet ${family.pets.name}!`;
// }

// console.log(createFamilyGreeting(family));

// for (let i = 0; i < dominicNicknames.length; i++) {
//   console.log(dominic.nickname[i]);
// }



  // const details = document.createElement('div');
  // const mainDiv = document.querySelector('.mainContent');
  // details.innerHTML = ' <h2> </h2>';
  // details.innerText = 'Lets describe the family';
  // mainDiv.appendChild(details);



  

  // Capitalize headings
  document.querySelectorAll('h1, h2').forEach((element) => {
    element.textContent = toTitleCase(element.textContent);
  });

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  //Main Div
  const ryanSection = document.querySelector('#ryan');
  const details = document.createElement('div');
  details.innerHTML = ' <h2>Ryan\'s section</h2>';
  ryanSection.appendChild(details);


  const veroniqueSection = document.querySelector('#veronique');
  const details2 = document.createElement('div');
  details2.innerHTML = ' <h2>Veronique</h2>';
  veroniqueSection.appendChild(details2);

  onclick = function() {
    // Select the elements
    let element1 = document.querySelector('#ryan');
    let element2 = document.querySelector('#veronique');
    
    if (element1.classList.contains('mouseOver') && element2.classList.contains('mouseOver')) {
      // Remove the mouseOver class from both elements
      element1.classList.remove('mouseOver');
      element2.classList.remove('mouseOver');
    } else {
      // Add the mouseOver class to both elements
      element1.classList.add('mouseOver');
      element2.classList.add('mouseOver');
    }
  }


  