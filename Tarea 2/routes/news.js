const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

mainPage = async (req, res) => {
  res.render("index");
}

getSearchNews = async (req, res) => {
  let search = req.query.search;

  if(req.query.search == ''){
    res.render('index');
    return;
  }
    let url = `http://newsapi.org/v2/everything?q=${search}&apiKey=a39739b060cd4557a049090ee7ae677c`;
    const news_search = await axios.get(url);
    
    if(req.query.format === 'json') {
      res.send(news_search.data.articles);
    } else {
      res.render("index", { articles: news_search.data.articles });
    }
  
};

newsRouter.get("/", async (req, res, next) => {
  try {
    if (req.query.search === undefined) {
      mainPage(req, res);
    }

    getSearchNews(req, res);
  } catch (error) {
    next(error);
  }
});


module.exports = newsRouter;
