/**
 * byhaejin@gmail.com
 * 2020.7
 */

// Dom7
const $$ = Dom7;
const componentsPath = '../components/';
let mainView;

// Init App
const app = new Framework7({
    data: function () {
        return {
            dataForm: [], //각종 form문의 parameter를 임시 저장
            user: {
              zoneid: '',// 현재 이용중인 지점
              zoneName: ''//현재 이용중인 지점 이름
            },
            seatState: {         //현재 자리이용상태 저장
                id: '',     //현재 이용중인 자리의 id
                name: '',   //현재 이용중인 자리의 이름
                state: null,   //현재 이용중인 자리의 상태/ null(없음), true(사용중), false(외출중)
                staytime: '' //자리비움시 비운 시간
            }
        };
    },
    id: 'com.v', // App id
    root: '#app', // App root element
    name: 'concentable App',
    theme: 'ios',
    componentUrl: componentsPath + 'layout.component.html',
    methods: {
        //현재 자리이용상태 초기화
        clearSeatState: function () {
            this.data.seatState.id = '';
            this.data.seatState.name = '';
            this.data.seatState.state = null;
            this.data.seatState.staytime = '';
        },
        //add data form
        addDataFrom: function (data) {
            this.data.dataForm = data;
            console.log("dataForm", this.data.dataForm);
        }
    },
    on: {
        init: function () {
            //앱 시작
            mainView = app.views.create('.view-main',{
                dynamicNavbar: true,
                on: {
                    init: function () {

                        // this.router.navigate({ name: 'zonepresent', animate: false });
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
    routes: routes,
});


// $$(document).on('page:init', function (e, page) {
//     console.log(page.route.name);
// });
/**
 * include component
 */
function componentLoadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
}

let template = '';
componentLoadScript(componentsPath + 'header.template.component.js');//layout 홈의 header
componentLoadScript(componentsPath + 'subheader.template.component.js'); //layout back이 적용된 sub header
componentLoadScript(componentsPath + 'pagination.template.component.js'); //게시판 하단의 pagination