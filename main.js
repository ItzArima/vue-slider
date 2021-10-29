let counter =0;

const slides = [
    {
        title:"Svezia",
        image:"./img/01.jpg",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },
    {
        title:"Svizzera",
        image:"./img/02.jpg",
        text:"Lorem ipsum",
    },
    {
        title:"Gran Bretagna",
        image:"./img/03.jpg",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
        title:"Germania",
        image:"./img/04.jpg",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    },
    {
        title:"Paradise",
        image:"./img/05.jpg",
        text:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    },
]

const app = new Vue({
    el : "#root",
    data: {
        counter : 0,
        slides: [
            {
                title:"Svezia",
                image:"./img/01.jpg",
                text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                title:"Svizzera",
                image:"./img/02.jpg",
                text:"Lorem ipsum",
            },
            {
                title:"Gran Bretagna",
                image:"./img/03.jpg",
                text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            },
            {
                title:"Germania",
                image:"./img/04.jpg",
                text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
            },
            {
                title:"Paradise",
                image:"./img/05.jpg",
                text:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
            },
        ]
    },
    methods: {
        up(){
            console.log("up");
            if(counter==0){
                counter=4;
            }
            else{
                counter--;
            }    
            console.log(counter);
            document.getElementById("selected-img").innerHTML = `
                <img class="selected-img" src="${slides[counter].image}" alt="" srcset="">
                <div class="image-text">
                    <h2 id="selected-title">${slides[counter].title}</h2>
                    <p id="selecterd text">${slides[counter].text}</p>
                </div> 
            `
        },
        down(){
            console.log("down");
            if(counter==4){
                counter=0;
            }
            else{
                counter++;
            }    
            console.log(counter);
            document.getElementById("selected-img").innerHTML = `
                <img class="selected-img" src="${slides[counter].image}" alt="" srcset="">
                <div class="image-text">
                    <h2 id="selected-title">${slides[counter].title}</h2>
                    <p id="selecterd text">${slides[counter].text}</p>
                </div> 
            `
        }
    }
       
})

