var modal = document.getElementById('add-skill-modal')
document.getElementById('add-skill-btn').addEventListener('click', ()=>{
    modal.classList.add('open-modal')
})

var close_button = document.getElementById('close-btn')
close_button.onclick = () => {
    modal.classList.remove('open-modal')
}

document.getElementById('skills-form').addEventListener('submit', (e) => addSkillCard(e))

function addSkillCard(e){
    e.preventDefault();

    const skills = [e.target.skill1?.value, e.target.skill2?.value, e.target.skill3?.value, e.target.skill4?.value, e.target.skill5?.value]
    const proficiencies = [e.target.prof1.value, e.target.prof2.value, e.target.prof3.value, e.target.prof4.value, e.target.prof5.value]
    if(skills.length <= 0 || proficiencies.length <= 0)
        return;

    const domain = document.getElementById('domain').value;

    const card = createCard(domain);
    
    var skillContainer = createSkillContainer(skills, proficiencies)
    if(skillContainer){
        card.appendChild(skillContainer)
    }

    document.getElementById('skills-grid').appendChild(card)
    close_button.click();
}


function createCard(domain){
    const card = document.createElement('div');
    card.className = 'skills-card'
    const heading = document.createElement('h4');
    heading.textContent = domain
    const skillContainer = document.createElement('div');
    skillContainer.className = 'skill-bars-container'
    card.appendChild(heading)
    card.appendChild(skillContainer)

    return card
}



function createSkillContainer(skills, proficiencies){
    if(skills.length <= 0)
        return null
    const skillContainer = document.createElement('div')
    skillContainer.className = 'skill-bars-container'

    for(let i = 0; i < skills.length; i++){
        if(skills[i])
        {
            skillContainer.appendChild(createSkillLabel(skills[i], proficiencies[i]))
            skillContainer.appendChild(createSkill(skills[i], proficiencies[i]))
        }
    }

    return skillContainer
}

function createSkillLabel(skill, proficiency){
    const label = document.createElement('div')
    label.className = 'skill'

    var span1 = document.createElement('span')
    span1.innerHTML = skill

    var span2 = document.createElement('span')
    span2.innerHTML = proficiency+'%'

    label.append(span1,span2)
    return label
}

function createSkill(skill, proficiency){
    const skillBar = document.createElement('div')
    skillBar.className = 'skill-bar'

    const bar = document.createElement('div')
    bar.classList.add('bar', 'html')

    skillBar.appendChild(bar)
    return skillBar
}