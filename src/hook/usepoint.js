import { onBeforeUnmount, onMounted, reactive } from "vue"
export default function () {
    //鼠标打点功能
    let point = reactive({
        x: 0,
        y: 0
    })
    function getpoint(event) {
        point.x = event.clientX
        point.y = event.clientY

    }
    onMounted(() => {
        window.addEventListener('click', getpoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', getpoint)
    })
    return point
}