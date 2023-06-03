var id_vn_1 = document.getElementById('div-box-vn-1');
var id_en_1 = document.getElementById('div-box-en-1');

var id_vn_2 = document.getElementById('div-box-vn-2');
var id_en_2 = document.getElementById('div-box-en-2');

var zalo_box = document.getElementById('div-zalo-box');

var artist_box = document.getElementById('div-artist-box');

var reveals = document.querySelectorAll(".reveal");

zalo_box.style.display = "none"
artist_box.style.display = "none"

function parseTraceLang(url){
	var trace = [];
	var loc = "XX";
	$.ajax(url,
		{
			success: function(response){
				var lines = response.split('\n');
				var keyValue;
				lines.forEach(function(line){
					keyValue = line.split('=');
					if(keyValue[0] != '')
						trace[keyValue[0]] = decodeURIComponent(keyValue[1] || '');
				});
				change_language(trace["loc"]);
			},
			error: function(){
				change_language("EN");
			}
		}
	);
	return trace;
}
function change_language(lang){
	if(lang === "VN"){
		id_vn_1.style.display = "block";
		id_en_1.style.display = "none";
		id_vn_2.style.display = "block";
		id_en_2.style.display = "none";
	}else{
		id_vn_1.style.display = "none";
		id_en_1.style.display = "block";
		id_vn_2.style.display = "none";
		id_en_2.style.display = "block";
	}
}

parseTraceLang("/cdn-cgi/trace");

function show_zalo(){
	if(zalo_box.style.display === "none")
		zalo_box.style.display = "block";
	else
		zalo_box.style.display = "none";
}

function show_artist(){
	if(artist_box.style.display === "none")
		artist_box.style.display = "block";
	else
		artist_box.style.display = "none";
}

function reveal(){
	setTimeout(() => { reveals[0].classList.add("active"); }, 100);
	setTimeout(() => { reveals[1].classList.add("active"); }, 220);
	setTimeout(() => { reveals[2].classList.add("active"); }, 340);
	setTimeout(() => { reveals[3].classList.add("active"); }, 460);
}