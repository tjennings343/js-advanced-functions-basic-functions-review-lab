// Your code here
function saturdayFun(event = 'roller-skate'){
    return `This Saturday, I want to ${event}!`
}

function mondayWork(plan = 'go to the office'){
    return `This Monday, I will ${plan}.`
}

function wrapAdjective(defP = '*'){
    return function inner(adj = 'special'){
        return `You are ${defP}${adj}${defP}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(c,d){
        return c - d
    },
    multiply: function(e,f){
        return e * f
    },
    divide: function(g,h){
        return g / h
    }
}

function actionApplyer(int,arr){
    let num = int
    for (let i = 0; i < arr.length; i++){
        let func = arr[i]
        num = func(num)
    }
    return num
}