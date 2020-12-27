interface IMLKitTranslateModule {
    translate(text: string, sourceLanguage: string, targetLanguage: string): Promise<string>;
}
declare const _default: IMLKitTranslateModule;
export default _default;
