function Footer(props) {
    let totalNum = props.list.reduce((total, item) => {
        return total += item.checked ? item.num : 0;
    }, 0)

    let totalPrice = props.list.reduce((total, item) => {
        return total += item.checked ? item.num * item.price : 0;
    }, 0).toFixed(2)

    return <div>
        <div>
            <input type="checkbox" />全选
        </div>
        <div>
            <span>总量: {totalNum}</span>
            <span>总价：{totalPrice}</span>
        </div>
        <button>支付</button>
    </div>
}

export default Footer;