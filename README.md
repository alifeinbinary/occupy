# Occupy: The Movie website

This project was bootstrapped with [Vite](https://vitejs.dev/guide/) and built using [React](https://react.dev) + [Tailwind CSS](https://tailwindcss.com). It is provided as

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\

You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn preview`

This allows you to preview the built application as it would appear once deployed.

The build is minified and the filenames include the hashes.

### Deployment

I've chosen to deploy to Netlify, the steps are as follows.

Install Netlify-CLI

### `npm i -g netlify-cli`

Initialise a Netlify project

### `ntl init`

Assuming you've already run the build command, deploy your the project to a draft site with:

### `ntl deploy`

And if after checking the draft URL provided by the CLI everything looks okay

### `ntl deploy --prod`

to deploy the site to your production URL.
