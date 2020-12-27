package com.rnmlkittranslate;

import com.google.mlkit.nl.translate.TranslateLanguage;
import com.google.mlkit.nl.translate.TranslatorOptions;
import com.google.mlkit.nl.translate.Translator;
import com.google.mlkit.nl.translate.Translation;
import com.google.mlkit.common.model.DownloadConditions;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import android.util.Log;
import androidx.annotation.NonNull;

public class RNMlKitTranslateModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNMlKitTranslateModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNMlKitTranslateModule";
    }

    @ReactMethod
    public void translate(final String text, String sourceLanguage, String targetLanguage, final Promise promise) {
        Log.d("RNMlKitTranslateModule", "Translating sentence: " + text + " | sourceLanguage: " + sourceLanguage + " | targetLanguage: " + targetLanguage);
        if (sourceLanguage == null || targetLanguage == null || text == null || text.isEmpty()) {
           promise.reject("Invalid inputs");
        }

        TranslatorOptions options = new TranslatorOptions.Builder()
          .setSourceLanguage(sourceLanguage)
          .setTargetLanguage(targetLanguage)
          .build();

        final Translator translator = Translation.getClient(options);

        DownloadConditions conditions = new DownloadConditions.Builder()
          .requireWifi()
          .build();

       translator.downloadModelIfNeeded(conditions)
          .addOnSuccessListener(new OnSuccessListener<Void>() {
            @Override
            public void onSuccess(Void v) {
               translator.translate(text)
                  .addOnSuccessListener(
                     new OnSuccessListener<String>() {
                         @Override
                         public void onSuccess(@NonNull String translatedText) {
                            promise.resolve(translatedText);
                        }
                     }
                  )
                  .addOnFailureListener(
                     new OnFailureListener() {
                         @Override
                         public void onFailure(@NonNull Exception e) {
                            promise.reject("Failed to translate the text.");
                         }
                     }
                  );
            }
          })
       .addOnFailureListener(new OnFailureListener() {
           @Override
           public void onFailure(@NonNull Exception e) {
              e.printStackTrace();
              promise.reject(e);
           }
      });
    }
}
