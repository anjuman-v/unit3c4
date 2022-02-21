async function apiCall(url) {


    //add api call logic here

    try {
        let res = await fetch(url);

        let data = await res.json();

        return data;
    } catch (error) {
        console.log("error:", error);
    }

}


function appendArticles(articles, main) {

    //add append logic here

    var data = articles;
    
    data.forEach(({author ,content, description,  publishedAt, source, title , urlToImage}) => {
        var div = document.createElement("div");
        div.setAttribute("id", "news_articl_main_div");
        div.addEventListener("click", function(event){
            var obj = {
                article_content: content,
                article_image: urlToImage,
                article_describe: description,
                article_publishat: publishedAt,
                article_publishby: source.name,
                article_title: title,
            };

            var localobj = JSON.parse(localStorage.getItem("news"));

            console.log(obj);

            localStorage.setItem("news", JSON.stringify(obj));

            window.location.href = "./news.html";
        });
    
        var img = document.createElement("img");
        img.setAttribute("src", urlToImage);
        img.setAttribute("id", "article_img");
    
        var left_div = document.createElement("div");
        left_div.setAttribute("id", "news_content");
    
        var h2 = document.createElement("h2");
        h2.textContent = title;
    
        var shortDes = document.createElement("p");
        shortDes.textContent = description+"...";
        
        var publish = document.createElement("h5");
        publish.textContent = "Published at: "+publishedAt;
        
        var publishby = document.createElement("h4");
        publishby.textContent = "News Source: "+source.name;
    
        left_div.append(h2, shortDes, publish, publishby);
    
        div.append(left_div,img);
    
        main.append(div);
    });
}

export { apiCall, appendArticles }