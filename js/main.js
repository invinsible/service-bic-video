$(document).ready(function (){
    const camera = [
        'HD с фиксированным объективом',
        'HD c вариофокальным объективом',
        'HD c трансфокатором (ZOOM)',
        'SDI с фиксированным объективом',
        'SDI с вариофокальным объективом',
        'SDI c трансфокатором (ZOOM)',
        'IP с фиксированным объективом',
        'IP с вариофокальным объективом',
        'IP c трансфокатором (ZOOM, машинного зрения)'
    ]
    const register = [
        'Аналог, AHD, NVR, Гибридные до 4 каналов',
        'Аналог, AHD, NVR, Гибридные 4-8 каналов',
        'Аналог, AHD, NVR, Гибридные 16-24каналов',
        'Аналог, AHD, NVR, Гибридные более 24 кан.',
        'Цифровые SDI Гибридные 4-9 каналов',
        'Цифровые SDI Гибридные 16-24 каналов',
        'Записывающие устройства для транспорта',
        'Видеосерверы',        
    ]
    const monitor = [
        'Диагональю до 10"',
        'Диагональю более 10"',             
    ]
    const skud = [
        'Монитор видеодомофона аналоговый',
        'Монитор видеодомофона Цифровой (IP, ЖК)',
        'Вызывные панели. 1-2 абонента',
        'Вызывные панели. более 2 абонентов',
        'Блоки эл-ки, БУД, кодовые панели',
        'Контроллеры упр. автономные, считыватели',
        'Контроллеры упр. сетевые',
        'Пульт консьержки (Переговорные устр-ва)',
        'Электро замки, защелки'
    ]

    const power = [
        'Линейные',
        'Импульсные выносные на одно напр.',
        'Импульсные стационарные',
        'Резервного питания',
        'Бесперебойные цифровые UPS',        
    ]

    const another = [
        'Интегрированные системы',
        'Устройства защиты линий',
        'Устройства коммутации',
        'Объективы',
        'Аппаратура передачи данных',
        'Пульты управления Speed Dome, ОПУ',
        'Аппаратура усиления и оповещения (Тромбон)',
        'Термокожухи' ,
        'Прочее'       
    ]

    $('.whatIs a').click(function(e){
        e.preventDefault();
        $(this).next('.tooltip').toggle();
    });

    $('.close').click(function(e){
        e.preventDefault();
        $('.tooltip').hide();
    });

    $('.scrollLink').click(function (e){
        e.preventDefault();
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });

    $('.carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },    
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.choose').click(function(){        
        hideErrorFor($('#fSelect'));        

        $('.form__select select').addClass('active');
        $('.form__select select').empty();
        let id = $(this).attr('id');

        let appendOption = function (el) {
            $('.form__select select').append('<option value="'+el+'">'+el+'</option>')
        }

        if (id == 'fix-camera') {            
            $.each(camera,function(index,value){                
                appendOption(value);
            });
        }

        if (id == 'fix-register') {            
            $.each(register,function(index,value){                
                appendOption(value);
            });
        }

        if (id == 'fix-monitor') {            
            $.each(monitor,function(index,value){                
                appendOption(value);
            });
        }

        if (id == 'fix-skud') {            
            $.each(skud,function(index,value){                
                appendOption(value);
            });
        }

        if (id == 'fix-power') {            
            $.each(power,function(index,value){                
                appendOption(value);
            });
        }

        if (id == 'fix-another') {            
            $.each(another,function(index,value){                
                appendOption(value);
            });
        }
        
    });

   $("#fPolicy").click(function(){
       $(this).parent().removeClass('error');
   });

    $('.form__input').change(function() {
        hideErrorFor($(this));
    });


   // required input   
    

    $('.form').submit(function(e) {
        e.preventDefault();

        validate();
        return false

        if($("#fPolicy").prop("checked") == false) {
            $("#fPolicy").parent().addClass('error');
            return false
        }

        let data = {};
        $(this).find ('input, textearea, select').each(function() {            
            data[this.name] = $(this).val();
        });

        console.log(data);
    });

    function validate () {
        let select = $('#fSelect');
        let email = $('#fEmail');
        let phone = $('#fPhone');
        let name =  $('#fName');

        let selectValue = select.val(); 
        let emailValue = email.val().trim();
        let phoneValue = phone.val().trim();
        let nameValue =name.val().trim();
        
        if(selectValue === '') {
            setErrorFor(select);            
        }

        if(emailValue === '') {
            setErrorFor(email);            
        }

        if(phoneValue === '') {
            setErrorFor(phone);            
        }

        if(nameValue === '') {
            setErrorFor(name);            
        }
    };

    function setErrorFor(el) {
        el.addClass('error');
        el.next('.form__error').show();
    }

    function hideErrorFor(el) {
        el.removeClass('error');        
        el.next('.form__error').hide();
    }
});

