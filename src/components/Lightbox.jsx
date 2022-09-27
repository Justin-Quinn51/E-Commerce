import shoe2 from '/image-product-1-thumbnail.jpg'
import shoe3 from '/image-product-2-thumbnail.jpg'
import shoe4 from '/image-product-3-thumbnail.jpg'
import shoe5 from '/image-product-4-thumbnail.jpg'

export default function Lightbox() {

const lightboxImages = [shoe2, shoe3, shoe4, shoe5]

const [lightboxDisplay, setLightboxDisplay] = useState(false)

const [imageToShow, setImageToShow] = useState('')

const showImage = (image) => {
    
    setImageToShow(image)

    setLightboxDisplay(true)
}

    return (
    <div className='flex justify-center space-x-5 items-center mb-10'>
        { lightboxImages.map((image) => <img className='rounded-xl' onClick={() => showImage(image)} src={image} /> ) }
        { lightboxDisplay ? <img src={imageToShow} /> : '' }
    </div>
    )
}