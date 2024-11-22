## Project Setup - Install dependencies

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### My approach

To begin, I'm not used to Vue3 or Tailwind, so first step was to learn how to use Vue3 by watching tutorials and reading documentation. Then I went on the Tailwind website to see what it has to offer.

I first decided to seek for a Tailwind template to use as a base for my page. I ended up finding a design that could fit my needs. With this design, I decided what I would display and the interactions I would have on this page :

- Display up to 3 cards which display tourism destinations
- Have a onClick event to switch the image with the place of the destination

But this interaction did not fit the template since the images could be too little depending on the screen size. So I finally went for an onClick event which scrolls to an other template with more details about the destination. Since the time was pretty short for this test, I ended up looking for another template on the Tailwind website, and selected the one which fit the most.

I also choosed this interaction because it fit the needs of the test, such as a transition to another element and some effects from the Vue Composition API. I went for 3 elemnts because I wanted to add some dynamic elements into the code.

CardItem displays a tourist destination
CardDetails displays the tourist destination details
App dynamically handles the display of these two elements

I placed the mocked data in a seperate file to enhance code lisibility
Typing are in utils/common.ts
You can find images in public/images
