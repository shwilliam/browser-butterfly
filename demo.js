import {spawnButterfly} from './dist/browser-butterfly'

document
  .getElementById('butterfly-btn')
  .addEventListener('click', () => spawnButterfly())
