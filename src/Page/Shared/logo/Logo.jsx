import logos from '../../../assets/Commercial-Property-Management-Icon-1-removebg-preview.png'

const Logo = () => {
    return (
        <div className='flex gap-2 items-center'>
            <img className='h-8 md:h-12' src={logos} alt="" />
            <div>
                <p className='text-blue-400'>BUILDING MANAGEMENT</p>
            </div>
        </div>
    );
};

export default Logo;