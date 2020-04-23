# covid-GBdI-2020

Service responsible for handling users requests, such as user creation, validation, document acquiring and enabling/disabling access to the Covid System 2020.

## Getting Started

These instructions will get you a copy of the banking up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have all the following prerequisites:

##### Node.js & NPM

Node.js at version 10.15 or latter - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager as example:

```shell
$ sudo apt install nodejs
```

_Note: You can also install a Version Manager as [n](https://github.com/tj/n), [NVM](https://github.com/nvm-sh/nvm) or [asdf](https://github.com/asdf-vm/asdf) to control the node versions._

#### Linting

To ensure correct you're following minimum code format quality, please run:

```shell
$ yarn

To test:
$ yarn lint

To auto-fix any suspicious syntax/code formats:
$ yarn lint:fix
```

#### Testing

To test locally, please run:

```shell
$ yarn
$ yarn test
```

### Running

To running locally, please run:

```shell
$ yarn start
```