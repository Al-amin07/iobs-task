

const LoadingCard = () => {
    return (
        <div className='p-3 border rounded-xl'>
        {/* Image Skeleton */}
        <div className='bg-base-200 flex justify-center items-center h-40 animate-pulse'>
          <div className='w-full h-full bg-slate-300' />
        </div>
      
        {/* Title Skeleton */}
        <div className='mt-4 mb-2'>
          <div className='h-6 bg-slate-300 rounded w-3/4 animate-pulse' />
        </div>
      
        {/* Price and Discount Skeleton */}
        <div className='flex gap-4'>
          <div className='h-5 bg-slate-300 rounded w-1/4 animate-pulse' />
          <div className='h-5 bg-slate-300 rounded w-1/4 animate-pulse' />
          <div className='h-5 bg-slate-300 rounded w-1/4 animate-pulse' />
        </div>
      
     
      
        {/* Button Skeleton */}
        <div className='mt-3'>
          <div className='h-10 bg-slate-300 rounded w-full animate-pulse' />
        </div>
      </div>
      
    );
};

export default LoadingCard;