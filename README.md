# epiPlanneur


***
[![version](https://img.shields.io/badge/Version-1.0-vert)](https://github.com/Nathandelenclos/GASNewsletter)

This project Is Google App Script project deployed in webapp.
This Project is platform for subscribe, unsubscribe and post newsletter with http request. <br>
You can check this repo [GASNewsletter-actions](https://github.com/Nathandelenclos/GASnewsletter-actions)
***
## Table of Contents

-  [About](#about)
-  [Install](#installation)
-  [Languages](#languages)
-  [Contact](#contact)
-  [License](#license)
***

## About
<div id="about"></div>

This project Is Google App Script project deployed in webapp.<br>
This Project is platform for subscribe, unsubscribe and post newsletter with http request.

***

## Installation
<div id="installation"></div>

1. Clone the repo
   ```sh
   git clone https://github.com/Nathandelenclos/GASNewsletter.git
   ```
2. Install packages
    ```shell
    npm install
    ```
3. Login at Google with clasp
    ```shell
    clasp login
    ```
4. Create project Google Apps Script
    ```shell
    clasp create
    ```
   Select webapp.
5. Push Javascript file to Google Apps Script
   ```shell
   clasp push
   ```
6. Go to Google App Script & deploy on webapp.
7. On script properties add keys `PASSWORD` (password for send newsletter) and `SS_DATABASE` (id of spreadsheet where content all mails) (this spreadsheet must content a sheet named `MAILS`)

***

## Languages
<div id="languages"></div>

[![C](https://img.shields.io/badge/-Google%20Apps%20Script-vert)](https://github.com/dktunited/jetlane-gmao/search?l=javascript)
[![C](https://img.shields.io/badge/-Javascript-yellow)](https://github.com/dktunited/jetlane-gmao/search?l=javascript)
[![C](https://img.shields.io/badge/-HTML-red)](https://github.com/dktunited/jetlane-gmao/search?l=javascript)

***

## Contact
<div id="contact"></div>

-  [Nathan DELENCLOS](mailto:nathan.delenclos@epitech.eu) - Developer

***

## License
<div id="license"></div>

[ISC](LICENSE) © Nathan DELENCLOS

This template should help get you started developing with Vue 3 in Vite.
