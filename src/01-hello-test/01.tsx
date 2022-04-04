export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentence: string) {

    const words = sentence.toLowerCase().split(' ');

    return words.filter((word) => word !== '')
                .map((word) => word
                    .replace(',', '')
                    .replace('.', '')
                );
}

