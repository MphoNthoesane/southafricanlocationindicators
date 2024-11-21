let count = 0
let radio = ['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Yankee','Zulu']
let location_indicators = ['FAAB','FAAG','FAAN','FAAP','FAAL','FAAD','FAAE','FAAR',
    'FABA','FABB','FABD','FABE','FABL','FABM','FABO','FABS','FABP','FABV','FABW',
    'FACA','FACC','FACD','FACE','FACF','FACH','FACN','FACO','FACR','FACT','FACV',
    'FADA','FADB','FADL','FADO','FADP','FADX','FADQ','FADK',
    'FAEC','FAEL','FAEM','FAEO','FAER','FAES',
    'FAFB','FAFO','FAFW',
    'FAGC','FAGG','FAGL','FAGM','FAGR','FAGT','FAGY',
    'FAHC','FAHG','FAHI','FAHJ','FAHL','FAHR','FAHS','FAHT','FAHU','FAHV',
    'FAIS','FAIW',
    'FAJA','FAJC','FAJK','FAJO','FAJP',
    'FAKD','FAKM','FAKN','FAKP','FAKR','FAKS','FAKT','FAKU','FAKZ',
    'FALA','FALC','FALD','FALE','FALI','FALL','FALO','FALM','FALW','FALY',
    'FAMB','FAMC','FAMD','FAMG','FAMI','FAMJ','FAMK','FAMM','FAMN','FAMO','FAMP','FAMS','FAMU',
    'FANC','FANS','FANY',
    'FAOB','FAOH','FAOI','FAOR',
    'FAPA','FAPE','FAPF','FAPG','FAPH','FAPI','FAPL','FAPM','FAPN','FAPO','FAPP','FAPS','FAPT','FAPX','FAPY','FAPK','FAPZ','FAPJ',
    'FAQT','FAQR','FAQF',
    'FARB','FARI','FARS','FARG',
    'FASB','FASC','FASD','FASE','FASG','FASH','FASI','FASK','FASL','FASP','FASS','FAST','FASX','FASZ',
    'FATA','FATD','FATF','FATG','FATH','FATI','FATK','FATM','FATN','FATP','FATT','FATW','FATZ',
    'FAUH','FAUL','FAUP','FAUS','FAUT',
    'FAVB','FAVG','FAVM','FAVR','FAVV','FAVW','FAVY',
    'FAWA','FAWB','FAWC','FAWI','FAWL','FAWM','FAWO','FAWK','FAWT','FAWN',
    'FAYP',
    'FAZR','FAZG',

] 
let store1 = []
let store2 = []
let store3 = []
let store4 = []
let store5 = []
let store6 = []
let store7 = []
let store8 = []
let store9 = []
let store10 = []
let store11 = []
let store12 = []
let store13 = []
let store14 = []
let store15 = []
let store16 = []
let store17 = []
let store18 = []
let store19 = []
let store20 = []

//Alphabets
const alphabets = new Map([
    ['A','Alpha'],['B','Bravo'],['C','Charlie'],['D','Delta'],['E','Echo'],['F','Foxtrot'],['G','Golf'],['H','Hotel'],['I','India'],['J','Juliet'],['K','Kilo'],['L','Lima'],['M','Mike'],['N','November'],['O','Oscar'],['P','Papa'],['Q','Quebec'],['R','Romeo'],['S','Sierra'],['T','Tango'],['U','Uniform'],['V','Victor'],['W','Whiskey'],['X','X ray'],['Y','Yankee'],['Z','Zulu']
]);


//locations

const locations = new Map([
    ['FAAB','Alexander Bay'],['FAAG','Aggeneys'],['FAAN','Aliwal North'],['FAAP','Aviators Paradise'],['FAAL','Alldays'],['FAAD','Adelaide'],['FAAE','Aberdeen'],['FAAR','Arathusa Safari Lodge'],
    ['FABA','Microland Flight Park'],['FABB','Brakpan'],['FABD','Burgerdorp'],['FABE','Bhisho'],['FABL','Bram Fischer'],['FABM','Bethlehem'],['FABO','Bothaville'],['FABS','Brits'],['FABP','Black Rock'],['FABV','Butterworth'],['FABW','Karoo Gateway'],
    ['FACA','Cape Town FIR'],['FACC','Chitwa Chitwa'],['FACD','Cradock'],['FACE','Ceres'],['FACF','St Francis Field'],['FACH','Cookhouse'],['FACN','Carnavon'],['FACO','Alkantpan'],['FACR','Carletonville'],['FACT','Cape Town'],['FACV','Calvinia'],
    ['FADA','De Aar'],['FADB','Dwaalboom'],['FADL','Delareyville'],['FADO','Dendron'],['FADP','Darlington Dam'],['FADX','Delta 200'],['FADQ','Phinda'],['FADK','Dukuduku'],
    ['FAEC','Umtshezi Municipality'],['FAEL','King Phalo'],['FAEM','Empangeni'],['FAEO','Ermelo'],['FAER','Ekland Ranch'],['FAES','Eshowe'],
    ['FAFB','Fickburg'],['FAFO','Fort Beaufort'],['FAFW','Freeway'],
    ['FAGC','Grand Central'],['FAGG','George'],['FAGL','Groblersdal'],['FAGM','Rand'],['FAGR','Graaf Reinet'],['FAGT','Grahamstown'],['FAGY','Greytown'],
    ['FAHC','Howick'],['FAHG','Heidelburg'],['FAHI','Halweg'],['FAHJ','Harding'],['FAHL','Hluhluwe'],['FAHR','Harrismith'],['FAHS','Hoedspruit SAAF'],['FAHT','Hoedspruit Civil'],['FAHU','HMS Bastard Memorial'],['FAHV','Gariep Dam'],
    ['FAIS','Isithebe'],['FAIW','Ingwelala'],
    ['FAJA','Johannesburg FIR'],['FAJC','Jackalberry'],['FAJK','Jan Kemp Dorp'],['FAJO','Johannesburg Oceanic'],['FAJP','Joubertina'],
    ['FAKD','Klerksdorp'],['FAKM','Kimberley'],['FAKN','Kruger Mpumalanga'],['FAKP','Komatipoort'],['FAKR','Krugersdorp'],['FAKS','Kroonstad'],['FAKT','Kitty Hawk Aero Estate'],['FAKU','Kuruman'],['FAKZ','Kleinsee'],
    ['FALA','Lanseria'],['FALC','Lime Acres'],['FALD','Londolozi'],['FALE','King Shaka'],['FALI','Lichtenburg'],['FALL','Lydenburg'],['FALO','Louis Trichardt'],['FALM','Makhado AFB'],['FALW','Langebaanwed SAAF'],['FALY','Ladysmith'],
    ['FAMB','Middelburg Mpumalanga'],['FAMC','Middelburg Eastern Cape'],['FAMD','Malamala'],['FAMG','Margate'],['FAMI','Marble Hall'],['FAMJ','Majuba Power Station'],['FAMK','Madikwe Game'],['FAMM','George Dick Montshioa'],['FAMN','Malelane'],['FAMO','Mossel Bay'],['FAMP','Madimbo'],['FAMS','Morning Side'],['FAMU','Mkuze'],
    ['FANC','New Castle'],['FANS','Nelspruit'],['FANY','Nylstroom'],
    ['FAOB','Overberg'],['FAOH','Oudtshoorn'],['FAOI','Orient'],['FAOR','OR Tambo'],
    ['FAPA','Port Alfred'],['FAPE','Chief David Stuurman'],['FAPF','Piet Retief'],['FAPG','Plettenburg Bay'],['FAPH','Phalaborwa'],['FAPI','Pietersburg'],['FAPL','Pongola'],['FAPM','Pietermaritzburg'],['FAPN','Pilanesberg'],['FAPO','Pilgrims Rest'],['FAPP','Polokwane International'],['FAPS','Potchefstroom'],['FAPT','Postmasburg'],['FAPX','Paradise Beach'],['FAPY','Parys'],['FAPK','Prieska'],['FAPZ','Progress'],['FAPJ','Port St Johns'],
    ['FAQT','Queenstown'],['FAQR','Potgietersrus'],['FAQF','Pomfret'],
    ['FARB','Richards Bay'],['FARI','Reivilo'],['FARS','Robertson'],['FARG','Rustenburg'],
    ['FASB','Springbok'],['FASC','Secunda'],['FASD','Saldhana'],['FASE','Sabi Sabi'],['FASG','Schweizer Reneke'],['FASH','Stellenbosch'],['FASI','Springs'],['FASK','Swartkop Military'],['FASL','Sutherland'],['FASP','Singita'],['FASS','Sishen'],['FAST','Somerset East'],['FASX','Swellendam'],['FASZ','Skukuza'],
    ['FATA','Tadder Field'],['FATD','Rock Fig'],['FATF',"Tommy's Field"],['FATG','Thabo Tholo'],['FATH','Thohoyandou'],['FATI','Thabazimbi'],['FATK','Tsitsikama'],['FATM','Stutterheim'],['FATN','Thaba Nchu'],['FATP','New Tempe'],['FATT','Tutuka Power Station'],['FATW','Tswalu Game Reserve'],['FATZ','Tzaneen'],
    ['FAUH','Uitenhage'],['FAUL','Ulundi-Prince Mangosuthu Buthelezi'],['FAUP','Upington'],['FAUS','Ulusaba'],['FAUT','Mthatha'],
    ['FAVB','Vryburg'],['FAVG','Virginia'],['FAVM','Venetia Mine'],['FAVR','Vredendal'],['FAVV','Vereeniging'],['FAVW','Victoria West'],['FAVY','Vryheid'],
    ['FAWA','Warmbarths'],['FAWB','Wonderboom'],['FAWC','Worcester'],['FAWI','Witbank'],['FAWL','Williston'],['FAWM','Welkom'],['FAWO','Willowmore'],['FAWK','Waterkloof SAAF'],['FAWT','Winterveldt Mine'],['FAWN','Cape Winelands'],
    ['FAYP','Ysterplaat Military'],
    ['FAZR','Zeerust'],['FAZG','Swartberg'],



]);

//Correct radio 
let location_chosen1 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen2 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen3 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen4 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen5 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen6 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen7 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen8 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen9 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen10 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen11 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen12 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen13 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen14 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen15 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen16 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen17 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen18 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen19 = location_indicators[Math.floor(Math.random()*location_indicators.length)]
let location_chosen20 = location_indicators[Math.floor(Math.random()*location_indicators.length)]

for(let i = 0;i<4;i++){
    store1.push(alphabets.get(location_chosen1[i]))
    store2.push(alphabets.get(location_chosen2[i]))
    store3.push(alphabets.get(location_chosen3[i]))
    store4.push(alphabets.get(location_chosen4[i]))
    store5.push(alphabets.get(location_chosen5[i]))
    store6.push(alphabets.get(location_chosen6[i]))
    store7.push(alphabets.get(location_chosen7[i]))
    store8.push(alphabets.get(location_chosen8[i]))
    store9.push(alphabets.get(location_chosen9[i]))
    store10.push(alphabets.get(location_chosen10[i]))
    store11.push(alphabets.get(location_chosen11[i]))
    store12.push(alphabets.get(location_chosen12[i]))
    store13.push(alphabets.get(location_chosen13[i]))
    store14.push(alphabets.get(location_chosen14[i]))
    store15.push(alphabets.get(location_chosen15[i]))
    store16.push(alphabets.get(location_chosen16[i]))
    store17.push(alphabets.get(location_chosen17[i]))
    store18.push(alphabets.get(location_chosen18[i]))
    store19.push(alphabets.get(location_chosen19[i]))
    store20.push(alphabets.get(location_chosen20[i]))

}
//Calling the correct location


let hear1 = document.getElementById("hear1")
let text1 = store1;
hear1.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store1);
        speechSynthesis.speak(utterance);
        hear1.innerHTML = "Playing"
        hear1.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear1.style.visibility = "hidden"
            hear1.style.position = "absolute"
        }

    }

});

let hear2 = document.getElementById("hear2")
let text2 = store2;
hear2.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store2);
        speechSynthesis.speak(utterance);
        hear2.innerHTML = "Playing"
        hear2.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear2.style.visibility = "hidden"
            hear2.style.position = "absolute"
        }
    }

});

let hear3 = document.getElementById("hear3")
let text3 = store3;
hear3.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store3);
        speechSynthesis.speak(utterance);
        hear3.innerHTML = "Playing"
        hear3.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear3.style.visibility = "hidden"
            hear3.style.position = "absolute"
        }
    }

});

let hear4 = document.getElementById("hear4")
let text4 = store4;
hear4.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store4);
        speechSynthesis.speak(utterance);
        hear4.innerHTML = "Playing"
        hear4.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear4.style.visibility = "hidden"
            hear4.style.position = "absolute"
        }
    }

});

let hear5 = document.getElementById("hear5")
let text5 = store5;
hear5.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store5);
        speechSynthesis.speak(utterance);
        hear5.innerHTML = "Playing"
        hear5.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear5.style.visibility = "hidden"
            hear5.style.position = "absolute"
        }
    }

});

let hear6 = document.getElementById("hear6")
let text6 = store6;
hear6.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store6);
        speechSynthesis.speak(utterance);
        hear6.innerHTML = "Playing"
        hear6.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear6.style.visibility = "hidden"
            hear6.style.position = "absolute"
        }
    }

});

let hear7 = document.getElementById("hear7")
let text7 = store7;
hear7.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store7);
        speechSynthesis.speak(utterance);
        hear7.innerHTML = "Playing"
        hear7.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear7.style.visibility = "hidden"
            hear7.style.position = "absolute"
        }
    }

});

let hear8 = document.getElementById("hear8")
let text8 = store8;
hear8.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store8);
        speechSynthesis.speak(utterance);
        hear8.innerHTML = "Playing"
        hear8.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear8.style.visibility = "hidden"
            hear8.style.position = "absolute"
        }
    }

});

let hear9 = document.getElementById("hear9")
let text9 = store9;
hear9.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store9);
        speechSynthesis.speak(utterance);
        hear9.innerHTML = "Playing"
        hear9.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear9.style.visibility = "hidden"
            hear9.style.position = "absolute"
        }
    }

});

let hear10 = document.getElementById("hear10")
let text10 = store10;
hear10.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store10);
        speechSynthesis.speak(utterance);
        hear10.innerHTML = "Playing"
        hear10.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear10.style.visibility = "hidden"
            hear10.style.position = "absolute"
        }
    }

});

let hear11 = document.getElementById("hear11")
let text11 = store11;
hear11.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store11);
        speechSynthesis.speak(utterance);
        hear11.innerHTML = "Playing"
        hear11.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear11.style.visibility = "hidden"
            hear11.style.position = "absolute"
        }
    }

});

let hear12 = document.getElementById("hear12")
let text12 = store12;
hear12.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store12);
        speechSynthesis.speak(utterance);
        hear12.innerHTML = "Playing"
        hear12.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear12.style.visibility = "hidden"
            hear12.style.position = "absolute"
        }
    }

});

let hear13 = document.getElementById("hear13")
let text13 = store13;
hear13.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store13);
        speechSynthesis.speak(utterance);
        hear13.innerHTML = "Playing"
        hear13.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear13.style.visibility = "hidden"
            hear13.style.position = "absolute"
        }
    }

});

let hear14 = document.getElementById("hear14")
let text14 = store14;
hear14.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store14);
        speechSynthesis.speak(utterance);
        hear14.innerHTML = "Playing"
        hear14.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear14.style.visibility = "hidden"
            hear14.style.position = "absolute"
        }
    }

});

let hear15 = document.getElementById("hear15")
let text15 = store15;
hear15.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store15);
        speechSynthesis.speak(utterance);
        hear15.innerHTML = "Playing"
        hear15.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear15.style.visibility = "hidden"
            hear15.style.position = "absolute"
        }
    }

});

let hear16 = document.getElementById("hear16")
let text16 = store16;
hear16.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store16);
        speechSynthesis.speak(utterance);
        hear16.innerHTML = "Playing"
        hear16.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear16.style.visibility = "hidden"
            hear16.style.position = "absolute"
        }
    }

});

let hear17 = document.getElementById("hear17")
let text17 = store17;
hear17.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store17);
        speechSynthesis.speak(utterance);
        hear17.innerHTML = "Playing"
        hear17.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear17.style.visibility = "hidden"
            hear17.style.position = "absolute"
        }
    }

});

let hear18 = document.getElementById("hear18")
let text18 = store18;
hear18.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store18);
        speechSynthesis.speak(utterance);
        hear18.innerHTML = "Playing"
        hear18.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear18.style.visibility = "hidden"
            hear18.style.position = "absolute"
        }
    }

});

let hear19 = document.getElementById("hear19")
let text19 = store19;
hear19.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store19);
        speechSynthesis.speak(utterance);
        hear19.innerHTML = "Playing"
        hear19.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear19.style.visibility = "hidden"
            hear19.style.position = "absolute"
        }
    }

});

let hear20 = document.getElementById("hear20")
let text20 = store20;
hear20.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(store20);
        speechSynthesis.speak(utterance);
        hear20.innerHTML = "Playing"
        hear20.style.backgroundColor = "#020414"
        setTimeout(fela,2500)
        function fela(){
            hear20.style.visibility = "hidden"
            hear20.style.position = "absolute"
        }
    }

});






let correct1 = locations.get(location_chosen1)
correct1 = correct1.toUpperCase()
let correct2 = locations.get(location_chosen2)
correct2 = correct2.toUpperCase()
let correct3 = locations.get(location_chosen3)
correct3 = correct3.toUpperCase()
let correct4 = locations.get(location_chosen4)
correct4 = correct4.toUpperCase()
let correct5 = locations.get(location_chosen5)
correct5 = correct5.toUpperCase()
let correct6 = locations.get(location_chosen6)
correct6 = correct6.toUpperCase()
let correct7 = locations.get(location_chosen7)
correct7 = correct7.toUpperCase()
let correct8 = locations.get(location_chosen8)
correct8 = correct8.toUpperCase()
let correct9 = locations.get(location_chosen9)
correct9 = correct9.toUpperCase()
let correct10 = locations.get(location_chosen10)
correct10 = correct10.toUpperCase()
let correct11 = locations.get(location_chosen11)
correct11 = correct11.toUpperCase()
let correct12 = locations.get(location_chosen12)
correct12 = correct12.toUpperCase()
let correct13 = locations.get(location_chosen13)
correct13 = correct13.toUpperCase()
let correct14 = locations.get(location_chosen14)
correct14 = correct14.toUpperCase()
let correct15 = locations.get(location_chosen15)
correct15 = correct15.toUpperCase()
let correct16 = locations.get(location_chosen16)
correct16 = correct16.toUpperCase()
let correct17 = locations.get(location_chosen17)
correct17 = correct17.toUpperCase()
let correct18 = locations.get(location_chosen18)
correct18 = correct18.toUpperCase()
let correct19 = locations.get(location_chosen19)
correct19 = correct19.toUpperCase()
let correct20 = locations.get(location_chosen20)
correct20 = correct20.toUpperCase()
//marks
let mark1 = document.getElementById("mark1")
let mark2 = document.getElementById("mark2")
let mark3 = document.getElementById("mark3")
let mark4 = document.getElementById("mark4")
let mark5 = document.getElementById("mark5")
let mark6 = document.getElementById("mark6")
let mark7 = document.getElementById("mark7")
let mark8 = document.getElementById("mark8")
let mark9 = document.getElementById("mark9")
let mark10 = document.getElementById("mark10")
let mark11 = document.getElementById("mark11")
let mark12 = document.getElementById("mark12")
let mark13 = document.getElementById("mark13")
let mark14 = document.getElementById("mark14")
let mark15 = document.getElementById("mark15")
let mark16 = document.getElementById("mark16")
let mark17 = document.getElementById("mark17")
let mark18 = document.getElementById("mark18")
let mark19 = document.getElementById("mark19")
let mark20 = document.getElementById("mark20")

let check = document.getElementById("check")
let all = document.getElementById("all")
let score = document.getElementById("score")
let total = document.getElementById("total")
let emotions = document.getElementById("average")
let percent

document.getElementById("check").onclick = function(){
    let answer1 = document.getElementById("answer1").value.toUpperCase()
    let answer2 = document.getElementById("answer2").value.toUpperCase()
    let answer3 = document.getElementById("answer3").value.toUpperCase()
    let answer4 = document.getElementById("answer4").value.toUpperCase()
    let answer5 = document.getElementById("answer5").value.toUpperCase()
    let answer6 = document.getElementById("answer6").value.toUpperCase()
    let answer7 = document.getElementById("answer7").value.toUpperCase()
    let answer8 = document.getElementById("answer8").value.toUpperCase()
    let answer9 = document.getElementById("answer9").value.toUpperCase()
    let answer10 = document.getElementById("answer10").value.toUpperCase()
    let answer11 = document.getElementById("answer11").value.toUpperCase()
    let answer12 = document.getElementById("answer12").value.toUpperCase()
    let answer13 = document.getElementById("answer13").value.toUpperCase()
    let answer14 = document.getElementById("answer14").value.toUpperCase()
    let answer15 = document.getElementById("answer15").value.toUpperCase()
    let answer16 = document.getElementById("answer16").value.toUpperCase()
    let answer17 = document.getElementById("answer17").value.toUpperCase()
    let answer18 = document.getElementById("answer18").value.toUpperCase()
    let answer19 = document.getElementById("answer19").value.toUpperCase()
    let answer20 = document.getElementById("answer20").value.toUpperCase()
    //✔️
    //❌
    
    if(answer1==correct1){
        count = count + 1
        mark1.innerHTML = "✔️ 1 point" 
    }
    else{
        mark1.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct1
        hear1.innerHTML = "Listen again"
        hear1.style.backgroundColor = "#a10a1b"
        hear1.style.visibility = "visible"
        hear1.style.position = "" 
    }

    if(answer2==correct2){
        count = count + 1
        mark2.innerHTML = "✔️ 1 point" 
    }
    else{
        mark2.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct2
        hear2.innerHTML = "Listen again"
        hear2.style.backgroundColor = "#a10a1b"
        hear2.style.visibility = "visible"
        hear2.style.position = "" 
    }

    if(answer3==correct3){
        count = count + 1
        mark3.innerHTML = "✔️ 1 point" 
    }
    else{
        mark3.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct3
        hear3.innerHTML = "Listen again"
        hear3.style.backgroundColor = "#a10a1b"
        hear3.style.visibility = "visible"
        hear3.style.position = "" 
    }

    if(answer4==correct4){
        count = count + 1
        mark4.innerHTML = "✔️ 1 point" 
    }
    else{
        mark4.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct4
        hear4.innerHTML = "Listen again"
        hear4.style.backgroundColor = "#a10a1b"
        hear4.style.visibility = "visible"
        hear4.style.position = "" 
    }

    if(answer5==correct5){
        count = count + 1
        mark5.innerHTML = "✔️ 1 point" 
    }
    else{
        mark5.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct5
        hear5.innerHTML = "Listen again"
        hear5.style.backgroundColor = "#a10a1b"
        hear5.style.visibility = "visible"
        hear5.style.position = "" 
    }

    if(answer6==correct6){
        count = count + 1
        mark6.innerHTML = "✔️ 1 point" 
    }
    else{
        mark6.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct6
        hear6.innerHTML = "Listen again"
        hear6.style.backgroundColor = "#a10a1b"
        hear6.style.visibility = "visible"
        hear6.style.position = "" 
    }
    if(answer7==correct7){
        count = count + 1
        mark7.innerHTML = "✔️ 1 point" 
    }
    else{
        mark7.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct7
        hear7.innerHTML = "Listen again"
        hear7.style.backgroundColor = "#a10a1b"
        hear7.style.visibility = "visible"
        hear7.style.position = "" 
    }

    if(answer8==correct8){
        count = count + 1
        mark8.innerHTML = "✔️ 1 point" 
    }
    else{
        mark8.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct8
        hear8.innerHTML = "Listen again"
        hear8.style.backgroundColor = "#a10a1b"
        hear8.style.visibility = "visible"
        hear8.style.position = "" 
    }

    if(answer9==correct9){
        count = count + 1
        mark9.innerHTML = "✔️ 1 point" 
    }
    else{
        mark9.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct9
        hear9.innerHTML = "Listen again"
        hear9.style.backgroundColor = "#a10a1b"
        hear9.style.visibility = "visible"
        hear9.style.position = "" 
    }

    if(answer10==correct10){
        count = count + 1
        mark10.innerHTML = "✔️ 1 point" 
    }
    else{
        mark10.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct10
        hear10.innerHTML = "Listen again"
        hear10.style.backgroundColor = "#a10a1b"
        hear10.style.visibility = "visible"
        hear10.style.position = "" 
    }
    
    if(answer11==correct11){
        count = count + 1
        mark11.innerHTML = "✔️ 1 point" 
    }
    else{
        mark11.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct11
        hear11.innerHTML = "Listen again"
        hear11.style.backgroundColor = "#a10a1b"
        hear11.style.visibility = "visible"
        hear11.style.position = "" 
    }

    if(answer12==correct12){
        count = count + 1
        mark12.innerHTML = "✔️ 1 point" 
    }
    else{
        mark12.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct12
        hear12.innerHTML = "Listen again"
        hear12.style.backgroundColor = "#a10a1b"
        hear12.style.visibility = "visible"
        hear12.style.position = "" 
    }

    if(answer13==correct13){
        count = count + 1
        mark13.innerHTML = "✔️ 1 point" 
    }
    else{
        mark13.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct13
        hear13.innerHTML = "Listen again"
        hear13.style.backgroundColor = "#a10a1b"
        hear13.style.visibility = "visible"
        hear13.style.position = "" 
    }

    if(answer14==correct14){
        count = count + 1
        mark14.innerHTML = "✔️ 1 point" 
    }
    else{
        mark14.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct14
        hear14.innerHTML = "Listen again"
        hear14.style.backgroundColor = "#a10a1b"
        hear14.style.visibility = "visible"
        hear14.style.position = "" 
    }

    if(answer15==correct15){
        count = count + 1
        mark15.innerHTML = "✔️ 1 point" 
    }
    else{
        mark15.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct15
        hear15.innerHTML = "Listen again"
        hear15.style.backgroundColor = "#a10a1b"
        hear15.style.visibility = "visible"
        hear15.style.position = "" 
    }

    if(answer16==correct16){
        count = count + 1
        mark16.innerHTML = "✔️ 1 point" 
    }
    else{
        mark16.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct16
        hear16.innerHTML = "Listen again"
        hear16.style.backgroundColor = "#a10a1b"
        hear16.style.visibility = "visible"
        hear16.style.position = "" 
    }

    if(answer17==correct17){
        count = count + 1
        mark17.innerHTML = "✔️ 1 point" 
    }
    else{
        mark17.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct17
        hear17.innerHTML = "Listen again"
        hear17.style.backgroundColor = "#a10a1b"
        hear17.style.visibility = "visible"
        hear17.style.position = "" 
    }

    if(answer18==correct18){
        count = count + 1
        mark18.innerHTML = "✔️ 1 point" 
    }
    else{
        mark18.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct18
        hear18.innerHTML = "Listen again"
        hear18.style.backgroundColor = "#a10a1b"
        hear18.style.visibility = "visible"
        hear18.style.position = "" 
    }
    if(answer19==correct19){
        count = count + 1
        mark19.innerHTML = "✔️ 1 point" 
    }
    else{
        mark19.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct19
        hear19.innerHTML = "Listen again"
        hear19.style.backgroundColor = "#a10a1b"
        hear19.style.visibility = "visible"
        hear19.style.position = "" 
    }
    if(answer20==correct20){
        count = count + 1
        mark20.innerHTML = "✔️ 1 point" 
    }
    else{
        mark20.innerHTML = "❌ 0 point" + "<br> The correct answer is " +correct20
        hear20.innerHTML = "Listen again"
        hear20.style.backgroundColor = "#a10a1b"
        hear20.style.visibility = "visible"
        hear20.style.position = "" 
    }





//Counting Score
    percent = (count/20)*100
    total.innerHTML = count + " ("+percent+"%)"
    if(count>=16){
        emotions.innerHTML = "😁"
    }
    else if(count>=12){
        emotions.innerHTML = "🤔"
    }
    else{
        emotions.innerHTML = "😞"
    }

    check.style.visibility = "hidden"
    all.style.visibility = "hidden"
    score.style.visibility = "visible"
    score.style.marginTop = "135%"
}
document.getElementById("mistakes").onclick = function(){
    check.style.visibility = "hidden"
    all.style.visibility = "visible"
    score.style.visibility = "hidden"
    
}
    
//emojis
//smile 😁
//think 🤔
//sad  😞