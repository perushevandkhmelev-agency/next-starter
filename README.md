# next-starter
* `git clone git@github.com:perushevandkhmelev-agency/next-starter.git`
* `cd next-starter`
* `yarn`
* put `.env` file with contents given below
* `yarn build`
* `yarn start`

### .env

    `NEXT_PUBLIC_API_URL` — (string, optional) default is `https://pk-frontend-test.herokuapp.com`
    `NEXT_PUBLIC_AUTHORIZATION` — (string, optional)


### How to work with icons
* *Make new git branch*
* `yarn icons:edit` — *to open current config with Fontello for editing*
* *Edit icons in opened browser window and press **"Save session"** when done (don't forget to select newly added icons)*
* `yarn icons:save`
* *Commit changes and make separate PR*
