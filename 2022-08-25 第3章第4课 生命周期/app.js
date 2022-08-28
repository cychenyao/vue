const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            name: '',
            ipt:'',
            goals: [],
            d:{
                number: '00001',
                factoryName: '00001',
                purchaseNumber: '00001',
                orderRow:'00001',
                orderNumber:'00001',
                materialNo:'00001',
                materialDesc:'00001',
                mesUnit:'00001',
                recvNumber:'00001',
                ordPriceNoTax:'00001',
                ordPriceWtTax:'00001',
                invoiceNoTax:'00001',
                invoiceWtTax:'00001',
                priceDiffBefTax:'00001',
                priceDifffWtTax:'00001',
                priceBase:'00001',
                priceChangeDesc:'00001',
                priceConfim:'00001',
                priceReviewDesc:'00001',
                recvGoodsBfTax:'00001',
                recvGoodsWtTax:'00001',
                stateBfTax:'00001',
                stateWtTax:'00001',
                diffAmoutBfTax:'00001',
                diffAmoutWtTax:'00001',
                taxRate:'00001',
                innerDeliveyNo:'00001',
                deliveryRowNo:'00001',
                recvVoucherNo:'00001',
                recvVoucherRowNo:'00001',
                delieveryNo:'00001',
            }
        }
    },
    methods:{
        add(index){
            this.counter = this.counter+index
        },
        reduce(index){
            this.counter = this.counter - index
        },
        setGoal(event){
            this.goals.push(event.value);   
        },
        submitForm(){
            alert("提交表单！")
        },
        clearName(){
            this.name= ''
        },
        getName(){
            // alert('aaa')
            return "陈" + this.ipt
        },
        removeGoal(index){
            this.goals.splice(index, 1)
        }
    },
    computed: {
        fullName(){
            // alert('fullname')
            return "陈" + this.ipt
        }
    },
    watch:{
        ipt(newValue, oldValue){
            // alert('changed');
            this.name = '陈' + newValue
        }
    },
    beforeCreate(){
        console.log('before Create');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeUnmount(){
        console.log('beforeUnmount');
    },
    unmounted(){
        console.log('unmounted');
    },

})
app.mount('#events')


setTimeout(function(){
    app.unmount()
}, 3000);