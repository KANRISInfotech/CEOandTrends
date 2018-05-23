var domain = 'app_files/'
var oldurl = "";
var headerloaded, footerloaded, homecontentloaded, contactcontentloaded, videocontentloaded, blogcontentloaded = false;
$(document).ready(function() {
    $('app').load('skeletons/skeleton.html', function() {
        loadcomponents();
    })
    setInterval(function() {
        after_page_loaded();
        $('pagebody').css('min-height', $(window).height() - $('footer').height() - 40);
        return false;
    }, 10);
})

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////ROUTER///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function after_page_loaded() {
    if (headerloaded && footerloaded && homecontentloaded && contactcontentloaded && videocontentloaded && blogcontentloaded) {
        loadrelevantpage();
    }
}

function loadrelevantpage() {
    var url = window.location.href.toLowerCase();
    if (oldurl !== url) {
        hideAllsections();
        if (url == 'http://localhost/ceoandtrends/') {
            history.replaceState({}, null, "home");
        } else if (url.search("/home") !== -1) {
            $('home').show();
            $(document).attr('title', "CEO & Trends");
            $("meta[name='description']").attr('content', 'CEO and Trends brings together the amazing combination of Business and Entertainment stories in the form of inspiring talk show and fabulous articles.');
            activatemenuitem('Home');
            $("meta[name='title']").attr('content', 'Home');
        } else if (url.search("/contact") !== -1) {
            $('contact').show();
            $(document).attr('title', "CEO & Trends | Contact");
            $("meta[name='title']").attr('content', 'CEO & Trends | Contact');
            $("meta[name='description']").attr('content', 'Feel free to connect to one of the most amazing platforms that CEO brings together the amazing combination of Business and Entertainment stories.');
            activatemenuitem('Contact');
        } else if (url.search("/video") !== -1) {
            activatemenuitem('Videos');
            $(document).attr('title', "CEO & Trends | Videos");
            $("meta[name='title']").attr('content', 'CEO & Trends | Videos');
            showvideosection(url);
            $("meta[name='description']").attr('content', 'Startup interviews, corporate interviews, celebrity interviews and much more. Simply subscribe to our YouTube Channel www.youtube.com/c/CEOTrends');
        } else if (url.search("/blog") !== -1) {
            showblogsection(url);
            activatemenuitem('Blog');
            $("meta[name='description']").attr('content', 'Startup stories, Corporate news, Entertainment news, Celebrity gossips, Bollywood stories, Hollywood stories and much more at your fingertips or clicks ');
            $("meta[name='title']").attr('content', 'CEO & Trends | Blog');
        } else {
            /* shownotfound(); */
            history.replaceState({}, null, "home");
        }
        oldurl = url;
    }
}

function hideAllsections() {
    $('home').hide();
    $('contact').hide();
    $('videos').hide();
    $('blog').hide();
}

function activatemenuitem(x) {
    $.each($('.nav li a'), function(index) {
        if ($(this).text() == x) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////ROUTER///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


function blocklinks() {
    $('a').bind('click', function(e) {
        e.preventDefault();
    })
}


function loadcomponents() {
    $('header').load("skeletons/header.html", function() {
        blocklinks();
        headerloaded = true;
    });
    $('footer').load('skeletons/footer.html', function() {
        footerloaded = true;
    })
    $('home').load("skeletons/home_content.html", function() {
        setInterval(function() {
            $('.blog').css('margin-top', $('.css-slider-wrapper').height());
            $(".blog-tile").css('height', $(".blog-tile").width());
            $(".video-tile-img").css('height', $(".video-tile").width() / 16 * 9);
            $(".css-slider-wrapper").css('height', $(window).height() - $('header').height());
            $("#padding_top").css('height', $('header').height());
            $(".seq").height($(window).height());
        }, 10);
        homecontentloaded = true;
    })
    $('contact').load("skeletons/contact.html", function() {
        contactcontentloaded = true;
    })
    $('videos').load('skeletons/video.html', function() {
        videocontentloaded = true;
    })
    $('blog').load('skeletons/blog.html', function() {
        blogcontentloaded = true;
    })
}

function showvideosection(url) {
    $('videos').show();
    if (url.indexOf('?') !== -1) {
        url = window.location.href;
        video_id = url.substr(url.indexOf('?') + 1);
    } else {
        $("#back_button").click();
        $(document).attr('title', "CEO & Trends | Videos");
    }
}

function showblogsection(url) {
    $('blog').show();
    if (url.indexOf('?') !== -1) {
        url = window.location.href;
        showblog(url.substr(url.indexOf('?') + 1));
    } else {
        $(document).attr('title', "CEO & Trends | Blogs");
        $('blogsection').hide();
        $('bloglist').show();
    }
}