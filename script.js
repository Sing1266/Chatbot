let $response = document.getElementById('response') 
let $input = document.getElementById('input')
let $submit = document.getElementById('submit')

const greetings = [
    'Hi',
    'Hey there',
    'Hello',
    'Greetings',
    'Howdy'
]

const punctuation = [
    '.',
    '!',
    '...'
] 

constprompts = [
    'Whats up?',
    'How can I help you',
    'Whats new'
]

const questionResponses = [
    'Yes',
    'No',
    'Maybe'
    'You bet!',
    'Absolutely',
    'Haha'
]

const generalResponses = [
    'Okay',
    'Alright',
    'If you say so',
    'Whatever',
    'Fine',
    'Not convinced'
]

const questionWords = [
    'do',
    'did',
    'does',
    'can',
    'am',
    'was',
    'were',
    'have',
    'has',
    'may',
    'are',
    'will',
    'should',
    'is'
]

function getRandom(max){
    return (Math.random())
}


let name = ''
let namePrompt = ''
let botPrompt = 'Bot: '

$response.textContent += `${botPrompt}Hi there, What's your name`

$submit.addEventListener('click',function () {
    if (name === ''){
        name = $input.nodeValue
        namePrompt = `${name}: `
        $input.value = ''
        $response.textContent += `\n${botPrompt}${greetings[getRandom
        (greetings.length)]} ${name}${punctuation[getRandom
        (punctuation.length)]} ${prompts[getRandom(prompts.length)]}`
    } else{
        let questionStatus = false
        let firstWord = $input.value.split(' ')[0]
        firstWord = firstWord.toLowerCase()
        for (let word of questionWords){
            if(firstWord === word){
                questionStatus = true
                break
            }
        }
        $response.textContent += `${namePrompt}${input.value}`
        $input.value = ''

        if (questionStatus === true) {
            $response.textContent += `\n${botPrompt}${questionResponses[getRandom
                (questionResponses.length)]} ${name}${punctuation[getRandom
                (punctuation.length)]} ${prompts[getRandom(prompts.length)]}` 
        }
        else{
            $response.textContent += `\n${botPrompt}${generalResponses[getRandom
                (generalResponses.length)]} ${name}${punctuation[getRandom
                (punctuation.length)]} ${prompts[getRandom(prompts.length)]}`
        }
    }

})
