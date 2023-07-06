function greetFunc(username,lang) {
    console.log(lang);
    let greeting = '';
    if (lang === 'Zulu') {
        greetMsg = 'Sawubona, '+ username;
            }
            else if (lang === 'Latin'){
               greetMsg = 'Salve, ' + username;
            }
            else{
                greetMsg = 'Hello, ' + username;
            }
    return greetMsg;
        };