// 실시간 시계
function realTime() {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    const realTime = document.querySelector('.realTime');
    realTime.innerHTML = `${year} : ${month} : ${day}`;
}
setInterval(realTime, 1000);

// 로컬 스토리지를 이용한 로그인
// 아이디와 비밀번호가 입력되어 있다면 체크 그렇지 않다면 입력요구 메시지 출력
// 입력이 되었다면 유효성 검사
const loginCheck = document.querySelector('.login_check');