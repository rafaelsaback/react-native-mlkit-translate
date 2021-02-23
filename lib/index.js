import { NativeModules } from "react-native";
const { RNMlKitTranslateModule } = NativeModules;
export default {
    translate(text, sourceLanguage, targetLanguage, requireWifiToDownloadModel = true) {
        return RNMlKitTranslateModule.translate(text, sourceLanguage, targetLanguage, requireWifiToDownloadModel);
    },
    getDownloadedModels: RNMlKitTranslateModule.getDownloadedModels,
    deleteDownloadedModel: RNMlKitTranslateModule.deleteDownloadedModel,
    downloadModel(languageCode, requireWifi = true) {
        return RNMlKitTranslateModule.downloadModel(languageCode, requireWifi);
    },
};
