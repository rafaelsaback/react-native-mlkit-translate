import { NativeModules } from "react-native";

const { RNMlKitTranslateModule } = NativeModules;

interface IMLKitTranslateModule {
  translate(
    text: string,
    sourceLanguage: string,
    targetLanguage: string,
    requireWifiToDownloadModel?: boolean
  ): Promise<string>;
  getDownloadedModels(): Promise<string[]>;
  deleteDownloadedModel(languageCode: string): Promise<void>;
  downloadModel(languageCode: string, requireWifi?: boolean): Promise<void>;
}

export default {
  translate(
    text: string,
    sourceLanguage: string,
    targetLanguage: string,
    requireWifiToDownloadModel = true
  ): Promise<string> {
    return RNMlKitTranslateModule.translate(
      text,
      sourceLanguage,
      targetLanguage,
      requireWifiToDownloadModel
    );
  },
  getDownloadedModels: RNMlKitTranslateModule.getDownloadedModels,
  deleteDownloadedModel: RNMlKitTranslateModule.deleteDownloadedModel,
  downloadModel(
    languageCode: string,
    requireWifi: boolean = true
  ): Promise<void> {
    return RNMlKitTranslateModule.downloadModel(languageCode, requireWifi);
  },
} as IMLKitTranslateModule;
