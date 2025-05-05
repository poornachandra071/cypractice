class Test {
    constructor() {
        this.word = 'yahooh';
        this.run();
    }

    run() {
        const result = this.getRepeatedCount(this.word, 'o');
        console.log(result);
    }

    getRepeatedCount(word, letter) {
        let count = 0;
        for (let i = 0; i < word.length; i++) { // Fix loop condition
            if (word[i] === letter) {
                count++;
            }
        }
        return count;
    }
}

// Instantiate the class to run the program
new Test();
