import Vimeo from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const loadPlayTime = () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
};

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const throttledOnPlay = throttle(onPlay, 1000);
player.on('timeupdate', throttledOnPlay);

document.addEventListener('DOMContentLoaded', loadPlayTime);