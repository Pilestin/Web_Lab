const fs = require('fs');

function asalBul(){
    const asalListesi  = [];
    var i=2;
    while(i<100){
        console.log("şu an bundayım : "+i);
        var sayac = 0;
        // i = 2'den başlayıp 100'e kadar olan sayıları asal mı değil mi kontol eder
        for(var bolen=1; bolen <= i; bolen++){   
            // üstten gelen her i değerini 1'den başlayarak sayılara böler , ta ki kendi sayısına kadar
            // eğer 1 ve kendi dışında herhangi sayıya bölünmediyse asaldır 
            // örn : 7  ==>  7/1 ve 7/7 dışında boleni yok 
            // iki bolen olduğu için asaldır.
            if(i % bolen == 0){
                sayac++;
            }
       }
       if(sayac == 2){
            console.log("bu sayı asal :"+ i);
            asalListesi.push(String(i) + ",");
       }
       else{
        console.log("asal değil "+i);
       }
       i++;
    }
    // işlemler bitti listemizi dosyaya yazdıralım
    console.log(asalListesi)
    asalListesi.forEach(dosyayaYaz);
}

function dosyayaYaz(num){
        
    fs.appendFile('asal.txt', num , function (err, data) {
        if(err)
            throw err;
    });
}

asalBul();