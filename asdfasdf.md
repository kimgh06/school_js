# 문서 객체
- body, head, a, img
문서 객체라고 함

## DOMContentLoaded
```js
<script>
  document.addEventListener("DOMContentLoaded", ()=>{
    console.log("hello");
  });
</script>
```

헤드 태그에서 스크립트를 작성할 경우 body에서 접근 불가
DoMCOntentLoaded 이벤트를 실행해서 body가 아니어도 접근 가능.

## body외의 다른 문서 객체를 가져오는 방법
```js
document.head
document.body
document.title
```

## 태그 가져오기
```js
document.querySelector("선택자") //하나만
document.querySelectorAll("선택자") //모두
```

textContent는 입력한 문자열을 그대로 태그에 적용함
innerHTML은 입력한 문자열을 html 형식대로 적용한다


## 속성 조작하기
문서 객체에서 속성을 조장할 때는 setAttribute와 getAttribute
```js
문서객체.setAttribute(속성명, 값) //속성 설정
문서객체.getAttribute(속성명) //속성 가져오기
```

## 스타일 조작하기
문서 객체의 스타일을 조작할 때 style 속성을 사용함
```js
h1.style.backgrounColor = 'blue';
h1.style['background-color'] = 'blue';
```

## 문서 객체 생성하기
문서 객체를 생성할 때는 document.createElements()를 사용한다.
```js
document.createElements(문서객체이름)

부모객체.appendChild(자식객체) //부모 자식 관계를 형성가능
```

부모가 둘 일경우 기존 부모의 연결이 끊어지고 새 부모와 자식이 연결됨.

## 삭제쓰
```js
부모객체.removeChild(자식); //절대경로를 알고 있을 때 
문서객체.parentNode.removeChild(문서객체) //상대 경로를 알고 있을 때
```