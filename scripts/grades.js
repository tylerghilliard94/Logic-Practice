const scores = [57, 90, 67, 89, 93, 100, 78, 89, 76, 95, 50, 82]
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
}


for(let number of scores) {
    if(number >= 91) {
        grades.A ++
    }else if(number >= 81 && number <= 90) {
        grades.B ++
    }else if(number >= 71 && number <=80) {
        grades.C ++
    } else if(number >=61 && number <= 70) {
        grades.D ++
    } else {
        grades.F ++
    }
}

for (const key in grades) {
    if (grades.hasOwnProperty(key)) {
        console.log(key, grades[key])
        
    }
}
let min = 100
for (const number of scores) {
    if(number < min){
        min = number
    }
}
console.log(min)
let max = 0
for (const number of scores) {
    if(number > max){
        max = number
    }
}
console.log(max)
let currentGradeCount = 0
let currentKey = ""
for (const key in grades) {
    if (grades.hasOwnProperty(key)) {
        if(grades[key] > currentGradeCount) {
            currentGradeCount = grades[key]
            currentKey = key
        }
        
        
    }
}
console.log(currentKey)
let currentGradeCount2 = 10
let currentKey2 = ""
for (const key in grades) {
    if (grades.hasOwnProperty(key)) {
        if(grades[key] < currentGradeCount) {
            currentGradeCount = grades[key]
            currentKey = key
        }
        
        
    }
}
console.log(currentKey)