/*
Solution of assignment 4:
*/

(function() {
    var nicks = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < nicks.length; i++) {
        var firstLetter = nicks[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(nicks[i]);
        } else {
            helloSpeaker.speak(nicks[i]);
        }
    }
})();
