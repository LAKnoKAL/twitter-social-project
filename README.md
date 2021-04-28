# Twitter Social App - MVP

This project was bootstrapped with [Vite](https://vitejs.dev/)


## Development

Install all dependencies by run `npm install` in the project directory. <br>

Then you can run:

### `npm run dev`

It runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## All Scripts
```
"scripts": {
  // start dev server
  "dev": "vite",
  
  // build for production
  "build": "vite build --base=./",
  
  // locally preview production build
  "serve": "vite preview",
  "predeploy": "npm run build",
  
  // deploy to Github Pages
  "deploy": "gh-pages -d dist"
}
```

## Production

deploy to [gh-pages](https://laknokal.github.io/twitter-social-project/)
```
npm run deploy
```