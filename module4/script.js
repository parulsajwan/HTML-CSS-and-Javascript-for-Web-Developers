/*
Solution of javascript module :

output:

Hello parul
Good Bye jsajwan
Good Bye jsimran
Good Bye jpiyush
Hello aman
Hello radhika
Hello ajay
Hello vijay
Hello rajat
Good Bye vikram 
*/

(function() {
    var names = ["parul", "jsajwan", "lsimran", "jpiyush", "aman", "radhika", "ajay", "vijay", "rajat", "jvikram"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            bye.speak(names[i]);
        } 
        else {
            hello.speak(names[i]);
        }
    }
})();
