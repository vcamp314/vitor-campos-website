
// used to add synonyms defined in Assets/TagsSynonyms.json to the auto-complete list
export const buildAutoCompleteList = (tagSynonyms, tagList) => {

    let autoCompleteList = [...tagList];
    
    for (const tagSynonym of tagSynonyms) {
        autoCompleteList = autoCompleteList.concat(tagSynonym.synonyms);
    }
    return autoCompleteList;
}

// used to match the user's inputted text with a tag or one of its synonyms
// returning the associated tag name in case a synonym was entered
export const getMatchingTagName = (tagSynonyms, tagList, inputtedText) => {

    for (const tag of tagList) {
        if(inputtedText.toUpperCase() === tag.toUpperCase()){
            return tag;
        }
    }      
    for (const tagSynonym of tagSynonyms) {

        for (const synonym of tagSynonym.synonyms) {
            if(inputtedText.toUpperCase() === synonym.toUpperCase()){
                return tagSynonym.tagName;
            }
        }
    }
    return inputtedText;
}