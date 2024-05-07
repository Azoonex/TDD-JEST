function toUpserCase(arg: string) {
    return arg.toUpperCase();
}

type itemsInfo = {
    touperCase: string;
    tolowerCase: string;
    character: string[];
    lenght: number;
    extraInfo: object | undefined;
};

function togetUpercaseItems(arag: string): itemsInfo {
    return {
        touperCase: arag.toUpperCase(),
        tolowerCase: arag.toLocaleLowerCase(),
        character: Array.from(arag),
        lenght: arag.length,
        extraInfo: {},
    };
}

export { toUpserCase, itemsInfo, togetUpercaseItems };
