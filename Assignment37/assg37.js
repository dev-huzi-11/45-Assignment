function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Making ".concat(size, " shirt with the message of ").concat(message));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "dive into code");
