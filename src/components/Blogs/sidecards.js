import Wallimg from '../../assets/images/Blogs/img2.png';
import Thumbnail from '../../assets/images/Blogs/b-2.png'

function Sidecards() { // Destructure sidedata from props with default value as empty array
  return (
    <>
          <div className='cursor-pointer mb-4  bg-slate-100 rounded-lg'>
            <div className="rounded-t flex justify-center flex-wrap overflow-hidden">
              <img src={Thumbnail} alt="" />
            </div>
            <div className="content py-2">
              <div className="flex flex-col justify-start">
                <h3 className="text-sm font-bold">The UK Tax System</h3>
                <h6 className="text-sm">Aug 9</h6>
              </div>
            </div>
          </div>
    </>
  );
}

export default Sidecards;
