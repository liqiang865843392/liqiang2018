import Vue from 'vue'
import "../util/waves/waves.css" //引入点击元件出波浪效果
Vue.directive('waves', {
    bind(el, binding) {
        el.addEventListener('click', e => {
            const customOpts = Object.assign({}, binding.value)
            const opts = Object.assign({
                ele: el, // 波纹作用元素
                type: 'hit', // hit点击位置扩散center中心点扩展
                color: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
            }, customOpts)
            const target = opts.ele
            if (target) {
                target.style.position = 'relative'
                target.style.overflow = 'hidden'
                const rect = target.getBoundingClientRect()
                let ripple = target.querySelector('.waves-ripple')
                if (!ripple) {
                    ripple = document.createElement('span')
                    ripple.className = 'waves-ripple'
                    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
                    target.appendChild(ripple)
                } else {
                    ripple.className = 'waves-ripple'
                }
                switch (opts.type) {
                    case 'center':
                        ripple.style.top = (rect.height / 2 - ripple.offsetHeight / 2) + 'px'
                        ripple.style.left = (rect.width / 2 - ripple.offsetWidth / 2) + 'px'
                        break
                    default:
                        ripple.style.top = (e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop) + 'px'
                        ripple.style.left = (e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft) + 'px'
                }
                ripple.style.backgroundColor = opts.color
                ripple.className = 'waves-ripple z-active'
                return false
            }
        }, false)
    }
});
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。

    inserted: function (el) {
        // 聚焦元素
        el.focus()
    },
    //也可以用update,update就是当页面有操作的时候就触发，比如点击按钮，输入框输入都算。
    //有一个要注意的就是，就是你页面有几个input,比如一个input绑定了v-focus,一个没有绑定。你在没绑定v-focus的input输入时，绑定了v-focus的input就是自动获取焦点，这是个bug.
    //update: function (el) {
    //el.focus()
    //}
});
