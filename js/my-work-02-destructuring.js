/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};

const {
    name,
    rating,
    tracks,
    trackCount,
    trackCount: numberTrack,
    author = [1, 3, 5],
} = playlist;

console.log(name, rating, tracks, trackCount, numberTrack, author);

console.log(playlist);
