/**
 * Created by jo.chan on 2017/11/11.
 */

$.loading = {
    PageLoading: function (options) {
        var defaults = {
            //页面加载完成后，加载进度条淡出速度
            delayTime: 500,
            //设置挂起,,等于0时则无需挂起
            sleep: 0
        };
        var options = $.extend(defaults, options);
        document.onreadystatechange = PageLoaded;
        function PageLoaded() {
            var loadingMask = $('.percent');
            var loadingLeft = $(".leftl i");
            var loadingRight = $(".rightl i");
            $({
                property: 0
            }).animate({
                property: 95
            }, {
                duration: 3000,
                step: function () {
                    var percentage = Math.round(this.property);
                    loadingLeft.css('width', percentage + "%");
                    loadingRight.css('width', percentage + "%");
                    loadingMask.text(percentage + "%");
                    //页面加载后执行
                    if (document.readyState == "complete") {
                        loadingLeft.css('width', 50 + "%");
                        loadingRight.css('width', 50 + "%");
                        loadingMask.text(100 + "%");
                        setTimeout(function () {
                                $(".loader-section").animate({
                                        "opacity": 0
                                    },
                                    options.delayTime,
                                    function () {
                                        $(this).remove();
                                        $(".load_wrap").remove();
                                        console.log('Loading has been successful');
                                    });
                            },
                            options.sleep);
                    }
                }
            });
        }
    }
};

$.loading.PageLoading({
    sleep: 50
});