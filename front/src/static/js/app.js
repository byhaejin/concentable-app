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
            dataForm: [],
        };
    },
    id: 'com.v', // App id
    root: '#app', // App root element
    name: 'concentable App',
    theme: 'auto',
    componentUrl: componentsPath + 'layout.component.html',
    on: {
        init: function () {
            //앱 시작
            mainView = app.views.create('.view-main',{
                dynamicNavbar: true,
                on: {
                    init: function () {

                        // this.router.navigate({ name: 'coupon', animate: false });
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


$$(document).on('page:init', function (e, page) {
    // console.log(page.route.name);
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
componentLoadScript(componentsPath + 'pagination.template.component.js');