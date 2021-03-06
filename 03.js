// 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 alphaString46 함수를 완성하라.
// 예를 들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다.

// const spaceCheck = /[\s]+/;

function alphaString46(s) {
  if (!(s.length === 4 || s.length === 6)) return false;

  for (let i = 0; i < s.length; i++) {
     if (!(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)) {
         return false;
     }
  }
  return true;
}

alphaString46('1234'); // true
alphaString46('9014'); // true
alphaString46('723');  // false