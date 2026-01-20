import { Link } from 'react-router-dom';
import Sparkle from '../../component/Sparkle';
import BlobTopLeft from '../../component/BlobTopLeft';
import BlobBottomRight from '../../component/BlobBottomRight';




const LandingPage = () => {
  return (
 
       <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 relative overflow-hidden">
      
      
      <BlobTopLeft 
      className="absolute"
        style={{
          top: '-10px',
          left: '-10px',
          width: '400px',
          height: 'auto',
          zIndex: 0,
          
        }}
      />
      

      <BlobBottomRight 
       className="absolute pointer-events-none"
        style={{
          bottom: '-100px',
          right: '-100px',
          width: '650px',
          height: 'auto',
          opacity: 1,
          zIndex: 0
        }}
      />
      

     <Sparkle
      className="absolute top-[250px] left-[1175px] hidden lg:block"
        size={50}
        style={{ opacity: 1 }}
      />

        <Sparkle
      className="absolute top-[450px] left-[495px] hidden lg:block"
        size={50}
        style={{ opacity: 1 }}
      />
     
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#13003D]">
              Lets get you started
            </h1>
            <p className="text-lg md:text-xl text-[#13003D] max-w-xl mx-auto leading-relaxed">
              Track every expenses with precision and see where your money truly goes. Stay informed, stay organized, stay in control.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <Link to="/signup">
            <button 
              className="w-full max-w-md mx-auto block bg-[#13003D] hover:bg-purple-800 text-white font-medium py-4 px-8 rounded-full transition-colors duration-200 shadow-lg"
            >
              Create an account
            </button>
            </Link>
          

            
             <Link to="/signin">
            <button 
              className="w-full max-w-md mx-auto block bg-white hover:bg-gray-50 text-gray-900 font-medium py-4 px-8 rounded-full transition-colors duration-200 shadow-md"
            >
              Sign in
            </button>
            </Link>

            
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage