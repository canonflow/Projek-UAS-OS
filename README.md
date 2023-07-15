# Projek UAS OS

- Menggunakan HTML, CSS, Javascript, Tailwind CSS, dan Daisy UI

# Start
## Install Tailwind CSS
```console
npm install -D tailwindcss
npx tailwindcss init
```

## Install devDependencies
```console
npm install
```

<br />

# Config and Compile Tailwind CSS File
## Config
- Open tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html, js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [
    require("daisyui"),
  ],
}
```

## Compile
```console
npx tailwindcss -i ./src/main.css -o ./dist/output.css --watch
```
