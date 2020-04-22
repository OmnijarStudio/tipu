# Tipu

[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![macOS](https://img.shields.io/badge/os-macOS-green.svg?style=flat)]()
[![Linux](https://img.shields.io/badge/os-linux-green.svg?style=flat)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://opensource.org/licenses/MIT)
[![Twitter: @omnijarstudio](https://img.shields.io/badge/contact-@omnijarstudio-blue.svg?style=flat)](https://twitter.com/omnijarstudio)

**Tipu** is a lightweight JavaScript logging API for modern browsers.

## Installation
**With Yarn:**
```bash
$ yarn add tipu
```
**With NPM:**
```bash
$ npm install tipu
```

## Builds
Tipu has four build versions: ES, CommonJS, AMD, and UMD.

**ES, CommonJS:**
```javascript
import * as log from 'tipu';
```
**AMD:**
```javascript
import * as log from 'tipu/index.amd';
```
**UMD:**
```javascript
import * as log from 'tipu/index.umd';
```

## Examples

### Initializing the logging API
```javascript
import * as log from 'tipu';

log.warn('Looking good!');
```

## License

MIT, see [LICENSE](https://github.com/omnijarstudio/tipu/blob/master/LICENSE) for details.