import Lightbox from './Lightbox'

export default function Main() {
  return (
    <main className="md:grid md:grid-cols-2 md:items-center md:pt-10 lg:py-12 xl:gap-10 xl:mx-auto xl:pt-20 xl:max-w-5xl">
      <div className="relative sm:max-w-full sm:mx-auto md:p-4 lg:p-6">
        <img
          className="relative md:rounded-xl"
          src="/image-product-1.jpg"
          alt="Bottom of one shoe and top of the other"
        />
        <div className="flex items-center absolute inset-y-0 left-0 pl-4">
          <button className="flex justify-center items-center bg-offWhite rounded-full h-8 w-8 md:hidden">
            <svg
              className="-ml-1"
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center absolute inset-y-0 right-0 pr-4">
          <button className="flex justify-center items-center bg-offWhite rounded-full h-8 w-8 md:hidden">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <section className="flex flex-col px-6 pt-5 text-veryDarkBlue sm:max-w-xl sm:mx-auto sm:text-lg md:p-6 lg:p-11">
        <h3 className="text-newOrange text-xs md:text-md">SNEAKER COMPANY</h3>
        <h2 className="text-2xl font-bold pt-2 md:text-4xl md:py-4">
          Fall Limited Edition Sneakers
        </h2>
        <p className="text-sm pt-3 text-darkGrayishBlue leading-loose lg:text-md">
          These low-profile sneakers are your perfect causal wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="inline-block pt-5 rounded sm:flex">
          <span className="font-bold text-2xl pr-4">$125.00</span>
          <span className="text-newOrange bg-paleOrange text-sm py-1 px-2 mr-auto xl:">
            50%
          </span>
          <span className="line-through text-grayishBlue sm:ml-auto md:pl-0 md:py-2 xl:mr-0">
            $250.00
          </span>
        </div>
        <div className='md:flex md:flex-row md:space-x-3 md:justify-between md:items-stretch md:mt-5 xl:max-w-md'>
          <div className="flex justify-between items-center bg-grayishBlue p-5 mt-5 rounded-lg shadow-md md:mt-0 md:p-3">
            <button className="px-2">
              <svg
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                  />
                </defs>
                <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
              </svg>
            </button>
              <span className='inline-block px-6'>0</span>
            <button className="px-2">
              <svg
              className=""
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                  />
                </defs>
                <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
              </svg>
            </button>
          </div>
        <div className='flex grow'>
          <button className="shadow-newOrange/50 shadow-xl bg-newOrange text-offWhite mt-4 mb-5 p-5 rounded-lg flex grow justify-center items-center hover:cursor-pointer hover:bg-paleOrange hover:text-veryDarkBlue md:mb-0 md:mt-0 md:h-full md:flex-1">
            <svg
            className="fill-current stroke-transparent"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
              />
            </svg>
            <span className="pl-3">Add to Cart</span>
          </button>
        </div>
       </div>
      </section>
    </main>
  );
}
