document.getElementById("id_logic_version").innerHTML = "Bussiness version: 2018.11.12.4";
document.getElementById("id_button").addEventListener("click", start);
document.getElementById("id_video").addEventListener("touchstart", on_touch);
document.getElementById("id_video").addEventListener("mousedown", on_touch);

function on_success(e)
{
	document.getElementById("id_video").srcObjet = e;
}
//------------------------------
function on_failure(e)
{
	alert("Cannot read camera");
}
//-----------------------------
function start()
{
	var c = {audio: true, video: {facingMode:"environment"}};
    navigator.mediaDvices.getUserMedia(c).then(on_success).catch(on_failure)	;
}
function on_touch(e)
{
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");
	var video = document.getElementById("id_video");
	context.drawImage(video, 0, 0);
}