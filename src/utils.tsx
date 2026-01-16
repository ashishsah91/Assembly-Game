
import type { Language } from "./types";
import {words} from "./words";



export function getRandomWord(){

  const randomIndex =  Math.floor(Math.random() * words.length);
  return words[randomIndex]

}

export function getFarewellText(language: Language) {

    const languageName = language.name;

    const options = [
        `Farewell, ${languageName}`,
        `Adios, ${languageName}`,
        `R.I.P., ${languageName}`,
        `We'll miss you, ${languageName}`,
        `Oh no, not ${languageName}!`,
        `${languageName} bites the dust`,
        `Gone but not forgotten, ${languageName}`,
        `The end of ${languageName} as we know it`,
        `Off into the sunset, ${languageName}`,
        `${languageName}, it's been real`,
        `${languageName}, your watch has ended`,
        `${languageName} has left the building`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}