function storeSearchterm(term) {

    var search_term = localStorage.getItem("search_term");


    console.log(term);

    localStorage.setItem("search_term", term);

    window.location.href = "./search.html";
}

export default storeSearchterm