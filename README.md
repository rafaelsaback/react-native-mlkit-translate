# react-native-mlkit-translate

A React Native wrapper around Google's ML Kit Translate library, which provides **free** on-device
translations and uses the very same ML models as Google Translate's offline mode.

**IMPORTANT: This package currently supports only Android. Contributions are highly welcome,
so feel free to add an IOS implementation as well :)**

## Getting started

`$ npm install react-native-mlkit-translate --save`

### Mostly automatic installation

`$ react-native link react-native-mlkit-translate`

## API
#### `translate(text: string, sourceLanguage: string, targetLanguage: string): Promise <string>`

#### `getDownloadedModels(): Promise<string[]>`

#### `deleteDownloadedModel(languageCode: string): Promise<void>`

#### `downloadModel(languageCode: string): Promise<void>`
