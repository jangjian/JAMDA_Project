let alertDiv = document.getElementsByClassName('alert')[0];
let alertTitle = document.getElementsByClassName('alert-title')[0];

function alertCheck(){
  alertDiv.style.visibility = "hidden";
    
}
function addRuleAndBack() {
  
  var favorite_act = document.getElementById('activity');
  var exer_select = document.getElementsByClassName('label')[0];
  var exer_nums = document.getElementById('activity_num');
  var exer_unit = document.getElementsByClassName('label')[1];
  var exer_min = document.getElementById('count_min');
  var exer_max = document.getElementById('count_max');

  if (exer_select.innerHTML == '<input type="text"> <img src="../image/ep_arrow-up.svg">') {
      exer_select = exer_select.firstChild.value;
  } else {
      exer_select = exer_select.innerText;
  }

  if (exer_unit.innerHTML == '<input type="text"> <img src="../image/ep_arrow-up.svg">') {
      exer_unit = exer_unit.firstChild.value;
  } else {
      exer_unit = exer_unit.innerText;
  }

  if (favorite_act.value.length === 0) {
      alert('최애의 행동을 입력해주세요!');
      return 0;
  }
  if (exer_select.length === 0) {
      alert('운동을 선택해주세요!');
      return 0;
  }
  if (exer_nums.value.length === 0) {
      alert('운동 횟수를 입력해주세요!');
      return 0;
  }
  if (exer_unit.length === 0) {
      alert('운동 단위를 입력해주세요!');
      return 0;
  }
  if (exer_min.value.length === 0) {
      alert('최솟값을 입력해주세요!');
      return 0;
  }
  if (exer_max.value.length === 0) {
      alert('최댓값 입력해주세요!');
      return 0;
  }
  if (exer_min.value > exer_max.value) {
      alert('최댓값을 다시 입력해주세요!');
      return 0;
  }

  const id = localStorage.getItem("userid");

  // 서버로 데이터 전송
  axios
      .post("http://localhost:3000/users/rules", {
          userid: id,
          activity: favorite_act.value,
          exercise: exer_select,
          activity_num: exer_nums.value,
          unit: exer_unit,
          count_min: exer_min.value,
          count_max: exer_max.value
      }).then((response) => {
          console.log("rules add successful!");
          alert("규칙이 추가 되었습니다.");
          window.location.href = "/html/rule.html";
      }).catch((error) => {
          console.error("Error adding rule:", error);
          alert("규칙 추가 중 오류가 발생했습니다.");
      });

      localStorage.removeItem('btn-status');
      localStorage.removeItem('slide_box_state');

      localStorage.setItem("slide_box_state",'open');
      localStorage.setItem('btn-status', 'click');
        // 이후 현재 페이지를 새로고침하여 rule.html로 돌아가기
      window.location.replace( '../html/rule.html');
}

// 규칙을 불러오는 함수
function fetchRules() {
  // 사용자의 Token을 로컬 스토리지에서 가져옵니다.
  const token = localStorage.getItem("token");
  
  // 서버로 GET 요청을 보냅니다.
  axios.get('http://localhost:3000/users/getRules', {
      headers: {
          Authorization: token // 토큰을 헤더에 포함
      }
  })
  .then((response) => {
      likeDo = response.data.activity;
      exerciseTitle = response.data.exercise;
      exerciseRule = response.data.activityNum;
      exerciseUnit = response.data.unit;
      baseExerCount = response.data.count;

      console.log(likeDo);
      console.log(exerciseTitle);
      console.log(exerciseRule);
      console.log(exerciseUnit);
      console.log(baseExerCount);

      
      
  })
  .catch((error) => {
      console.error('Error fetching data:', error);
      // 오류 처리를 추가하세요.
      // 예: showError(error);
  });
}

fetchRules();

function back(){
  window.location.href = "./rule.html";
}


function setMoveToTopFlag() {
  localStorage.setItem('moveToTop', 'true');
}

setMoveToTopFlag();
