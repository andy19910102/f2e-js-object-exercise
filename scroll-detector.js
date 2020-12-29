// 所有導覽列中的連結nav-link
const navLinkList = document.querySelectorAll('.navbar a.nav-link'),
    // 導覽列
    navbar = document.getElementById('navbar'),
    // 滑動資訊報告元件
    scrollReport = document.getElementById('scrollReport');

// TODO: 建立章節資訊查詢表 navigationTable
/* 
 * {
 *    section1: {section: sectionDOM, link: navLinkDOM},
 *    section2: {...}, ...
 * }
 */
const navigationTable = {};


// 綁定視窗(window)的滾動事件(scroll)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
window.addEventListener('scroll', function () {
    // TODO: 取得視窗的直向滑動偵測點(scrollY)
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY

    // TODO: 取得每個章節的所在位置頂邊座標(offsetTop)、底邊座標(offsetTop + offsetHeight)
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight

});