image_array = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg'
]

function get_random_image(){
// get a random index
    random_index = Math.floor(Math.random() * image_array.length)
//  get an random image at the random_index
    selected_image= image_array[random_index]

// display the iamge
    document.getElementById('foodrandom').src = `./Pictures/foodimage/${selected_image}`
}