import {useState} from 'react'
import Modal from './Modal'
import shoe2 from '/image-product-1-thumbnail.jpg'
import shoe3 from '/image-product-2-thumbnail.jpg'
import shoe4 from '/image-product-3-thumbnail.jpg'
import shoe5 from '/image-product-4-thumbnail.jpg'

export default function Lightbox() {

const lightboxImages = [shoe2, shoe3, shoe4, shoe5]

const [clickedImg, setClickedImg] = useState(null)
const [currentIndex, setCurrentIndex] = useState(null)

const handleClick = (image, index) => {
    setCurrentIndex(index)
    setClickedImg(image)
}

// const handleChangeRight = () => {
//     const totalLength = lightboxImages.length
//     if (currentIndex + 1 > totalLength) {
//         setCurrentIndex(0)
//         const newImage = lightboxImages[0]
//         setClickedImg(newImage)
//         return
//     }
//     const newIndex = currentIndex + 1
//     const newImage = lightboxImages.filter((image) => {
//         return lightboxImages.indexOf(image) === newIndex
//     })
//     const currentImg = newImage[0] 
//     setClickedImg(currentImg)
//     setCurrentIndex(newIndex)
// }

// const handleChangeLeft = () => {
//     const totalLength = lightboxImages.length
//     if (currentIndex === 0) {
//         setCurrentIndex(totalLength - 1)
//         const newImage = lightboxImages[totalLength - 1]
//         setClickedImg(newImage)
//     }
//     const newIndex = currentIndex - 1
//     const newImage = lightboxImages.filter((image) => {
//         return lightboxImages.indexOf(image) === newIndex
//     })
//     const currentImg = newImage[0] 
//     setClickedImg(currentImg)
//     setCurrentIndex(newIndex)
// }

    return (
    <div className='flex justify-center space-x-5 items-center mb-10'>
        { lightboxImages.map((image, index) => (
            <div key={index}>
                <img className='rounded-xl' src={image} onClick={() => handleClick(image, index)} />
            </div>
        ))}
        { clickedImg && (
          <Modal 
            clickedImg={clickedImg} 
            setClickedImg={setClickedImg}
            // handleChangeRight={handleChangeRight} 
            // handleChangeLeft={handleChangeLeft}
          />
        )}
    </div>
  )
}