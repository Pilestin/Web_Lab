var mysql = require('mysql');

var connection = mysql.createConnection({
    // yapılandırma yapılmalı
  host: "localhost",
  user: "root",
  password: "112358",
  database: "weblab"
  
});
/* Mysql tablo oluşturma kodu
    CREATE TABLE `web-lab-nodejs`.`employe` (
  `EmployeId` INT NOT NULL,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `DepartmentName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`EmployeId`));
*/

connection.connect(function(err) {
    if (err) throw err;
    console.log("Bağlandı!");

    function createTable(){
        // yeni tablo oluştur öyle ki sütunları ve özellikleri şöyle olsun
        var sql = "CREATE TABLE Employee (EmployeId INT NOT NULL, FirstName VARCHAR(45) NOT NULL, LastName VARCHAR(45) NOT NULL, DepartmentName VARCHAR(45) NOT NULL, PRIMARY KEY (EmployeId) )";
        connection.query(sql, function (err, result) {
            if (err) 
                throw err;
            console.log("Tablo oluşturuldu");
        });
    }
    
    function insert(){
        // employee tablosuna verilen bilgileri içeren sütunlarına verilen listeden kişileri ekle
        var insert_sql = "INSERT INTO Employee (EmployeId, FirstName, LastName, DepartmentName ) VALUES ? ";
        // Verileri tek tek sorgularla eklemek yerine hepsini birden liste içerisinden vererek yükleyeceğiz
        var values = [
            [1,"Ken","Sanchez","Executive"],
            [2,"Terri","Duffy","Engineering"],
            [3,"Roberto","Tamburello","Engineering"],
            [4,"Rob","Walters","Engineering"],
            [5,"Gail","Erickson","Engineering"],
            [6,"Jossef","Goldberg","Engineering"],
            [7,"Dylan","Miller","Support"],
            [8,"Diane","Margheim","Support"],
            [9,"Gigi","Matthew","Support"],
            [10,"Michael","Raheem","Support"],
        ];
        connection.query(insert_sql, [values], function (err, result) {
            if (err) 
                throw err;
            console.log("Şu kadar kayıt eklendi " + result.affectedRows);
          });
    }

    function search() {  
        // departmentname = engineering olan tüm satıların tüm bilgilerini yazdır
        var search_sql = "SELECT * FROM Employee WHERE DepartmentName = 'Engineering'"
        connection.query(search_sql , function(err, result){
            if(err)
                throw err;
            console.log(result);
        })
    }

    function update(){
        // ismi terri olan çalışanın deparmentname bilgisini güncelle
        var update_sql = "UPDATE Employee SET DepartmentName = 'Executive' WHERE FirstName = 'Terri'";
        connection.query(update_sql, function (err, result) {
            if (err) 
                throw err;
            console.log(result.affectedRows + " kayıt güncellendi");
        });
    }
    
    update();
});