# Happy Watching
Happy watching is an application to search for TV shows. The user can read details about the show, see episodes that are comming up and mark shows as favourites. The shows are fetched from: https://www.tvmaze.com/api

## To build the project

```bash
# 1. Install dependencies
$ yarn install

# 2. Serve with hot reload at localhost:3000
$ yarn dev
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Tools 
### `Nuxt 2`
The application is build with Nuxt 2. I chose Nuxt because I think it makes developing in Vue much easier, with auto-imported components, routing, vuex store etc. Ideally I would use the latest version of Nuxt (3), but since I have more experience with Nuxt 2 I thought it would be faster and I could put more effort in designing the application, instead of learning Nuxt 3.

### `API`
The API that was used for getting the information about the tv shows was: https://www.tvmaze.com/api.

### `Styling`
I have used SCSS to style the application and also used Bootrstap vue in to easily create nice and responsive components, like the navbar. Some styling are written with bootstrap classes, but I prefer tot write my own styling with SCSS.

If I had more time I would probably research for a popular component-library for Vue applications and use that together with SCSS instead.

### `Store`
The Vuex store that is included in Nuxt 2 was used to store the shows that the user had marked as favourites.

### `What was left out`
The project does not use Typescript, even though I prefer it over plain Javascript. The reason for this is that I have not used Typescript with Vue before  (have used it when building applications with React and Angular), and reason that it would be more time consuming. However if I had more time I would defnitely rewrite it with Typescript. 
