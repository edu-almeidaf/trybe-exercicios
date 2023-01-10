const modifyHeader = () => {
    const headerContainer = document.getElementById('header-container').style.backgroundColor = 'rgb(0, 176, 105)';
}

modifyHeader();

const modifyEmergencySections = () => {
    const emergency = document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'rgb(255, 159, 132)';

    const noEmergency = document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'rgb(249, 219, 94)';
}

modifyEmergencySections();

const modifyHeaderEmergencySections = () => {
    const emergencyHeaders = document.querySelectorAll('.emergency-tasks h3');
    const noEmergencyHeaders = document.querySelectorAll('.no-emergency-tasks h3')
    
    for (index = 0; index < emergencyHeaders.length; index += 1) {
        emergencyHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
        noEmergencyHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
    }
}

modifyHeaderEmergencySections();

const modifyFooter = () => {
    const footer = document.getElementById('footer-container').style.backgroundColor = 'rgb(0, 53, 51)'
}

modifyFooter();