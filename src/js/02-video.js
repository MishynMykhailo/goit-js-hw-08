import Player from '@vimeo/player';
const _ = require('lodash');

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const previousVideoProgress = localStorage.getItem(LOCALSTORAGE_KEY);

if (previousVideoProgress){
    player.setCurrentTime(Number(previousVideoProgress))
}


player.on('timeupdate', _.throttle(onTimeUpdate, 1000));
function onTimeUpdate (e){
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(e.seconds))
}

