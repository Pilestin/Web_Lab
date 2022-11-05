const fs = require('fs');

fs.readFile('quiz6.txt', 'utf-8', function (err, data) {
    if (err) 
        throw err;
    
    function A(x,a,b,c) {  
        // polinom hesabı
        return (a*x*x + b*x + c);
    }
    // önce gelen verilerden virgülü atıcaz. Sonra da /r ve \n lere göre bölücez
    var liste = data.split(/\r\n|\n/);
    // 3,5,4,7 toplam 7 tane 0. index
    // 4,4,4,4 toplam 7 tane 1. index 
    // 5,2,1,0 toplam 7 tane 2. index
    // geri kalan tüm ifadeler undefined
    // Bu path'e göre fonksiyona sonuçları hesaplattırabiliriz.
    var x1 = Number(liste[0][0]);
    var a1 = Number(liste[0][2]);
    var b1 = Number(liste[0][4]); 
    var c1 = Number(liste[0][6]);

    var A1 = A(x1,a1,b1,c1);
    console.log("1.işlem : " + A1);
    // İndexlerin tekrarını göz önüne alıesak kısace 
    var A2 = A(Number(liste[1][0]),Number(liste[1][2]),Number(liste[1][4]), Number(liste[1][6]) );
    var A3 = A(Number(liste[2][0]),Number(liste[2][2]),Number(liste[2][4]), Number(liste[2][6]) );
    console.log("2.işlem : " + A2);
    console.log("3.işlem : " + A3);
});