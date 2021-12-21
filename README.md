
# SportSee

Sportsee is an application for see you sport statistics, calculate calories in your meals and more. Sportsee also includes device motion sensor to monitor all of your exercise data and food nutrition in real time. Get fit, look good and feel great!

## Prerequisites

- [Node.js (v16.13.1)](https://nodejs.org/en/)
- [Recommended IDE (Visual Studio Code)](https://code.visualstudio.com)
- [Recommended VSCode extensions list](https://damevin.notion.site/Recommanded-VSCode-extensions-05453d07fedf4e3091ff00d8a41cc8fd) 
## Installation

First of all, clone the project with HTTPS

```bash
  git clone https://github.com/damevin/SportSee.git
  cd SportSee
```

### Back-end

If you want to install mocked backend for the demo version, you need 
to be inside the root of the SportSee folder, and run these commands (install dependencies, and run locally).

```
cd api
yarn 
yarn start
```

### Front-end

If you are on the API folder, make sure to come back to the root folder of the project with

```
cd ..
```

Your root name should be : `SportSee/`

Then install dependencies
```
yarn
yarn start
```


    
## Generate documentation

First of all, you'll need to be located at the root of the project.

```
cd SportSee
yarn docs
```

Then your documentation will be generated, and now you have to go on the docs folder with this :

```
cd docs
```

And run this python command for create a local server :

```
python3 -m http.server
```

**Tada** 🎉
## Dependencies

| Name              | Version |
| ----------------- | ------- |
| Better Docs       | 2.3.2   |
| jsdoc             | 3.6.7   |
| react            | 17.0.2 |
| react-dom        | 17.0.2 |
| react-router-dom | 6.0.2  |
| react-scripts    | 4.0.3  |
| recharts         | 2.1.6 |

