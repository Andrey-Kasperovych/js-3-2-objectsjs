/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// const { name, rating, tracks, trackCount, corsar = 'anonymus' } = playlist;
// console.log(rating, tracks, corsar);

// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.tracks,
//     playlist.trackCount,
// );

// const {
//     name,
//     rating,
//     tracks,
//     trackCount,
//     trackCount: numberTrack,
//     author = [1, 3, 5],
// } = playlist;

// console.log(name, rating, tracks, trackCount, numberTrack, author);

// console.log(playlist);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     stats: { views: middle = 999, followers, likes },
// } = profile;

// console.log(middle, followers, likes);

/*
 * Деструктуризация массивов
 */

const rgb = [255, 100, 80, 555];

const [one, , three] = rgb;

console.log(one, three);

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

// const keys = Object.keys(authors);

// console.log(keys);

// let maxRating = 0;
// let nameMaxRating;

// for (const key of keys) {
//     if (authors[key] > maxRating) {
//         maxRating = authors[key];
//         nameMaxRating = key;
//     }
//     continue;
// }

// console.log(nameMaxRating, maxRating);

const entries = Object.entries(authors);

console.log(entries);

let maxRating = 0;
let nameMaxRating;

// for (const entry of entries) {
//     console.log(entry);

//     if (entry[1] > maxRating) {
//         maxRating = entry[1];
//         nameMaxRating = entry[0];
//     }

//     continue;
// }

// console.log(
//     `Имя и значение свойства обьекта с максимальным рейтингом ${nameMaxRating}: ${maxRating}`,
// );

for (const [name, rating] of entries) {
    console.log(name, rating);
    if (rating > maxRating) {
        maxRating = rating;
        nameMaxRating = name;
    }
}

console.log(`Имя ключа с максимальным рейтингом - ${nameMaxRating}`);
console.log(
    `Имя и значение свойства обьекта с максимальным рейтингом ${nameMaxRating}: ${maxRating}`,
);

/*
 * Операция rest (сбор)
 */
// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, stats, ...restProp } = profile;

// console.log(restProp);
// console.log(name, stats);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

const showProfileInfo = function ({
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
    console.log(name, tag, location, avatar, followers, views, likes);
};

const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

showProfileInfo(profile);
