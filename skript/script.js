//Общие функции
let option = document.getElementById('option');
let tovar = document.getElementById('tovar');
let coll = document.getElementById('coll');
let cell = document.getElementById('cell');
let btm_pluss = document.getElementById('btm_pluss');
let btn_minus = document.getElementById('btn_minus');
let btn_sub = document.getElementById('btn_sub');
let age = document.getElementById('age');
let speed = document.getElementById('speed');
let dop_money = document.getElementById('dop_money');

//Элементы скрытые или скрывающиеся
let img_tovar = document.getElementById('img_tovar');
let option_s = document.getElementById('option_s');
let img_s = document.getElementById('img_s');
let coll_s = document.getElementById('coll_s');
let text_s = document.getElementById('text_s');
let property_s = document.getElementById('property_s');

//Кнопки разделов
let chocB = document.getElementById("chocolate_b");
let chocW = document.getElementById("chocolate_w");
let marm = document.getElementById("marmalade");
let lolipop = document.getElementById("lolipops");

//Фото разделов ссылки
let chocB_img = document.getElementById('chocB_img');
let chocW_img = document.getElementById('chocW_img');
let marm_img = document.getElementById('marm_img');
let lolipop_img = document.getElementById('lolipop_img');

//Переменые ячеки
//Пункты
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');

let mas_p = [p1,p2,p3,p4,p5];
let mas_chocB = ['Шоколадное наслаждение - 33p',"Райский шоколад - 49р","Шоколадный вихрь -64р","Сладкий уголок -77р","Шоколадное искушение -38р"];
let mas_chocB_cell = [33,49,64,77,38];
let mas_chocW = ["Лунный снежок -63р","Изумрудный бриз -33р","Ангельская грусть -48р","Белоснежное наслаждение -30р","Райская нежность -50р"];
let mas_chocW_cell = [63,33,48,30,50];
let mas_marm = ["Солнечный взрыв -46р","Радужный вкус -95р","Магический мармелад -54р","Фруктовый фейерверк -93р","Сладкая гармония -74р"];
let mas_marm_cell = [46,95,54,93,74];
let mas_lolipop = ["Морозная сладость -43р","Замороженное наслаждение -91р","Ледяные драгоценности -44р","Арктическая сказка -38р","Ледовый взрыв -37р"];
let mas_lolipop_cell = [43,91,44,38,37];

//Функция появления всего
function openSection(){
    option_s.style.display = 'block';
    img_s.style.display = 'block';
    coll_s.style.display = 'block';
    text_s.style.display = 'block';
    property_s.style.display = 'block';
    btm_pluss.style.display = 'block';
    btn_minus.style.display = 'block';
    btn_sub.style.display = 'block';
}

function setOption(mas){
    p1.textContent = mas[0];
    p2.textContent = mas[1];
    p3.textContent = mas[2];
    p4.textContent = mas[3];
    p5.textContent = mas[4];
}

//Btn tovar ---------------------
chocB.addEventListener('change', function(){
    console.log('1');
    img_tovar.style.display = "none";
    openSection();
    //Основная отгрузка каталога
    setOption(mas_chocB);
    tovar.src = "img/chok.jpg";
});
chocW.addEventListener('change', function(){
    console.log('2');
    img_tovar.style.display = "none";
    openSection();
    //Основная отгрузка каталога
    setOption(mas_chocW);
    tovar.src = "img/wite_choco.jpg";
});
marm.addEventListener('change', function(){
    console.log('3');
    img_tovar.style.display = "none";
    openSection();
    //Основная отгрузка каталога
    setOption(mas_marm);
    tovar.src = "img/marm.jpg";
});
lolipop.addEventListener('change', function(){
    console.log('4');
    img_tovar.style.display = "none";
    openSection();
    //Основная отгрузка каталога
    setOption(mas_lolipop);
    tovar.src = "img/lolipop.jpg";
});

//Photo btm tovar ---------------------
chocB_img.addEventListener('click', function(){
    chocB.checked = true;
    console.log('1-img');
    img_tovar.style.display = "none";
    openSection();
    //Основная загрузка катологов
    setOption(mas_chocB);
    tovar.src = "img/chok.jpg";
});
chocW_img.addEventListener('click', function(){
    chocW.checked = true;
    console.log('2-img')
    img_tovar.style.display = "none";
    openSection();
    //Основная отгрузка каталога
    setOption(mas_chocW);
    tovar.src = "img/wite_choco.jpg";
});
marm_img.addEventListener('click',function(){
    marm.checked = true;
    console.log('3-img')
    img_tovar.style.display = "none";
    openSection();
    //Основная отгрузка каталога
    setOption(mas_marm);
    tovar.src = "img/marm.jpg";
});
lolipop_img.addEventListener('click',function(){
    lolipop.checked = true;
    console.log('4-img')
    img_tovar.style.display = "none";
    openSection();
    //Основная отгрузка каталога
    setOption(mas_lolipop);
    tovar.src = "img/lolipop.jpg";
})

//Button logic---------------------
let sum = 0;
let dop_sum;
btm_pluss.addEventListener('click', function(){
    //Проверка на раздел
    if(p1.textContent == mas_chocB[0]){
        if(option.value == "p1" && !(isNaN(coll.value))  && coll.value > 0){
            sum += mas_chocB_cell[0] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p2" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocB_cell[1] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p3" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocB_cell[2] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p4" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocB_cell[3] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p5" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocB_cell[4] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
    }
    if(p1.textContent == mas_chocW[0]){
        if(option.value == "p1" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocW_cell[0] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p2" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocW_cell[1] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p3" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocW_cell[2] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p4" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocW_cell[3] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p5" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_chocW_cell[4] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
    }
    if(p1.textContent == mas_marm[0]){
        if(option.value == "p1" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_marm_cell[0] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p2" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_marm_cell[1] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p3" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_marm_cell[2] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p4" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_marm_cell[3] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p5" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_marm_cell[4] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
    }
    if(p1.textContent == mas_lolipop[0]){
        if(option.value == "p1" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_lolipop_cell[0] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p2" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_lolipop_cell[1] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p3" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_lolipop_cell[2] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p4" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_lolipop_cell[3] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
        if(option.value == "p5" && !(isNaN(coll.value)) && coll.value > 0){
            sum += mas_lolipop_cell[4] * coll.value;
            cell.textContent = "Цена: " + sum + "p";
        }
    }
})

btn_minus.addEventListener('click', function(){
    cell.textContent = "Цена: 0p";
    sum = 0;
    coll.value = '';
    age.checked = false;
    speed.checked = false;
    dop_money.checked = false;
})

let check_buy = false;
btn_sub.addEventListener('click', function(){
    if(sum > 0){
        check_buy = confirm('Вы уверенны в покупке на ' + sum + 'p');
        if(check_buy == true){
            cell.textContent = "Цена: 0p";
            sum = 0;
            location.reload ();
            alert("Успешно");
        }
    }else{
        alert("Вы ничего не добавили");
    }
})

age.addEventListener('change', function(){
    if(this.checked){
        sum += 500;
        cell.textContent = "Цена: " + sum + "p";
    }
    else{
        sum -= 500;
        cell.textContent = "Цена: " + sum + "p";
    }
})
speed.addEventListener('change', function(){
    if(this.checked){
        sum += 200;
        cell.textContent = "Цена: " + sum + "p";
    }
    else{
        sum -= 200;
        cell.textContent = "Цена: " + sum + "p";
    }
})
dop_money.addEventListener('change', function(){
    if(this.checked){
        sum += 100;
        cell.textContent = "Цена: " + sum + "p";
    }
    else{
        sum -= 100;
        cell.textContent = "Цена: " + sum + "p";
    }
})
