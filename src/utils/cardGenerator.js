fetch('http://localhost:8000/auth/json')
    .then(response => response.json())
    .then(data => {
            renderCards(data);
    })
    .catch(error => console.error('Error:', error));

/*  Tailwind Classes
    imgMe = relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80
    headerMe = p-6 text-center
    cardName = block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900
    cardPosition = block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400"
*/
// socials
/*
    <div class="flex justify-center p-6 pt-2 gap-7">
                        <a href="#facebook"
                          class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                          <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#twitter"
                          class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                          <i
                            class="fab fa-twitter" aria-hidden="true">
                          </i>
                        </a>
                        <a href="#instagram"
                          class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                            class="fab fa-instagram" aria-hidden="true">
                          </i>
                        </a>
    </div>

*/

// socials = 

// Order of the card
// cardMe, [imgMe, headerMe {cardName, cardPosition}],[socials]


function renderCards(data) {
    console.log(data);
        // append it all at the end
        
        
        // TODO: fix the cardss
        const container = document.getElementById('cardMe');
        data.forEach(agent => {
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            const headerContainer = document.getElementById('headerMe');
            const cardName = document.createElement('h1');
            const cardPosition = document.createElement('h2');

            // adding Image to image container
            imgContainer.classList.add = "relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80"
            img.src = agent.image;
            console.log(agent.image);
            imgContainer.appendChild(img);
            // adding socials

            container.appendChild(imgContainer);
            container.appendChild(headerContainer);

        })
}