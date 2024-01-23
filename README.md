- 👇 Yah command se node JS ka project ka configure kar sakte hain

```sh
npm init
```

- 👇 Yah command se typescript 👈 ko Global Install kar sakte hain

```sh
sudo npm i -g typescript
```
- 👇 Yah Donon koi bhi ran Karke se tsconfig.json 👈 ka file create kar sakte

```sh
npx tsc -init
  or
tsc init
```

- 👇 Yah command Se watch Mod Mein Chala sakte hain ( Original command )

```sh
tsc -w
```


- 👇 Yah command set express aur dotenv ko Install kar sakte hain Dependencies 👈 mein

```sh
npm i express dotenv
```

- 👇 Add this Script packages,json file

```sh
 "type": "module",
```

- 👇 Yah command set typestrip ko Install kar sakte hain Dependencies 👈 mein

```sh
npm i @types/express
```

- 👇 Yah command set express ko Install kar sakte hain devDependencies 👈 mein

```sh
npm i @types/express @types/node --save-dev
```

- 👇 yah command set typestrip ko Install kar sakte hain devDependencies mein

```sh
 npm i typescript nodemon --save-dev
```

- 👇 build Create command

```sh
 tsc
```

- 👇 Yah command build banane ka hai

```sh
# 👇 is command ka Script add kiya Hua Hai packages.json fil Mein

npm run build

```

- 👇 Yah command se production Mod Mein server Run kar sakte hain

```sh
# 👇 is command ka Script add kiya Hua Hai packages.json fil Mein
npm start
```

- 👇 yah command Se Sirf & Only watch Mod ko Chala sakte hain

```sh
# 👇 is command ka Script add kiya Hua Hai packages.json fil Mein
npm run watch
```

- 👇  yah command se nodemon ko run kar sakte hain

```sh
# 👇 is command ka Script add kiya Hua Hai packages.json fil Mein
npm run nodemon
```

- 👇 Yah package nodemon aur watch Mod Mein Ek Sath chalane ke kam aata Hai 

```sh
# 👇 install this package

npm install concurrently --save-dev
```

- 👇 yah command se nodemon aur watch Mod Ek saat Run kar sakte hain

```sh
# 👇 is command ka Script add kiya Hua Hai packages.json fil Mein

npm run dev
```

- 👇Yah script nodemon aur watch Mod ko ek Sath chalata hai

```sh
 "dev" : "concurrently \"tsc -w\" \"nodemon build/app.js\" "
```
