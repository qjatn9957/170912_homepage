var currentUser = {
    user_id:'GUEST'
};
var options = {
    pageIndex:1,
    perPage:20,
    numOfPost:null,
    searchCondition:null,
    keyword:'',
    keywordType:''
};
var components = {};

requirejs.config({
    baseUrl: '.',
    paths:{
        'jquery':       './lib/jquery-1.12.4.min',
        'bootstrap':    './lib/bootstrap.min',
        'heading':      './components/heading',
        'login':        './components/login',
        'listup':       './components/postlistup',
        'writePost':    './components/writePost',
        'pagination':   './components/pagination',
        'postDetail':   './components/PostDetail',
        'ModifyPost':   './components/modifyPost',
        'Search':       './components/Search',
        'Comment':      './components/Comment'
    },
    shim:{
        'bootstrap':{
            deps:['jquery']
        }
    }
});

requirejs(
    [   'jquery',
        'bootstrap',
        'heading',
        'login',
        'listup',
        'writePost',
        'pagination',
        'postDetail',
        'ModifyPost',
        'Search',
        'Comment'
    ], function($){
    $(document).ready(function(){
        components.Search = new Search();
        components.Heading = new Heading();
        components.Login = new Login();
        components.Write = new WritePost();
        components.Listup = new Listup();
        components.Pagination = new Pagination();
        components.ModifyPost = new ModifyPost();
        components.PostDetail = new PostDetail();
        components.Comment = new Comment();
    });
});