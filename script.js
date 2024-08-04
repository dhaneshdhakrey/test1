
async function func1() {
    let a = document.getElementById("tag1");
    return new Promise((resolve) => {
        setTimeout(() => {
            a.hidden = true;
            resolve();
        }, 1000);
    });

}
async function func2(string, le) {

    let b = `<h2 id="tag${le}">${string}..</h2>`;
    let a = document.querySelector(".cont");
    a.innerHTML = a.innerHTML + b;
    let tag = document.getElementById(`tag${le}`);
    let html1 = `.`;
    let past = tag.innerHTML
    return new Promise((resolve) => {
        let maxCount = 3;
        let count = 0;

        let interval1 = setInterval(async () => {

            ;
            tag.innerHTML = tag.innerHTML + html1;
            count++;

            await new Promise((innerResolve) => {
                setTimeout(() => {
                   
                    tag.innerHTML = past;
                    
                    if (count >= maxCount) {
                        
                        clearInterval(interval1);
                        resolve();
                        innerResolve()
                        tag.innerHTML = tag.innerHTML + html1;
                    }
                }, 1000);
            });


        }, 1500);
    });


}



async function main() {
    await func1();
    console.log("done!");
    let c = document;
    c.body.style.backgroundColor = "green";
    await func2("Initializing Hacking", 2)
    await func2("Reading your files",3)
    await func2("Password files detected!",4)
    await func2("Sending Passwords to server",5)
    await func2("About to complete",6)

    let b = `Done!`;
    let a = document.querySelector(".cont");
    a.style.fontSize="28px"
    a.innerHTML = a.innerHTML + b;
    


}

main();



