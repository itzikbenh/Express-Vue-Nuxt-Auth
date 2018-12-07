# Express + Vue + Nuxt + Auth


This is a basic demo of a user authenticaion system written in Node.js Express and consumed by Vue.js using [Nuxt](https://nuxtjs.org/).

This is basically a Nuxt version of this [repo](https://github.com/itzikbenh/Express-Vue-Auth) with some changes to the backend. I improved the code by adding controllers to make code "cleaner". At least for me :)

For detailed explanation on how Nuxt works, checkout [Nuxt.js docs](https://nuxtjs.org).

## Installation & Build Setup
This app uses MySQL for the Database and you'll also need to globally install [Knex.js](https://knexjs.org/#Migrations-CLI) to run the migrations. 
Download/clone the project and then run in the root directory.
```sh
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev 

# build for production and launch server
$ npm run build
$ npm start
```

Make sure to run the knex migrations from the `/server` directory, which is where the backend code is. 


## Auth Strategy
I decided that I want to have the ability to track all user's logins and allow him to log himself out from all devices. Each logged in device has its own JWT that is stored inside the `user_logins` JSON column in the `users` tables, and in an `httpOnly` cookie as well. In production you'd also want to add the `secure` flag to your cookies.
Once a user logs out, the JWT is removed from the cookie and from the Database as well. If he logs out from all devices then we will delete everything in the `user_logins` column. 
This way we can easily invalidate tokens and also provide good UX to the user in which we keep him logged in, in other devices even if he logs out from the current one. 

You can of course change this strategy and decide that a user can only have one login token with very little code modification. 



## JWT secret
I'm storing my secret inside a `.env` file. So create one. I'm using the [dotenv](https://www.npmjs.com/package/dotenv) package for this. Keep in mind that your secret must be a secret. Don't publicly share it if you use one in production. 
To generate the secret I ran and copied to `.env` file this
```js
const crypto = require('crypto');
console.log(crypto.randomBytes(256).toString('base64'))
```
`.env` file
```
JWT_SECRET=PASTE HERE YOUR SECRET
```
This is by no means the best way to generate a secret so do your research. Depending on your needs a public/secret key pair might be a better option. 


In order to test that you can reset your password, ask for a reset link and then grab the `reset_token` from the DB and navigate to `/password/reset/:token`.

# Note
Keep in mind that this is just for demo purposes. I haven't tested this in production. It's on you if you copy it as is. With that said, if you see any security issues, please create an issue so I can address it. 