const Buteurs = [
    { 
        "id": 1,
        "player": { "player_id": 19779, "player_name": "Karim Benzema" },
        "team": "Real Madrid",
        "goals": { "home": 7, "away": 7 }
    },
    { 
        "id": 1,
        "player": { "player_id": 197, "player_name": "Karim Benzema" },
        "team": "ITTIHAD",
        "goals": { "home": 7, "away": 7 }
    },
    { 
        "id": 2,
        "player": { "player_id": 4934, "player_name": "Robert Lewandowski" },
        "team": "FC Bayern Munich",
        "goals": { "home": 9, "away": 4 }
    },
    { 
        "id": 3,
        "player": { "player_id": 3048, "player_name": "Vinícius Júnior" },
        "team": "Real Madrid",
        "goals": { "home": 6, "away": 3 }
    },
    { 
        "id": 4,
        "player": { "player_id": 2282, "player_name": "Luka Modrić" },
        "team": "Real Madrid",
        "goals": { "home": 1, "away": 1 }
    },
    { 
        "id": 5,
        "player": { "player_id": 11234, "player_name": "Thomas Müller" },
        "team": "FC Bayern Munich",
        "goals": { "home": 4, "away": 2 }
    },
    { 
        "id": 6,
        "player": { "player_id": 2295, "player_name": "Joshua Kimmich" },
        "team": "FC Bayern Munich",
        "goals": { "home": 2, "away": 1 }
    }
];
// ---------------- 1
const q1 = function(player){
    let but = Buteurs.reduce((totBut, obj)=>{
        if(obj.player.player_name == player)
            return totBut + obj.goals.home + obj.goals.home
        return totBut
    }, 0)
    console.log(but)
}
// q1("Karim Benzema");
// --------------- 2

const q2 = function(){
    let away3 = Buteurs.filter(obj =>{
        if(obj.goals.away >= 3)
            return obj.player.player_name;
    })
    return away3;
}
// console.log(q2());
// ============ 3

const q3 = function(){
    let MaxBut = Buteurs.reduce((max, obj) =>{
       if (obj.goals.home > max){
            max = obj.goals.home
            return max
       }
       return max
    }, 0)
    return MaxBut
}
console.log(q3());