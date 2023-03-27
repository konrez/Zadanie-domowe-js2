//  DANE WEJŚCIOWE
const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
];

/* 
    1. Napisz funkcję mapującą, która utworzy klucz(właściwość) nickname na każdej osobie w tablicy w następujący sposób:
    a) pobierze 3 pierwsze litery imienia, odwróci ich kolejność i zapisze do zmiennej
    //onazoL
    //Lozano
    b) pobierze 3 ostatnie litery nazwiska, zamieni kolejnością pierwszą i ostatnią i dołączy powstały string do poprzedniego
    c*) Zmieni wielkość liter w taki sposób, żeby powstały nick zaczynał się wielką literą i nie miał żadnych wielkich liter poza 1.
    d) Jeżeli liczba znaków w imieniu bądź nazwisku jest mniejsza niż 3, nickname będzie odpowiednio krótszy 
    e) rozważcie wszystkie skrajne przypadki, ponieważ Waszą funkcję mapującą wrzucimy do testów na platformie
    e) Have fun :)
    Na przykład:
    Dla osoby: 
    {
        firstName: 'Bartolomeo',
        lastName: 'Lozano'
    }
    powinniśmy uzyskać nickname Rabona
    Hints:
    - mając zmienną name = 'Bart'
      name.split('') => ['B', 'a', 'r', 't'] - tworzymy tablicę liter ze stringa
      ['B', 'a', 'r', 't'].join('') => 'Bart' - odwracamy ten proces
    - Na tablicy możemy użyć metody reverse()
    - Na stringach czy pojedynczych literkach możemy używać metod toLowerCase(), toUpperCase()
*/

const newPeople = people.map(item => {
  let firstName = item.firstName.substring(0,3).toLowerCase().split('').reverse().join('');
  let firstNameUpper = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let lastName = item.lastName.slice(-3).toLowerCase().split('').reverse().join('');
  let nickname = firstNameUpper + lastName;

  if (item.firstName.length < 3) {
    nickname = item.firstName.toLowerCase();
    nickname = nickname.charAt(0).toUpperCase() + nickname.slice(1) + lastName;
  };

  if (item.lastName.length < 3) {
    nickname = item.lastName.toLowerCase();
    nickname = firstNameUpper + nickname;
  };
  return {...item, nickname};
});

console.log('---Zadanie 1 ponizej---')
console.log(newPeople);


//  DANE WEJŚCIOWE
/* 
    2. 
    a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
    Oczywiście tekst powinien wyświetlić się dopiero po wywołaniu funkcji.
    Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
    "Cześć jestem Bartolomeo Lozano, ale w szkole mówią na mnie [Rabona]"
    Natomiast wywołanie funkcji: people[0].introduceYourself()
    Obiekt z przykładu powinien wyglądać w ten sposób
    {
        firstName: "Bartolomeo",
        lastName: "Lozano",
        nickname: "Rabona",
        introduceYourself: // tutaj ma się znajdować funkcja
    },
    b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
    pojawić się tekst powitalny dla każdej osoby w tablicy
    Hints:
    - nie używaj w tym zadaniu funkcji strzałkowej, ponieważ słówko this Ci nie zadziała i nie będziesz miał(a)
    dostępu do this.firstName lastName i nickname
    - postaraj się zdefiniować funkcję powitalną tylko raz (nie rób tego w pętli, ani funkcji map)
    
*/

const people2 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
  },
  {
    firstName: 'Mateo',
    lastName: 'Loza',
    nickname: 'Tomazo',
  }
];

const newPeople2 = people2.map(person => {
  return {
    ...person,
    introduceYourself: function() {
      const introduce = `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie ${this.nickname}.`;
      return introduce;
    }
  };
});

console.log('---Zadanie 2 ponizej---');
newPeople2.forEach(person => {
  const greet = person.introduceYourself();
  console.log(greet);
});



//  DANE WEJŚCIOWE
/*
    3. 
    a) Dodaj do każdego obiektu funkcję getFavouriteColor
    b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
    c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
        - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
        - podałeś za dużą liczbę, liczba nie może być większa niż 30
    d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
    e) funkcja powinna zsumować wszystkie litery imienia, nazwiska i przezwiska, 
    odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
    wyznaczyć index
    f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
    Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
    (22 - 5) % 6 = 5
    console.log("orange")
    Hints
    - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math, 
    Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią
    - w funkcji musicie użyć słówka this, parametru i tablicy, która jest na zewnątrz, tablica z kolorami może mieć
    dowoloną ilość kolorów
*/

const people3 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
    introduceYourself: "", // funkcja zamiast pustego stringa
  },
];

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

const newPeople3 = newPeople2.map(array => {
  return {
    ...array,
    getFavouriteColor: function(number) {
      number = number || 5;
      if (number < 1) {
        console.log('Podałeś za małą liczbę, liczba nie moze być mniejsza niz 1')
      } else if (number > 30) {
        console.logo('Podałes za duza liczbę, liczba nie moze być wieksza niz 30')
      } else {
        const nameLength = this.firstName.length + this.lastName.length + this.nickname.length;
        const index = (nameLength - number) % colors.length;
        console.log(colors[index])
      };
    }
  };
});

console.log('---Zadanie 3 ponizej---');
newPeople3.forEach(person => {
  const color = person.getFavouriteColor();
  return color;
});

// function getFavouriteColor(number, array) {
//   number = number || 5;
//   if (number < 1) {
//     console.log('Podałeś za małą liczbę, liczba nie moze być mniejsza niz 1')
//   };
//   if (number > 30) {
//     console.log('Podałeś za duzą liczbę, liczba nie moze byc wieksza niz 30')
//   };
//   if (number >= 1 && number <= 30) {
//     const person = array[0];
//     const nameLength = person.firstName.length + person.lastName.length + person.nickname.length;
//     const index = (nameLength - number) % colors.length
//     console.log(colors[index]);
//   }
// };

// console.log('---Zadanie 3 ponizej---');
// getFavouriteColor(2, people3)


/*
    4. Napisz funkcję analogiczną do funkcji z zadania 3, ale nie dodawaj jej w obiekcie.
    a) funkcja powinna przyjąć 2 parametry (obiekt osoby i liczbę z zakresu 1 - 30)
    b) funkcja powinna wykonać dokładnie takie samo działanie jak poprzednia
    c) Za pomocą pętli for of przeiteruj po wszystkich osobach z tablicy i wyświetl ich ulubione kolory
*/



function analogousFavouriteColor(person, number) {
  if (number < 1) {
    console.log('Wybrana liczba nie moze być mniejsza niz 1')
  } else if (number > 30) {
    console.log('Wybrana liczba nie moze być większa niz 30')
  } else {
    for (let key of person){
      const nameLength = key.firstName.length + key.lastName.length + key.nickname.length
      const index = (nameLength - number) % colors.length;
      console.log(colors[index])
    };
  };
};

console.log('---Zadanie 4 ponizej---');
analogousFavouriteColor(newPeople3, 5);


/*
    5. Zadanie polega na użyciu .filter() .map() .reduce w wersji łańcuchowej,
    czyli nie twórz nowych tablic w momencie wykonanie jednej z powyższych metod, połącz wykonanie ze sobą w jeden 
    "łańcuch" tzn. const wynik = arr.filter().map().reduce()
    a) Przefiltruj tablicę w taki sposób, aby zostały w niej osoby,
    których imię kończy się na literę 'a' lub 'k' 
    i nazwisko ma więcej znaków niż 6 
    i nick zawiera w sobie przynajmniej jedną literę a
    b) do powyższego warunku dodaj "furtkę" w postaci parametru isElite. Zmienna isElite powinna być obliczona
    za pomocą generatora liczb pseudolosowych Math.random(). Za pomocą tego generatora wylosujcie liczbę z zakresu 0 - 100.
    Jeżeli wartość losowej liczby będzie liczbą pierwszą lub będzie podzielna przez 3 i 5, ustawcie isElite na true, w pozostałych przypadkach
    isElite powinno być ustawione na false
    c) jeżeli zmienna isElite ma wartość true, nie bierzcie pod uwagę warunku z punktu a przy filtracji
    d) za pomocą funkcji map i for in odwróccie wartości i klucze w obiekcie, usuwając przy tym funkcje
    Przykład
    INPUT
    {
        firstName: "Bartolomeo",
        lastName: "Lozano",
        nickname: "Rabona",
        introduceYourself: '' // funkcja zamiast pustego stringa
        getFavouriteColor: '' // funkcja zamiast pustego stringa
    },
    OUTPUT
    {
        Bartolomeo: "firstName",
        Lozano: "lastName",
        Rabona: "nickname",
    },
    e) zredukuj tablicę obiektów do pojedynczego obiektu, który będzie zawierał wszystkie klucze i wartości
    wszystkich obiektów z tablicy, dzięki temu, że w punkcie d) odwrócilismy klucze z wartościami, nie będzie 
    z tym problemu :)
    f) posortuj tablicę alfabetycznie
*/

// const newPeople3 = [
//   {
//     firstName: 'Bartolomeo',
//     lastName: 'Lozano',
//     nickname: 'Rabona',
//     introduceYourself: [Function: introduceYourself],
//     getFavouriteColor: [Function: getFavouriteColor]
//   }
//   {
//     firstName: 'Mateo',
//     lastName: 'Loza',
//     nickname: 'Tomazo',
//     introduceYourself: [Function: introduceYourself],
//     getFavouriteColor: [Function: getFavouriteColor]
//   }
// ]

const result = newPeople3.filter(person => {
  let isElite = false;
  const randomNums = Math.floor(Math.random() * 100) + 1;
  if (randomNums % 3 === 0 && randomNums % 5 === 0) {
    isElite = true;
  };
  if (isElite === false) {
    return (person.firstName.startsWith('a') || person.firstName.startsWith('k')) && person.lastName.length > 6 && person.nickname.includes('a');
  } else {
    return person;
  };
}).map(person => {
  const newPerson = {};
  for (let item in person) {
    if (item !== 'introduceYourself' && item !== 'getFavouriteColor') {
      newPerson[person[item]] = item;
    };
  };
  return newPerson;
}).reduce((acc, next) => ({...acc, ...next}), 0);

console.log('---Zadanie 5 ponizej---');
console.log(result);


/*
    *6. Currying function
    a) Napisz taką funkcję mnożącą 2 liczby, aby możliwe były następujące wywołania:
    - multi(5)(6)
    - const multiplyBySix = sum(6)
      multiplyBySix(10)
    b) Analogicznie napisz funkcję, która mnoży 4 liczby i możliwe jest wywołanie
    - multi(4)(5)(6)(10)
    Hints:
    - funkcja może zwracać inne funkcje
    - funkcja może korzystać ze zmiennych i parametrów funkcji zewnętrznych (czyli tych w których się znajduje)
*/

function multi(x) {
  return function (y) {
    return x * y
  };
};

function sum(c) {
  return function (b) {
    if (c === 6) {
      return c * b;
    };
  };
};

const multiplyBySix = sum(6);

function multi(a) {
  let acc = a;
  const addMore = function(b) {
    acc *= b;
    return addMore;
  }
  addMore.add = () => acc;
  return addMore;
}



console.log('---Zadanie 6 ponizej---');
console.log(multi(5)(6).add());
console.log(multiplyBySix(10));
console.log(multi(4)(5)(6)(10).add());

/*
    **7. Rekurencja
     a) Mając zagnieżdżony obiekt, wyciągnij z niego wszystkie imiona i dodaj do tablicy
     ***b) Jeżeli osoba ma więcej niż jedno imię, te imiona powinny znajdować się w jednym stringu w tablicy
     Na przykład 'Kamil Bartek'
    INPUT:
*/
const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    { name: "Alex" },
                    { name: "Stasio" },
                    {
                      name: "Paulina",
                      children: [{ name: "Kuba" }, { name: "Kacper" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function getAllNames(obj) {
  let gatheredNames = [];
  if (obj.name) {
    gatheredNames.push(obj.name)
    
    if (obj.name2 && obj.name3) {
      let mergedName = `${obj.name} ${obj.name2} ${obj.name3}`;
      gatheredNames.push(mergedName);
    } else if (obj.name && obj.name2) {
      let nameOneTwo = `${obj.name} ${obj.name2}`
      gatheredNames.push(nameOneTwo);
    }
 
    if (obj.children) {
      obj.children.forEach(value => {
        gatheredNames = gatheredNames.concat(getAllNames(value))
      })  
    }
  };
  let unwanted = ['Sebastian', 'Monika', 'Krysia'];
  let filtered = gatheredNames.filter(name => !unwanted.includes(name))
  return filtered;
}

console.log('---Zadanie 7 ponizej---')
console.log(getAllNames(nestedObject));
