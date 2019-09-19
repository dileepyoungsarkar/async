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
	// what do we do here?
	return new promise((resolve,reject)=>{
		fakeAjax(file,resolve)
			//console.log()
		
		
	

	})
}

var p= getFile("file1");
var p1= getFile("file2");
var p2= getFile("file3");

p.then(output)
.then(()=>p2)
.then(output)
.then(()=>p2)
.then(output)
.then(()=>output('complete'))
// request all files at once in "parallel"
// ???

// function loadImage(url,callback){
// 	return new promise((resolve,reject)=>{
// 		let image=new image();
// 		image.onload=function(){
// 			resove(image)
// 		}

// 		image.onerror=function(){
// 			let message ='could not load'+url
// 			reject(new Error(msg))
// 		}
// 		image.src=url
// 	})
// }

// export default loadImage
