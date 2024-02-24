import React from "react";
import {Languages} from "@/utils/data/language";

export const selectedLanguageAndIcon = (setLanguage:any, setActiveIcon:any, selectedLanguage:any) => {

    setLanguage(selectedLanguage);
    switch (selectedLanguage) {
        case 'javascript':
            setActiveIcon(Languages[0].icon);
            break;
        case 'html':
            setActiveIcon(Languages[1].icon);
            break;
        case 'css':
            setActiveIcon(Languages[2].icon);
            break;
        case 'typescript':
            setActiveIcon(Languages[3].icon);
            break;
        case 'python':
            setActiveIcon(Languages[4].icon);
            break;
        case 'java':
            setActiveIcon(Languages[5].icon);
            break;
    }
};
