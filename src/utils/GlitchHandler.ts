const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./<>?;':\"[]{}\\|`~!@#$%^&*()_+-=";
const randomMultiplier = 2;
export default class GlitchHandler {
    i = 0
    interval: number | undefined = undefined
    randomString = ""
    iterations: number
    iterDelay: number
    text: string
    setDisplayedText: any
    direction: "left" | "right"
    space: string

    constructor(noOfIters: number, iterDelay: number, text: string, direction: "left" | "right" = "right", space = "\u00A0") {
        this.iterations = noOfIters
        this.iterDelay = iterDelay
        this.text = text
        this.direction = direction
        this.space = space
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

        if (this.direction == "right") {
            this.randomString =
                this.text.substring(0, index) +
                this.GetRandomString().substring(index + 1, this.text.length);
        } else {
            this.randomString =
                this.GetRandomString().substring(0, this.text.length - index) +
                this.text.substring(this.text.length - index, this.text.length);
        }


        this.setDisplayedText(this.randomString);
        this.i++;

        if (this.i >= this.iterations * this.text.length) {
            this.setDisplayedText(this.text);
            clearInterval(this.interval);
        }
    };

    GlitchRandom = () => {
        this.randomString = Array.from(this.text)
            .map((char, index) => {
                if (char === this.space) {
                    return this.space;
                } else if (char == this.randomString.charAt(index)) {
                    return char;
                } else {
                    return this.GetRandomChar();
                }
            })
            .join("");

        this.setDisplayedText(this.randomString);
        this.i++;

        if (this.text == this.randomString || this.i >= this.iterations * this.text.length * randomMultiplier) {
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
            .map((char) => (char === this.space ? this.space : this.GetRandomChar()))
            .join("");
}