var countries=[
    {
        name:'India',
        capital:'Delhi',
        states:[{name:'Maharashtra',
            capital:'Mumbai'
        },
            {
                name:'Bihar',
                capital:'Patna'
            }]
    }
];
for (var i=0;i<countries.length;i++){
    var s=countries[i];
    for (var j=0;j<s.states.length;j++){
        s.states[j];
        console.log(s.states[j]);
    }

}