var pull_refresh = new Lungo.Element.Pull('#main-article', {
    onPull: "משוך על מנת לרענן",
    onRelease: "שחרר על מנת לקבל מידע חדש",
    onRefresh: "מרענן מידע מהשרת...",
    callback: function() {
        $("#main-article").hide();                           
        GetBills();
        pull_refresh.hide();
        $("#main-article").show(); 
    }
});