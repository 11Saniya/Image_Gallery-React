import React from 'react';
import './Imagegallery.css'

let imgGallery = [
    {
        title: 'Dubai_image',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCgL07TVn20W2-Z_FZ15PT_9-lTUs_JwphA&usqp=CAU',
        href: "https://www.thrillophilia.com/places-to-visit-in-dubai",
    },
    {
        title: "Paris_image",
        src: "https://xdaysiny.com/wp-content/uploads/2015/08/best-places-in-paris-for-panoramic-views-post-cover.jpg",
        href: "https://traveltriangle.com/blog/places-to-visit-in-paris/",
    },
    {
        title: "India_image",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsSJ5mPLJXolAXGzqwf6Ai51rl38nrOs59g&usqp=CAU",
        href: "https://www.myholidays.com/blog/stunning-places-to-visit-in-india/",
    },
    {
        title: "Mexico_image",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujf8qkyR1DOBogcxApH7GYIOqw8b6SFrOfA&usqp=CAU",
        href: "https://www.planetware.com/tourist-attractions/mexico-mex.htm",
    },
    {
        title: "Indonesia_image",
        src: "https://travelperi.com/wp-content/uploads/2021/07/Indonesia-Places-To-Vist.jpg",
        href: "https://traveltriangle.com/blog/beautiful-places-in-indonesia/",
    },
];
function ImgGallery() {
    return (
        <center>
            <h1>Country Images</h1>
            <hr />
            <div id="style">
                {
                    imgGallery.map(gallery => (
                        <a href={gallery.href} title={gallery.title}>
                            <img src={gallery.src} alt='images' />
                        </a>
                    ))
                }
            </div>
        </center>
    );
}
export default ImgGallery