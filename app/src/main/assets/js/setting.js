function fetchAndDisplayUserName() {
  // localStorage에서 token 값을 가져와서 출력
const token = localStorage.getItem('token');

axios
.get('http://localhost:3000/users/getUserInfo', {
  headers: {
    authorization: token,
  },
})

.then((response) => {
  const userName = response.data.name;
  const userBias = response.data.bias;
  const userWeight = response.data.weight;
  const userGoal_weight = response.data.goal_weight;
  const Dday = response.data.daysSinceRegistration;
  document.getElementById('user-name').innerHTML = `<span>${userName}</span>님`;
  document.getElementById('d-day').innerHTML = `<span style="font-weight: bold">${userBias}</span>와(과) 함께 운동한지  <span>${Dday}</span>일`;
  document.getElementById('present').innerHTML = `현재<span>${userWeight}kg</span>`;
  document.getElementById('goal').innerHTML = `목표<span>${userGoal_weight}kg</span>`;
})
.catch((error) => {
  console.error('사용자 정보를 가져오는 중 오류 발생:', error);
});
  
}

window.addEventListener('load', fetchAndDisplayUserName);
