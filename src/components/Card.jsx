import chair from '../assets/chair1.png'

const Card = ({data}) => {
    return (
        <div className='p-3  border rounded-xl group hover:shadow-lg'>
            <div className='bg-base-200 flex justify-center items-center'>
            <img src={chair} alt="" className='object-cover group-hover:scale-110' />
            </div>
            <h2 className='text-xl font-medium mt-4 mb-2'>{data?.name}</h2>
        
            <div className=' flex  gap-4'>
                <h2 className=' text-lg font-bold'>€{data?.current_price}</h2>
                <h2 className=' text-lg font-bold line-through text-slate-400'>€{data?.prev_price}</h2>
                <h2 className=' text-lg font-bold text-red-600'>{data?.discount}
                    % OFF
                </h2>
            </div>
            <p className='text-slate-700  mb-3 line-clamp-2'>{data?.description}</p>
            <button className='btn w-full bg-black  hover:bg-slate-800 text-white'>Add to cart </button>

        </div>
    );
};

export default Card;