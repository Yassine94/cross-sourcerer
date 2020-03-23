<p align="center">
  <img alt="" src="./sourcerer.logo.png"">
</p>

## Hello, Sourcerer

## <a name='TOC'>🐼 Summary</a>

* [Rules](#rules)
* [Overview](#overview)
* [Story](#story)
* [Postlude](#postlude)
* [Bonus](#bonus)
* [Credits](#credits)

## <a name='overview'>🦊 Rules</a>

Hi, here are some rules to carry out this story oav;

* You **MUST** create a git repository named `cross-sourcerer`
* You **MUST** create a file called `.author.json` with your fullname

```sh
~/cross-pwgame ❯❯❯ cat -e .author.json
{
  "fullname" : "Richard Stallman"
}$
```

> Of course, you can talk about the subject with other developers, peer-learning is
> the key to be a better developer. Don't hesitate to ask questions or help people on slack.

> Don't forget, there is no useless question :-)

* You **MUST** return the project on Friday March, 23 at 16:00 pm by sending an MP on slack with the link of your github repo.

## <a name='overview'>🐱 Overview</a>

This project is about visual profile for software engineer and **HAVE TO** be a **UNIVERSAL APP**, thats means work on desktop (yo [**Electron**](https://www.electronjs.org/), website and mobile;<br />

You **HAVE TO** use for all web based applicaiton at least one **PWA** native features: `offline`, `notifications`, etc.

You **CAN** use any ui.x libraries you want [ if interested, you can even create your own ]<br />
You **CAN** use any front-end libraries you want.

## <a name='story'>🐨 Story</a>

### = Prelude

Well, as a developer we all use Github ; But is there a way to have visual informations of public users informations and meta-data ?
Yes ! Thanks to Github API we can have any data we want, and the goal of the project is to make a copycat of.... [**Sourcerer**](https://sourcerer.io/) !

The website first usecase is to simply consume Github API to display data.

You **MUST** do the same by using **GraphQL Github API** available [here](https://developer.github.com/v4/)

The purpose here is to share maxium possible code from all clients (and server of course in case of bonuses ;p)

### = Features

Take a look at the screen below ;<br />
Everything in red is **MANDATORY** and **ROSE** is optionnal
![](./sourcerer.majdi.png)

## <a name='bonus'>🦄 Bonus</a>

I know you love that, well you can in bulk:

* Create a proxy server that handle Github API request (save them) and then send to the client #data :)
* Allow a user to connect to Githu using PWA API
* Add more visual effect #css4TheWin 🎉

## <a name='credits'>🐵 Credits</a>

Craft with :heart: in **Paris**.
## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron |
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |