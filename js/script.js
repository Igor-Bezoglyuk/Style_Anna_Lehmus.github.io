jQuery( document ).ready(function(){
    $(function (){
    $(".Open").click(function(){
    $("#Header-Phone").css("display","block"); 
 });
    $(".Close").click(function(){
    $("#Header-Phone").css("display","none");
});
   $(window).resize(function(){
   $("#Header-Phone").hide();
});
});
});


jQuery(document).ready(function(){
    $(function (){
        $(".Open-Serveses-1").click(function(){
        $(".Serveses-modal:hidden").show()
        $(".Serveses-modal-info").html('<div class="Serveses-modal-info-img"> <img src="img/Razbor_garderoba.jpg" alt="Гардероб"></div> <div class="Serveses-modal-info-block"> <h3 class="Serveses-modal-info-title">Разбор гардероба онлайн и оффлайн</h3> <p>Отличный шанс дать своим вещам новую жизнь.</p> <ul class="Serveses-modal-spisok"> <li>У вас большое количество вещей, но вы не знаете, с чем их носить и как сочетать.</li> <li>Носить нечего, а вешать некуда.</li> <li>Ваша одежда плохо работает на ваш имидж.</li> <li>Вы хотите поменять стиль и дать вашему гардеробу второй шанс</li> </ul> </div>');
     }); 
     $(".Open-Serveses-2").click(function(){
        $(".Serveses-modal:hidden").show()
        $(".Serveses-modal-info").html('<div class="Serveses-modal-info-img"> <img src="img/Sbor_vesey.jpg" alt="Сбор вещей"></div> <div class="Serveses-modal-info-block"> <h3 class="Serveses-modal-info-title">Сбор капсул</h3> <p>Для определенных случаев.</p> <ul class="Serveses-modal-spisok"> <li>Капсула – это набор из сочетаемых друг с другом взаимозаменяемых вещей, которые предназначены для определенной ситуации (времени года, сферы жизни, мероприятия)</li> </ul> </div>');
     });
     $(".Open-Serveses-3").click(function(){
        $(".Serveses-modal:hidden").show()
        $(".Serveses-modal-info").html('<div class="Serveses-modal-info-img"> <img src="img/konultasia_styly.jpg" alt="Консультация"></div> <div class="Serveses-modal-info-block"> <h3 class="Serveses-modal-info-title">Консультация по стилю</h3> <p>В ходе консультации по стилю мы определим Ваши индивидуальные природные параметры, зная которые Вы можете:</p> <ul class="Serveses-modal-spisok"> <li>Безошибочно подбирать одежду</li> <li>Избавиться от ненужных вещей в гардеробе</li> <li>Начать работу над созданием собственного современного стиля</li></ul> <p>Какие цвета, стиль, фасон одежды, прическа, стрижка аксессуары подойдут именно вам? Пройдите консультацию и узнайте все раз и навсегда.</p> </div>');
     });
     $(".Open-Serveses-4").click(function(){
        $(".Serveses-modal:hidden").show()
        $(".Serveses-modal-info").html('<div class="Serveses-modal-info-img"> <img src="img/online-shopping.jpg" alt="Шоппинг онлайн"></div> <div class="Serveses-modal-info-block"> <h3 class="Serveses-modal-info-title">Шопинг сопровождение онлайн</h3> <ul class="Serveses-modal-spisok"> <li>Поиск необходимой одежды в интернете.</li> <li>Выбор подходящих фасонов одежды с учетом особенностей вашей фигуры.</li> <li>Совершение необходимых покупок в рамках вашего бюджета</li><li>Создание нескольких интересных образов, не выходя из дома.</li><li>Экономия времени и физических, а главное моральных сил.</li> </ul> <p>Как проходит шоппинг-сопровождение онлайн:</p> <ol class="Serveses-modal-spisok-nombers"><li>Первая наша встреча происходит по видео  или по телефону.</li><li>Мы обсуждаем организационные вопросы и заполняем анкету с информацией о вас, которая понадобится мне для работы.</li><li>Вы присылаете свои фотографии, я анализирую вашу внешность.</li><li>Подробно обговариваем, что нужно купить и как бы хотелось выглядеть.</li><li>Согласовываем бюджет - минимум и максимум.</li><li>Далее я составляю для вас список ссылок на одежду, обувь и аксессуары в онлайн магазинах. Это занимает 4-5 дней, в зависимости от вашего заказа. Вы самостоятельно делаете заказ по моим ссылкам.</li><li>Все поступающие к вам вещи, вы фотографируете на себе и присылаете мне фотографии или видео для обсуждения и одобрения.  Далее отбираем понравившиеся вещи, я нахожусь с вами на связи до тех пор, пока вы не получите все заказы, и мы не соберем готовые комплекты.</li><li> Если какие-то вещи вам не подошли или не понравились, я нахожу новые альтернативные варианты и делаем заказ вновь.</li></ol> </div>');
     });
     $(".Open-Serveses-5").click(function(){
        $(".Serveses-modal:hidden").show()
        $(".Serveses-modal-info").html('<div class="Serveses-modal-info-img"> <img src="img/shopping.jpg" alt="Шоппинг"></div> <div class="Serveses-modal-info-block"> <h3 class="Serveses-modal-info-title">Шопинг оффлайн</h3>  <ul class="Serveses-modal-spisok"> <li>Индивидуальная консультация.</li> <li>Поиск необходимой одежды в магазинах</li> <li>Выбор подходящих фасонов одежды с учетом особенностей вашей фигуры.</li> <li>Совершение совместных покупок в рамках вашего бюджета</li> <li>Создание нескольких интересных образов</li> <li>Экономия времени для вас.</li> </ul> <p>Как проходит шоппинг оффлайн:</p> <ol class="Serveses-modal-spisok-nombers"><li>Первая наша встреча происходит по видео или по телефону.</li><li>Мы обсуждаем организационные вопросы и заполняем анкету с информацией о вас, которая понадобится мне для работы.</li><li>Вы присылаете свои фотографии, я анализирую вашу внешность.</li><li>Подробно обговариваем, что нужно купить и как бы хотелось выглядеть.</li><li>Согласовываем бюджет - минимум и максимум.</li><li>Далее я составляю для вас список подходящих магазинов. Это занимает 4-5 дней, в зависимости от вашего запроса.</li><li>Мы встречаемся в торговом центре и вместе ходим по магазинам из составленного списка. Далее отбираем и покупаем понравившиеся вещи.</li></ol> </div>');
     });
     $(".Open-Serveses-6").click(function(){
        $(".Serveses-modal:hidden").show()
        $(".Serveses-modal-info").html('<div class="Serveses-modal-info-img"> <img src="img/Style_book.jpg" alt="Style Book"></div> <div class="Serveses-modal-info-block"> <h3 class="Serveses-modal-info-title">Составление Style Book’а</h3> <p>Стайлбук- это ваша персональная книга стиля. Книга, в которой вы найдете все ответы на свои вопросы относительно подходящих именно вам цветов одежды, кроя и фасонов, а так же индивидуального стиля.</p> <p>Какую информацию содержит стайлбук?</p> <ul class="Serveses-modal-spisok"> <li>Цветотип внешности с указанием особенностей ваших цветовых характеристик по основным показателям: теплый-холодный, яркий-приглушенный, темный-светлый, включая, при необходимости, серединные величины.</li> <li>Палитра ваших оттенков, состоящая из базовых и акцентных цветов. Сочетания цветов с учетом вашего образа жизни и решаемых задач.</li> <li>Рекомендуемое решение для прически, оттенков цвета волос, включая техники окрашивания. А также рекомендуемые оттенки и акценты в макияже и маникюре.</li> <li>Подходящие вам фактуры, типы тканей, принты (рисунки), металлы, камни и другие материалы.</li> <li>Тип фигуры, зоны преимуществ и коррекции, особенности, рекомендации по подходящим фасонам одежды.</li><li>Подходящие вам обувь и сумки в разной стилистике , включая разделение по сезонам.</li><li>Аксессуары (платки, очки, головные уборы, шарфы, ремни, перчатки и т.д.). А также подходящие вам украшения с учетом формы типа внешности.</li><li>Ваш индивидуальный стилевой типаж, особенности внешности. Впечатление, производимое на окружающих.</li><li>Рекомендации по стилевым направлениям и модным течениям, подходящим для вашего стилевого типажа. Подбор образов для разных случаев с учетом индивидуальной стилистики.</li> </ul> </div>');
     });
        $(".Close-Modal").click(function(){
        $(".Serveses-modal").hide();
     });
    });
    });



    jQuery(document).ready(function(){
      $(function (){
          $(".G-img-1").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343956_y.jpg" alt="Galery_imgs">');
       }); 
          $(".G-img-2").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343957_y.jpg" alt="Galery_imgs">');
       }); 
          $(".G-img-3").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343958_y.jpg" alt="Galery_imgs">');
       }); 
          $(".G-img-4").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343959_y.jpg" alt="Galery_imgs">');
       }); 
          $(".G-img-5").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343963_y.jpg" alt="Galery_imgs">');
       }); 
          $(".G-img-6").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343974_y.jpg" alt="Galery_imgs">');
       });
          $(".G-img-7").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343960_y.jpg" alt="Galery_imgs">');
       });
          $(".G-img-8").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343972_y.jpg" alt="Galery_imgs">');
       });
          $(".G-img-9").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343964_y.jpg" alt="Galery_imgs">');
       });
          $(".G-img-10").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343965_y.jpg" alt="Galery_imgs">');
       });
          $(".G-img-11").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343981_y.jpg" alt="Galery_imgs">');
       });
          $(".G-img-12").click(function(){
          $(".Gallery-modal:hidden").show()
          $(".Galleery-modal-img").html('<img src="img/photo_5190773697739343961_y.jpg" alt="Galery_imgs">');
       });
          $(".Gallery-close").click(function(){
          $(".Gallery-modal").hide();
       });
      });
      });






 $(document).on('submit', '.Contacts-form', function(e) {
   e.preventDefault(); // Prevents the default page reload after form submission
 
   $.ajax({
       type: $(this).prop('method'),
       url: $(this).prop('action'),
       data: $(this).serialize()
   }).done(function() {
       // Do something after it submits
       alert('Сообщение отправлено');
   }).fail(function() {
       // There was an error
       alert('Что то пошло не так !');
   });
 });


 $(document).ready(function(){
   $(".Header-Menu").on("click",".Menusilka", function (event) {
       //отменяем стандартную обработку нажатия по ссылке
       event.preventDefault();

       //забираем идентификатор бока с атрибута href
       var id  = $(this).attr('href'),

       //узнаем высоту от начала страницы до блока на который ссылается якорь
           top = $(id).offset().top;
        
       //анимируем переход на расстояние - top за 1500 мс
       $('body,html').animate({scrollTop: top}, 1500);
   });
});

$(document).ready(function(){
   $(".Phone-menu").on("click",".Menusilka", function (event) {
       //отменяем стандартную обработку нажатия по ссылке
       event.preventDefault();

       //забираем идентификатор бока с атрибута href
       var id  = $(this).attr('href'),

       //узнаем высоту от начала страницы до блока на который ссылается якорь
           top = $(id).offset().top;
        
       //анимируем переход на расстояние - top за 1500 мс
       $('body,html').animate({scrollTop: top}, 1500);
   });
});