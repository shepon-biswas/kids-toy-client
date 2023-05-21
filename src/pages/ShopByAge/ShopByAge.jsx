import React from 'react';

const ShopByAge = () => {
    return (
        <>
        <div className='w-10/12 mx-auto my-14'>
        <div>
          <h2 className="text-2xl font-bold text-center uppercase text-[#ff0099] ">
            shop by age
          </h2>
          <p className="text-center mb-14 text-gray-700 text-md font-semibold">
            Choose a perfect toy for your adorable child
          </p>
        </div>
        {/* Images Section */}
        <div className='grid md:grid-cols-5 gap-4 cursor-pointer'>
            <div>
                <img className='rounded-full' src="https://i.ibb.co/M56Qzsv/baby5.png" alt="baby image" />
                <h4 className='text-lg text-[#ff00bb] text-center font-bold mt-2'>For Baby</h4>
            </div>
            <div>
                <img className='rounded-full' src="https://i.ibb.co/QFBhzGH/baby4.png" alt="baby image" />
                <h4 className='text-lg text-[#ff00bb] text-center font-bold mt-2'>For 1-2years</h4>
            </div>
            <div>
                <img className='rounded-full' src="https://i.ibb.co/9gCdSWQ/baby3.png" alt="baby image" />
                <h4 className='text-lg text-[#ff00bb] text-center font-bold mt-2'>For 2-4years</h4>
            </div>
            <div>
                <img className='rounded-full' src="https://i.ibb.co/fCJMCWL/baby2.png" alt="baby image" />
                <h4 className='text-lg text-[#ff00bb] text-center font-bold mt-2'>For 5-7years</h4>
            </div>
            <div>
                <img className='rounded-full' src="https://i.ibb.co/bg5pwfh/baby.png" alt="baby image" />
                <h4 className='text-lg text-[#ff00bb] text-center font-bold mt-2'>For 8-11years+</h4>
            </div>

        </div>
        </div>
            
        </>
    );
};

export default ShopByAge;