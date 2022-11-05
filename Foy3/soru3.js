const fs = require('fs');


fs.readFile('asal_sayi.txt', 'utf-8', function (err, data) {
    if (err) 
        throw err;
    console.log("başta data :"+data);

    const liste = [];

    function createList(){
        // virgüle göre ayırdık
        data = data.split(",")
        // virgül dışında kalıp olduğunu varsayıp
        for(var i=0 ; i<data.length ; i++){
            // eğer gezindiğim eleman sayı olabiliyorsa 
            if(Number(data[i])){
                // o halde listeye ekle
                liste.push(Number(data[i]))
            }
        }
        console.log(liste);
        control();
    }

    function control(){
        for(var i=0;i<=90; i++){
            if(liste.includes(i)){
                continue;
            }
            else{
                liste.push(i) 
            }
        }
    }
    
    createList();
    
    writeTxt(String(liste));
  
});

function writeTxt(tum_sayilar){

    console.log("gelen tüm sayılar :" + tum_sayilar);
    fs.writeFile('tum_sayilar.txt', tum_sayilar, function (err, data) {
        if (err) 
            throw err;
        console.log("tüm sayıları kaydettim")
    });
}

