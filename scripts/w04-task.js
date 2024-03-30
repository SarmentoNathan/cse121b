/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Nathan Luan Dutra Sarmento",
    photo: "images/foto-nathan.jpg",
    favoriteFoods: ['Pizza','Barbecue','Rubacão','Chocolate','Fish','Arrumadinho'],
    hobbies: ['Going out with my family','Watch soccer','Watch animes','Play soccer'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'João Pessoa',
        length: '25 years'
    }
    );

    myProfile.placesLived.push(
        {
            place: 'Campina Grande',
            length: '5 years'
        }
    );
    
    myProfile.placesLived.push(
    {
        place: 'Minas Gerais',
        length: '2 years'
    }
    );

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photo);
document.querySelector('#name').setAttribute('alt',myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let ul = document.createElement('li');
    ul.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

