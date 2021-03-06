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

var routes = [
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
        componentUrl: '../main/intro_.html',
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
        path: '/sub/barcode/',
        componentUrl: '../sub/barcode.html',
        options: {
            transition: 'f7-dive',
        },
    },
    {// 결제하기
        name: 'payment',
        path: '/payment/payment/',
        componentUrl: '../payment/payment.html',
        // beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 결제하기/무인매점 결제
        name: 'snack',
        path: '/payment/snack/',
        componentUrl: '../payment/snack.html',
        // beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 결제 선택
        name: 'approval',
        path: '/payment/approval/',
        componentUrl: '../payment/approval.html',        
        options: {
            transition: 'f7-cover',
        },
    },
    {// 결제 선택 / 사물함선택
        name: 'locker',
        path: '/payment/approval/locker/',
        componentUrl: '../payment/locker.html',
        options: {
            transition: 'f7-cover',
        },
    },
    {// 자리선택하기
        name: 'seat',
        path: '/seat/',
        componentUrl: '../sub/seat.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 자리선택하기 / 문의하기
        name: 'seat-help',
        path: '/seat/help/',
        componentUrl: '../sub/seat-help.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 전지점 실시간이용현황
        name: 'zonepresent',
        path: '/zonepresent/',
        componentUrl: '../sub/zonepresent.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 알림
        name: 'alert',
        path: '/alert/',
        componentUrl: '../sub/alert.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 공지사항
        name: 'notify',
        path: '/notify/',
        componentUrl: '../sub/notify.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 마이페이지 / 마이페이지
        name: 'mypage',
        path: '/mypage/mypage/',
        componentUrl: '../mypage/mypage.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 마이페이지 / 개인정보 수정
        name: 'usermodi',
        path: '/mypage/usermodi/',
        componentUrl: '../mypage/user-modi.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 마이페이지 / 결제하기
        name: 'mypayment',
        path: '/payment/mypayment/',
        componentUrl: '../payment/mypayment.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 마이페이지 / 결제내역
        name: 'mypayment-history',
        path: '/payment/mypayment/history/',
        componentUrl: '../payment/mypayment-history.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 마이페이지 / 쿠폰
        name: 'coupon',
        path: '/payment/coupon/',
        componentUrl: '../payment/coupon.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 마이페이지 / 1:1문의
        name: 'qna',
        path: '/mypage/qna/',
        componentUrl: '../mypage/qna.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
    {// 마이페이지 / 1:1문의 / 지난 문의 내역
        name: 'qna-history',
        path: '/mypage/qna/history/',
        componentUrl: '../mypage/qna-history.html',
        //beforeEnter: checkAuth,//로그인 이후 가능
        options: {
            transition: 'f7-cover',
        },
    },
]