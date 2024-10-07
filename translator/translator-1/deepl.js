import * as deepl from '/Repositories/iiQ-Tools/translator/node_modules/deepl-node';

const authKey = "62c74291-aefc-4d82-bf49-929fceff2d23:fx"; // Replace with your key
const translator = new deepl.Translator(authKey);

(async () => {
    const result = await translator.translateText('Hello, world!', null, 'fr');
    console.log(result.text); // Bonjour, le monde !
})();