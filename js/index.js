// 阻止左键文字图片变蓝
document.onselectstart = function () { return false; }
// 头部导航
// 国美会员
var one_left_1 = document.getElementById("one_left_1");
var left_a1_blk = one_left_1.getElementsByTagName("div")[0];
var one_left_jt = one_left_1.getElementsByTagName("i")[0];
// console.log(one_left_jt);
one_left_1.onmouseover = function () {
    left_a1_blk.style.display = "block";
    one_left_jt.style.backgroundImage = " url(./image/top-list-up.png)"
};
left_a1_blk.onmouseout = function () {
    left_a1_blk.style.display = "none";
    one_left_jt.style.backgroundImage = " url(./image/top-list-low.png)"
};
// 我的国美
var right_a2 = document.getElementById("right_a2");
var right_a2_blk = right_a2.getElementsByTagName("div")[0];
var right_a2_jt = right_a2.getElementsByTagName("span")[0];
// console.log(right_a2_jt);
right_a2.onmouseover = function () {
    right_a2_blk.style.display = "block";
    right_a2_jt.style.backgroundImage = " url(./image/top-list-up.png)";
};
right_a2.onmouseout = function () {
    right_a2_blk.style.display = "none";
    right_a2_jt.style.backgroundImage = " url(./image/top-list-low.png)";
};
// 企业采购
var right_a3 = document.getElementById("right_a3");
var right_a3_blk = right_a3.getElementsByTagName("div")[0];
var right_a3_jt = right_a3.getElementsByTagName("span")[0];
// console.log(right_a3_blk);

right_a3.onmouseover = function () {
    right_a3_blk.style.display = "block";
    right_a3_jt.style.backgroundImage = " url(./image/top-list-up.png)";
};
right_a3.onmouseout = function () {
    right_a3_blk.style.display = "none";
    right_a3_jt.style.backgroundImage = " url(./image/top-list-low.png)";
};
// 服务中心
var right_a4 = document.getElementById("right_a4");
var right_a4_blk = right_a4.getElementsByTagName("div")[0];
var right_a4_jt = right_a4.getElementsByTagName("span")[0];
// console.log(right_a4_jt);
right_a4.onmouseover = function () {
    right_a4_blk.style.display = "block";
    right_a4_jt.style.backgroundImage = " url(./image/top-list-up.png)";
};
right_a4.onmouseout = function () {
    right_a4_blk.style.display = "none";
    right_a4_jt.style.backgroundImage = " url(./image/top-list-low.png)";
};
// 手机国美
var right_a6 = document.getElementById("right_a6");
var right_a6_blk = right_a6.getElementsByTagName("div")[0];
var right_a6_jt = right_a6.getElementsByTagName("span")[0];
// console.log(right_a6_jt);
right_a6.onmouseover = function () {
    right_a6_blk.style.display = "block";
    right_a6_jt.style.backgroundImage = " url(./image/top-list-up.png)";
};
right_a6.onmouseout = function () {
    right_a6_blk.style.display = "none";
    right_a6_jt.style.backgroundImage = " url(./image/top-list-low.png)";
}
// 搜索框搜索类型
var search = document.getElementById("search");
var ts = search.getElementsByTagName("div")[0];
var xl_ts = ts.getElementsByTagName("div")[0];
// 移入话题显示选项
ts.onmouseover = function () {
    xl_ts.style.display = "block";
};
ts.onmouseout = function () {
    xl_ts.style.display = "none";
};
var ts_p = ts.getElementsByTagName("p")[0];
var xl_ts_p = xl_ts.getElementsByTagName("p");
for (var i = 0; i < xl_ts_p.length; i++) {
    xl_ts_p[i].index = i;
    xl_ts_p[i].onclick = function () {
        for (var j = 0; j < xl_ts_p.length; j++) {
            xl_ts_p[j].className = '';
        }
        xl_ts_p[this.index].className = "active";
        ts_p.innerHTML = xl_ts_p[this.index].innerHTML;

    }

}
// 购物车
var shop = document.getElementById("shop");
var shop_span3 = shop.getElementsByTagName("span")[2];
var shop_span4 = shop.getElementsByTagName("span")[3];
var shop_content = shop.getElementsByTagName("div")[0];
shop.onmouseover = function () {
    shop.className = "shop shop_active";
    shop_span3.className = "a_active";
    shop_span4.style.backgroundImage = " url(./image/top-list-up.png)";
    shop_content.style.display = "block";
};
shop.onmouseout = function () {
    shop.className = "shop";
    shop_span3.className = "text";
    shop_span4.style.backgroundImage = " url(./image/top-list-low.png)";
    shop_content.style.display = "none";
}
// console.log(shop_content);
// 全部商品右边自动轮波图片
var one_right = document.getElementById("one_right");
var pic_ul = document.getElementById("pic_ul");
var pic_ul_li = pic_ul.getElementsByTagName("li");
var sx_btn = document.getElementById("tb_btn").getElementsByTagName("span");
// console.log(btn_s[0]);
var n = 0;
// var sxtimer = 0;

var tim = setInterval(auto, 3000);
// 移动函数


function auto() {
    n++;
    if (n == 4) {
        n = 1;
        pic_ul.style.marginTop = "0px";
    }
    ujiuye.bufferMove(pic_ul, { "margin-top": -40 * n }, 15)
};
// 鼠标移入定时器停止
pic_ul.onmouseover = function () {
    clearInterval(tim)

};
pic_ul.onmouseout = function () {
    clearInterval(tim)
    tim = setInterval(auto, 3000)
};
// 按钮上下换轮播图
// console.log(sx_btn[0]);
sx_btn[0].onclick = function () {
    clearInterval(tim)
    n--;
    if (n <= 0) {
        n = 3;
        pic_ul.style.marginTop = "-120px";
    }
    ujiuye.bufferMove(pic_ul, { "margin-top": -40 * n }, 15);
    tim = setInterval(auto, 3000)
};
sx_btn[1].onclick = function () {
    clearInterval(tim)
    n++;
    if (n == 4) {
        n = 1;
        pic_ul.style.marginTop = "0px";
    }
    ujiuye.bufferMove(pic_ul, { "margin-top": -40 * n }, 15);
    tim = setInterval(auto, 3000)
};


// 轮播图
var img = document.getElementById("img");
var img_ul = document.getElementById("img_ul");
var img_li = img_ul.getElementsByTagName("li");
var pic = img.getElementsByTagName("img");
var btn = img.getElementsByTagName("span");
var lba = 0;
var timer = null;
// 轮播图ajax获取数据
ujiuye.ajax({
    "url": "json/banner.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var centent = req.banner;

        // 设置标签
        for (var i = 0; i < centent.length; i++) {
            img.innerHTML += "<a href=" + centent[i].href + ' target = "_blank" ><img src=' + centent[i].img + " alt=''></a>"
            img_ul.innerHTML += "<li></li>";
        }
        //左右按钮
        img.innerHTML += "<span class='btn_l'></span>";
        img.innerHTML += "<span class='btn_r'></span>";
        // 初始化样式
        pic[0].style.opacity = "1";
        img_li[0].style.background = "#f5004b";
        // 实现动态交互
        for (var j = 0; j < img_li.length; j++) {
            img_li[j].index = j;
            img_li[j].onmouseover = function () {
                if (this.index !== lba) {
                    clearInterval(timer)
                    for (var I = 0; I < img_li.length; I++) {
                        img_li[I].style.background = "rgba(0, 0, 0, .2)";
                        pic[I].style.opacity = "0";
                    }
                    timer = ujiuye.bufferMove(pic[this.index], {
                        opacity: 100
                    }, 15);
                    this.style.background = "#f5004b";
                    lba = this.index;
                }
            }
        }
        // 自动轮播
        var timer = setInterval(auto, 1000)
        function auto() {
            lba++;
            if (lba >= pic.length) {
                lba = 0;
            }
            for (var b = 0; b < img_li.length; b++) {
                img_li[b].style.background = "";
                ujiuye.bufferMove(pic[b], { "opacity": "0" })
            }
            ujiuye.bufferMove(pic[lba], { "opacity": "100" });
            img_li[lba >= img_li.length ? 0 : lba].style.background = "#f5004b";
        }
        // 鼠标移入停止自动轮播
        img.onmouseover = function () {
            clearInterval(timer);
        }
        // 鼠标移出开始自动轮播
        img.onmouseout = function () {
            timer = setInterval(auto, 1000)
        }
        // 左边按钮换图
        btn[0].onclick = function () {
            lba--;
            if (lba >= pic.length) {
                lba = 0;
            }
            if (lba < 0) {
                lba = pic.length - 1;
            }
            for (var i = 0; i < img_li.length; i++) {
                img_li[i].style.background = "";
                ujiuye.bufferMove(pic[i], { "opacity": "0" }, 15);
            }
            ujiuye.bufferMove(pic[lba], { "opacity": "100" }, 15);
            img_li[lba >= img_li.length ? 0 : lba].style.background = "#f5004b";
        }
        // 右边按钮换图
        btn[1].onclick = function () {
            lba++;
            if (lba > pic.length - 1) {
                lba = 0;
            }
            for (var i = 0; i < img_li.length; i++) {
                img_li[i].style.background = "";
                ujiuye.bufferMove(pic[i], { "opacity": "0" }, 15);
            }
            ujiuye.bufferMove(pic[lba], { "opacity": "100" }, 15);
            img_li[lba >= img_li.length ? 0 : lba].style.background = "#f5004b";
        }
    }

});
// 倒计时
var time_ir = document.getElementById("time_ir");
var time_ir_em = time_ir.getElementsByTagName("em");
// console.log(time_ir_em);
count_time();
setInterval(count_time, 10)
function count_time() {
    // 当前时间
    var currentDate = new Date();
    var n = currentDate.getFullYear();
    var y = currentDate.getMonth();
    var r = currentDate.getDate();
    var dh = currentDate.getHours();
    // 未来时间
    var futureDate = new Date(n, y, r, dh + 1, 0, 0);
    var time = (futureDate - currentDate) / 1000;
    var t = parseInt(time / 86400);
    var h = parseInt(time % 86400 / 3600);
    var m = parseInt(time % 3600 / 60);
    var s = parseInt(time % 60);
    time_ir_em[0].innerHTML = ujiuye.toTwo(h);
    time_ir_em[1].innerHTML = ujiuye.toTwo(m);
    time_ir_em[2].innerHTML = ujiuye.toTwo(s);
};
// 美日必抢按钮
// 倒计时商品
var count_l = document.getElementById("count_l");
// 商品切换按钮盒子
var count_l_btn_box = document.getElementById("count_l_btn");
// 商品切换按钮
var count_l_btn = count_l_btn_box.getElementsByTagName("div");
// 切换变量
var count_a = 0;
// 商品内容
var count_l_list = document.getElementById("count_l_list");
var list_lay = count_l_list.getElementsByTagName("section");
// console.log(list_lay);
// 鼠标移入移出显示隐藏按钮
count_l.onmouseover = function () {
    count_l_btn_box.style.display = "block";
};
count_l.onmouseout = function () {
    count_l_btn_box.style.display = "none";
};
// 上一个
count_l_btn[0].onclick = function () {
    count_a--;
    for (var i = 0; i < list_lay.length; i++) {
        list_lay[i].style.display = "none";
    }
    if (count_a < 0) {
        count_a = list_lay.length - 1;
    }
    list_lay[count_a].style.display = "block";
};
// 下一个
count_l_btn[1].onclick = function () {
    count_a++;
    for (var i = 0; i < list_lay.length; i++) {
        list_lay[i].style.display = "none";
    }
    if (count_a > list_lay.length - 1) {
        count_a = 0;
    }
    list_lay[count_a].style.display = "block";
};
// 猜你喜欢
// 左右切换按钮
var seven_btn = document.getElementById("seven_btn");
var seven_btn_i = seven_btn.getElementsByTagName("i");
var seven_main = document.getElementById("seven_main");
var seven_main_ul = seven_main.getElementsByTagName("ul");
var ul_a = 0;
// console.log(seven_main_ul.length);
// 上一个
seven_btn_i[0].onclick = function () {
    ul_a--;
    for (var i = 0; i < seven_main_ul.length; i++) {
        seven_main_ul[i].style.display = "none";
    }
    if (ul_a < 0) {
        ul_a = seven_main_ul.length - 1;
    }
    seven_main_ul[ul_a].style.display = "block";
};
// 下一个
seven_btn_i[1].onclick = function () {
    ul_a++;
    for (var i = 0; i < seven_main_ul.length; i++) {
        seven_main_ul[i].style.display = "none";
    }
    if (ul_a > seven_main_ul.length - 1) {
        ul_a = 0;
    }
    seven_main_ul[ul_a].style.display = "block";
};
// 1楼
// 一楼左轮播图
// var slider_page_btn = document.getElementById("slider_page").getElementsByTagName("p");
var slider_page1 = document.getElementById("slider_page");
var slider_page_btn = slider_page1.getElementsByTagName("p");
var mc_c_cot_li = document.getElementById("mc_c_cot").getElementsByTagName("li");
var brand_ul = document.getElementById("brand").getElementsByTagName("ul");
var main_one_ol_li = document.getElementById("main_one").getElementsByTagName("ol")[0].getElementsByTagName("li");
var mc_c_cot = document.getElementById("mc_c_cot");
var slider_page = 0;
// 滑块
for (var page1 = 0; page1 < main_one_ol_li.length; page1++) {
    main_one_ol_li[page1].index = page1;
    main_one_ol_li[page1].onmouseover = function () {
        for (var i = 0; i < mc_c_cot_li.length; i++) {
            mc_c_cot_li[i].style.display = "none";
        }
        for (var j = 0; j < brand_ul.length; j++) {
            brand_ul[j].style.display = "none";
        }
        for (var a = 0; a < main_one_ol_li.length; a++) {
            main_one_ol_li[a].style.background = "#808080";
        }
        main_one_ol_li[this.index].style.backgroundColor = "#f5004b";
        mc_c_cot_li[this.index].style.display = "block";
        brand_ul[this.index].style.display = "block";
    }
};
// 左右按钮
var mc_c1 = document.getElementById("main_one").getElementsByTagName("div")[0];
// console.log(slider_page1);
// 移入显示按钮
mc_c1.onmouseover = function () {
    slider_page1.style.display = "block"
}
// 移出隐藏按钮
mc_c1.onmouseout = function () {
    slider_page1.style.display = "none"
}
// 上一个
slider_page_btn[0].onclick = function () {
    slider_page--;
    for (var i = 0; i < mc_c_cot_li.length; i++) {
        mc_c_cot_li[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul.length; j++) {
        brand_ul[j].style.display = "none";
    }
    for (var a = 0; a < main_one_ol_li.length; a++) {
        main_one_ol_li[a].style.background = "#808080"
    }
    if (slider_page < 0) {
        slider_page = mc_c_cot_li.length - 1;
    }

    main_one_ol_li[slider_page].style.backgroundColor = "#f5004b";
    brand_ul[slider_page].style.display = "block";
    mc_c_cot_li[slider_page].style.display = "block";
};
// 下一个
slider_page_btn[1].onclick = function () {
    slider_page++;
    for (var i = 0; i < mc_c_cot_li.length; i++) {
        mc_c_cot_li[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul.length; j++) {
        brand_ul[j].style.display = "none";
    }
    for (var a = 0; a < main_one_ol_li.length; a++) {
        main_one_ol_li[a].style.background = "#808080"
    }
    if (slider_page > mc_c_cot_li.length - 1) {
        slider_page = 0;
    }
    main_one_ol_li[slider_page].style.backgroundColor = "#f5004b";
    brand_ul[slider_page].style.display = "block";
    mc_c_cot_li[slider_page].style.display = "block";
};
// 自动
var slider_time = setInterval(slider_auto, 3000);
function slider_auto() {
    slider_page++;
    for (var i = 0; i < mc_c_cot_li.length; i++) {
        mc_c_cot_li[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul.length; j++) {
        brand_ul[j].style.display = "none";
    }
    for (var a = 0; a < main_one_ol_li.length; a++) {
        main_one_ol_li[a].style.background = "#808080"
    }
    if (slider_page > mc_c_cot_li.length - 1) {
        slider_page = 0;
    }
    main_one_ol_li[slider_page].style.backgroundColor = "#f5004b";
    brand_ul[slider_page].style.display = "block";
    mc_c_cot_li[slider_page].style.display = "block";
};
// 移入取消自动
mc_c_cot.onmouseover = function () {
    clearInterval(slider_time)
};
// 移出开启自动
mc_c_cot.onmouseout = function () {
    slider_time = setInterval(slider_auto, 3000);
}

// 1楼优质大牌ajax获取
var main_one_inner = document.getElementById("main_one_inner");
ujiuye.ajax({
    "url": "json/floor1_one.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var content = req.floor1_one;
        // console.log(content);
        for (var i = 0; i < content.length; i++) {
            main_one_inner.innerHTML += "<li><a href=" + content[i].href + ' target = "_blank"><img src=' + content[i].img + "></a></li>";
        }
    }
});
// 1楼时尚新品ajax获取
var m_two_inner = document.getElementById("main_two").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor1_one_a.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.one;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            m_two_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 1楼畅享低价ajax获取
var m_three_inner = document.getElementById("main_three").getElementsByTagName("ul")[0];
// console.log(m_three_inner);
ujiuye.ajax({
    "url": "json/floor1_one_b.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.two;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            m_three_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 1楼店铺精选ajax获取
var m_four_inner = document.getElementById("main_four")
    .getElementsByTagName("ul")[0];
// console.log(m_four_inner);
ujiuye.ajax({
    "url": "json/floor1_one_c.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.three;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            m_four_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 1楼精选单品ajax获取
var m_five_inner = document.getElementById("main_five").getElementsByTagName("ul")[0];
// console.log(m_five_inner);
ujiuye.ajax({
    "url": "json/floor1_one_d.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.four;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            m_five_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 移入选项卡显示对于内容
// 选项卡
var mt_tab_li = document.getElementById("mt_tab").getElementsByTagName("li");
// console.log(mt_tab_li);
// 内容
var mc_r_inner = document.getElementById("mc_r").children;
// console.log(mc_r_inner[5]);
// 划过换内容
for (var t1 = 0; t1 < mt_tab_li.length; t1++) {
    mt_tab_li[t1].index = t1;
    mt_tab_li[t1].onmouseover = function () {
        for (var i = 0; i < mc_r_inner.length - 1; i++) {
            mc_r_inner[i].style.display = "none";
        }
        for (var j = 0; j < mt_tab_li.length; j++) {
            mt_tab_li[j].className = "";
        }
        mt_tab_li[this.index].className = "tab_active";
        mc_r_inner[this.index].style.display = "block";
    }
};
// 按钮隐藏显示
var main_btn = document.getElementById("main_btn");
var mc_r = document.getElementById("mc_r");
// console.log(main_btn);
// console.log(mc_r);
mc_r.onmouseover = function () {
    main_btn.style.display = "block"
};
mc_r.onmouseout = function () {
    main_btn.style.display = "none"
}
// 右按钮换内容
// 全局变量下标
var tab_bl = 0;
mc_r_inner[5].onclick = function () {
    tab_bl++;
    for (var i = 0; i < mc_r_inner.length - 1; i++) {
        mc_r_inner[i].style.display = "none";
    }
    for (var j = 0; j < mt_tab_li.length; j++) {
        mt_tab_li[j].className = "";
    }
    if (tab_bl > mt_tab_li.length - 1) {
        tab_bl = 0;
    }
    // console.log(tab_bl);
    mt_tab_li[tab_bl].className = "tab_active";
    mc_r_inner[tab_bl].style.display = "block";
};
// 2楼
// 2楼左边轮播图
var slider_page_btn2 = document.getElementById("slider_page2").getElementsByTagName("p");
var mc_c_cot2_li2 = document.getElementById("mc_c_cot2").getElementsByTagName("li");
var brand_ul2 = document.getElementById("brand2").getElementsByTagName("ul");
var main_one2_ol_li2 = document.getElementById("main_one2").getElementsByTagName("ol")[0].getElementsByTagName("li");
var mc_c_cot2 = document.getElementById("mc_c_cot2");
var slider_page2 = 0;
// console.log(mc_c_cot_li2);
// 滑块
for (var page2 = 0; page2 < main_one2_ol_li2.length; page2++) {
    main_one2_ol_li2[page2].index = page2;
    main_one2_ol_li2[page2].onmouseover = function () {
        for (var i = 0; i < mc_c_cot2_li2.length; i++) {
            mc_c_cot2_li2[i].style.display = "none";
        }

        for (var j = 0; j < brand_ul2.length; j++) {
            brand_ul2[j].style.display = "none";
        }
        for (var a = 0; a < main_one2_ol_li2.length; a++) {
            main_one2_ol_li2[a].style.backgroundColor = "#808080";
        }
        main_one2_ol_li2[this.index].style.backgroundColor = "#f5004b";
        mc_c_cot2_li2[this.index].style.display = "block";
        brand_ul2[this.index].style.display = "block";
    }
};
// 左右按钮
// 上一个
slider_page_btn2[0].onclick = function () {
    slider_page2--;
    for (var i = 0; i < mc_c_cot2_li2.length; i++) {
        mc_c_cot2_li2[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul2.length; j++) {
        brand_ul2[j].style.display = "none";
    }
    for (var a = 0; a < main_one2_ol_li2.length; a++) {
        main_one2_ol_li2[a].style.background = "#808080"
    }
    if (slider_page2 < 0) {
        slider_page2 = mc_c_cot2_li2.length - 1;
    }

    main_one2_ol_li2[slider_page2].style.backgroundColor = "#f5004b";
    brand_ul2[slider_page2].style.display = "block";
    mc_c_cot2_li2[slider_page2].style.display = "block";
};
// 下一个
slider_page_btn2[1].onclick = function () {
    slider_page2++;
    for (var i = 0; i < mc_c_cot2_li2.length; i++) {
        mc_c_cot2_li2[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul2.length; j++) {
        brand_ul2[j].style.display = "none";
    }
    for (var a = 0; a < main_one2_ol_li2.length; a++) {
        main_one2_ol_li2[a].style.background = "#808080"
    }
    if (slider_page2 > mc_c_cot2_li2.length - 1) {
        slider_page2 = 0;
    }
    main_one2_ol_li2[slider_page2].style.backgroundColor = "#f5004b";
    brand_ul2[slider_page2].style.display = "block";
    mc_c_cot2_li2[slider_page2].style.display = "block";
}
// 自动轮播
var slider2_time = setInterval(slider2_auto, 3000)
function slider2_auto() {
    slider_page2++;
    for (var i = 0; i < mc_c_cot2_li2.length; i++) {
        mc_c_cot2_li2[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul2.length; j++) {
        brand_ul2[j].style.display = "none";
    }
    for (var a = 0; a < main_one2_ol_li2.length; a++) {
        main_one2_ol_li2[a].style.background = "#808080"
    }
    if (slider_page2 > mc_c_cot2_li2.length - 1) {
        slider_page2 = 0;
    }
    main_one2_ol_li2[slider_page2].style.backgroundColor = "#f5004b";
    brand_ul2[slider_page2].style.display = "block";
    mc_c_cot2_li2[slider_page2].style.display = "block";
};
// 移入取消自动
mc_c_cot2.onmouseover = function () {
    clearInterval(slider2_time)
};
// 移出开启自动轮播
mc_c_cot2.onmouseout = function () {
    slider2_time = setInterval(slider2_auto, 3000);
};
// 2楼精选热卖ajax获取
var main_one2_inner = document.getElementById("main_one2_inner");
// console.log(main_one2_inner);
ujiuye.ajax({
    "url": "/json/floor2_one.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor2_one;
        for (var i = 0; i < cot.length; i++) {
            main_one2_inner.innerHTML += "<li><a href=" + cot[i].href + ' target = "_blank"><img src=' + cot[i].img + "></a></li>";
        }
    }
});
// 2楼新品抢先ajax获取
var main_two2_inner = document.getElementById("main_two2").getElementsByTagName("ul")[0];
// console.log(main_two2_inner);
ujiuye.ajax({
    "url": "json/floor2_one_a.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor2_one_a;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_two2_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 2楼笔记本ajax获取
var main_three2_inner = document.getElementById("main_three2").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor2_one_b.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor2_one_b;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_three2_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 2楼摄影摄像ajax获取
var main_four2_inner = document.getElementById("main_four2").getElementsByTagName("ul")[0];
// console.log(main_four2_inner);
ujiuye.ajax({
    "url": "json/floor2_one_c.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor2_one_c;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_four2_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 2楼智能潮品ajax获取
var main_five2_inner = document.getElementById("main_five2").getElementsByTagName("ul")[0];
// console.log(main_five2_inner);
ujiuye.ajax({
    "url": "json/floor2_one_d.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor2_one_d;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_five2_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 2楼OA配件ajax获取
var main_six2_inner = document.getElementById("main_six2").getElementsByTagName("ul")[0];
// console.log(main_six2_inner);
ujiuye.ajax({
    "url": "json/floor2_one_e.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor2_one_e;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_six2_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 2楼平板专区ajax获取
var main_seven2_inner = document.getElementById("main_seven2").getElementsByTagName("ul")[0];
// console.log(main_seven2_inner);
ujiuye.ajax({
    "url": "json/floor2_one_f.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor2_one_f;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_seven2_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 2楼移入选项卡显示对于内容
// 选项卡
var mt_tab2_li = document.getElementById("mt_tab2").getElementsByTagName("li");
// 内容
var mc_r2_inner = document.getElementById("mc_r2").children
// console.log(mc_r1_inner);
// 划过换内容
for (var t2 = 0; t2 < mt_tab2_li.length; t2++) {
    mt_tab2_li[t2].index = t2;
    mt_tab2_li[t2].onmouseover = function () {
        for (var i = 0; i < mc_r2_inner.length - 1; i++) {
            mc_r2_inner[i].style.display = "none";
        }
        for (var j = 0; j < mt_tab2_li.length; j++) {
            mt_tab2_li[j].className = "";
        }
        mt_tab2_li[this.index].className = "tab2_active";
        mc_r2_inner[this.index].style.display = "block";
    }
};
// 右边按钮隐藏显示
var main_btn2 = document.getElementById("main_btn2");
var mc_r2 = document.getElementById("mc_r2");
// console.log(main_btn2);
// console.log(mc_r2);
mc_r2.onmouseover = function () {
    main_btn2.style.display = "block"
};
mc_r2.onmouseout = function () {
    main_btn2.style.display = "none"
}
// 右按钮换内容
// 全局变量下标
var tab2_bl = 0;
mc_r2_inner[7].onclick = function () {
    tab2_bl++;
    for (var i = 0; i < mc_r2_inner.length - 1; i++) {
        mc_r2_inner[i].style.display = "none";
    }
    for (var j = 0; j < mt_tab2_li.length; j++) {
        mt_tab2_li[j].className = "";
    }
    if (tab2_bl > mt_tab2_li.length - 1) {
        tab2_bl = 0;
    }
    // console.log(tab2_bl);
    mt_tab2_li[tab2_bl].className = "tab2_active";
    mc_r2_inner[tab2_bl].style.display = "block";
};
// 3楼家用电器
// 左边轮播图
var slider_page_btn3 = document.getElementById("slider_page3").getElementsByTagName("p");
var mc_c_cot3_li3 = document.getElementById("mc_c_cot3").getElementsByTagName("li");
var brand_ul3 = document.getElementById("brand3").getElementsByTagName("ul");
var main_one3_ol_li3 = document.getElementById("main_one3").getElementsByTagName("ol")[0].getElementsByTagName("li");
var mc_c_cot3 = document.getElementById("mc_c_cot3");
var slider_page3 = 0;
// console.log(mc_c_cot3);
// 滑块
for (var page3 = 0; page3 < main_one3_ol_li3.length; page3++) {
    main_one3_ol_li3[page3].index = page3;
    main_one3_ol_li3[page3].onmouseover = function () {
        for (var i = 0; i < mc_c_cot3_li3.length; i++) {
            mc_c_cot3_li3[i].style.display = "none";
        }

        for (var j = 0; j < brand_ul3.length; j++) {
            brand_ul3[j].style.display = "none";
        }
        for (var a = 0; a < main_one3_ol_li3.length; a++) {
            main_one3_ol_li3[a].style.backgroundColor = "#808080";
        }
        main_one3_ol_li3[this.index].style.backgroundColor = "#f5004b";
        mc_c_cot3_li3[this.index].style.display = "block";
        brand_ul3[this.index].style.display = "block";
    }
};
// 左右按钮
// 上一个
slider_page_btn3[0].onclick = function () {
    slider_page3--;
    for (var i = 0; i < mc_c_cot3_li3.length; i++) {
        mc_c_cot3_li3[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul3.length; j++) {
        brand_ul3[j].style.display = "none";
    }
    for (var a = 0; a < main_one3_ol_li3.length; a++) {
        main_one3_ol_li3[a].style.background = "#808080"
    }
    if (slider_page3 < 0) {
        slider_page3 = mc_c_cot3_li3.length - 1;
    }

    main_one3_ol_li3[slider_page3].style.backgroundColor = "#f5004b";
    brand_ul3[slider_page3].style.display = "block";
    mc_c_cot3_li3[slider_page3].style.display = "block";
};
// 下一个
slider_page_btn3[1].onclick = function () {
    slider_page3++;
    for (var i = 0; i < mc_c_cot3_li3.length; i++) {
        mc_c_cot3_li3[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul3.length; j++) {
        brand_ul3[j].style.display = "none";
    }
    for (var a = 0; a < main_one3_ol_li3.length; a++) {
        main_one3_ol_li3[a].style.background = "#808080"
    }
    if (slider_page3 > mc_c_cot3_li3.length - 1) {
        slider_page3 = 0;
    }

    main_one3_ol_li3[slider_page3].style.backgroundColor = "#f5004b";
    brand_ul3[slider_page3].style.display = "block";
    mc_c_cot3_li3[slider_page3].style.display = "block";
};
// 自动轮播
var slider3_time = setInterval(slider3_auto, 3000);
function slider3_auto() {
    slider_page3++;
    for (var i = 0; i < mc_c_cot3_li3.length; i++) {
        mc_c_cot3_li3[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul3.length; j++) {
        brand_ul3[j].style.display = "none";
    }
    for (var a = 0; a < main_one3_ol_li3.length; a++) {
        main_one3_ol_li3[a].style.background = "#808080"
    }
    if (slider_page3 > mc_c_cot3_li3.length - 1) {
        slider_page3 = 0;
    }
    main_one3_ol_li3[slider_page3].style.backgroundColor = "#f5004b";
    brand_ul3[slider_page3].style.display = "block";
    mc_c_cot3_li3[slider_page3].style.display = "block";
};
// 移入自动停止
mc_c_cot3.onmouseover = function () {
    clearInterval(slider3_time);
};
// 移出开启自动
mc_c_cot3.onmouseout = function () {
    slider3_time = setInterval(slider3_auto, 3000);
};
// 3楼精选热卖ajax获取
var main_one3_inner = document.getElementById("main_one3_inner");
// console.log(main_one3_inner);
// 3楼精选热卖ajax获取
ujiuye.ajax({
    "url": "/json/floor3_one.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor3_one;
        for (var i = 0; i < cot.length; i++) {
            main_one3_inner.innerHTML += "<li><a href=" + cot[i].href + ' target = "_blank"><img src=' + cot[i].img + "></a></li>";
        }
    }
});
// 3楼电视ajax获取
var main_two3_inner = document.getElementById("main_two3").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor3_one_a.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor3_one_a;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_two3_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 3楼洗衣机ajax获取
var main_three3_inner = document.getElementById("main_three3").getElementsByTagName("ul")[0];
// console.log(main_three3_inner);
ujiuye.ajax({
    "url": "json/floor3_one_b.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor3_one_b;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_three3_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 3楼冰箱ajax获取
var main_four3_inner = document.getElementById("main_four3").getElementsByTagName("ul")[0];
// console.log(main_four3_inner);
ujiuye.ajax({
    "url": "json/floor3_one_c.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor3_one_c;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_four3_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 3楼空调ajax获取
var main_five3_inner = document.getElementById("main_five3").getElementsByTagName("ul")[0];
// console.log(main_five3_inner);
ujiuye.ajax({
    "url": "json/floor3_one_d.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor3_one_d;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_five3_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 3楼大屏电视ajax获取
var main_six3_inner = document.getElementById("main_six3").getElementsByTagName("ul")[0];
// console.log(main_six3_inner);
ujiuye.ajax({
    "url": "json/floor3_one_e.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor3_one_e;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_six3_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 3楼温馨卧室ajax获取
var main_seven3_inner = document.getElementById("main_seven3").getElementsByTagName("ul")[0];
// console.log(main_seven3_inner);
ujiuye.ajax({
    "url": "json/floor3_one_f.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor3_one_f;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_seven3_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 3楼移入选项卡显示对于内容
// 选项卡
var mt_tab3_li = document.getElementById("mt_tab3").getElementsByTagName("li");
// 内容
var mc_r3_inner = document.getElementById("mc_r3").children
// console.log(mc_r3_inner);
// 划过选项卡换内容
for (var t3 = 0; t3 < mt_tab3_li.length; t3++) {
    mt_tab3_li[t3].index = t3;
    mt_tab3_li[t3].onmouseover = function () {
        for (var i = 0; i < mc_r3_inner.length - 1; i++) {
            mc_r3_inner[i].style.display = "none";
        }
        for (var j = 0; j < mt_tab3_li.length; j++) {
            mt_tab3_li[j].className = "";
        }
        mt_tab3_li[this.index].className = "tab3_active";
        mc_r3_inner[this.index].style.display = "block";
    }
}
// 右边按钮隐藏显示
var main_btn3 = document.getElementById("main_btn3");
var mc_r3 = document.getElementById("mc_r3");
// console.log(main_btn3);
// console.log(mc_r3);
mc_r3.onmouseover = function () {
    main_btn3.style.display = "block"
};
mc_r3.onmouseout = function () {
    main_btn3.style.display = "none"
}
// 右边按钮切换下一个选项内容
// 全局变量下标
var tab3_bl = 0;
mc_r3_inner[7].onclick = function () {
    tab3_bl++;
    for (var i = 0; i < mc_r3_inner.length - 1; i++) {
        mc_r3_inner[i].style.display = "none";
    }
    for (var j = 0; j < mt_tab3_li.length; j++) {
        mt_tab3_li[j].className = "";
    }
    if (tab3_bl > mt_tab3_li.length - 1) {
        tab3_bl = 0;
    }
    // console.log(tab2_bl);
    mt_tab3_li[tab3_bl].className = "tab3_active";
    mc_r3_inner[tab3_bl].style.display = "block";
};
// 4楼厨房卫浴
// 左边轮播图
var slider_page_btn4 = document.getElementById("slider_page4").getElementsByTagName("p");
var mc_c_cot4_li4 = document.getElementById("mc_c_cot4").getElementsByTagName("li");
var brand_ul4 = document.getElementById("brand4").getElementsByTagName("ul");
var main_one4_ol_li4 = document.getElementById("main_one4").getElementsByTagName("ol")[0].getElementsByTagName("li");
var mc_c_cot4 = document.getElementById("mc_c_cot4");
var slider_page4 = 0;
// console.log(slider_page_btn4);
// 滑块
for (var page4 = 0; page4 < main_one4_ol_li4.length; page4++) {
    main_one4_ol_li4[page4].index = page4;
    main_one4_ol_li4[page4].onmouseover = function () {

        for (var i = 0; i < mc_c_cot4_li4.length; i++) {
            mc_c_cot4_li4[i].style.display = "none";
        }

        for (var j = 0; j < brand_ul4.length; j++) {
            brand_ul4[j].style.display = "none";
        }
        for (var a = 0; a < main_one4_ol_li4.length; a++) {
            main_one4_ol_li4[a].style.backgroundColor = "#808080";
        }
        main_one4_ol_li4[this.index].style.backgroundColor = "#f5004b";
        mc_c_cot4_li4[this.index].style.display = "block";
        brand_ul4[this.index].style.display = "block";
    }
};
// 左右按钮
// 上一个
slider_page_btn4[0].onclick = function () {
    slider_page4--;
    for (var i = 0; i < mc_c_cot4_li4.length; i++) {
        mc_c_cot4_li4[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul4.length; j++) {
        brand_ul4[j].style.display = "none";
    }
    for (var a = 0; a < main_one4_ol_li4.length; a++) {
        main_one4_ol_li4[a].style.background = "#808080"
    }
    if (slider_page4 < 0) {
        slider_page4 = mc_c_cot4_li4.length - 1;
    }

    main_one4_ol_li4[slider_page4].style.backgroundColor = "#f5004b";
    brand_ul4[slider_page4].style.display = "block";
    mc_c_cot4_li4[slider_page4].style.display = "block";
};
// 下一个
slider_page_btn4[1].onclick = function () {
    slider_page4++;
    for (var i = 0; i < mc_c_cot4_li4.length; i++) {
        mc_c_cot4_li4[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul4.length; j++) {
        brand_ul4[j].style.display = "none";
    }
    for (var a = 0; a < main_one4_ol_li4.length; a++) {
        main_one4_ol_li4[a].style.background = "#808080"
    }
    if (slider_page4 > mc_c_cot4_li4.length - 1) {
        slider_page4 = 0;
    }

    main_one4_ol_li4[slider_page4].style.backgroundColor = "#f5004b";
    brand_ul4[slider_page4].style.display = "block";
    mc_c_cot4_li4[slider_page4].style.display = "block";
};
// 自动轮播
var slider4_time = setInterval(slider4_auto, 3000);
function slider4_auto() {
    slider_page4++;
    for (var i = 0; i < mc_c_cot4_li4.length; i++) {
        mc_c_cot4_li4[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul4.length; j++) {
        brand_ul4[j].style.display = "none";
    }
    for (var a = 0; a < main_one4_ol_li4.length; a++) {
        main_one4_ol_li4[a].style.background = "#808080"
    }
    if (slider_page4 > mc_c_cot4_li4.length - 1) {
        slider_page4 = 0;
    }
    main_one4_ol_li4[slider_page4].style.backgroundColor = "#f5004b";
    brand_ul4[slider_page4].style.display = "block";
    mc_c_cot4_li4[slider_page4].style.display = "block";
};
// 移入自动停止
mc_c_cot4.onmouseover = function () {
    clearInterval(slider4_time);
};
// 移出开启自动
mc_c_cot4.onmouseout = function () {
    slider4_time = setInterval(slider4_auto, 3000);
};
// 4楼精选热卖ajax获取
var main_one4_inner = document.getElementById("main_one4_inner");
// console.log(main_one4_inner);
ujiuye.ajax({
    "url": "/json/floor4_one.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor4_one;
        for (var i = 0; i < cot.length; i++) {
            main_one4_inner.innerHTML += "<li><a href=" + cot[i].href + ' target = "_blank"><img src=' + cot[i].img + "></a></li>";
        }
    }
});
// 4楼厨房小电ajax获取
var main_two4_inner = document.getElementById("main_two4").getElementsByTagName("ul")[0];
// console.log(main_two4_inner);
ujiuye.ajax({
    "url": "json/floor4_one_a.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor4_one_a;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_two4_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 4楼生活电器ajax获取
var main_three4_inner = document.getElementById("main_three4").getElementsByTagName("ul")[0];
// console.log(main_three4_inner);
ujiuye.ajax({
    "url": "json/floor4_one_b.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor4_one_b;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_three4_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 4楼净化器ajax获取
var main_four4_inner = document.getElementById("main_four4").getElementsByTagName("ul")[0];
// console.log(main_four4_inner);
ujiuye.ajax({
    "url": "json/floor4_one_c.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor4_one_c;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_four4_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 4楼热水器获取
var main_five4_inner = document.getElementById("main_five4").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor4_one_d.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor4_one_d;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_five4_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 4楼烟灶套餐ajax获取
var main_six4_inner = document.getElementById("main_six4").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor4_one_e.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor4_one_e;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_six4_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 4楼嵌入式ajax获取
var main_seven4_inner = document.getElementById("main_seven4").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor4_one_f.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor4_one_f;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_seven4_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 4楼淘实惠ajax获取
var main_eight4_inner = document.getElementById("main_eight4").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor4_one_g.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor4_one_g;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_eight4_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 4楼移入选项卡显示对于内容
// 选项卡
var mt_tab4_li = document.getElementById("mt_tab4").getElementsByTagName("li");
// 内容
var mc_r4_inner = document.getElementById("mc_r4").children
// console.log(mt_tab4_li);
// 划过选项卡换内容
for (var t4 = 0; t4 < mt_tab4_li.length; t4++) {
    mt_tab4_li[t4].index = t4;
    mt_tab4_li[t4].onmouseover = function () {
        for (var i = 0; i < mc_r4_inner.length - 1; i++) {
            mc_r4_inner[i].style.display = "none";
        }
        for (var j = 0; j < mt_tab4_li.length; j++) {
            mt_tab4_li[j].className = "";
        }
        mt_tab4_li[this.index].className = "tab4_active";
        mc_r4_inner[this.index].style.display = "block";
    }
};
// 右边按钮隐藏显示
var main_btn4 = document.getElementById("main_btn4");
var mc_r4 = document.getElementById("mc_r4");
// console.log(main_btn4);
// console.log(mc_r4);
mc_r4.onmouseover = function () {
    main_btn4.style.display = "block"
};
mc_r4.onmouseout = function () {
    main_btn4.style.display = "none"
}
// 右边按钮切换下一个选项内容
// 全局变量下标
var tab4_bl = 0;
mc_r4_inner[8].onclick = function () {
    tab4_bl++;
    for (var i = 0; i < mc_r4_inner.length - 1; i++) {
        mc_r4_inner[i].style.display = "none";
    }
    for (var j = 0; j < mt_tab4_li.length; j++) {
        mt_tab4_li[j].className = "";
    }
    if (tab4_bl > mt_tab4_li.length - 1) {
        tab4_bl = 0;
    }
    // console.log(tab4_bl);
    mt_tab4_li[tab4_bl].className = "tab4_active";
    mc_r4_inner[tab4_bl].style.display = "block";
};
// 5楼国美超市
// 左边轮播图
var slider_page_btn5 = document.getElementById("slider_page5").getElementsByTagName("p");
var mc_c_cot5_li5 = document.getElementById("mc_c_cot5").getElementsByTagName("li");
var brand_ul5 = document.getElementById("brand5").getElementsByTagName("ul");
var main_one5_ol_li5 = document.getElementById("main_one5").getElementsByTagName("ol")[0].getElementsByTagName("li");
var mc_c_cot5 = document.getElementById("mc_c_cot5");
var slider_page5 = 0;
// console.log(mc_c_cot5);
// 滑块
for (var page5 = 0; page5 < main_one5_ol_li5.length; page5++) {
    main_one5_ol_li5[page5].index = page5;
    main_one5_ol_li5[page5].onmouseover = function () {

        for (var i = 0; i < mc_c_cot5_li5.length; i++) {
            mc_c_cot5_li5[i].style.display = "none";
        }

        for (var j = 0; j < brand_ul5.length; j++) {
            brand_ul5[j].style.display = "none";
        }
        for (var a = 0; a < main_one5_ol_li5.length; a++) {
            main_one5_ol_li5[a].style.backgroundColor = "#808080";
        }
        main_one5_ol_li5[this.index].style.backgroundColor = "#f5004b";
        mc_c_cot5_li5[this.index].style.display = "block";
        brand_ul5[this.index].style.display = "block";
    }
}
// 左右按钮
// 上一个
slider_page_btn5[0].onclick = function () {
    slider_page5--;
    for (var i = 0; i < mc_c_cot5_li5.length; i++) {
        mc_c_cot5_li5[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul5.length; j++) {
        brand_ul5[j].style.display = "none";
    }
    for (var a = 0; a < main_one5_ol_li5.length; a++) {
        main_one5_ol_li5[a].style.background = "#808080"
    }
    if (slider_page5 < 0) {
        slider_page5 = mc_c_cot5_li5.length - 1;
    }
    main_one5_ol_li5[slider_page5].style.backgroundColor = "#f5004b";
    brand_ul5[slider_page5].style.display = "block";
    mc_c_cot5_li5[slider_page5].style.display = "block";
};
// 下一个
slider_page_btn5[1].onclick = function () {
    slider_page5++;
    for (var i = 0; i < mc_c_cot5_li5.length; i++) {
        mc_c_cot5_li5[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul5.length; j++) {
        brand_ul5[j].style.display = "none";
    }
    for (var a = 0; a < main_one5_ol_li5.length; a++) {
        main_one5_ol_li5[a].style.background = "#808080"
    }
    if (slider_page5 > mc_c_cot5_li5.length - 1) {
        slider_page5 = 0;
    }

    main_one5_ol_li5[slider_page5].style.backgroundColor = "#f5004b";
    brand_ul5[slider_page5].style.display = "block";
    mc_c_cot5_li5[slider_page5].style.display = "block";
};
// 自动轮播
var slider5_time = setInterval(slider5_auto, 3000);
function slider5_auto() {
    slider_page5++;
    for (var i = 0; i < mc_c_cot5_li5.length; i++) {
        mc_c_cot5_li5[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul5.length; j++) {
        brand_ul5[j].style.display = "none";
    }
    for (var a = 0; a < main_one5_ol_li5.length; a++) {
        main_one5_ol_li5[a].style.background = "#808080"
    }
    if (slider_page5 > mc_c_cot5_li5.length - 1) {
        slider_page5 = 0;
    }
    main_one5_ol_li5[slider_page5].style.backgroundColor = "#f5004b";
    brand_ul5[slider_page5].style.display = "block";
    mc_c_cot5_li5[slider_page5].style.display = "block";
};
// 移入自动停止
mc_c_cot5.onmouseover = function () {
    clearInterval(slider5_time);
};
// 移出开启自动
mc_c_cot5.onmouseout = function () {
    slider5_time = setInterval(slider5_auto, 3000);
};
// 5楼精选热卖ajax获取
var main_one5_inner = document.getElementById("main_one5_inner");
// console.log(main_one5_inner);
ujiuye.ajax({
    "url": "/json/floor5_one.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor5_one;
        for (var i = 0; i < cot.length; i++) {
            main_one5_inner.innerHTML += "<li><a href=" + cot[i].href + ' target = "_blank"><img src=' + cot[i].img + "></a></li>";
        }
    }
});
// 5楼母婴玩具ajax获取
var main_two5_inner = document.getElementById("main_two5").getElementsByTagName("ul")[0];
// console.log(main_two5_inner);
ujiuye.ajax({
    "url": "json/floor5_one_a.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor5_one_a;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_two5_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 5楼美妆个护ajax获取
var main_three5_inner = document.getElementById("main_three5").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor5_one_b.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor5_one_b;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_three5_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 5楼食品饮料ajax获取
var main_four5_inner = document.getElementById("main_four5").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor5_one_c.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor5_one_c;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_four5_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 5楼茗茶名酒ajax获取
var main_five5_inner = document.getElementById("main_five5").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor5_one_d.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor5_one_d;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_five5_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 5楼清洁用品ajax获取
var main_six5_inner = document.getElementById("main_six5").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor5_one_e.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor5_one_e;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_six5_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 5楼生鲜ajax获取
var main_seven5_inner = document.getElementById("main_seven5").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor5_one_f.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor5_one_f;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_seven5_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
var main_nine5_inner = document.getElementById("main_nine5").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor5_one_g.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor5_one_g;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_nine5_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 5楼移入选项卡显示对于内容
// 选项卡
var mt_tab5_li = document.getElementById("mt_tab5").getElementsByTagName("li");
// 内容
var mc_r5_inner = document.getElementById("mc_r5").children
// console.log(mt_tab5_li);
// 划过选项卡换内容
for (var t5 = 0; t5 < mt_tab5_li.length; t5++) {
    mt_tab5_li[t5].index = t5;
    mt_tab5_li[t5].onmouseover = function () {
        for (var i = 0; i < mc_r5_inner.length - 1; i++) {
            mc_r5_inner[i].style.display = "none";
        }
        for (var j = 0; j < mt_tab5_li.length; j++) {
            mt_tab5_li[j].className = "";
        }
        mt_tab5_li[this.index].className = "tab5_active";
        mc_r5_inner[this.index].style.display = "block";
    }
};
// 右边按钮隐藏显示
var main_btn5 = document.getElementById("main_btn5");
var mc_r5 = document.getElementById("mc_r5");
// console.log(main_btn5);
// console.log(mc_r5);
mc_r5.onmouseover = function () {
    main_btn5.style.display = "block"
};
mc_r5.onmouseout = function () {
    main_btn5.style.display = "none"
}
// 右边按钮切换下一个选项内容
// 全局变量下标
var tab5_bl = 0;
mc_r5_inner[8].onclick = function () {
    tab5_bl++;
    for (var i = 0; i < mc_r5_inner.length - 1; i++) {
        mc_r5_inner[i].style.display = "none";
    }
    for (var j = 0; j < mt_tab5_li.length; j++) {
        mt_tab5_li[j].className = "";
    }
    if (tab5_bl > mt_tab5_li.length - 1) {
        tab5_bl = 0;
    }
    // console.log(tab4_bl);
    mt_tab5_li[tab5_bl].className = "tab5_active";
    mc_r5_inner[tab5_bl].style.display = "block";
};
// 6楼家居家装
// 左边轮播图
var slider_page_btn6 = document.getElementById("slider_page6").getElementsByTagName("p");
var mc_c_cot6 = document.getElementById("mc_c_cot6");
var mc_c_cot6_li6 = mc_c_cot6.getElementsByTagName("li");
var brand_ul6 = document.getElementById("brand6").getElementsByTagName("ul");
var main_one6_ol_li6 = document.getElementById("main_one6").getElementsByTagName("ol")[0].getElementsByTagName("li");
var slider_page6 = 0;
// console.log(main_one6_ol_li6);
// 滑块
for (var page6 = 0; page6 < main_one6_ol_li6.length; page6++) {
    main_one6_ol_li6[page6].index = page6;
    main_one6_ol_li6[page6].onmouseover = function () {
        for (var i = 0; i < mc_c_cot6_li6.length; i++) {
            mc_c_cot6_li6[i].style.display = "none";
        }

        for (var j = 0; j < brand_ul6.length; j++) {
            brand_ul6[j].style.display = "none";
        }
        for (var a = 0; a < main_one6_ol_li6.length; a++) {
            main_one6_ol_li6[a].style.backgroundColor = "#808080";
        }
        main_one6_ol_li6[this.index].style.backgroundColor = "#f5004b";
        mc_c_cot6_li6[this.index].style.display = "block";
        brand_ul6[this.index].style.display = "block";
    }
};
// 左右按钮
// 上一个
slider_page_btn6[0].onclick = function () {
    slider_page6--;
    for (var i = 0; i < mc_c_cot6_li6.length; i++) {
        mc_c_cot6_li6[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul6.length; j++) {
        brand_ul6[j].style.display = "none";
    }
    for (var a = 0; a < main_one6_ol_li6.length; a++) {
        main_one6_ol_li6[a].style.background = "#808080"
    }
    if (slider_page6 < 0) {
        slider_page6 = mc_c_cot6_li6.length - 1;
    }

    main_one6_ol_li6[slider_page6].style.backgroundColor = "#f5004b";
    brand_ul6[slider_page6].style.display = "block";
    mc_c_cot6_li6[slider_page6].style.display = "block";
};
// 下一个
slider_page_btn6[1].onclick = function () {
    slider_page6++;
    for (var i = 0; i < mc_c_cot6_li6.length; i++) {
        mc_c_cot6_li6[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul6.length; j++) {
        brand_ul6[j].style.display = "none";
    }
    for (var a = 0; a < main_one6_ol_li6.length; a++) {
        main_one6_ol_li6[a].style.background = "#808080"
    }
    if (slider_page6 > mc_c_cot6_li6.length - 1) {
        slider_page6 = 0;
    }

    main_one6_ol_li6[slider_page6].style.backgroundColor = "#f5004b";
    brand_ul6[slider_page6].style.display = "block";
    mc_c_cot6_li6[slider_page6].style.display = "block";
};
// 自动轮播
var slider6_time = setInterval(slider6_auto, 3000);
function slider6_auto() {
    slider_page6++;
    for (var i = 0; i < mc_c_cot6_li6.length; i++) {
        mc_c_cot6_li6[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul6.length; j++) {
        brand_ul6[j].style.display = "none";
    }
    for (var a = 0; a < main_one6_ol_li6.length; a++) {
        main_one6_ol_li6[a].style.background = "#808080"
    }
    if (slider_page6 > mc_c_cot6_li6.length - 1) {
        slider_page6 = 0;
    }
    main_one6_ol_li6[slider_page6].style.backgroundColor = "#f5004b";
    brand_ul6[slider_page6].style.display = "block";
    mc_c_cot6_li6[slider_page6].style.display = "block";
};
// 移入自动停止
mc_c_cot6.onmouseover = function () {
    clearInterval(slider6_time);
};
// 移出开启自动
mc_c_cot6.onmouseout = function () {
    slider6_time = setInterval(slider6_auto, 3000);
};
// 6楼精选热卖ajax获取
var main_one6_inner = document.getElementById("main_one6_inner");
// console.log(main_one4_inner);
ujiuye.ajax({
    "url": "/json/floor6_one.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor6_one;
        for (var i = 0; i < cot.length; i++) {
            main_one6_inner.innerHTML += "<li><a href=" + cot[i].href + ' target = "_blank"><img src=' + cot[i].img + "></a></li>";
        }
    }
});
// 六楼家装建材ajax获取
var main_two6_inner = document.getElementById("main_two6").getElementsByTagName("ul")[0];
// console.log(main_two6_inner);
ujiuye.ajax({
    "url": "json/floor6_one_a.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor6_one_a;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_two6_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
//六楼精品家具ajax获取
var main_three6_inner = document.getElementById("main_three6").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor6_one_b.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor6_one_b;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_three6_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 六楼材料装修ajax获取
var main_four6_inner = document.getElementById("main_four6").getElementsByTagName("ul")[0];
ujiuye.ajax({
    "url": "json/floor6_one_c.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor6_one_c;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_four6_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 六楼移入选项卡显示对于内容
// 选项卡
var mt_tab6_li = document.getElementById("mt_tab6").getElementsByTagName("li");
// 内容
var mc_r6_inner = document.getElementById("mc_r6").children
// console.log(mt_tab6_li);
// 划过选项卡换内容
for (var t6 = 0; t6 < mt_tab6_li.length; t6++) {
    mt_tab6_li[t6].index = t6;
    mt_tab6_li[t6].onmouseover = function () {
        for (var i = 0; i < mc_r6_inner.length - 1; i++) {
            mc_r6_inner[i].style.display = "none";
        }
        for (var j = 0; j < mt_tab6_li.length; j++) {
            mt_tab6_li[j].className = "";
        }
        mt_tab6_li[this.index].className = "tab6_active";
        mc_r6_inner[this.index].style.display = "block";
    }
};
// 右边按钮隐藏显示
var main_btn6 = document.getElementById("main_btn6");
var mc_r6 = document.getElementById("mc_r6");
// console.log(main_btn6);
// console.log(mc_r6);
mc_r6.onmouseover = function () {
    main_btn6.style.display = "block"
};
mc_r6.onmouseout = function () {
    main_btn6.style.display = "none"
}
// 右边按钮切换下一个选项内容
// 全局变量下标
var tab6_bl = 0;
mc_r6_inner[4].onclick = function () {
    tab6_bl++;
    for (var i = 0; i < mc_r6_inner.length - 1; i++) {
        mc_r6_inner[i].style.display = "none";
    }
    for (var j = 0; j < mt_tab6_li.length; j++) {
        mt_tab6_li[j].className = "";
    }
    if (tab6_bl > mt_tab6_li.length - 1) {
        tab6_bl = 0;
    }
    // console.log(tab4_bl);
    mt_tab6_li[tab6_bl].className = "tab6_active";
    mc_r6_inner[tab6_bl].style.display = "block";
};
// 七楼
// 七楼汽车用品
// 左边轮播图
var slider_page_btn7 = document.getElementById("slider_page7").getElementsByTagName("p");
var mc_c_cot7 = document.getElementById("mc_c_cot7");
var mc_c_cot7_li7 = mc_c_cot7.getElementsByTagName("li");
var brand_ul7 = document.getElementById("brand7").getElementsByTagName("ul");
var main_one7_ol_li7 = document.getElementById("main_one7").getElementsByTagName("ol")[0].getElementsByTagName("li");

var slider_page7 = 0;
// console.log(main_one7_ol_li7);
// 滑块
for (var page7 = 0; page7 < main_one7_ol_li7.length; page7++) {
    main_one7_ol_li7[page7].index = page7;
    main_one7_ol_li7[page7].onmouseover = function () {
        for (var i = 0; i < mc_c_cot7_li7.length; i++) {
            mc_c_cot7_li7[i].style.display = "none";
        }

        for (var j = 0; j < brand_ul7.length; j++) {
            brand_ul7[j].style.display = "none";
        }
        for (var a = 0; a < main_one7_ol_li7.length; a++) {
            main_one7_ol_li7[a].style.backgroundColor = "#808080";
        }
        main_one7_ol_li7[this.index].style.backgroundColor = "#f5004b";
        mc_c_cot7_li7[this.index].style.display = "block";
        brand_ul7[this.index].style.display = "block";
    }
}

// 左右按钮
// 上一个
slider_page_btn7[0].onclick = function () {
    slider_page7--;
    for (var i = 0; i < mc_c_cot7_li7.length; i++) {
        mc_c_cot7_li7[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul5.length; j++) {
        brand_ul7[j].style.display = "none";
    }
    for (var a = 0; a < main_one7_ol_li7.length; a++) {
        main_one7_ol_li7[a].style.background = "#808080"
    }
    if (slider_page7 < 0) {
        slider_page7 = mc_c_cot7_li7.length - 1;
    }
    main_one7_ol_li7[slider_page7].style.backgroundColor = "#f5004b";
    brand_ul7[slider_page7].style.display = "block";
    mc_c_cot7_li7[slider_page7].style.display = "block";
};
// 下一个
slider_page_btn7[1].onclick = function () {
    slider_page7++;
    for (var i = 0; i < mc_c_cot7_li7.length; i++) {
        mc_c_cot7_li7[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul5.length; j++) {
        brand_ul7[j].style.display = "none";
    }
    for (var a = 0; a < main_one7_ol_li7.length; a++) {
        main_one7_ol_li7[a].style.background = "#808080"
    }
    if (slider_page7 > mc_c_cot7_li7.length - 1) {
        slider_page7 = 0;
    }
    main_one7_ol_li7[slider_page7].style.backgroundColor = "#f5004b";
    brand_ul7[slider_page7].style.display = "block";
    mc_c_cot7_li7[slider_page7].style.display = "block";
};
// 自动轮播
var slider7_time = setInterval(slider7_auto, 3000);
function slider7_auto() {
    slider_page7++;
    for (var i = 0; i < mc_c_cot7_li7.length; i++) {
        mc_c_cot7_li7[i].style.display = "none";
    }
    for (var j = 0; j < brand_ul7.length; j++) {
        brand_ul7[j].style.display = "none";
    }
    for (var a = 0; a < main_one7_ol_li7.length; a++) {
        main_one7_ol_li7[a].style.background = "#808080"
    }
    if (slider_page7 > mc_c_cot7_li7.length - 1) {
        slider_page7 = 0;
    }
    main_one7_ol_li7[slider_page7].style.backgroundColor = "#f5004b";
    brand_ul7[slider_page7].style.display = "block";
    mc_c_cot7_li7[slider_page7].style.display = "block";
};
// 移入自动停止
mc_c_cot7.onmouseover = function () {
    clearInterval(slider7_time);
};
// 移出开启自动
mc_c_cot7.onmouseout = function () {
    slider7_time = setInterval(slider7_auto, 3000);
};
// 7楼精选热卖ajax获取
var main_one7_inner = document.getElementById("main_one7_inner");
// console.log(main_one7_inner);
ujiuye.ajax({
    "url": "/json/floor7_one.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor7_one;
        for (var i = 0; i < cot.length; i++) {
            main_one7_inner.innerHTML += "<li><a href=" + cot[i].href + ' target = "_blank"><img src=' + cot[i].img + "></a></li>";
        }
    }
});
// 7楼车载电器ajax获取
var main_two7_inner = document.getElementById("main_two7").getElementsByTagName("ul")[0];
// console.log(main_two5_inner);
ujiuye.ajax({
    "url": "json/floor7_one_a.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor7_one_a;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_two7_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 7楼四季坐垫ajax获取
var main_three7_inner = document.getElementById("main_three7").getElementsByTagName("ul")[0];
// console.log(main_three7_inner);
ujiuye.ajax({
    "url": "json/floor7_one_b.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor7_one_b;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_three7_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 7楼添加剂ajax获取
var main_four7_inner = document.getElementById("main_four7").getElementsByTagName("ul")[0];
// console.log(main_four7_inner);
ujiuye.ajax({
    "url": "json/floor7_one_c.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor7_one_c;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_four7_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 7楼净化器ajax获取
var main_five7_inner = document.getElementById("main_five7").getElementsByTagName("ul")[0];
// console.log(main_four7_inner);
ujiuye.ajax({
    "url": "json/floor7_one_d.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor7_one_d;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_five7_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 7楼汽车轮胎ajax获取
var main_six7_inner = document.getElementById("main_six7").getElementsByTagName("ul")[0];
// console.log(main_four7_inner);
ujiuye.ajax({
    "url": "json/floor7_one_e.json",
    "type": "get",
    "data": "",
    "success": function (req) {
        var cot = req.floor7_one_e;
        // console.log(cot);
        for (var i = 0; i < cot.length; i++) {
            main_six7_inner.innerHTML += '<li><a href=' + cot[i].href + ' target = "_blank"><img src="' + cot[i].img + '" alt=""><p class="name">' + cot[i].describe + '</p><p class="price"><span>¥</span>' + cot[i].price + '</p></a></li>';
        }
    }
});
// 7楼移入选项卡显示对于内容
// 选项卡
var mt_tab7_li = document.getElementById("mt_tab7").getElementsByTagName("li");
// 内容
var mc_r7_inner = document.getElementById("mc_r7").children
// console.log(mt_tab7_li);
// 划过选项卡换内容
for (var t7 = 0; t7 < mt_tab7_li.length; t7++) {
    mt_tab7_li[t7].index = t7;
    mt_tab7_li[t7].onmouseover = function () {
        for (var i = 0; i < mc_r7_inner.length - 1; i++) {
            mc_r7_inner[i].style.display = "none";
        }
        for (var j = 0; j < mt_tab7_li.length; j++) {
            mt_tab7_li[j].className = "";
        }
        mt_tab7_li[this.index].className = "tab7_active";
        mc_r7_inner[this.index].style.display = "block";
    }
}
// 右边按钮隐藏显示
var main_btn7 = document.getElementById("main_btn7");
var mc_r7 = document.getElementById("mc_r7");
// console.log(main_btn7);
// console.log(mc_r7);
mc_r7.onmouseover = function () {
    main_btn7.style.display = "block"
};
mc_r7.onmouseout = function () {
    main_btn7.style.display = "none"
}
// 右边按钮切换下一个选项内容
// 全局变量下标
var tab7_bl = 0;
mc_r7_inner[6].onclick = function () {
    tab7_bl++;
    for (var i = 0; i < mc_r7_inner.length - 1; i++) {
        mc_r7_inner[i].style.display = "none";
    }
    for (var j = 0; j < mt_tab7_li.length; j++) {
        mt_tab7_li[j].className = "";
    }
    if (tab7_bl > mt_tab7_li.length - 1) {
        tab7_bl = 0;
    }
    // console.log(tab4_bl);
    mt_tab7_li[tab7_bl].className = "tab7_active";
    mc_r7_inner[tab7_bl].style.display = "block";
};
// 楼层导航
var fl_off = document.getElementById("fl_off");
var fl_f = fl_off.getElementsByTagName("ul")[0];
var fl_tier = fl_f.getElementsByTagName("li");
var fl_goto = fl_off.getElementsByTagName("ul")[1].getElementsByTagName("li");
var two_center = document.getElementById("two_center");
// var m;
var sec_top = document.getElementsByTagName("section");
// console.log(sec_top);

window.onscroll = function () {
    for (var i = 0; i < fl_tier.length; i++) {
        fl_tier[i].className = "";
    };
    // 页面卷去高
    var stp = document.documentElement.scrollTop;
    // console.log(stp);
    if (stp >= 1000) {
        two_center.className = "two_center cet_search";
    }
    if (stp < 1000) {
        two_center.className = "two_center";
    }
    if (stp > 6200) {
        two_center.className = "two_center";
    }
    if (stp >= 1900) {

        fl_off.style.display = "block";
    }
    if (stp >= 6500) {
        fl_off.style.display = "none";
    }
    if (stp < 1900) {
        fl_off.style.display = "none";
    }
    if (stp >= sec_top[16].offsetTop - (sec_top[16].offsetHeight / 2)) {
        fl_tier[6].className = "fl_active"
    } else if (stp >= sec_top[15].offsetTop - (sec_top[15].offsetHeight / 2)) {
        fl_tier[5].className = "fl_active"
    } else if (stp >= sec_top[14].offsetTop - (sec_top[14].offsetHeight / 2)) {
        fl_tier[4].className = "fl_active"
    } else if (stp >= sec_top[13].offsetTop - (sec_top[13].offsetHeight / 2)) {
        fl_tier[3].className = "fl_active"
    } else if (stp >= sec_top[12].offsetTop - (sec_top[12].offsetHeight / 2)) {
        fl_tier[2].className = "fl_active"
    } else if (stp >= sec_top[11].offsetTop - (sec_top[11].offsetHeight / 2)) {
        fl_tier[1].className = "fl_active"
    } else if (stp >= sec_top[10].offsetTop - 500) {
        fl_tier[0].className = "fl_active"
    };
    // 点几楼去几楼
    fl_tier[0].onclick = function () {
        document.documentElement.scrollTop = 2500;
        for (var i = 0; i < fl_tier.length; i++) {
            fl_tier[i].className = "";
        };
        fl_tier[0].className = "fl_active"
    }
    fl_tier[1].onclick = function () {
        document.documentElement.scrollTop = 3050;
        for (var i = 0; i < fl_tier.length; i++) {
            fl_tier[i].className = "";
        };
        fl_tier[1].className = "fl_active"
    }
    fl_tier[2].onclick = function () {
        document.documentElement.scrollTop = 3750;
        for (var i = 0; i < fl_tier.length; i++) {
            fl_tier[i].className = "";
        };
        fl_tier[2].className = "fl_active"
    }
    fl_tier[3].onclick = function () {
        document.documentElement.scrollTop = 4300;
        for (var i = 0; i < fl_tier.length; i++) {
            fl_tier[i].className = "";
        };
        fl_tier[3].className = "fl_active"
    }
    fl_tier[4].onclick = function () {
        document.documentElement.scrollTop = 4900;
        for (var i = 0; i < fl_tier.length; i++) {
            fl_tier[i].className = "";
        };
        fl_tier[4].className = "fl_active"
    }
    fl_tier[5].onclick = function () {
        document.documentElement.scrollTop = 5600;
        for (var i = 0; i < fl_tier.length; i++) {
            fl_tier[i].className = "";
        };
        fl_tier[5].className = "fl_active"
    }
    fl_tier[6].onclick = function () {
        document.documentElement.scrollTop = 6150;
        for (var i = 0; i < fl_tier.length; i++) {
            fl_tier[i].className = "";
        };
        fl_tier[6].className = "fl_active"
    }
    fl_goto[0].onclick = function () {
        document.documentElement.scrollTop = 0;
    }
    fl_goto[1].onclick = function () {
        document.documentElement.scrollTop = 7410;
    }
};
// 页脚微信app隐藏显示二维码
var qrcode = document.getElementById("qrcode");
// console.log(qrcode);
// 微信
var wx_code = qrcode.getElementsByTagName("em")[0];
var qrd_wx = wx_code.getElementsByTagName("div")[0];
// console.log(qrd_wx);
wx_code.onmouseover = function () {
    qrd_wx.style.display = "block";
};
wx_code.onmouseout = function () {
    qrd_wx.style.display = "none";
};
// 手机
var wap_code = qrcode.getElementsByTagName("em")[1];
var qrd_wap = wap_code.getElementsByTagName("div")[0];
// console.log(wap_code);
wap_code.onmouseover = function () {
    qrd_wap.style.display = "block";
};
wap_code.onmouseout = function () {
    qrd_wap.style.display = "none";
};
// 侧边栏
// 国美会员个人用户
var bar_one = document.getElementById("bar_one").getElementsByTagName("li");
var bar_two = document.getElementById("bar_two").getElementsByTagName("li")
var bar_user_inner = document.getElementById("bar_user_inner");
var bar_s2 = bar_one[0].getElementsByTagName("span")[1];
// console.log(bar_user_inner);
bar_one[0].onmouseover = function () {
    bar_s2.style.display = "block";
    bar_one[0].style.backgroundColor = "#343434";
    bar_one[0].style.border = "none";
    ujiuye.bufferMove(bar_two[0], { "right": 35 }, 5)
}
bar_one[0].onmouseout = function () {
    bar_s2.style.display = "none";
    bar_one[0].style.backgroundColor = "";
    bar_one[0].style.borderBottom = "1px solid #8d8d8d";
    ujiuye.bufferMove(bar_two[0], { "right": -47 }, 5);
}
bar_two[0].onmouseover = function () {
    bar_one[0].style.backgroundColor = "#343434";
    bar_s2.style.display = "block";
    bar_one[0].style.border = "none";
    ujiuye.bufferMove(bar_two[0], { "right": 35 }, 5)
}
bar_two[0].onmouseout = function () {
    bar_one[0].style.backgroundColor = "";
    bar_s2.style.display = "none";
    bar_one[0].style.borderBottom = "1px solid #8d8d8d";
    ujiuye.bufferMove(bar_two[0], { "right": -47 }, 5);
}