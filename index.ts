import { NativeModules } from "react-native";

const { RNMlKitTranslateModule } = NativeModules;

interface IMLKitTranslateModule {
  translate(
    text: string,
    sourceLanguage: string,
    targetLanguage: string
  ): Promise<string>;
  getDownloadedModels(): Promise<string[]>;
  deleteDownloadedModel(languageCode: string): Promise<void>;
}

export default RNMlKitTranslateModule as IMLKitTranslateModule;
