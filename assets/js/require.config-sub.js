require.config({
    baseUrl: "../assets/js",
    waitSeconds: 600,
    urlArgs: "1602576748",
    paths: {
        jquery: "jquery",
        html5loadernew: "html5loadernew",
        jqueryFilemanager: "jquery.filemanager",
        jqueryValidate: "jquery.validate",
        touchSwipe: "jquery.touchSwipe.min",
        svgAnimation: "svg.animation",
        sliders: "full.slider",
        showProjectBlock: "show.projects",
        googleMap: "google.map",
        inputCheck: "input.check",
        formCheck: "form.check",
        formValidate: "form-validate",
        formValidateAdtech: "form-validate-adtech",
        nicescroll: "jquery.nicescroll",
        metisMenu: "metisMenu",
        adminScript: "sb-admin-2",
        datepicker: "bootstrap-datepicker",
        bootstrapMenu: "bootstrap-contextmenu",
        tooltip: "tooltip",
        moment: "moment",
        fancybox: "jquery.fancybox",
        modal: "modal",
        wow: "wow.min",
        inputTel: "intlTelInput.min",
        utils: "utils",
        parallax: "parallax",
        competence: "competence",
        slick: "slick",
        jscolor: "jquery.color",
        cookie: "cookie",
        TweenLite: "TweenLite",
        TweenMax: "TweenMax",
        CSSPlugin: "CSSPlugin",
        TimelineMax: "TimelineMax",
        EasePack: "EasePack",
        ScrollTo: "ScrollToPlugin",
        ScrollMagic: "ScrollMagic",
        ScrollMagicAnimate: "animation.gsap"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        formValidate: {
            deps: ["jqueryValidate"]
        },
        formValidateAdtech: {
            deps: ["jqueryValidate"]
        },
        jqueryValidateMin: {
            deps: ["jquery"]
        },
        html5Loader: {
            exports: "html5Loader",
            deps: ["jquery"]
        },
        touchSwipe: {
            deps: ["jquery"]
        },
        jscolor: {
            deps: ["jquery"]
        },
        custom: {
            deps: ["jquery", "cookie"]
        },
        "landing.adwords": {
            deps: ["jquery", "cookie"]
        },
        svgAnimation: {
            deps: ["jquery"]
        },
        sliders: {
            deps: ["jquery"]
        },
        showProjectBlock: {
            deps: ["jquery", "sliders", "touchSwipe"]
        },
        blog: {
            deps: ["jquery"]
        },
        inputCheck: {
            deps: ["jquery"]
        },
        formCheck: {
            deps: ["inputCheck"]
        },
        home: {
            deps: ["jquery"]
        },
        nicescroll: {
            deps: ["jquery"]
        },
        googleMap: {
            deps: ["async"]
        },
        metisMenu: {
            deps: ["jquery"]
        },
        dropdown: {
            deps: ["jquery"]
        },
        adminScript: {
            deps: ["dropdown", "metisMenu"]
        },
        datepicker: {
            deps: ["jquery"]
        },
        tooltip: {
            deps: ["jquery"]
        },
        jqueryFilemanager: {
            deps: ["jquery", "tooltip"]
        },
        fancybox: {
            deps: ["jquery"]
        },
        bootstrapMenu: {
            deps: ["jquery"]
        },
        modal: {
            deps: ["jquery"]
        },
        tabs: {
            deps: ["jquery"]
        },
        wow: {
            deps: ["jquery"]
        },
        ga: {
            deps: ["jquery"]
        },
        clientid: {
            deps: ["jquery"]
        },
        parallax: {
            deps: ["jquery"]
        },
        slick: {
            deps: ["jquery"]
        },
        errorpage: {
            deps: ["jquery", "parallax"]
        },
        ScrollMagic: {
            deps: ["jquery", "TweenMax"],
            exports: "ScrollMagic",
            init: function() {
                return {
                    ScrollMagic: ScrollMagic,
                    ScrollScene: ScrollScene
                }
            }
        }
    }
});
