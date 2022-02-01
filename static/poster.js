import init from './index-bd02851dccae165b.js';
export const draw = () => {
    init('./index-bd02851dccae165b_bg.wasm');
};

(function(){
    window.onresize = () => draw();
    document.addEventListener("DOMContentLoaded", function() {
        draw();
    });
})();