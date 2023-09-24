import React from "react"

class WeatherForm extends React.Component {

  setLanguagesInField() {
    const languageData = {
      "Afrikaans": "af",
      "Albanian": "al",
      "Arabic": "ar",
      "Azerbaijani": "az",
      "Bulgarian": "bg",
      "Catalan": "ca",
      "Czech": "cz",
      "Danish": "da",
      "German": "de",
      "Greek": "el",
      "English": "en",
      "Basque": "eu",
      "Persian (Farsi)": "fa",
      "Finnish": "fi",
      "French": "fr",
      "Galician": "gl",
      "Hebrew": "he",
      "Hindi": "hi",
      "Croatian": "hr",
      "Hungarian": "hu",
      "Indonesian": "id",
      "Italian": "it",
      "Japanese": "ja",
      "Korean": "kr",
      "Latvian": "la",
      "Lithuanian": "lt",
      "Macedonian": "mk",
      "Norwegian": "no",
      "Dutch": "nl",
      "Polish": "pl",
      "Portuguese": "pt",
      "Português Brasil": "pt_br",
      "Romanian": "ro",
      "Russian": "ru",
      "Swedish": "sv",
      "Slovak": "sk",
      "Slovenian": "sl",
      "Spanish": "sp",
      "Serbian": "sr",
      "Thai": "th",
      "Turkish": "tr",
      "Ukrainian": "ua",
      "Vietnamese": "vi",
      "Chinese Simplified": "zh_cn",
      "Chinese Traditional": "zh_tw",
      "Zulu": "zu"
    }
    let arrayOfLanguages = [];

    for (const [lang, code] of Object.entries(languageData)) {
      arrayOfLanguages.push([lang, code])
    }

    const jsxLanguages = arrayOfLanguages.map((value, index) => (<option key={index} value={value[1]}>{value[0]}</option>))

    return jsxLanguages

  }

  render() {
    return (
        <form>
          <input onChange={this.props.setCity} type="text" placeholder="City"/><br/>
          <select onChange={this.props.setLangCode} name="select">
            {this.setLanguagesInField()}
          </select><br/>
          <button type="button" onClick={this.props.requestWeather}>Get weather</button>
        </form>
    )
  }
}

export default WeatherForm