$(function(){


    //시작 블라인드 sc-visual 동적 구현
    bl = gsap.timeline()
    .addLabel('bld')
    // .fromTo('.lodingText1',{opacity: 1,},{opacity:0, duration: .7})
    .from('.lodingText1',{opacity:0,delay:1, duration: .5})
    .to('.lodingText1',{opacity:0, duration: .5, display:"none"})
    .from('.lodingText2',{opacity:0, duration: .5})
    .to('.lodingText2',{opacity:0, duration: .5, display:"none"})
    // .fromTo('.lodingText2',{opacity: 0,},{opacity:1, duration: .7})
    // .to('.lodingText2',{opacity: 0,duration: 1.2})
    
    .to('.top-blind',{xPercent: -100,duration: 1.2,delay:3.5}, 'bld')
    .to('.btm-blind',{xPercent: 100,duration: 1.2,delay:3.5}, 'bld')
    
    .fromTo('.sc-visual .top', {xPercent:200 ,duration: 1,},{xPercent:-20, duration: 1},'=-.6')
    .to('.sc-visual .top',{xPercent: 0})

    .fromTo('.sc-visual .btm', {xPercent:200 ,duration: 1,},{xPercent:-50, duration: 1} ,'=-1')
    .to('.sc-visual .btm',{xPercent: 0})
    .to(".btm-linecover",{xPercent: 100, duration:.7})
    .to(".btm-line",{xPercent: 3, duration:.1})
    // gsap.to('.visual-logo',{
    //     scrollTrigger:{
    //         trigger:'.sc-visual',
    //         start:"0% 100%", // ['트리거','윈도으']
    //         // end:"100% top", // ['트리거','윈도으']
    //         end:"+=100%",
    //         // markers:true,
    //         scrub:0,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     ease:'none',
    //     'yPercent':-350,
    //     'opacity':0,
    //     // duration: 3,
    // });
    gsap.to('.mainTitle',{
        scrollTrigger:{
            trigger:'.sc-visual .mainTitle',
            start:"0% 33%", // ['트리거','윈도으']
            // end:"100% 0%", // ['트리거','윈도으']
            // end:"+=100%",
            // markers:true,
            scrub:0,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
            // pin:true,
        },
        // ease:'none',
        yPercent:-50,
        opacity:0,
    })
        // .addLabel('label')
        // .from ('.left-blind',{xPercent: -50,duration: 1.2,delay:.8},'label')
        // .from ('.right-blind',{xPercent: 50,duration: 1.2,delay:.8},'label')
        // .from ('.sc-informain .img-box',{scale: 0, opacity:0, duration: 0.8,})

        // .addLabel('m1')
        // .from ('.sc-informain .title-wrap .txt-box-service',{y: 60,duration: 0.8, opacity:0,},'m1')
        // .to ('.sc-informain .img-box',{y: 30,duration: 0.8},'m1')

    // $(window).scroll(function(){
    //     if ($(window).scrollTop() > 0) {
    //         $('.header .comtaniner').addClass('active')
    //     } else {
    //         $('.header .contaniner').removeClass('active')
    //     }
    // });


    // $(window).scroll(function(){
    //     asd = $(window).scrollTop();
    //     console.log(asd);
    //     if ($(this).scrollTop()>795) {
    //         $('.container, .sc-visual').addClass('active');

    //     } else {
    //         $('.container, .sc-visual').removeClass('active');
    //     }

    // })
    // scrwork = $('.sc-work').scrollTop();

    //메뉴 sc-intro 갔을때 색상 변경
    scIntro = $('.sc-intro').offset().top;
    scWork = $('.sc-work').offset().top;
    $(window).scroll(function(){
        curr = $(document).scrollTop();
        console.log(scIntro);
        if ($(this).scrollTop() >= scIntro) {
            $('.header').addClass('active');

        } else {
            $('.header').removeClass('active');
        }

        if($(this).scrollTop() >= scWork) {
            $('.header').removeClass('active');
        }

    })


    // scWork = $('.sc-work').offset().top;
    // $(window)

    //

    
    // $('.btn-work').hover(function(){
        //     gsap.fromTo('.cover',{xPercent: -100,},{xPercent:100})
        // });
        
        
        
        // sc-intro 동적구현
        textUp = gsap.utils.toArray('.textUp');
        textUp.forEach((textUp) => {
            gsap.from(textUp, 1.2, {
                y: 200,
                opacity: 0,
                scrollTrigger: {
                    trigger: textUp,
                    start: 'top bottom',
                    // scrub:0,
                }
            })
        }) // 




        
        //sc-work
        // workUp = gsap.utils.toArray('.workUp');
        // workUp.forEach((workUp) => {
        //     gsap.from(workUp, 1.3, {
        //         // y: -0,
        //         opacity: 0,
        //         scrollTrigger: {
        //             trigger: workUp,
        //             start: '-100% 100%',
        //             // markers:true,
        //             // scrub:5,
        //         }
        //     })
        // }) // 







        gsap.to('.work-area .work-list',{
            scrollTrigger:{
                trigger:'.sc-work ',
                start:"0% 0%", // ['트리거','윈도으']
                // end:"100% top", // ['트리거','윈도으']
                end:"+=500%",
                // markers:true,
                scrub:0,
                pin:true,
            },
            // ease:'Power2',
            yPercent:-120,
            // xPercent:-200

        },)
        // gsap.fromTo('.work-area .work-list',{
        //     opacity:0,
        // },
        // {
        //     scrollTrigger:{
        //         trigger:'.sc-work',
        //         start:"0% 0%", // ['트리거','윈도으']
        //         // end:"100% top", // ['트리거','윈도으']
        //         end:"+=500%",
        //         markers:true,
        //         scrub:0,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
        //         pin:true,
        //     },
        //     // ease:'Power2',
        //     opacity:1,
        //     yPercent:-115,
        //     // xPercent:-200
            
        // })
        

        

        //work, viewportfolio 눌렀을때  스크롤 이동
        var menuTab = $('.service-list .work, .btn-work')
        var menuLogo =$('html').scrollTop(0);
        // var workscr = $('.sc-work').offset().top
        var doc  = $('html, body')
        // console.log(location);
        var worksrl = $('#sc-Work').offset().top;
        $(menuTab).click(function(e){
            // var workscl = document.querySelector("#sc-Work").offsetTop;
            // console.log(worksrl);
            // alert(worksrl);
            e.preventDefault();
            // $(window).scrollTo(1000, 1000);
            // window.scrollTo(workscr)
            window.scrollTo({top:worksrl, behavior:'smooth'});
        })
        // $('.header .logo a').click(function(){
        //     e.preventDefault();
        //     // $('html').scrollTop(0);
        //     window.scrollTo({top:menuLogo, behavior:'smooth'});
        // })

        $(window).trigger('resize')
    });//end