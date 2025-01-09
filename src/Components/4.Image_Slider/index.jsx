import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function Slider_Image({ url, limit = 5, page = 1 }) {
    const [Images, SetImages] = useState([]);
    const [SlideImages, SetSlideImages] = useState(0);
    const [ErrorMessage, SetErrorMessage] = useState(null);
    const [LoadingState, SetLoadingState] = useState(false);

    // Fetch images from the API
    async function fetchImages(geturl) {
        try {
            SetLoadingState(true);
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                SetImages(data);
                SetLoadingState(false);
            }
        } catch (e) {
            SetErrorMessage(e.message);
            SetLoadingState(false);
        }
    }

    // Navigate to the previous image
    function Previos_Image_Handler() {
        SetSlideImages(SlideImages === 0 ? Images.length - 1 : SlideImages - 1);
    }

    // Navigate to the next image
    function Next_Image_Handler() {
        SetSlideImages(SlideImages === Images.length - 1 ? 0 : SlideImages + 1);
    }

    // Fetch images when the component mounts or the `url` changes
    useEffect(() => {
        if (url) {
            fetchImages(url);
        }
    }, [url]);

    if (LoadingState) return <div>Loading Images...</div>;
    if (ErrorMessage) return <div>Error: {ErrorMessage}</div>;

    return (
        <div className="slider-container">
            <BsArrowLeftCircleFill onClick={Previos_Image_Handler} className="arrow arrow-left" />
            {Images && Images.length > 0 && (
                <img
                    className="current-image"
                    alt={`Image-${SlideImages}`}
                    src={Images[SlideImages]?.download_url}
                />
            )}
            <BsArrowRightCircleFill onClick={Next_Image_Handler} className="arrow arrow-right" />

            <div className="circle-indicators">
                {Images.map((_, index) => (
                    <button
                        key={index}
                        className={SlideImages === index ? "indicator active" : "indicator"}
                        onClick={() => SetSlideImages(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}


/* this code for only Fetching a Images from a Api   


import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"


export default function Slider_Image({ url, limit = 5, page = 1 }) {

    const [Images, SetImages] = useState([])
    const [SlideImages, SetSlideImages] = useState(0)
    const [ErrorMessage, SetErrorMessage] = useState(null)
    const [LoadingState, SetLoadingState] = useState(false)

    async function fetchImages(geturl) {
        try {
            const response = await fetch(`${geturl}?page=1&limit=${limit}`)
            const data = await response.json()
            if (data) {
                SetImages(data)
                SetLoadingState(false)
            }
        } catch (e) { SetErrorMessage(e.message) }
    }

    useEffect(() => {
        if (url !== ' ') { fetchImages(url) }
    }, [url])

    console.log(Images)

    if (LoadingState) { return <div>Image is Loading</div> }
    if (ErrorMessage != null) { return <> Error Occured : {ErrorMessage}</> }
    console.log



    return (
        <div>
            <div>
                <BsArrowLeftCircleFill />
                {Images && Images.length ?
                    Images.map(ImagesItem =>
                    (<img
                        key={ImagesItem.id}
                        alt={ImagesItem.download_url}
                        src={ImagesItem.download_url} />))
                    : null}
                <BsArrowRightCircleFill />
            </div>
        </div>


    )
}  */



/*  this is a code for a fetching images and add slider
import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import './style.css'

export default function Slider_Image({ url, limit = 5, page = 1 }) {

const [Images, SetImages] = useState([])
const [SlideImages, SetSlideImages] = useState(0)
const [ErrorMessage, SetErrorMessage] = useState(null)
const [LoadingState, SetLoadingState] = useState(false)

async function fetchImages(geturl) {
    try {
        const response = await fetch(`${geturl}?page=1&limit=${limit}`)
        const data = await response.json()
        if (data) {
            SetImages(data)
            SetLoadingState(false)
        }
    } catch (e) { SetErrorMessage(e.message) }
}

useEffect(() => {
    if (url !== ' ') { fetchImages(url) }
}, [url])

console.log(Images)

if (LoadingState) { return <div>Image is Loading</div> }
if (ErrorMessage != null) { return <> Error Occured : {ErrorMessage}</> }
console.log



return (
    <div>
        <div>
            <BsArrowLeftCircleFill className="arrow arrow-left" />
            {Images && Images.length ?
                Images.map(ImagesItem =>
                (<img className="current-images"
                    key={ImagesItem.id}
                    alt={ImagesItem.download_url}
                    src={ImagesItem.download_url} />))
                : null}
            <BsArrowRightCircleFill className="arrow arrow-right" />

            <span className="circle-indicators">
                {
                    Images && Images.length ?
                        Images.map((_, index) =>
                            <button key={index} className="current-index"></button>)
                        : null
                }
            </span>

        </div>
    </div>


)
}
*/