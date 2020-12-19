<p align="center">
   <img src=".github/logo.png" width="250"/>
</p>

# Event Management
 🌎 Create your events, subscribe for others 🌎


[![Author](https://img.shields.io/badge/author-DanielJ06-7FCD91?style=flat-square)](https://github.com/danielj06)
[![Languages](https://img.shields.io/github/languages/count/DanielJ06/Monet-s-server?color=%7FCD91&style=flat-square)](#)

<hr />

# :pushpin: Table of Contents

* [Features](#brain-features)
* [Installation](#construction_worker-installation)
* [Technologies](#computer-technologies)

# :brain: Features

*  🤵 Create an account to manage your events.
*  📝 Create, delete, update, list Events.
*  📨 Subscribe for others.
*  📊 List subscriptions.

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/DanielJ06/Monet-s-server.git```

**Install dependencies**

```yarn install```

**Database credentials on src/config/typeorm.config.ts**

```
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'host',
  port: 5433,
  username: 'username',
  password: 'password',
  database: 'db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
}
```

**Running**

```yarn start:dev```

# :computer: Technologies

*  [Node.Js](https://nodejs.org/en/)
*  [NestJs](https://nestjs.com/)
*  [TypeOrm](https://typeorm.io/#/)
*  [Docker](https://www.docker.com/)
*  [Postgres](https://www.postgresql.org/)
