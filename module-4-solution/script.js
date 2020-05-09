(function() {
    var names = ["Ali", "Jim", "Jon", "Jonathon", "Tom", "Frank", "Paul", "Kate", "Laura", "Jonas"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();