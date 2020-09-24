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

const { stats } = profile;

console.log(stats);

const { views } = stats;

console.log(views);
