import convert from 'xml-js';

export default class XMLConverter {
    converterOptions = {
        compact: true,
        ignoreDeclaration: true,
        ignoreInstruction: true,
        spaces: 4,
        trim: true,
        nativeType: true
    };

    convertFromText(xml: string): string {
        return convert.xml2json(xml, this.converterOptions);
    }
}