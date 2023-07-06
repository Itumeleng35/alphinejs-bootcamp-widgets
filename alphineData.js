document.addEventListener('alphine:init', function() {
Alphine.data('greet', function() {
    return {
        username: '',
        langType: '',
    
        greetMe() {
            const greetMsg = greetFunc(this.username, this.langType)
            console.log(greetMsg);
            alert(greetMsg)
        },
    }
});
});