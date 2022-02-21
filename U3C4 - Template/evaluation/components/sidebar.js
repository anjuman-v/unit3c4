function sidebar() {
    var sidebar = `<div id="sidebar_main_div">
    
                        <div>
                            <a href="index.html" id="sidebar_home_link"><h1>Masai News</h1></a>
                        </div>
                        <div class="sidevars"> login </div>
                        <div>
                            <input type="text" placeholder="Searchn ews" id="searchbar">
                            <br>
                            <br>
                            <button id="sidebar_search_button">Search</button>
                        </div>
                        <div class="sidevars"> Startups </div>
                        <div class="sidevars"> Newsletters </div>
                        <div class="sidevars"> Audio </div>
                        <div class="sidevars"> Video </div>
                        
                    </div>`;
    return sidebar;

    // return your html component here
    //Make sure to give input search box id as ""
}
export default sidebar