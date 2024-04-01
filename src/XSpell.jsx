import React, {useEffect, useState} from 'react'

const XSpell = () => {

    const [input, setInput] = useState('')
    const [suggestedText, setSuggestedText] = useState('');
    const customDictionary = {
        teh: "the",
        wrok: "work",
        fot: "for",
        exampl: "example"
    };
      

    const handleChange = (e) => {

        const words = input.split(' ');
        const correctedWords = words.map((word) => {
            const correctedWord = customDictionary[word.toLowerCase()];
            return correctedWord || word;
        })

        const correctedText = correctedWords.join(" ");

        const firstCorrection = correctedWords.find(
            (word, index) => word !== words[index]
        );
            setSuggestedText(firstCorrection || "");
    };

    useEffect(() => {
        handleChange();
    },[input])
    


  return (
    <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
    </div>
  )
}

export default XSpell