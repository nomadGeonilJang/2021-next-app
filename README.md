# next app

#

## 개발환경 셋팅.
1. eslint
- eslint-plugin-import : ES6 의 import/export syntax 체크, 파일 경로나 import 이름을 잘못 입력하는지 여부를 체크해주는 lint 플러그인입니다.
- eslint-plugin-jsx-a11y : 리액트 element 의 접근성 이슈를 짚어 lint 해주는 플러그인입니다. 
- eslint-plugin-react : 리액트 규칙들을 추가해주는 플러그인입니다.
- eslint-plugin-import : 리액트 hooks 규칙들을 추가해 주는 플러그인
- eslint-config-prettier : ESLint의 formatting 관련 설정 중 Prettier와 충돌하는 부분을 비활성화합니다. Prettier 에서 문법 관련된 ESlint 규칙을 사용하지 않게 되기 때문에 ESLint 는 자바스크립트 문법을 담당하고, 코드 스타일 정리는 Prettier 가 담당하게 됩니다.
- eslint-plugin-prettier : 원하는 형식의 formatting 을 설정해줍니다.
- babel-eslint : Babel 이 서포트해주는 코드에 ESLint 를 적용할 수 있도록 해줍니다. 한마디로, ES6 이상의 자바스크립트, flow type 등의 feature 를 지원해줍니다. ESLint 만 깔 경우, ES6 / JSX / 객체 rest, spread 까지의 문법만 지원해줍니다. 그 이상의 문법 지원이 필요할 경우 반드시 이걸 깔아줘야 하는 거죠.
- eslint-plugin-babel : 더 많은, 실험중인 feature 까지 지원해주는 플러그인입니다. babel-eslint 를 보완해주는 플러그인입니다.

```bash
npm i -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
npm i -D babel-eslint eslint-plugin-babel
```