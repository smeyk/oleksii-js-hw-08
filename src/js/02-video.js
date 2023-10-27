import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_TIME_KEY = "videoplayer-current-time";

const getCurrentTime = function (data) {
	localStorage.setItem(STORAGE_TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

if (localStorage.getItem(STORAGE_TIME_KEY)) {
	player.setCurrentTime(localStorage.getItem(STORAGE_TIME_KEY));
}