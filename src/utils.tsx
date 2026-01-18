
import type { Language } from "./types";
import { words } from "./words";

function getRandomIndex(arr: string[]): number {
    return Math.floor(Math.random() * arr.length);
}

export function getRandomWord():string {
    return words[getRandomIndex(words)].toLowerCase()
}

export function getFarewellText(language: Language):string {

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

    return options[getRandomIndex(options)];
}