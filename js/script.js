

$(function(){

var img= $('#myimg')[0];
var canvas=$('<canvas/>')[0];
canvas.width=img.width;
canvas.height=img.height;
canvas.getContext('2d').drawImage(img,0,0,img.width,img.height);

$('#output').css("width", img.width);

	for(h=0;h<img.height;h++){
		for(w=0;w<img.width;w++){
var pixelData=canvas.getContext('2d').getImageData(w,h,1,1).data;		
for(var i=0,n=pixelData.length;i<n;i+=4){
	// alert (pixelData[i] + " "+ pixelData[i+1] +" "+ pixelData[i+2]);
	var bg=pixelData[i] + ","+ pixelData[i+1] +","+ pixelData[i+2];
	$('#output').append('<span style="background:rgb('+bg+')"></span>');
}
}
}


});

