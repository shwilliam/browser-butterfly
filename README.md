# Browser Butterfly

![Butterfly](https://user-images.githubusercontent.com/38357771/83575760-1a10dc00-a4e5-11ea-8a6f-e14f5a72bc83.gif)

## Usage

Link `/dist/browser-butterfly.js` in your HTML file.

```html
<script src="./path/to/browser-butterfly.js" type="module"></script>
```

This file exports the function `spawnButterfly` which, when called, spawns a butterfly
in a moving browser window.

```js
import {spawnButterfly} from './path/to/browser-butterfly'

document
  .getElementById('butterfly-btn')
  .addEventListener('click', () => spawnButterfly())
```

![Example usage](https://user-images.githubusercontent.com/38357771/83575763-1bda9f80-a4e5-11ea-9b05-145fb1af0e0d.gif)

Optionally, call `spawnButterfly` with an array of the horizontal and vertical
size of the butterfly you wish to spawn. Defaults to `[70, 70]`.

```js
spawnButterfly([100, 120])
```

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug
fixes/features in the [issues](https://github.com/shwilliam/browser-butterfly/issues).
If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/browser-butterfly)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/browser-butterfly/pull/new/master)
