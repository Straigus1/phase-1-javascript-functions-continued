function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}
function wrapAdjective(hype = '*') {
    const praise = function(word = special) {
        return `You are ${hype}${word}${hype}!`
    }
    return praise
    }
    const encouragingPromptFunction = wrapAdjective("!!!")
    wrapAdjective("%")("a dedicated programmer")
