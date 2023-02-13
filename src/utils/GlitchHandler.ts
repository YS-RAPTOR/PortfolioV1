const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./<>?;':\"[]{}\\|`~!@#$%^&*()_+-=";

export default class GlitchHandler {
    i = 0
    interval: number | undefined = undefined
    randomString = ""
    iterations: number
    iterDelay: number
    text: string
    setDisplayedText: any

    constructor(noOfIters: number, iterDelay: number, text: string) {
        this.iterations = noOfIters
        this.iterDelay = iterDelay
        this.text = text
    }

    SetDisplayedTextSetter = (setDisplayedText: any) => {
        this.setDisplayedText = setDisplayedText
    }

    start = (type: string) => {
        this.i = 0;
        this.randomString = this.GetRandomString();
        clearInterval(this.interval);
        if (type == "Side") {
            this.interval = setInterval(this.GlitchSide, this.iterDelay);
        } else if (type == "Random") {
            this.interval = setInterval(this.GlitchRandom, this.iterDelay);
        } else if (type == "Shuffle") {
            this.interval = setInterval(this.Shuffle, this.iterDelay);
        }
    }

    GlitchSide = () => {
        const index = Math.floor(this.i / this.iterations);
        this.randomString =
            this.text.substring(0, index) +
            this.GetRandomString().substring(index + 1, this.text.length);
        this.setDisplayedText(this.randomString);
        this.i++;

        if (this.i >= this.iterations * this.text.length) {
            clearInterval(this.interval);
        }
    };

    GlitchRandom = () => {
        this.randomString = Array.from(this.text)
            .map((char, index) => {
                if (char === "\u00A0") {
                    return "\u00A0";
                } else if (char == this.randomString.charAt(index)) {
                    return char;
                } else {
                    return this.GetRandomChar();
                }
            })
            .join("");

        this.setDisplayedText(this.randomString);

        if (this.text == this.randomString || this.i >= this.iterations * this.text.length) {
            this.setDisplayedText(this.text);
            clearInterval(this.interval);
        }
    };

    Shuffle = () => {
        this.randomString = this.GetRandomString();
        this.setDisplayedText(this.randomString);
        this.i++;
    };

    GetRandomChar = () =>
        ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    GetRandomString = () =>
        Array.from(this.text)
            .map((char) => (char === "\u00A0" ? "\u00A0" : this.GetRandomChar()))
            .join("");
}