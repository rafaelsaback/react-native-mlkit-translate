# react-native-mlkit-translate

## Getting started

`$ npm install react-native-mlkit-translate --save`

### Mostly automatic installation

`$ react-native link react-native-mlkit-translate`

## Usage
```javascript
import MlkitTranslate from 'react-native-mlkit-translate';

MlkitTranslate.translate('hello world!', 'en', 'pt').then((translation) => {
  // Use the translation however you need :)
  alert(translation)
});
```
