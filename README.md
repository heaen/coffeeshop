# Usage

To use this example you have to have Node.js installed and a package manager with it. I recommend using yarn, but npm will work just as fine for a simple example like this.

Install packages and run startup script:

```
npm install
npm start
```

or

```
yarn
yarn start
```

ESLint is used to check your JS code for errors, so make sure to install the following extension in VS Code: `dbaeumer.vscode-eslint`.

Parcel will then start a development webserver and use your index.html as an entrypoint. It will then resolve references to CSS and JS files and compile these automatically whenever a file is saved.

You can configure additonal PostCSS plugins inside `.postcssrc` and change the supported browsers for autoprefixer inside `.browserslistrc`. I have included Internet Explorer 9 for testing purposes.

Parcel also transpiles your modern JavaScript using the `browserslistrc` config as a reference tu support older browsers. This is done using the config in `babelrc`.

After compilation you can check the dist folder to see what Parcel has written to the output files.

## References

[https://parceljs.org/javascript.html](https://parceljs.org/javascript.html)

[https://parceljs.org/css.html](https://parceljs.org/css.html)

[https://babeljs.io/docs/en/babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)

[https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring)
