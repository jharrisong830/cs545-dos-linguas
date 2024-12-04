export type Verb = {
    infinitive: string;
    english: string;
    suffix: "ar" | "er" | "ir" | "irregular";
    yo?: string; // required for irregular verbs
    tu?: string;
    elEllaUsted?: string;
    nosotros?: string;
    ellosEllasUstedes?: string;
};

export const conjugationTable = {
    ar: {
        yo: "o",
        tu: "as",
        elEllaUsted: "a",
        nosotros: "amos",
        ellosEllasUstedes: "an"
    },
    er: {
        yo: "o",
        tu: "es",
        elEllaUsted: "e",
        nosotros: "emos",
        ellosEllasUstedes: "en"
    },
    ir: {
        yo: "o",
        tu: "es",
        elEllaUsted: "e",
        nosotros: "imos",
        ellosEllasUstedes: "en"
    }
};

export const addConjugation = (verb: Verb): Verb => {
    switch (verb.suffix) {
        case "irregular":
            return verb; // already required
        default:
            const prefix = verb.infinitive.slice(0, -2);
            verb.yo = prefix.concat(conjugationTable[verb.suffix].yo);
            verb.tu = prefix.concat(conjugationTable[verb.suffix].tu);
            verb.elEllaUsted = prefix.concat(
                conjugationTable[verb.suffix].elEllaUsted
            );
            verb.nosotros = prefix.concat(
                conjugationTable[verb.suffix].nosotros
            );
            verb.ellosEllasUstedes = prefix.concat(
                conjugationTable[verb.suffix].ellosEllasUstedes
            );
            return verb;
    }
};

export const generateConjugations = (verbs: Array<Verb>): Array<Verb> => {
    return verbs.map((v) => addConjugation(v));
};

export const irregularVerbs: Array<Verb> = [
    {
        infinitive: "ser",
        english: "to be",
        suffix: "irregular",
        yo: "soy",
        tu: "eres",
        elEllaUsted: "es",
        nosotros: "somos",
        ellosEllasUstedes: "son"
    },
    {
        infinitive: "estar",
        english: "to be",
        suffix: "irregular",
        yo: "estoy",
        tu: "estas",
        elEllaUsted: "esta",
        nosotros: "estamos",
        ellosEllasUstedes: "estan"
    },
    {
        infinitive: "tener",
        english: "to have",
        suffix: "irregular",
        yo: "tengo",
        tu: "tienes",
        elEllaUsted: "tiene",
        nosotros: "tenemos",
        ellosEllasUstedes: "tienen"
    },
    {
        infinitive: "ir",
        english: "to go",
        suffix: "irregular",
        yo: "voy",
        tu: "vas",
        elEllaUsted: "va",
        nosotros: "vamos",
        ellosEllasUstedes: "van"
    }
];

export const arVerbs: Array<Verb> = [
    { infinitive: "trabajar", english: "to work", suffix: "ar" },
    { infinitive: "llamar", english: "to call", suffix: "ar" },
    { infinitive: "hablar", english: "to talk", suffix: "ar" },
    { infinitive: "mirar", english: "to look", suffix: "ar" },
    { infinitive: "escuchar", english: "to hear", suffix: "ar" },
    { infinitive: "comprar", english: "to buy", suffix: "ar" },
    { infinitive: "necesitar", english: "to need", suffix: "ar" },
    { infinitive: "llevar", english: "to carry", suffix: "ar" },
    { infinitive: "usar", english: "to use", suffix: "ar" },
    { infinitive: "ayudar", english: "to help", suffix: "ar" },
    { infinitive: "cambiar", english: "to change", suffix: "ar" },
    { infinitive: "quedar", english: "to stay", suffix: "ar" },
    { infinitive: "pasar", english: "to pass", suffix: "ar" },
    { infinitive: "dejar", english: "to leave", suffix: "ar" },
    { infinitive: "ganar", english: "to gain", suffix: "ar" },
    { infinitive: "preguntar", english: "to ask", suffix: "ar" },
    { infinitive: "arreglar", english: "to fix", suffix: "ar" },
    { infinitive: "preparar", english: "to prepare", suffix: "ar" },
    { infinitive: "parar", english: "to stop", suffix: "ar" },
    { infinitive: "tomar", english: "to take", suffix: "ar" },
    { infinitive: "estudiar", english: "to study", suffix: "ar" },
    { infinitive: "trabajar", english: "to work", suffix: "ar" },
    { infinitive: "presentar", english: "to introduce", suffix: "ar" },
    { infinitive: "descansar", english: "to rest", suffix: "ar" },
    { infinitive: "crear", english: "to create", suffix: "ar" },
    { infinitive: "olvidar", english: "to forget", suffix: "ar" },
    { infinitive: "manejar", english: "to drive", suffix: "ar" },
    { infinitive: "caminar", english: "to walk", suffix: "ar" },
    { infinitive: "viajar", english: "to travel", suffix: "ar" },
    { infinitive: "entrar", english: "to enter", suffix: "ar" },
    { infinitive: "desayunar", english: "to eat breakfast", suffix: "ar" },
    { infinitive: "cenar", english: "to have dinner", suffix: "ar" },
    { infinitive: "limpiar", english: "to clean", suffix: "ar" },
    { infinitive: "cocinar", english: "to cook", suffix: "ar" },
    { infinitive: "llorar", english: "to cry", suffix: "ar" },
    { infinitive: "cantar", english: "to sing", suffix: "ar" },
    { infinitive: "bailar", english: "to dance", suffix: "ar" },
    { infinitive: "nadar", english: "to swim", suffix: "ar" },
    { infinitive: "gustar", english: "to like", suffix: "ar" },
    { infinitive: "disfrutar", english: "to enjoy", suffix: "ar" },
    { infinitive: "esperar", english: "to wait", suffix: "ar" }
];

export const erVerbs: Array<Verb> = [
    { infinitive: "aprender", english: "to learn", suffix: "er" },
    { infinitive: "barrer", english: "to sweep", suffix: "er" },
    { infinitive: "beber", english: "to drink", suffix: "er" },
    { infinitive: "comer", english: "to eat", suffix: "er" },
    { infinitive: "comprender", english: "to understand", suffix: "er" },
    { infinitive: "correr", english: "to run", suffix: "er" },
    { infinitive: "leer", english: "to read", suffix: "er" },
    { infinitive: "meter", english: "to put into", suffix: "er" },
    { infinitive: "prender", english: "to catch", suffix: "er" },
    { infinitive: "romper", english: "to break", suffix: "er" },
    { infinitive: "temer", english: "to fear", suffix: "er" },
    { infinitive: "toser", english: "to cough", suffix: "er" },
    { infinitive: "vender", english: "to sell", suffix: "er" }
];

export const irVerbs: Array<Verb> = [
    { infinitive: "abrir", english: "to open", suffix: "ir" },
    { infinitive: "añadir", english: "to add", suffix: "ir" },
    { infinitive: "asistir", english: "to attend", suffix: "ir" },
    { infinitive: "describir", english: "to describe", suffix: "ir" },
    { infinitive: "discutir", english: "to discuss", suffix: "ir" },
    { infinitive: "escribir", english: "to write", suffix: "ir" },
    { infinitive: "interrumpir", english: "to interrupt", suffix: "ir" },
    { infinitive: "ocurrir", english: "to occur", suffix: "ir" },
    { infinitive: "partir", english: "to leave", suffix: "ir" },
    { infinitive: "recibir", english: "to receive", suffix: "ir" },
    { infinitive: "subir", english: "to climb", suffix: "ir" },
    { infinitive: "sufrir", english: "to suffer", suffix: "ir" },
    { infinitive: "vivir", english: "to live", suffix: "ir" }
];
