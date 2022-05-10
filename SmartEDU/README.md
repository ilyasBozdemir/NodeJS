# Lesson 1

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
# Lesson 2

Projemizde linklerin ilgili sayfaya göre aktif olmasını istiyoruz. Bunun için ilgili template dosyasın o bilgiyi page_name olarak gönderiyoruz. İlgili page_name'e ait olan değer her sayfaya göre değişiyor. Örneğin index sayfası için:


```
app.get('/', (req, res) => {
  res.status(200).render('index', {
      page_name: "index"
  });
});
```

```about sayfası için:```


```
app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
});
```

page_name ilgili template dosyasına gönderildi. Bunları "ejs" template motoru ile yakalamak için bir değişken şeklinde düşünebiliriz.



``` <%= ----- %> ```


Aşağıdaki örneğimizde page_name 'in aldığı değerin ne olduğuna göre active classı ilgili linke ekleniyor.

```
<li class="nav-item <%= page_name ==='index' && 'active' %>"><a class="nav-link" href="/">Home</a></li>
<li class="nav-item <%= page_name ==='about' && 'active' %>"><a class="nav-link" href="/about">About Us</a></li>
```
# Lesson 3

```Yönlendirme (Routing)```

Yönlendirme Routing genel olarak belirli bir adrese, belirli bir HTTP metodu (GET, POST vs..) ile gelen isteğe ne şekilde cevap verileceğini gösterir. Aşağıdaki örneğimizde gördüğümüz gibi root\about isteğine karşılık olarak about template 'in render edilmesi belirtiliyor.


```
app.get('/about', (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
    });
  });
```

PCAT projemizde yönlendirmeleri app.js dosyası içerisinde yazmıştık. SmartEdu projemizde ise yönlendirmeleri ayrı bir routes klasörü içerisinde ayrı yönlendirme dosyaları oluşturacağız. Önce app.js tarafındaki ana yönlendirmelere bakalım.



```app.use('/', pageRoute);```  //


Yukarıda da gördüğümüz gibi, şu an için tüm gelen istekler pageRoute'a yönlendiriliyor, sadece bu yönlendirmemiz mevcut. routes/pageRoute.js dosyasına gittiğimizde ise burada iki adet yönlendirme var.


```
router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
```

/ yani http://localhost:3000/ adresine karşılık getIndexPage, /about yani http://localhost:3000/about adresine karşılık getAboutPage fonksiyonu çalıştırılacak. Bu fonksiyonların çalıştırılacağı controllers/pageController.js dosyasına baktığımızda ise ilgili fonksiyonların bu dosya içerisinde oluşturulduğunu göreceğiz. İlgili fonksiyonlar aşağıdadır:


```
exports.getIndexPage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};
```
