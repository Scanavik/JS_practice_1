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
    .map((v) => {
        ret+="<li>" + v.name + "</li>";
    });
        ret = "<ul>" + ret + "</ul>";
    return ret;
};

document.write ( ffa(ar) );