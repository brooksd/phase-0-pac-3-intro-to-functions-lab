// Text to upperCase
function shout(string) {
    return string.toUpperCase();
}

// Text to lowerCase
function whisper(string) {
    return string.toLowerCase();
}

// Logs in the console to upperCase
function logShout(string) {
    console.log(string.toUpperCase());
}

// Logs in the console whisper to lowerCase
function logWhisper(string)  {
    console.log(string.toLowerCase());
}

// Long function
function sayHiToHeadphonedRoommate(string) {
    if(string.toLowerCase() === string) {
        return "I can't hear you!"
    };

    if(string.toUpperCase() === string) {
        return "YES INDEED!"
    };

    if(string === "Let's have dinner together!") {
        return "I would love to!"
    };
}

