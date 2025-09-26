# Памятка для программиста

## Как залогиниться

Можно выполнить команды

```
rm /Users/<NAME>/.npmrc
npm config set registry https://registry.npmjs.org/
npm login
npm config list
```
, или создать файл .npmrc в корне каталога вручную.

Пример .npmrc файла.

```
email=...@gmail.com
//registry.npmjs.org/:_authToken=...
```

## Публикация пакетов

```
npm run test
npm run build
npm publish --access public
```
