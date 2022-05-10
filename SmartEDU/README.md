```HTTP Status Codes (HTTP Yanıt Durumu Kodları)```

HTTP yanıt durumu kodları bizlere o anda yapılmak istenen işleme özel bir durum bilgisi gönderilir (OK, Bad Request vs..). Bu gönderilen her durumun kendine özel bir sayı ifadesi vardır (200, 201, 404 vs..)

```Neden Durum Kodları?```


Peki neden durum kolarını kullanmak önemlidir? Dikkat ederseniz bizim çalışmalarımızda hazır şablonlar kullanıyoruz ancak her zaman bu durum olmayabilir. Örneğin biz yeni bir post ekleyeceğiz ancak frontend sayfamız hazır değil! Durum kodları syesinde biz backend tarafında yaptığımız işlemin başarılı olup olmadığını kontrol edebiliriz. İlerleyen çalışmalarda yerine daha iyi oturacaktır.


```Sık Kullanılan Durum Kodları```

```
200 - OK
201 – Created
404 – Not found
500 – Internal Server Error
201 – Created
400 – Bad Request
401 – Unauthorized
403 – Forbidden
501 – Not Implemented
```

```NPM Komutu```

Herhangi bir paketi çalışmamamızın sadece geliştirici aşamasında kullanmak için aşağıdaki şekilde indirebiliriz.

```
npm i -D <paket_adi>
veya
npm - --save-dev <paket_adi>
```