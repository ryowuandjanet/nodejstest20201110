const express = require('express');
const path=require('path');

const app=express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res, next){
   let articles=[
        {
            id : 1,
            title :'Article One',
            author : 'ryowu',
            body : 'This is article one'
        },
        {
            id : 2,
            title : 'Article Two',
            author : 'janet',
            body : 'This is article Two'
        },
        {
            id : 3,
            title : 'Article Three',
            author: 'rita',
            body: 'This is article three'
        },
    ]

  res.render('index',{
    title :'Articles',
    articles: articles
  });
});

app.get('/articles/add', function(req, res, next){
    res.render('add_article',{
        title : 'Add Articles'
    });
})


app.listen(process.env.PORT,function(){
 console.log('Server started on port 3000...');
});
