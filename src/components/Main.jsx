
export default function Main() {
    return (
        <main>
            <div>
                <img className='relative' src="/image-product-1.jpg" alt="Bottom of one shoe and top of the other" />
                <svg className='absolute left-5 top-60 bg-offWhite rounded-full' width="35" height="35" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                <svg className='absolute right-5 top-60 bg-offWhite rounded-full' width="35" height="35" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
            </div>
            <section className='flex flex-col px-6 pt-5 text-veryDarkBlue'>
                <h3 className='text-newOrange text-xs'>SNEAKER COMPANY</h3>
                <h2 className='text-2xl font-bold pt-2'>Fall Limited Edition Sneakers</h2>
                <p className='text-sm pt-3 text-darkGrayishBlue'>These low-profile sneakers are your perfect causal wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className='inline-block pt-5 rounded'>
                    <span className='font-bold text-xl pr-2'>$125.00</span>
                    <span className='text-newOrange bg-paleOrange text-sm py-1 px-2'>50%</span>
                    <span className="line-through text-grayishBlue pl-28">$250.00</span>
                 </div>
                 <button className="flex justify-center items-center bg-grayishBlue p-5 mt-5 rounded-lg shadow-md">
                    <svg className='ml-5' width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a"/>
                    </svg>
                    <svg className='ml-auto mr-5' width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b"/>
                    </svg>
                  </button>
                  <button className="bg-newOrange text-offWhite mt-4 mb-5 p-3 rounded-lg flex justify-center items-center hover:cursor-pointer hover:bg-paleOrange">
                    <svg className='stroke-offWhite' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>
                    <span className='pl-3'>Add to Cart</span>
                  </button>
             </section>
        </main>
    )
}