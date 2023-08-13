
//Second Section 
const observerSecond = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show-second");
        } else{
            entry.target.classList.remove("show-second")
        }
    })
})

const hiddenElementsSecond = document.querySelectorAll('.hidden-second');
hiddenElementsSecond.forEach((el) => observerSecond.observe(el));

//Third Section
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else{
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Fourth Section
const dryVan = document.querySelector("#Dry-Van");
const dryVanText = document.querySelector(".info-1");
console.log(dryVanText)

document.addEventListener("DOMContentLoaded", function() {
    const reeferButton = document.querySelector("#Reefer");
    const reeferText = document.querySelector(".info-1");
    reeferButton.addEventListener("click", function() {
        const newContent = 
        ` <object data="Images/dispatching-services.svg" type="image/svg+xml"></object>
        <h6>Reefer</h6>
         <p>A reefer, or refrigerated trailer, is designed to transport perishable goods while maintaining a controlled temperature. Equipped with cooling systems, reefers ensure items like food and pharmaceuticals stay fresh and unspoiled during transit. They are essential for preserving the quality of temperature-sensitive cargo, making them indispensable in industries requiring precise temperature control for safe transportation.</p>
    `;
    reeferText.innerHTML = newContent;
    reeferText.getElementsByTagName('h6')[0].style.opacity = '0'
    reeferText.getElementsByTagName('p')[0].style.opacity = '0'
    reeferText.getElementsByTagName('h6')[0].style.animation = 
    'slideIn 2s forwards';
    reeferText.getElementsByTagName('p')[0].style.animation = 
    'slideIn 2s forwards';
    reeferText.getElementsByTagName('p')[0].style.animationDelay = 
    '0.4s';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const dryVanButton = document.querySelector("#Dry-Van"); 
    const dryVanText= document.querySelector(".info-1")
    dryVanButton.addEventListener("click", function() {
        const newContent = 
        ` <object data="Images/dispatching-services.svg" type="image/svg+xml"></object>
        <h6>Dry Van</h6>
         <p>A dry van is an enclosed trailer used for transporting goods. It safeguards cargo from weather and road elements. Unlike refrigerated trailers, it lacks temperature control. Dry vans are versatile and come in various sizes (28 to 53 feet). They're ideal for non-perishable items like electronics, textiles, and consumer goods. These trailers are essential in logistics, ensuring secure and efficient long-distance transportation of goods.</p>
         </p>
    `;
    dryVanText.innerHTML = newContent;
    dryVanText.getElementsByTagName('h6')[0].style.opacity = '0'
    dryVanText.getElementsByTagName('p')[0].style.opacity = '0'
    dryVanText.getElementsByTagName('h6')[0].style.animation = 
    'slideIn 2s forwards';
    dryVanText.getElementsByTagName('p')[0].style.animation = 
    'slideIn 2s forwards';
    dryVanText.getElementsByTagName('p')[0].style.animationDelay = 
    '0.4s';
   
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const FlatBedButton = document.querySelector("#Flat-Bed"); 
    const FlatBedText= document.querySelector(".info-1")
    FlatBedButton.addEventListener("click", function() {
        const newContent = 
        ` <object data="Images/dispatching-services.svg" type="image/svg+xml"></object>
        <h6>Flat Bed</h6>
         <p>A flatbed trailer is an open transport platform without sides or a roof, designed for hauling oversized or heavy cargo like machinery and construction materials. Its simple design allows easy loading and securing of irregularly shaped items, making it essential for industries needing to transport bulkier goods.
        </p>
    `;
    FlatBedText.innerHTML = newContent;
    FlatBedText.getElementsByTagName('h6')[0].style.opacity = '0'
    FlatBedText.getElementsByTagName('p')[0].style.opacity = '0'
    FlatBedText.getElementsByTagName('h6')[0].style.animation = 
    'slideIn 2s forwards';
    FlatBedText.getElementsByTagName('p')[0].style.animation = 
    'slideIn 2s forwards';
    FlatBedText.getElementsByTagName('p')[0].style.animationDelay = 
    '0.4s';
      
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const ConestogaButton = document.querySelector("#Conestoga"); 
    const ConestogaText= document.querySelector(".info-1")
   ConestogaButton.addEventListener("click", function() {
        const newContent = 
        ` <object data="Images/dispatching-services.svg" type="image/svg+xml"></object>
        <h6>Conestoga</h6>
         <p>A Conestoga trailer merges the advantages of a flatbed with the protection of an enclosed trailer. Its sliding tarp system shields cargo from weather while allowing flexible loading and unloading, making it suitable for weather-sensitive goods.
     </p>
    `;
    ConestogaText.innerHTML = newContent;
    ConestogaText.getElementsByTagName('h6')[0].style.opacity = '0'
    ConestogaText.getElementsByTagName('p')[0].style.opacity = '0'
    ConestogaText.getElementsByTagName('h6')[0].style.animation = 
    'slideIn 2s forwards';
    ConestogaText.getElementsByTagName('p')[0].style.animation = 
    'slideIn 2s forwards';
    ConestogaText.getElementsByTagName('p')[0].style.animationDelay = 
    '0.4s';
    
    });
});

