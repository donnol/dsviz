function includeHTML() {
    const attr = "include-description-html";

    let i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    const z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute(attr);
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute(attr);
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

function includeMD() {
    const attr = "include-description-md";

    let i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    const z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute(attr);
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        marked.setOptions({
                            highlight: function (code, lang, callback) {
                                highlighted = true;
                                return hljs.highlightAuto(code).value;
                            },
                            gfm: true,
                            tables: true,
                            pedantic: false,
                            sanitize: false,
                            silent: false,
                            smartLists: true,
                            smartypants: false,
                            // langPrefix: 'language-',
                        });
                        elmnt.innerHTML = marked.parse(this.responseText);
                    }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute(attr);
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
