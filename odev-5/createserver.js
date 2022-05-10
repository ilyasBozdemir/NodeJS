const http = require('http');
const port = 5000;


const pages = [
    {
        path:'/',
        title:'Index Sayfasına Hosgeldiniz.'
    },
    {
        path:'/hakkimda',
        title:'Hakkımda Sayfasına Hosgeldiniz.'
    },
    {
        path:'/iletisim',
        title:'İletişim Sayfasına Hosgeldiniz.'
    }
]

const server = http.createServer((req,res)=>{
    const url = req.url;
    let notFound = true;
    pages.map((page)=>{
        if(page.path == url){
            notFound = false;
            res.writeHead(200,{ "Content-Type": "text/html" });
            res.write(`<h2>${page.title}</h2>`);
        }
    });
    if(notFound){
        res.writeHead(404,{ "Content-Type": "text/html" });
        res.write(`<h2> 404 not found </h2>`);
    }
    res.end();
});

server.listen(port,()=>{
    console.log(`Server ${port} unda baslatildi`);
})
