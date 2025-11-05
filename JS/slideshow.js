const images = [
    "../Images/Selfie.png",
    "../Images/Alien.png",
    "../Images/Butterfly.png",
    "../Images/Caveman.png",
    "../Images/Chestburster.png",
    "../Images/Clown.png",
    "../Images/Cowboy.png",
    "../Images/Dehydrated.png",
    "../Images/Diver.png",
    "../Images/Doom.png",
    "../Images/GraspIt.png",
    "../Images/Hawaiian.png",
    "../Images/Headless.png",
    "../Images/Hollow.png",
    "../Images/King.png",
    "../Images/Lethal.png",
    "../Images/Mexican.png",
    "../Images/Missing.png",
    "../Images/MonkeyBall.png",
    "../Images/Pikmin.png",
    "../Images/Pin.png",
    "../Images/Pirate.png",
    "../Images/Robber.png",
    "../Images/Santa.png",
    "../Images/Scientist.png",
    "../Images/Skeleton.png",
    "../Images/Teletubby.png",
    "../Images/Terraria.png",
    "../Images/Viking.png",
    "../Images/Wizard.png",
    "../Images/Zombie.png"
];

let index = 0;
const slideshowImage = document.getElementById("slideshowImage");

function updateSlideshow() {
    slideshowImage.src = images[index];
    index = (index + 1) % images.length;
}

setInterval(updateSlideshow, 1500);

updateSlideshow();
