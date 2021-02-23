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
#### `translate(text: string, sourceLanguage: string, targetLanguage: string, requireWifiToDownloadModel?: boolean): Promise <string>`

Translate a word/sentence from a source to a target language.

* **text** - the text to be translated
* **sourceLanguage** - the code for the source language, i.e. the language of **text**  ([language codes](https://cloud.google.com/translate/docs/languages))
* **targetLanguage** - the code for the target language, i.e. the language to which **text** should be translated  ([language codes](https://cloud.google.com/translate/docs/languages))
* **requireWifiToDownloadModel** (default value: true) - in case the language model has not been download yet, it will try to download it on-the-fly. In such case, this flag will determine whether it should require Wifi to download the model (~30MB).
* Returns the translated text

#### `getDownloadedModels(): Promise<string[]>`

Retrieve all translation models downloaded in the mobile.

* Returns an array with the language codes for the downloaded models ([language codes](https://cloud.google.com/translate/docs/languages)).

#### `deleteDownloadedModel(languageCode: string): Promise<void>`

Delete a specific language model from the mobile.

* **languageCode** - the language code for the translation model ([language codes](https://cloud.google.com/translate/docs/languages))

#### `downloadModel(languageCode: string, requireWifi?: boolean): Promise<void>`

Download a specific language model to the mobile.

* **languageCode** - the language code for the translation model ([language codes](https://cloud.google.com/translate/docs/languages))
* **requireWifi** (default value: true) - determine whether it should require Wifi to download the model (~30MB).
