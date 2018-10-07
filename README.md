# Webpack and React mini guide

Hey Ravi. Here is a small starter that should help you understand how to setup a project with Webpack and React.

## Basic needs

1. Install node.js here: https://nodejs.org/en/
2. Install Yarn here: https://yarnpkg.com/en/ Why yarn? It's been more dependable for me, and I believe handles dependencies better than npm. If you don't want to use Yarn, you can just use npm commands instead (npm install --save, npm install --save-dev etc.)
3. Install VSCode here: https://code.visualstudio.com/ Why VSCode? Because Visual Studio is slow and isn't the best editor for Front End Development.
   - Some nice packages to install (optional)
   - Import Cost - Shows how big each library is when you import it.
   - GitLens - Useful commands and a nice view history for Git projects
   - npm Intellisense - Helps autocomplete filenames when importing
   - Prettier - Code formatter
   - Prettify JSON - formats your JSON files
4. Familiarize yourself with the React docs: https://reactjs.org/ and the webpack docs: https://webpack.js.org/concepts/

## Running the starter project

1. In VSCode bring up the terminal/command terminal by hitting "Ctrl + `" or hitting Ctrl + Shift + P (this is the search all available options menu) and typing "open new terminal"
2. type "yarn" into the terminal and hit enter. This will install all the dependencies you'll need, specified in the `package.json` file at the root of the project.
3. type "yarn build:dev". This will run webpack's development server.
4. Go to localhost:8080 in your browser.

It's a good idea to install the React Developer Tools found here, this will enable you to inspect your React Components in the browser: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

## Starting from scratch

These instructions assume you're going to start from scratch with an empty folder.

1.  open your folder in VSCode and bring up the command terminal. Type yarn init. It will ask you a series of questions. Don't worry if you don't know the answer to all of them, you can just keep hitting enter. The settings are all changeable in the package.json file it will create.
2.  Install webpack by running the `yarn add --dev webpack webpack-cli`. This will install webpack and create a folder called node_modules. This is where all of your dependencies, and your dependencies dependencies ;-D will live. The --dev flag passed into yarn says to save it as a development dependency, which won't be added to the final build that you ship to customers.
3.  Create a `index.html` file with some basic html with a script tag like this: `<script src="./dist/bundle.js"></script>` inside the body tag.
4.  Create a `src` folder and a `dist` folder in the root of the project. The src will hold all of our components, the dist is going to be our build output from webpack.
5.  Create a index.js file inside of the src folder. Add a `console.log('hello world')` for now.
6.  Create a `webpack.config.js` file. Here's where we can adjust the configuration and add plugins for webpack, and also tell it where to send our bundled output. Let's add the basic setup which will send the output to our `dist` folder.

```
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

7. Add a "scripts" field above the dependencies field to the `package.json` like so:

```
  "scripts": {
    "build:dev": "webpack --config webpack.config.js --mode development",
    "build:prod": "webpack --config webpack.config.js --mode production"
  },
  devDependencies: {...}
```

8. You should be able to run `yarn build:dev` and it'll create a bundle in the dist folder. Running `yarn build:prod` will create a minified version of the bundle to the dist folder.

9. Install react by running: `yarn add react react-dom`. (don't add --dev here because we need this shipped to the browser)
10. Install Babel compiler and presets needed to run React: `yarn add --dev @babel/core babel-loader @babel/preset-env @babel/preset-react html-webpack-plugin`.
11. Let webpack know that it needs to pass files through babel first by adding a rules property to the module.exports object in `webpack.config.js`

```
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: './index.html'
    })
  ]
};
```

12. Create a `.babelrc` file to tell babel that we are using React and to use the latest JavaScript language features. Add this:

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

13. Let's add some React! Open the `index.js` file and add a component, like so:

```
import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  render() {
    return <div>React is my new best friend!</div>;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
```

Do you see that `document.getElementById("root")`? We don't have that in our `index.html` file, so let's add it in. Add a div with an id of root.
`<div id="root"></div>` This tells react where to render the app.

14. Try building the bundle again with `yarn build:dev`. Looking good!
15. Having to build every time we change something is very efficient. Let's add a development server to serve our project and watch for changes. Install webpack's dev server with `yarn add --dev webpack-dev-server`.
16. Let's add some dev server options to our `webpack.config.js` like so:

```
  devServer: {
    port: 8080,
    open: true
  }
```

this sets our port number and opens the browser for us after it compiles. There are many options you can add and can be found in the docs.

17. Now lets add the ability to import our CSS styling into our React project. install webpack's style loader: `yarn add --dev style-loader css-loader` and add the loader to our `webpack.config.js`

```
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}
```

18. We'll probably need some images too so let's add that: `yarn add --dev file-loader`, and add that to our `webpack.config.js`

```
{
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader'
  ]
}
```

19. Now we can import css and images like so:

```
import './styles.css';
import Logo from '../assets/react.png'; //You can call this anything, Logo, AwesomeImage, whatever
```

20. Success! Run `yarn build:dev` again and you now have a working project. This is just the basics, there are a lot of loaders and customizations that you can do but those are all dependent on your project and how you want to structure your workflow. We use TypeScript and I highly recommend it. I would also recommend using Jest for testing your react components.
