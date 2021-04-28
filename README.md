# Running the component on a local web server

mkdir web-server
cd web-server
copy the js file from dist folder
create index.html:
    &lt;script src="augmentedC.min.js"&gt;&lt;/script&gt;

npx http-server -c-1

open index.html in your browser (http://localhost:8080/)

in devtools type:
var rerender = augmentedC.default({color:'red'}, document.body);

changing the color:
rerender({color:'yellow'});

