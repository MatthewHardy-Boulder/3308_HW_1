function addCard(addBtn) {
    var interest = addBtn.parentElement;
    var tweet = $('\
    <div class="card bg-light text-dark w-75 mx-auto" id="card" style="height:250px;">\
        <button class="btn btn-danger btn-sm ml-auto rounded-circle" onclick="delCard(this)">-</button>\
        <img class="mx-auto w-50 h-50" src="img/twitter.png" alt="Tweet">\
        <div class="card-body text-right">\
            <h6 class="card-title">Tweet</h6>\
            <p class="card-text">Sample tweet here</p>\
        </div>\
    </div>\
    ');

    tweet.appendTo(interest);
}

function delCard(rmvBtn) {
    var tweet = rmvBtn.parentElement;
    tweet.remove();
}