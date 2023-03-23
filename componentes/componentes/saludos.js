Vue.component('saludo', {
    template: //html
    `
    <div>
    <h1>{{saludo}}</h1>
    <h3>que tal</h3>
    </div>
    `,
    data(){
        return{
            saludo:'hola bb'
        }
    }
});
new Vue({
    el: '#app'
});

