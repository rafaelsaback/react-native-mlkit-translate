import { NativeModules } from "react-native";

const { RNMlKitTranslateModule } = NativeModules;

interface IMLKitTranslateModule {
  translate(
    text: string,
    sourceLanguage: string,
    targetLanguage: string
  ): Promise<string>;
}

export default RNMlKitTranslateModule as IMLKitTranslateModule;
