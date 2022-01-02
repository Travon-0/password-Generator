/*
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|         Get the three elemnts that is the main body of our code           |
|                                                                           |
|                                                                           |
|                                                                           |
|                                                                           |
|         [1] The input field with id of [text-field ]                      |
|                                                                           |
|                                                                           |
|             Author=[Travon]                                               |
|                                                                           |
|                                                                           |
|         [2] Second the two button that generate the password              |
|                                                                           |
|                                                                           |
|         [2i] btn-1                                                        |
|                                                                           |
|                                                                           |
|         [2ii] btn-2                                                       |
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                 |          |
                                 |          |
                                 |          |
                                 |          |
                                 |          |
                                 |          |
                                 |          |
                                 |          |
                                 ||||||||||||
*/                           
//clear text field on page reload
document.getElementById("text-field").value = "";
let textField = document.getElementById("text-field");
let generateButton = document.getElementById("btn-1");
let copyButton = document.getElementById("btn-2");

generateButton.addEventListener("click", ()=>{
    //write out numbers and letters and symbols to use for the password comination for extra security

    let numbers = "1234567890";
    let symbols = "~`!@#$%^&*()_-+=][{}|/><,.*";
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // join all the digits together and store them in a varable called arrangeAll
    let arrangeAll = `${upperLetters}${numbers}${letters}${symbols}`;
    //define the length of the password
    let passwordLength = 9;
    let password = "";

    for (let i =0; i<= passwordLength; i++) {
        let randomeGeneratedPassword = Math.floor(Math.random() * arrangeAll.length);
        password+= arrangeAll.substring(randomeGeneratedPassword, randomeGeneratedPassword+1);
        textField.value = password;
        /*
        get the paragraph id and clear the text it will posses when
        the genrate button is clicked
        */
       let paragraphMsg = document.getElementById("msg");
       paragraphMsg.textContent = "";
       copyButton.textContent = "Copy";
    }

    // code the copy button
    copyButton.addEventListener("click", ()=>{
        /*
        get the paragraph text and display a message whenever the copy 
        button is clicked
        */
        let paraMsg = document.getElementById("msg");
        paraMsg.textContent = "Text copied to clipboard";
        paraMsg.style.fontSize = "20px";
        copyButton.textContent = "Copied";
        // select the text inside the text-filed to copy
        let copyText = document.getElementById("text-field");
        copyText.select();
        document.execCommand("copy");

    });
});