
<h1 align="center">nanokit-container</h1>
<div align="center">
  <strong>Container component for React Native</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/nanokit-container">
    <img src="https://img.shields.io/npm/v/nanokit-container.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/nanokit-container">
  <img src="https://img.shields.io/npm/dm/nanokit-container.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/nanokit-container">
    <img src="https://img.shields.io/travis/tiaanduplessis/nanokit-container.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/nanokit-container/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/nanokit-container.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/nanokit-container/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/nanokit-container.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/nanokit-container/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/nanokit-container.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20nanokit-container!%20https://github.com/tiaanduplessis/nanokit-container%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/nanokit-container.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/nanokit-container/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/nanokit-container.svg)](https://greenkeeper.io/)

```sh
$ npm install nanokit-container
# OR
$ yarn add nanokit-container
```

## Usage

```js
import {Text} from 'react-native'
import Container from 'nanokit-container'

const Foo = () => <Container />
const Baz = () => <Container center backgroundColor="tomato"><Text>Hi</Text></Container>
```

## Props

In addition to the [`View PropTypes`](https://facebook.github.io/react-native/docs/view.html), some useful shorthand properties are provided: 

<table style="width:80%">
  <tr>
    <th>Property</th>
    <th>Description</th> 
    <th>Default Value</th>
  </tr>
    <tr>
    <td><code>center</code></td>
    <td>Center children</td> 
    <td></td>
  </tr>
    <tr>
    <td><code>padding</code></td>
    <td>Add padding to the View</td> 
    <td><code>0</code></td>
  </tr>
      <tr>
    <td><code>backgroundColor</code></td>
    <td>Set the background color of the View</td> 
    <td><code>#fff</code></td>
  </tr>
  </table>

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/nanokit-container/issues).

## License

Licensed under the MIT License.
