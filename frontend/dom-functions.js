const showHiddenElement = (element) => {
    element.classList.remove('hidden');
}

const addRevealButtonListener = (button, element) => {
    button.addEventListener('click', () => {
        showHiddenElement(element);
    })
}

const makeRed = (element) => {
    element.classList.add('red')
}

const generateFollowersList = (followers) => {
    let htmlListString = "";

        followers.map((follower) => {
          console.log(follower);
          htmlListString =
            htmlListString +
            `
                <li>
                    <a href="${follower.html_url}" target="_blank"> 
                        <img src="${follower.avatar_url}" alt="">
                        ${follower.login}
                    </a>
                </li>
            `;
        });

    document.querySelector('.github-followers').innerHTML = htmlListString;
}

export {addRevealButtonListener, makeRed, generateFollowersList};