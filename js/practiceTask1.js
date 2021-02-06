ar = [{
    name: "ООО Рога и копыта",
    child:
    [
        {
            name: "Руководство",
            child: [ {name: "генеральный директор"}, {name: "главный инженер"}, {name: "финансовый директор"}, {name: "заместитель по кадрам"}]
        },
        {
            name: "Адреса филиалов",
            child: [ {name: "г.Пермь"}, {name: "г.Москва"}, {name: "г.Екатеринбург"} ]
        }
    ]
}];

ffa = (arr) => {
    var ret="";
    arr
    .filter((v)=>{
        return v.name != "г.Москва";
    })
    .map((v) => {
        let child = "";
        if( Array.isArray(v.child) ) child=ffa(v.child)
        ret+="<li>" + v.name + child + "</li>";
    });
    
    ret="<ul>" + ret + "</ul>";
    
    return ret;
};

/*let buttonNav = document.querySelector('.button');

buttonNav.onclick => {

    buttonNav.classList.toggle('added')

} */