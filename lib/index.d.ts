interface IMLKitTranslateModule {
    translate(text: string, sourceLanguage: string, targetLanguage: string, requireWifiToDownloadModel?: boolean): Promise<string>;
    getDownloadedModels(): Promise<string[]>;
    deleteDownloadedModel(languageCode: string): Promise<void>;
    downloadModel(languageCode: string, requireWifi?: boolean): Promise<void>;
}
declare const _default: IMLKitTranslateModule;
export default _default;
