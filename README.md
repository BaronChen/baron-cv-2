## Tech Stack

- React
- Bootstrap 4 alpha 6

## Tools

- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [Circle CI](https://circleci.com/

## Deployed site
http://our-tutorial-site.s3-website-ap-southeast-2.amazonaws.com/

## Command CLI

### Start project
```
yarn start
```
or
```
npm start
```

### Production Build
```
yarn run build
```
or
```
npm run build
```

## Useful location of files

### meta tag
```
src\common\index-meta.js
```

### Content files
```
public\data-en.json
public\data-zh.json
```

## Wht styls is seperate from component files?

I want to use bootstrap scss source to re-build the whole css, and this is easier to avoid importing duplicate files.