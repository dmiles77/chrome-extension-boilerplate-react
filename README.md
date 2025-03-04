<img src="src/assets/img/icon-128.png" width="64"/>

# Chrome Extension (MV3) Boilerplate with React 18 and Webpack 5

[![npm](https://img.shields.io/npm/v/chrome-extension-boilerplate-react)](https://www.npmjs.com/package/chrome-extension-boilerplate-react)
[![npm-download](https://img.shields.io/npm/dw/chrome-extension-boilerplate-react)](https://www.npmjs.com/package/chrome-extension-boilerplate-react)
[![npm](https://img.shields.io/npm/dm/chrome-extension-boilerplate-react)](https://www.npmjs.com/package/chrome-extension-boilerplate-react)

## 📢 Latest Updates

✅ Built for Chrome Extensions using Manifest V3

✅ Supports Webpack Dev Server for auto-reloading

✅ Ready-to-use with TypeScript, React 18, and MUI

## 🎯 Features

🚀 React 18 powered UI components.

🔥 Modern JavaScript (ES6+), TypeScript, and Webpack 5 support.

⚡ Efficient development workflow with hot-reloading.

🎨 Customizable and lightweight extension template.

🔒 Follows best security practices for Chrome extensions.

This boilerplate is updated with:

- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/)
- [React 18](https://reactjs.org)
- [Webpack 5](https://webpack.js.org/)
- [Webpack Dev Server 4](https://webpack.js.org/configuration/dev-server/)
- [React Refresh](https://www.npmjs.com/package/react-refresh)
- [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)

This boilerplate is heavily inspired by and adapted from [https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate), with additional support for React 18 features, Webpack 5, and Webpack Dev Server 4.

## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= **18** using `node -v` command.
2. Clone this repository.
3. Run `npm install` to install the dependencies.
4. Run `npm run build`
5. Run `npm start`
6. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.

do not forget to modify the following:
  Change the package's `name`, `description`, and `repository` fields in `package.json`. (not mandatory)
  Change the name of your extension on `src/manifest.json`. (not mandatory)

## Structure

All your extension's code must be placed in the `src` folder.

The boilerplate is already prepared to have a popup, an options page, a background page, and optionally a new tab page (which replaces the new tab page of your browser) feel free to customize these.

## TypeScript

This boilerplate supports TypeScript - interfaces might be on a common global file in the future

## Webpack auto-reload and HRM

To make your workflow much more efficient this boilerplate uses the [webpack server](https://webpack.github.io/docs/webpack-dev-server.html) to development (started with `npm start`) with auto reload feature that reloads the browser automatically every time that you save some file in your editor.

You can run the dev mode on other port if you want. Just specify the env var `port` like this:

```
$ PORT=6002 npm run start
```

## Content Scripts

Although this boilerplate uses the webpack dev server, it's also prepared to write all your bundles files on the disk at every code change, so you can point, on your extension manifest, to your bundles that you want to use as [content scripts](https://developer.chrome.com/extensions/content_scripts), but you need to exclude these entry points from hot reloading [(why?)](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate/issues/4#issuecomment-261788690). To do so you need to expose which entry points are content scripts on the `webpack.config.js` using the `chromeExtensionBoilerplate -> notHotReload` config. Look the example below.

Let's say that you want use the `myContentScript` entry point as content script, so on your `webpack.config.js` you will configure the entry point and exclude it from hot reloading, like this:

```js
{
  …
  entry: {
    myContentScript: "./src/js/myContentScript.js"
  },
  chromeExtensionBoilerplate: {
    notHotReload: ["myContentScript"]
  }
  …
}
```

and on your `src/manifest.json`:

```json
{
  "content_scripts": [
    {
      "matches": ["https://www.google.com/*"],
      "js": ["myContentScript.bundle.js"]
    }
  ]
}
```

## Intelligent Code Completion

Thanks to [@hudidit](https://github.com/lxieyang/chrome-extension-boilerplate-react/issues/4)'s kind suggestions, this boilerplate supports chrome-specific intelligent code completion using [@types/chrome](https://www.npmjs.com/package/@types/chrome).

## Packing

After the development of your extension run the command

```
$ NODE_ENV=production npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Secrets

If you are developing an extension that talks with some API you probably are using different keys for testing and production. Is a good practice you not commit your secret keys and expose to anyone that have access to the repository.

To this task this boilerplate import the file `./secrets.<THE-NODE_ENV>.js` on your modules through the module named as `secrets`, so you can do things like this:

_./secrets.development.js_

```js
export default { key: '123' };
```

_./src/popup.js_

```js
import secrets from 'secrets';
ApiCall({ key: secrets.key });
```

:point_right: The files with name `secrets.*.js` already are ignored on the repository.

## Resources:

🔹 Chrome Extensions Docs
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [Chrome Extension API Reference](https://developer.chrome.com/docs/extensions/reference/)

🔹 React.js Docs
- [React Documentation](https://react.dev/)
- [React Hooks Guide](https://react.dev/reference/react)

🔹 Webpack Docs
- [Webpack Concepts](https://webpack.js.org/concepts/)
- [Webpack Configuration](https://webpack.js.org/configuration/)

🔹 MUI (Material-UI) Docs
- [MUI Documentation](https://mui.com/material-ui/getting-started/)
- [MUI Components](https://mui.com/material-ui/react-components/)


## 🎉 Contributing

Want to improve this boilerplate? Feel free to fork, modify, and submit a pull request!

💡 Issues & suggestions? Open a GitHub issue!

## 📌 License

This project is licensed under the MIT License. Feel free to use and modify it.

## 🚀 Happy coding! 🎨🛠🚀

Daniel Miles | [Website](https://dmiles77.github.io/)
