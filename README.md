#react_movie_app

이 React-app에서는 React Router를 사용한다
간단하게 말하자면 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것
SPA(Single Page Application)라고 한다.화면 전환을 지원하는 모듈이라는 뜻이다.

★★App.js ----------------------------------------------------------------------------------

☆Header
Route path로 movie,movietitle,tv,person,NotFound

☆movieDummy.js
무비더미를 담아두는 js (themoviedb.org API 사용)

★★src/components ----------------------------------------------------------------------------

☆Header.jsx
헤더역할을한다 영화/TV프로그램/인물 카테고리

☆Moive.jsx
영화 설명을 선택했을때 MovieItem에 대한 정보 (title,vote_average)를 제공한다.

★★src/pages -----------------------------------------------------------------------------------
☆Celebrity,Home,MovieDetail,Movies,NotFound,Tv 페이지를 구성
