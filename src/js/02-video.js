import Vimeo from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('play', function () {
  const time = localStorage.getItem('videoplayer-current-time');
  if (time) {
    player.setCurrentTime(time);
  }
});

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const throttledOnPlay = throttle(onPlay, 1000);
player.on('timeupdate', throttledOnPlay);
