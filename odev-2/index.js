const posts = [
    {  title: "Post 1",body:"Lorem Ipsum including versions of Lorem Ipsum." ,author:"ilyas" },
    {  title: "Post 2",body:"There are many variations of passages " ,author:"bozdemir" },
    {  title: "Post 3",body:"exact original form,  translation by H. Rackham." ,author:"ilyas" },
    {  title: "Post 4",body:"lorem ipsum" , author:"ilyas" }
];
const listPosts = () => {
    posts.map((post) => {
      console.log(post.body);
    });
};
let newPost = {
    title: "Post 5",
    body: "original form,  translation by",
    author: "ilyass"
}
const promise1 = new Promise((resolve, reject) =>{
    console.log('Post ekleniyor....');
    if (newPost) {
        posts.push(newPost);
        resolve('Post başarıyla eklendi.');
    } else {
        reject('Post ekleme başarısız oldu!');
    }
});
const addPost = (newPost) => {
    return promise1;
};

async function processData() {
    try {
      await addPost(newPost);
      await addPost(newPost);
      console.log("İşlem Tamamlandı.");
    } catch (error) {
      console.log(error);
    }
  }
  processData();