<h3 align="center">
    <img src="https://raw.githubusercontent.com/taciturnaxolotl/echelon/master/src/assets/echelon.png" width="200" alt="Logo"/><br/>
    <img src="https://raw.githubusercontent.com/taciturnaxolotl/carriage/master/.github/images/transparent.png" height="45" width="0px"/>
    <span>Echelon</span>
    <img src="https://raw.githubusercontent.com/taciturnaxolotl/carriage/master/.github/images/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <i>noun - A similar formation of groups, units, or individuals. </i>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/taciturnaxolotl/carriage/master/.github/images/line-break-thin.svg" />
</p>

## What's this?

It's a project I made to display stats about how many channels you are in on slack! Eventually I want to add a bluesky streak feature too.

>[!WARNING]
> I made this project for fun amd it will likely not be maintained. If you want to use it you can most likely use the hosted version [here](https://echelon.dunkirk.sh/) but I make no guarantees about it's uptime or whether it works in the future. As of `2025.02.15` it is fully functional and there are no known bugs. 

## Dev

for the env file, you need to have the following variables:

```env
NODE_ENV="dev"
JWT_SECRET=
ARCJET_KEY=
SLACK_CLIENT_ID=
SLACK_CLIENT_SECRET=
BLUESKY_PASS=
```

then you also need a slack app which can be created from the [`manifest.yaml`](/manifest.yaml) file.

The jwt can be created with the following command:

```bash
openssl rand -hex 128
```

You can get your arcjet key from the [arcjet website](https://arcjet.com/).

### Screenshots

The slack page with my data:
![slack page](https://raw.githubusercontent.com/taciturnaxolotl/echelon/master/.github/images/slack.webp)

And the bluesky page:
![bluesky page](https://raw.githubusercontent.com/taciturnaxolotl/echelon/master/.github/images/bluesky.webp)

## Why that License?

Well I like using the AGPL 3.0 license because it's a strong copyleft license that ensures that any changes made to the code are shared back with the community. However there is often alot of confusion about how the license works. Here are 3 brief cases showing how the AGPL 3.0 license works:

1. You download the binary from the releases or use a hosted version.
    - You haven't done anything to the code so you are entirely in the clear!
2. You see a problem with the code so you fork it and use it privately
    - You are still in the clear! The AGPL 3.0 license only requires you to share the code if you distribute it.
3. You find an improvement, implement it, and distribute it privately in your company or for some family and friends
    - You are still in the clear! The AGPL 3.0 license only requires you to share the code if you distribute it to the public.

Basically if you distribute the code publicaly you have to share the code, but if you don't distribute the code publicaly or don't modify it then you don't have to share the code.

<p align="center">
	<img src="https://raw.githubusercontent.com/taciturnaxolotl/carriage/master/.github/images/line-break.svg" />
</p>

<p align="center">
	<code>&copy 2025-present <a href="https://github.com/taciturnaxolotl">Kieran Klukas</a></code>
</p>

<p align="center">
	<a href="https://github.com/taciturnaxolotl/echelon/blob/master/LICENSE.md"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=AGPL 3.0&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
