/**
 * byhaejin@gmail.com
 * 2020.7
 */


// Dom7
const $$ = Dom7;
const componentsPath = '../components/';
let mainView;
sessionStorage.setItem('isLogin', false);

function checkAuth(to, from, resolve, reject) {
    if (sessionStorage.getItem('isLogin') === 'true') {
        resolve();
    } else {
        reject();
        mainView.router.navigate('/login/');
    }
}

function setLogin(username) {
    sessionStorage.setItem('isLogin', true);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('setLoginDate', moment().format('YYYY-MM-DD h:mm:ss'));
}

// Init App
const app = new Framework7({
    id: 'com.v', // App id
    root: '#app', // App root element
    name: 'concentable App',
    theme: 'auto',
    componentUrl: componentsPath + 'layout.component.html',
    on: {
        init: function () {
            console.log("app start")
            mainView = app.views.create('.view-main',{
                dynamicNavbar: true,
                on: {
                    init: function () {

                        // this.router.navigate('/',{ animate: false });
                        // intro 화면을 확인했을 경우
                        if (localStorage.getItem('isIntro') === 'true') {
                            this.router.navigate('/auth/login/',{ animate: false });
                        } else {
                            this.router.navigate('/intro/',{ animate: false });
                        }
                    }
                }
            });
        },
        pageInit: function () {
            // app.panel.close(); // page 로드후 메뉴 닫힘
        },
    },
    // Add default routes
    routes: [
        {//home
            name: 'home',
            path: '/',
            componentUrl: '../main/main.html',
            options: {
                transition: 'f7-flip',
            },
        },
        {//앱소개 인트로, 스타트 후엔 뜨지 않음
            name: 'intro',
            path: '/intro/',
            componentUrl: '../main/intro.html',
            options: {
                transition: 'f7-flip',
            },
        },
        {//로그인
            name: 'login',
            path: '/auth/login/',
            componentUrl: '../member/login.html',
            options: {
                transition: 'f7-cover-v',
            },
        },
        {//약관동의
            name: 'agree',
            path: '/auth/agree/',
            componentUrl: '../member/agree.html',
            options: {
                transition: 'f7-cover-v',
            },
        },
        {//가입방식선택
            name: 'agreetype',
            path: '/auth/agreetype/',
            componentUrl: '../member/agreetype.html',
            options: {
                transition: 'f7-cover',
            },
        },
        {//이메일가입 step1 인증
            name: 'email-step1',
            path: '/auth/join/email-step1/',
            componentUrl: '../join/email-step1.html',
            options: {
                transition: 'f7-cover',
            },
        },
        {//이메일가입 step2 이메일 입력
            name: 'email-step2',
            path: '/auth/join/email-step2/',
            componentUrl: '../join/email-step2.html',
            options: {
                transition: 'f7-cover',
            },
        },
        {//고3 이용 신청 step1 인증
            name: 'high3-step1',
            path: '/auth/join/high3-step1/',
            componentUrl: '../join/high3-step1.html',
            options: {
                transition: 'f7-cover',
            },
        },
        {//고3 이용 신청 step2 이용 지점 선택
            name: 'high3-step2',
            path: '/auth/join/high3-step2/',
            componentUrl: '../join/high3-step2.html',
            options: {
                transition: 'f7-cover',
            },
        },
        {//고3 이용 신청 step3 이용 목적
            name: 'high3-step3',
            path: '/auth/join/high3-step3/',
            componentUrl: '../join/high3-step3.html',
            options: {
                transition: 'f7-cover',
            },
        },
        {//고3 이용 신청 step4 이용 동의
            name: 'high3-step4',
            path: '/auth/join/high3-step4/',
            componentUrl: '../join/high3-step4.html',
            options: {
                transition: 'f7-cover',
            },
        },
        {
            name: 'signup',
            path: '/auth/signup/',
            componentUrl: '../member/signup.html',
            options: {
                transition: 'f7-cover-v',
            },
        },
        {//이메일 / 비밀번호 찾기
            name: 'finduser',
            path: '/auth/finduser/:tab/',
            componentUrl: '../member/finduser.html',
            options: {
                transition: 'f7-cover-v',
            },
        },
        {//출입하기            
            name: 'barcode',
            path: '/main/barcode/',
            componentUrl: '../main/barcode.html',
            options: {
                transition: 'f7-cover',
            },
        },
        {
            name: 'expand',
            path: '/expand/',
            componentUrl: '../expand/expand.html',
            beforeEnter: checkAuth,
            options: {
                transition: 'f7-cover',
            },
        },
    ],
});


$$(document).on('page:init', function (e, page) {
    console.log(page.route.name);
});
/**
 * include component
 */
function componentLoadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
}
let template = '';
componentLoadScript(componentsPath + 'header.template.component.js');
componentLoadScript(componentsPath + 'subheader.template.component.js');
