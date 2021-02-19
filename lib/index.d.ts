interface IMLKitTranslateModule {
    translate(text: string, sourceLanguage: string, targetLanguage: string): Promise<string>;
    getDownloadedModels(): Promise<string[]>;
}
declare const _default: IMLKitTranslateModule;
export default _default;
