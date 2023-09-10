// import {addList}  from "/js/rule.js";
// let btn = document.getElementsByTagName("button");
// let scrollDiv = document.getElementById("tit"); 

function back(){
    window.location.href = "./rule.html";
}

function check(){
    var favorite_act = document.getElementById('activity');
    var exer_select = document.getElementsByClassName('label')[0];
    var exer_nums = document.getElementById('activity_num');
    var exer_unit = document.getElementsByClassName('label')[1];
    var exer_min = document.getElementById('count_min');
    var exer_max = document.getElementById('count_max');


    if(exer_select.innerHTML == '<input type="text"> <img src="../image/ep_arrow-up.svg">'){
        exer_select = exer_select.firstChild.value;
    }else{
        exer_select = exer_select.innerText;
    }

    if(exer_unit.innerHTML == '<input type="text"> <img src="../image/ep_arrow-up.svg">'){
        exer_unit = exer_unit.firstChild.value;
    }else{
        exer_unit = exer_unit.innerText;
    }

    console.log(favorite_act.value);
    console.log(exer_select);
    console.log(exer_nums.value);
    console.log(exer_unit);
    console.log(exer_min.value);
    console.log(exer_max.value);

    if(favorite_act.value.length === 0) {
        alert('최애의 행동을 입력해주세요!');
        return 0;
    }
    if(exer_select.length === 0) {
        alert('운동을 선택해주세요!');
        return 0;
    }
    if(exer_nums.value.length === 0) {
        alert('운동 횟수를 입력해주세요!');
        return 0;
    }
    if(exer_unit.length === 0) {
        alert('운동 단위를 입력해주세요!');
        return 0;
    }
    if(exer_min.value.length === 0) {
        alert('최솟값을 입력해주세요!');
        return 0;
    }
    if(exer_max.value.length === 0) {
        alert('최댓값 입력해주세요!');
        return 0;
    }
    if(exer_min.value > exer_max.value){
        alert('최댓값을 다시 입력해주세요!');
        return 0;
    }

    window.location.href = "./rule.html";
}