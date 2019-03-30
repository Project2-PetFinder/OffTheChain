# offTheChain

> The all in one app for connecting pet owners with their lost pets!

## Motivation

> As pet owners who have personally lost pets ourselves, and having to go through the very stressful process of being reunited with them, we decided that their must be an easier way to go about finding lost pets using the aid of the internet and online databases. Why waste hours upon hours posting flyers all over town when you can have an app do all the legwork for you?

## Tech/framework used

<b>Front-End</b>
- HTML5
- CSS
- JavaScript
- Bootstrap 4 Material Kit
- Leaflet.js
- Tabulator.js

<b>Back-End</b>
- MySQL Database
- Sequelize
- Node.js
- Express
  
<b>Deployment</b>
- [Heroku](https://offthechain-app.herokuapp.com/)
  
## Team Members
1. [James Tobey](https://github.com/jctobey)
2. [Ritika](https://github.com/Ritikawesome)
3. [Mark Mayfield](https://github.com/themarcusaurelius)

## Demo
- [](https://giant.gfycat.com/BlindHomelyAntbear.gif)

![Recordit GIF](https://giant.gfycat.com/BlindHomelyAntbear.gif)



## File Structure
> How the files and directories are setup


```
offTheChain
.
├── config
│   ├── config.json
│   └── connection.js
|
├── models
│   ├── foundPet.js
│   ├── index.js
│   └── lostPet.js
|
├── public
|   ├── assets
|   │   ├── css
|   │   │   ├── custom.css
|   │   │   ├── material-kit.css
|   │   │   ├── material-kit.css.map
|   │   │   └── material.kit.min.css
|   │   ├── img
|   │   │   ├── faces
|   │   │   |   ├── james.jpg
|   |   |   |   ├── mark1.jpeg
|   │   │   |   └── ritika.jpg
|   |   |   ├── animalBanner.jpg
|   |   |   |   |── animalBanner1.jpg
|   |   |   |   ├── catDog.jpg
|   |   |   |   └── city-profile.jpg
|   |   |   ├── dog-wallpaper-3.jpg
|   |   |   ├── dog.jpg
|   |   |   ├── dog.png
|   |   |   ├── dogPic.jpg
|   |   |   ├── found.jpg
|   |   |   ├── foundPage.jpg
|   |   |   ├── kittay.png
|   |   |   ├── lostPage.jpg
|   |   |   ├── mapPage.jpg
|   |   |   ├── resultsPage.jpg
|   │   │   └── teamPage.jpg
|   |   ├── js
|   |   |   ├── GPreq
|   |   |   |   ├── getLostFoundPets.js
|   |   |   |   ├── postFoundPets.js
|   |   |   |   └── postLostPets.js
|   |   |   ├── dropZone.js
|   |   |   ├── lost-found.js
|   |   |   ├── material-kit.js
|   |   |   ├── material-kit.js.map
|   |   |   └── script.js
|   │   ├── scss
|   │   |   ├── material-kit
|   │   |   │   ├── bootstrap
|   |   |   |   ├── cards
|   |   |   |   ├── mixins
|   |   |   |   ├── plugins
|   |   |   |   ├── plugins
|   │   |   │   └── variables
|   ├── found-form.html
|   ├── landing-page.html
|   ├── lost-form.html
|   ├── map-results.html
|   └── team.html
|
├── routes
|   ├── foundPet-api-routes.js
|   ├── html-routes.js
|   └── lostPet-api-routes.js
|
├── .gitignore
├── gulpfile.js
├── package-lock.json
├── package.json
├── README.md
└── server.js
    
```



