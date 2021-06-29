let income=$("#income").val();
let family=$("family").val();

$(function(){
$("#income").change(function(){
    onClick();
})
$("#family").change(function(){
    onClick();
})});

function onClick(e){
    alert("aaa");
}