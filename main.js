const app = new Vue({
    el : "#root",
    data: {
        counter:0,
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
            if(app.counter==0){
                app.counter=4;
            }
            else{
                app.counter--;
            }    
            console.log(app.counter);
            if(app.counter == 0){
                var prev = 4;
            }
            else{
                var prev = app.counter - 1;
            }
            if(app.counter == 4){
                var next = 0;
            }
            else{
                var next = app.counter - 1;
            }
            var active = document.getElementsByClassName("selector");
            active[app.counter].id = "active";
            active[prev].id = "no-active";
            active[next].id = "no-active"            
        },
        down(){
            console.log("down");
            if(app.counter==4){
                app.counter=0;
            }
            else{
                app.counter++;
            }    
            console.log(app.counter);
            if(app.counter == 0){
                var prev = 4;
            }
            else{
                var prev = app.counter - 1;
            }
            if(app.counter == 4){
                var next = 0;
            }
            else{
                var next = app.counter - 1;
            }
            var active = document.getElementsByClassName("selector");
            active[app.counter].id = "active";
            active[prev].id = "no-active";
            active[next].id = "no-active"
        }
    }
       
})


var scorri = setInterval(intervallo, 3000);


function intervallo(){
    if(app.counter==4){
        app.counter=0;
    }
    else{
        app.counter++;
    }    
    console.log(app.counter);
    if(app.counter == 0){
        var prev = 4;
    }
    else{
        var prev = app.counter - 1;
    }
    var active = document.getElementsByClassName("selector");
    active[app.counter].id = "active";
    active[prev].id = "no-active"
}


var active = document.getElementsByClassName("selector");
active[0].id = "active"



