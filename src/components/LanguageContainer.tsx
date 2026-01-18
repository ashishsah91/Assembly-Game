
import { languages } from "../languages"
import clsx from "clsx"
import type { JSX } from 'react'
import type { LanguageContainerProps } from "../types"
import type { Language } from "../types"

export default function LanguageContainer({ wrongGuessCount }: LanguageContainerProps):
    JSX.Element {
    const languageElem: JSX.Element[] = languages.map((lang: Language, index: number) => {
        const styles: Omit<Language, 'name'> = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (<span style={styles} key={lang.name} className={clsx("lang-chip", wrongGuessCount >= index + 1 && 'lost')}>
            {lang.name}
        </span>)
    })
    return <section className="lang-container">
        {languageElem}
    </section>
}