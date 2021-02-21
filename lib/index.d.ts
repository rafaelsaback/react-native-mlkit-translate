interface IMLKitTranslateModule {
    translate(text: string, sourceLanguage: string, targetLanguage: string): Promise<string>;
    getDownloadedModels(): Promise<string[]>;
    deleteDownloadedModel(languageCode: string): Promise<void>;
}
declare const _default: IMLKitTranslateModule;
export default _default;
