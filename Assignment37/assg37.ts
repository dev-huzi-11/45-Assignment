function make_shirt(size: string = "Large", message: string = "I love Typescript") {
    console.log(`Making ${size} shirt with the message of ${message}`);
}

make_shirt();
make_shirt("Medium");
make_shirt("small", "dive into code");