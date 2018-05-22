let cuponvalido=false;
$(document).ready(function () {
    /*Scripts relacionados con tab de Inicio y disciplinas*/
    var tMatutino_height = $("tMatutino").height();
    $("#touchSlider").touchSlider({
        roll: true,
        flexible: true
    });
    $('.tabGroup1').swichTab();
    $('.tabGroup2').swichTab({
        cahngePanel: 'fade',
        swiper: true,
        index: 0,
    });
    $("#touchSlider").on('swipeleft', function (e) {
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
    });
    $("#touchSlider").on('swiperight', function (e) {
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
    });
    if (screen.height <= 1024) {
        $("#Horarios").on('swipeup', function (e) {
            $("#tMatutino").animate({height: 0}, "fast");
        });
        $("#Horarios").on('swipedown', function (e) {
            if (screen.width < 700) {
                $("#tMatutino").animate({height: "344px"}, "fast");
            } else {
                $("#tMatutino").animate({height: "428px"}, "fast");
            }
        });
    }

    if (screen.height>=1024 && screen.width>=768){
        $("button").addClass("btn-lg");
        $("#botonSiguente").removeClass("col-3 offset-2");
        $("#botonSiguente").addClass("col-2 offset-3");
        $("#botonSiguente2").removeClass("col-3 offset-2");
        $("#botonSiguente2").addClass("col-2 offset-3");
        $("#encabezado_texto").removeClass("col-10");
        $("#encabezado_texto").addClass("col-7 offset-2  ");
        $("h4").css({
            "font-size":"2.5rem"
        });
        $("h5").css({
            "font-size":"1.8rem"
        });
        $("p").css({
            "font-size":"1.5rem"
        });
        $("strong").css({
            "font-size":"1.5rem"
        });
        $("ul>li>a").css({
            "font-size":"1.5rem"
        });

    }
    var a = screen.height - (screen.height * 0.10);
    $("#c_disciplina").attr("style", "height:" + a.toString());
    /*Scripts relacionados con tab Inicio c/u disciplinas*/
    console.log(screen.height - 100);
    $("#carouselGaleria").css({
        "width": screen.width,
        "height": screen.height - 100,
    });
    $("#carouselInfo").css({
        "width": screen.width,
        "height": screen.height - 60
    });
    $("#galVideo").css({
        "height": a
    })

    $("div img.w-100").css({
        "height": screen.height - 60
    })

    $("#Natacion").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/natacion.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("¿Sabías que?");
        $("#content2_disciplina_ts").text("La natación es consistentemente una de las principales actividades recreativas públicas, y en algunos países, las lecciones de natación son una parte obligatoria del currículo educativo.")
        $("#content3_disciplina_ts").text("En nuestras instalaciones contamos con alberca olímpica, ven y aprende con nuestros mejores instructores los 4 estilos básicos de natación: Crawl, Dorso, Pecho y Mariposa.");
        $("#disciplina_ts").text("Natacion");
        $("#img_disciplina_ts").attr("src", "assets/natacion.jpg");
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/natacion/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/natacion/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/natacion/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://www.youtube.com/embed/MMeXA-2xJEQ??rel=0&amp;showinfo=0&amp;start=5");
        //Cambio Horarios
        $("#tMatutino").empty();
        $("#tVespertino").empty();
        $("#tMatutino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo A<span>6:00 - 7:00</span></li>');
        $("#tMatutino").append('<li id="GrupoB" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo B<span>7:00 - 8:00</span></li>');
        $("#tMatutino").append('<li id="GrupoC" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo C<span>8:00 - 9:00</span></li>');
        $("#tMatutino").append('<li id="GrupoD" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo D<span>9:00 - 10:00</span></li>');
        $("#tMatutino").append('<li id="GrupoE" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo E<span>10:00 - 11:00</span></li>');
        $("#tMatutino").append('<li id="GrupoF" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo F<span>11:00 - 12:00</span></li>');
        $("#tMatutino").append('<li id="GrupoG" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo G<span>12:00 - 13:00</span></li>');

        $("#tVespertino").append('<li id="GrupoH" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo H<span>13:00 - 14:00</span></li>');
        $("#tVespertino").append('<li id="GrupoI" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo I<span>14:00 - 15:00</span></li>');
        $("#tVespertino").append('<li id="GrupoJ" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo J<span>15:00 - 16:00</span></li>');
        $("#tVespertino").append('<li id="GrupoK" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo K<span>16:00 - 17:00</span></li>');
        $("#tVespertino").append('<li id="GrupoL" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo L<span>17:00 - 18:00</span></li>');
        $("#tVespertino").append('<li id="GrupoM" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo M<span>18:00 - 19:00</span></li>');
        $("#tVespertino").append('<li id="GrupoN" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo N<span>19:00 - 20:00</span></li>');
        $("#tVespertino").append('<li id="GrupoO" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo O<span>20:00 - 21:00</span></li>');
        $("#tVespertino").append('<li id="GrupoP" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo O<span>21:00 - 22:00</span></li>');

        $(".swichtab-controller>li").css("background", "rgb(15, 37, 88)");
        $("li.is-active>a").css("background", "rgb(12, 109, 181)");
        $("#touchSlider").css("background", "-webkit-linear-gradient(top, rgb(50, 63, 104) 0%,rgba(42, 77, 204, 0.84) 9%,rgba(0, 166, 234, 0.92) 100%)");
        $("#touchSlider").css("display", "flex");
    });


    $("#Waterpolo").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/waterpolo.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("El waterpolo o polo acuático es un deporte que se practica en una piscina, en el cual se enfrentan dos equipos. ");
        $("#content2_disciplina_ts").text("El objetivo del juego es marcar el mayor número de goles en la portería del equipo contrario durante el tiempo que dura el partido.")
        $("#content3_disciplina_ts").text("Ven con nosotros y adéntrate en un nuevo deporte, contamos con las adecuadas instalaciones y equipo de asistencia médica.");
        $("#disciplina_ts").text("Waterpolo");
        $("#img_disciplina_ts").attr("src", "assets/waterpolo_ts.jpg");
        //Cambio de contenido de galeria
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/waterpolo/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/waterpolo/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/waterpolo/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://www.youtube.com/embed/T2pm4WW9rxk?rel=0&amp;showinfo=0");
        //Cambio de horarios
        $("#tMatutino").empty();
        $("#tVespertino").empty();
        $("#tMatutino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo A<span>6:00 - 8:00</span></li>')
        $("#tMatutino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo B<span>9:00 - 11:00</span></li>')
        $("#tVespertino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo C<span>12:00 - 14:00</span></li>')
        $("#tVespertino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo D<span>15:00 - 17:00</span></li>')
        $("#tVespertino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo E<span>18:00 - 20:00</span></li>')
        //Cambio de estilos
        $(".swichtab-controller>li").css("background", "rgb(0, 61, 85)");
        $("li.is-active>a").css("background", "rgb(83, 185, 217)");
        $("#touchSlider").css("background", "-webkit-linear-gradient(top, rgba(6,123,219,1) 0%,rgba(5,171,224,1) 0%,rgba(5,171,224,1) 34%,rgba(83,203,241,1) 72%,rgba(135,224,253,1) 97%,rgba(151,228,252,1) 100%)");
        $("#touchSlider").css("display", "flex");
    });

    $("#Bodybuilding").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/bodybuilding.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("¿Sabías que?");
        $("#content2_disciplina_ts").text("Aunque en sus inicios fue un deporte exclusivamente para varones, en la década de 1980 comenzaron a surgir competiciones femeninas.")
        $("#content3_disciplina_ts").text("Bodybuilding tiene como objetivo la obtención de una musculatura fuerte y definida.En nuestras instalaciones puedes encontrar todo el equipo necesario y entrenadores especializados en bodybuilding.");
        $("#disciplina_ts").text("Bodybuilding");
        $("#img_disciplina_ts").attr("src", "assets/bodybuilding_ts.jpg");
        //Cambio de contenido de galeria
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/bodybuilding/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/bodybuilding/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/bodybuilding/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://www.youtube.com/embed/UYaZIAG9P8U?rel=0&amp;showinfo=0");
        $("#tMatutino").empty();
        $("#tVespertino").empty();
        $("#tMatutino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo A<span>6:00 - 7:00</span></li>');
        $("#tMatutino").append('<li id="GrupoB" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo B<span>7:00 - 8:00</span></li>');
        $("#tMatutino").append('<li id="GrupoC" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo C<span>8:00 - 9:00</span></li>');
        $("#tMatutino").append('<li id="GrupoD" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo D<span>9:00 - 10:00</span></li>');
        $("#tMatutino").append('<li id="GrupoE" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo E<span>10:00 - 11:00</span></li>');
        $("#tMatutino").append('<li id="GrupoF" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo F<span>11:00 - 12:00</span></li>');
        $("#tMatutino").append('<li id="GrupoG" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo G<span>12:00 - 13:00</span></li>');

        $("#tVespertino").append('<li id="GrupoH" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo H<span>13:00 - 14:00</span></li>');
        $("#tVespertino").append('<li id="GrupoI" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo I<span>14:00 - 15:00</span></li>');
        $("#tVespertino").append('<li id="GrupoJ" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo J<span>15:00 - 16:00</span></li>');
        $("#tVespertino").append('<li id="GrupoK" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo K<span>16:00 - 17:00</span></li>');
        $("#tVespertino").append('<li id="GrupoL" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo L<span>17:00 - 18:00</span></li>');
        $("#tVespertino").append('<li id="GrupoM" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo M<span>18:00 - 19:00</span></li>');
        $("#tVespertino").append('<li id="GrupoN" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo N<span>19:00 - 20:00</span></li>');
        $("#tVespertino").append('<li id="GrupoO" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo O<span>20:00 - 21:00</span></li>');
        $("#tVespertino").append('<li id="GrupoP" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo O<span>21:00 - 22:00</span></li>');

        $(".swichtab-controller>li").css("background", "black");
        $("li.is-active>a").css("background", "rgb(130, 122, 31)");
        $("#touchSlider").css("background", "-webkit-linear-gradient(top, rgb(0, 0, 0) 0%,rgba(45, 0, 0, 0.84) 9%,rgba(113, 0, 0, 0.92) 100%)");
        $("#touchSlider").css("display", "flex");
    });
    $("#Crossfit").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/crossfit.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("Es una técnica de entrenamiento bastante reciente, nacida en el 2001 de la mano de Greg Glasman, dicha técnica fue usada para entrenar policías y gracias a sus buenos resultados, sirvió también para entrenar bomberos y militares.");
        $("#content2_disciplina_ts").text("Crossfit es un programa de acondicionamiento diseñado para ayudar a las personas a mejorar su condición física.")
        $("#content3_disciplina_ts").text("¿Te cansas rápido por las noches? ¡Venga! ven y empieza a hacer crossfit y adquiere la condición física que te hace falta.");
        $("#disciplina_ts").text("Crossfit");
        $("#img_disciplina_ts").attr("src", "assets/crossfit_ts.jpg");
        //Cambio de contenido de galeria
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/crossfit/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/crossfit/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/crossfit/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://player.vimeo.com/video/257366224?title=0&byline=0&portrait=0");
        //Cambio horarios
        $("#tMatutino").empty();//Limpian hijos de tMatutino
        $("#tVespertino").empty();//Limpian hijos de tVespertino
        $("#tMatutino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo A<span>6:00 - 7:00</span></li>');
        $("#tMatutino").append('<li id="GrupoB" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo B<span>7:00 - 8:00</span></li>');
        $("#tMatutino").append('<li id="GrupoC" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo C<span>8:00 - 9:00</span></li>');
        $("#tMatutino").append('<li id="GrupoD" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo D<span>9:00 - 10:00</span></li>');
        $("#tMatutino").append('<li id="GrupoE" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo E<span>10:00 - 11:00</span></li>');
        $("#tMatutino").append('<li id="GrupoF" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo F<span>11:00 - 12:00</span></li>');
        $("#tMatutino").append('<li id="GrupoG" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo G<span>12:00 - 13:00</span></li>');

        $("#tVespertino").append('<li id="GrupoH" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo H<span>13:00 - 14:00</span></li>');
        $("#tVespertino").append('<li id="GrupoI" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo I<span>14:00 - 15:00</span></li>');
        $("#tVespertino").append('<li id="GrupoJ" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo J<span>15:00 - 16:00</span></li>');
        $("#tVespertino").append('<li id="GrupoK" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo K<span>16:00 - 17:00</span></li>');
        $("#tVespertino").append('<li id="GrupoL" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo L<span>17:00 - 18:00</span></li>');
        $("#tVespertino").append('<li id="GrupoM" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo M<span>18:00 - 19:00</span></li>');
        $("#tVespertino").append('<li id="GrupoN" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo N<span>19:00 - 20:00</span></li>');
        $("#tVespertino").append('<li id="GrupoO" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo O<span>20:00 - 21:00</span></li>');
        $("#tVespertino").append('<li id="GrupoP" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo O<span>21:00 - 22:00</span></li>');

        $(".swichtab-controller>li").css("background", "rgb(45, 44, 44)");
        $("li.is-active>a").css("background", "-webkit-linear-gradient(top, rgb(93, 4, 4) 1%, rgb(68, 5, 3) 100%)");
        $("#touchSlider").css("background", "-webkit-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(60, 59, 59, 0.84) 9%, rgba(193, 191, 189, 0.92) 100%)");
        $("#touchSlider").css("display", "flex");
    });

    $("#Gym").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/gimnasio.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("¿Sabías que?");
        $("#content2_disciplina_ts").text("Para los griegos, la educación física era tan importante como el aprendizaje cognitivo. Muchos de estos gimnasios griegos tenían bibliotecas que se podían utilizar después de un baño relajante.")
        $("#content3_disciplina_ts").text("¡Venga levanta e inscríbete a nuestro gimnasio! Contamos con una amplia variedad de máquinas e instructores calificados.");
        $("#disciplina_ts").text("GYM");
        $("#img_disciplina_ts").attr("src", "assets/gym2_ts.jpg");
        //Cambio de contenido de galeria
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/gym/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/gym/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/gym/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://www.youtube.com/embed/Wzb2Naz5LuU?rel=0&amp;showinfo=0");
        //Cambio horarios
        $("#tMatutino").empty();//Limpian hijos de tMatutino
        $("#tVespertino").empty();//Limpian hijos de tVespertino
        $("#tMatutino").append('<li id="GrupoA" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo A<span>6:00 - 7:00</span></li>');
        $("#tMatutino").append('<li id="GrupoB" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo B<span>7:00 - 8:00</span></li>');
        $("#tMatutino").append('<li id="GrupoC" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo C<span>8:00 - 9:00</span></li>');
        $("#tMatutino").append('<li id="GrupoD" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo D<span>9:00 - 10:00</span></li>');
        $("#tMatutino").append('<li id="GrupoE" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo E<span>10:00 - 11:00</span></li>');
        $("#tMatutino").append('<li id="GrupoF" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo F<span>11:00 - 12:00</span></li>');
        $("#tMatutino").append('<li id="GrupoG" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo G<span>12:00 - 13:00</span></li>');

        $("#tVespertino").append('<li id="GrupoH" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo H<span>13:00 - 14:00</span></li>');
        $("#tVespertino").append('<li id="GrupoI" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo I<span>14:00 - 15:00</span></li>');
        $("#tVespertino").append('<li id="GrupoJ" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo J<span>15:00 - 16:00</span></li>');
        $("#tVespertino").append('<li id="GrupoK" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo K<span>16:00 - 17:00</span></li>');
        $("#tVespertino").append('<li id="GrupoL" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo L<span>17:00 - 18:00</span></li>');
        $("#tVespertino").append('<li id="GrupoM" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo M<span>18:00 - 19:00</span></li>');
        $("#tVespertino").append('<li id="GrupoN" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo N<span>19:00 - 20:00</span></li>');
        $("#tVespertino").append('<li id="GrupoO" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo O<span>20:00 - 21:00</span></li>');
        $("#tVespertino").append('<li id="GrupoP" class="btn-outline-primary list-group-item d-flex justify-content-between align-items-center">Grupo O<span>21:00 - 22:00</span></li>');

        $(".swichtab-controller>li").css("background", "#221d1e");
        $("li.is-active>a").css("background", "#b51118");
        $("#touchSlider").css("background", " -webkit-linear-gradient(top, rgb(140, 21, 21) 0%, rgb(58, 41, 41) 100%)");
        $("#touchSlider").css("display", "flex");
    });

    $(".btn-back").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        var path = new String(document.getElementById("galVideo").getAttribute("src").toString());
        document.getElementById("galVideo").src = "";
        document.getElementById("galVideo").src = path;
        $(".swichtab-contents").css("margin-bottom", "60px");
        $("li.is-active>a").css("background", "rgba(0,183,234,1)");
        $(".swichtab-controller>li").css("background", " rgb(6, 0, 85)");
        $("#touchSlider").css("display", "none");
    });
    $("#Inicio").on('tap', function () {
        document.getElementById("galVideo").src = "";
        document.getElementById("galVideo").src = path;
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $("#Unete>a").removeAttr("style");
        $(".swichtab-contents").css("margin-bottom", "60px");
        $(".swichtab-contents").css("display", "flex");
        $("#touchSlider").css("display", "none");
    });

    /*Scripts relacionados con tab de Unete*/
    $("#Unete").on('tap', function () {
        document.getElementById("galVideo").src = "";
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $("li>a").removeAttr("style");
        $(".swichtab-controller>li").css("background", " rgb(6, 0, 85)");
        $(".swichtab-contents").css("margin-bottom", "auto");
        $("#touchSlider").css("display", "none");
    });
    $("#btnNextF0").on('click', function () {
        $("#Form0").css("display", "none");
        $(".bgFormulario").css("background-image", "url('assets/bg_form4.jpg ')",);
        $("#Form1").css("display", "block");
        $("#barraProgreso").attr("style", "width:25%");
        $("#Form1").animate({opacity: '1'});
    });

    $("#btnBackF1").on('click', function () {
        $("#Form1").css("display", "none");
        $(".bgFormulario").css("background-image", "url('assets/bg_form0.jpg ')");
        $("#Form0").css("display", "block");
        $("#barraProgreso").attr("style", "width:0%");
        $("#Form0").animate({opacity: '1'});
    });

    $("#btnNextF1").on('click', function () {
        $(".bgFormulario").css("background-image", "url('assets/bg_form2.jpg ')");
        $("#Form1").css("display", "none");
        $("#Form2").css("display", "block");
        $("#barraProgreso").attr("style", "width:50%");
        $("#Form2").animate({opacity: '1'});
    });

    $("#btnBackF2").on('click', function () {
        $(".bgFormulario").css("background-image", "url('assets/bg_form4.jpg ')");
        $("#Form2").css("display", "none");
        $("#Form1").css("display", "block");
        $("#barraProgreso").attr("style", "width:25%");
        $("#Form1").animate({opacity: '1'});
    });

    $("#btnNextF2").on('click', function () {
        $(".bgFormulario").css("background-image", "url('assets/bg_form6.jpg ')");
        datosPntConf();
        $("#Form2").css("display", "none");
        $("#Form3").css("display", "block");
        $("#head_inscripcion").text("Verifica tus datos");
        $("#barraProgreso").attr("style", "width:100%");
        $("#Form3").animate({opacity: '1'});

    });

    $("#btnBackF3").on('click', function () {
        $(".bgFormulario").css("background-image", "url('assets/bg_form2.jpg ')");
        $("#Form3").css("display", "none");
        $("#head_inscripcion").text("¡¡¡INSCRIBETE!!!");
        $("#Form2").css("display", "block");
        $("#barraProgreso").attr("style", "width:50%");
        $("#Form2").animate({opacity: '1'});
    });


    /*Scripts relacionados con tab de Info*/
    $("#Info").on('tap', function () {
        document.getElementById("galVideo").src = "";
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $("li>a").removeAttr("style");
        $(".swichtab-controller>li").css("background", " rgb(6, 0, 85)");
        $(".swichtab-contents").css("margin-bottom", "auto");
        $("#touchSlider").css("display", "none");
    });
    /*
    //Audio para Slide Info01
    $("#info-historia-bg").ready(function (){
        document.getElementById('audio-carousel').currentTime = 0;
        document.getElementById('audio-carousel').pause();
        $("#audio-carousel").attr("src", "assets/audio/Info01.mp3");
    });
    //Audio para Slide Info02
    $("#info-membresia-bg").ready(function (){
        document.getElementById('audio-carousel').currentTime = 0;
        document.getElementById('audio-carousel').pause();
        $("#audio-carousel").attr("src", "assets/audio/Info02.mp3");
    });
    */
    
    
    $('#audio-carouselo').on('click', function () {
        if ($("#info-historia-bg").hasClass("active")){
            $("#audio-carousel").attr("src", "assets/audio/Info01.mp3");
        }else if ($("#info-membresia-bg").hasClass("active")){
            $("#audio-carousel").attr("src", "assets/audio/Info02.mp3");
        }else if ($("#info-tour-bg").hasClass("active")){
            $("#audio-carousel").attr("src", "assets/audio/Info03.mp3");
        }else if ($("#info-carateristicas-bg").hasClass("active")){
            $("#audio-carousel").attr("src", "assets/audio/Info04.mp3");
        }else if ($("#info-mapa-bg").hasClass("active")){
            $("#audio-carousel").attr("src", "assets/audio/Info05.mp3");
        }
        document.getElementById('audio-carousel').play();
    });
    
    
    
    $("#carousel-next").on("tap", function(){
        document.getElementById('audio-carousel').currentTime = 0;
        document.getElementById('audio-carousel').pause();
    });
    $("#carousel-prev").on("tap", function(){
        document.getElementById('audio-carousel').currentTime = 0;
        document.getElementById('audio-carousel').pause();
    });
    
    
    $("#carousel-next-gal").on("tap", function(){
        var path = new String(document.getElementById("galVideo").getAttribute("src").toString());
        document.getElementById("galVideo").src = "";
        document.getElementById("galVideo").src = path;
    });
    $("#carousel-prev-gal").on("tap", function(){
        var path = new String(document.getElementById("galVideo").getAttribute("src").toString());
        document.getElementById("galVideo").src = "";
        document.getElementById("galVideo").src = path;
    });
    
    
    $("#Promos").on('tap', function () {
        document.getElementById("galVideo").src = "";
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $("li>a").removeAttr("style");
        $(".swichtab-controller>li").css("background", " rgb(6, 0, 85)");
        $(".swichtab-contents").css("margin-bottom", "auto");
        $("#touchSlider").css("display", "none");
    });

    $("select").on("change", function () {
        let s_disciplina = document.getElementById("select_disciplina");
        let s_meses = document.getElementById("select_meses");
        let s_horario = document.getElementById("select_horario");
        //selectedIndex
        console.log("llamando a colores")
        colores(this);
        if (s_disciplina.value=="Selecciona una disciplina" && s_horario.value=="Selecciona tu horario" && s_horario.selectedIndex==0 && cuponvalido==false){
            $("#btnNextF0").prop('disabled', false);
        } else {
            $("#btnNextF0").prop('disabled', true);
        }
        if (this.id === "select_disciplina") {
           obtenerGruposHorarios();
        }
        
    });
    

    $("input").on("keyup change", function () {
        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var nombre = document.getElementById("inputName").value;
        var apellido = document.getElementById("inputLastname").value;
        var email = document.getElementById("inputEmail").value;
        var telefono = document.getElementById("inputPhone").value;
        var f_nac = document.getElementById("inputf_nac").value;
        var calle = document.getElementById("inputCalle").value;
        var colonia = document.getElementById("inputColonia").value;
        var no_casa = document.getElementById("inputNumcasa").value;
        var cp = document.getElementById("inputCP").value;
    
        if (this.id === "inputCupon") {           
            validarPromo();
        }

        if (nombre != "" && apellido != "" && telefono != "" && f_nac != "" && email!="") {
            $("#btnNextF1").prop('disabled', false);
        } else {
            $("#btnNextF1").prop('disabled', true);
        }
        if (this.id == "inputEmail") {
            if (email == "" || !expr.test(email)) {                
                $("#inputEmail").removeClass("okInput");
                $("#inputEmail").addClass("errorInput");
            } else {                
                $("#inputEmail").removeClass("errorInput");
                $("#inputEmail").addClass("okInput");
            }
        }
        if (calle != "" && colonia != "" && no_casa != "" && cp != "") {
            $("#btnNextF2").prop('disabled', false);
        } else {
            $("#btnNextF2").prop('disabled', true);
        }
    });
});

function datosPntConf() {
    _obtenerValorDisciplina();
    _obtenerValorCupon();
    _obtenerValorTotalMeses();

    var nombre = document.getElementById("inputName").value;
    var apellido = document.getElementById("inputLastname").value;
    var email = document.getElementById("inputEmail").value;
    var telefono = document.getElementById("inputPhone").value;
    var f_nac = document.getElementById("inputf_nac").value;
    var calle = document.getElementById("inputCalle").value;
    var colonia = document.getElementById("inputColonia").value;
    var no_casa = document.getElementById("inputNumcasa").value;
    var cp = document.getElementById("inputCP").value;
    var diciplina_code = document.getElementById("select_disciplina").selectedIndex;
    var d_selected = document.getElementById("select_disciplina")[diciplina_code].text;
    var hindex = document.getElementById("select_horario").selectedIndex;
    var h_selected = document.getElementById("select_horario")[hindex].text;
    var mindex = document.getElementById("select_meses").selectedIndex;
    var m_selected = document.getElementById("select_meses")[mindex].text;

    $("#C_nombre").text(nombre);
    $("#C_apellidos").text(apellido);
    $("#C_telefono").text(telefono);
    $("#C_email").text(email);
    $("#C_fnac").text(f_nac);
    $("#C_calle").text(calle);
    $("#C_colonia").text(colonia);
    $("#C_numcasa").text(no_casa);
    $("#C_cp").text(cp);
    $("#C_disciplina").text(d_selected);
    $("#C_horario").text(h_selected);
    $("#C_meses").text(m_selected);

    let promiseMembresia = _obtenerMembresia();
    let promiseDisciplina = _obtenerDisciplina();
    let promisePromo = _buscarPromo();

    Promise.all([promiseMembresia, promiseDisciplina, promisePromo]).then(function (values) {
        console.log("Se obtuvo la membresia: " + "\n" + JSON.stringify(values[0], undefined, 2));
        precioMembresia = values[0].Item.precio;

        console.log("Se obtuvo la disciplina: " + "\n" + JSON.stringify(values[1], undefined, 2));
        mensualidad = values[1].Item.mensualidad;

        if (values[2] === SIN_CUPON) {
            console.log("No se aplico cupon");
            cantidadPago = precioMembresia + (mensualidad * totalMeses);
        } else {
            console.log("Se obtuvo la promocion: " + "\n" + JSON.stringify(values[2], undefined, 2));
            descuento = values[2].Item.descuento;
            instrucciones = values[2].Item.instrucciones;
            cantidadPago = _aplicarPromo();
        }

        $("#C_membresia").text(precioMembresia);
        $("#C_mensualidad").text(mensualidad);
        $("#C_total").text(cantidadPago);
    });

    if (document.getElementById("inputCupon").value === "") {
        $("#inputCupon").text("");
    } else {
        $("#C_cupon").text($("#inputCupon").val());
    }
}

function verificaInputCupon(cuponValido) {
    if (cuponValido) {
        cuponvalido=true;
        
        $("#inputCupon").removeClass("errorInput");
        $("#inputCupon").addClass("okInput");
    } else {
        cuponvalido=false;
        
        $("#inputCupon").removeClass("okInput");
        $("#inputCupon").addClass("errorInput");
    }

}
function getId(id){
    alert(id);
}
function rellenaHorarios(mapa) {
    let select, option, i;
    select = document.getElementById("select_horario");
    $("#select_horario").empty();

    for (let llave in mapa) {
        option = document.createElement("option");
        option.value = llave;
        option.text = mapa[llave];
        select.add(option);
    }
}

function colores(){
    let s_disciplina = document.getElementById("select_disciplina");
    let s_meses = document.getElementById("select_meses");
    let s_horario = document.getElementById("select_horario");
    
    if (s_disciplina.selectedIndex!="0") {
        $("#select_disciplina").removeClass("errorSelection");
        $("#select_disciplina").addClass("okSelection");        
        
    }else{
        console.log(" Disciplina no Valida");
        $("#select_disciplina").addClass("errorSelection");
        $("#select_disciplina").removeClass("okSelection");
    }

    if (s_horario.value!="Selecciona tu horario") {
        console.log("Horario Valido");
        $("#select_horario").addClass("okSelection");
        $("#select_horario").removeClass("errorSelection");
    }else{
        console.log("Horario  no Valido");
        $("#select_horario").addClass("errorSelection");
        $("#select_horario").removeClass("okSelection");
    }

    if (s_meses.selectedIndex != 0) {
        $("#select_meses").addClass("okSelection");
        $("#select_meses").removeClass("errorSelection");
    }else{
        $("#select_meses").addClass("errorSelection");
        $("#select_meses").removeClass("okSelection");
    }
}
