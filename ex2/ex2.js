function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************



function getFile(file) {
    var resp;

        fakeAjax(file,function(text){
                if (!resp) resp = text;
                else resp(text);
        });

        return function th(cb) {
                if (resp) cb(resp);
                else resp = cb;
        };
}

var thunk1 =getFile("file1");
console.log(thunk1);
var thunk2= getFile("file2");
var thunk3 = getFile("file3");



thunk1(function ready(text){
        output(text);
        thunk2(function ready(text){
                output(text);
                thunk3(function ready(text){
                        output(text);
                        output("Complete!");
                });
        });
});    


// request all files at once in "parallel"
// ???
