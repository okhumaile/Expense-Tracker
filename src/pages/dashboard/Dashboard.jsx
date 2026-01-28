import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddExpenseModal from '../../component/modals/AddExpenseModal';

export default function Dashboard({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
  const transactions = [
    { id: 1, category: 'Shopping', description: 'Bought some clothes', amount: 10000, date: '12/12/2022' },
    { id: 2, category: 'Shopping', description: 'Bought some clothes', amount: 10000, date: '12/12/2022' },
    { id: 3, category: 'Shopping', description: 'Bought some clothes', amount: 10000, date: '12/12/2022' },
    { id: 4, category: 'Shopping', description: 'Bought some clothes', amount: 10000, date: '12/12/2022' },
    { id: 5, category: 'Shopping', description: 'Bought some clothes', amount: 10000, date: '12/12/2022' },
  ];

  const insights = [
    {
      type: 'success',
      icon: (
     <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" rx="19" fill="#2563EB" fillOpacity="0.2"/>
<path d="M25.9737 10.0312H23.4013C22.29 10.0312 21.625 10.6962 21.625 11.8075V14.38C21.625 15.4912 22.29 16.1562 23.4013 16.1562H25.9737C27.085 16.1562 27.75 15.4912 27.75 14.38V11.8075C27.75 10.6962 27.085 10.0312 25.9737 10.0312ZM26.1663 12.9275C26.0613 13.0325 25.9212 13.085 25.7812 13.085C25.6413 13.085 25.5012 13.0325 25.3962 12.9275L25.2387 12.77V14.73C25.2387 15.0362 24.9937 15.2812 24.6875 15.2812C24.3813 15.2812 24.1363 15.0362 24.1363 14.73V12.77L23.9788 12.9275C23.7688 13.1375 23.4187 13.1375 23.2087 12.9275C22.9987 12.7175 22.9987 12.3675 23.2087 12.1575L24.3025 11.0638C24.3462 11.02 24.4075 10.985 24.4688 10.9587C24.4862 10.95 24.5037 10.95 24.5212 10.9412C24.565 10.9237 24.6087 10.915 24.6612 10.915C24.6787 10.915 24.6963 10.915 24.7138 10.915C24.775 10.915 24.8275 10.9237 24.8887 10.95C24.8975 10.95 24.8975 10.95 24.9062 10.95C24.9675 10.9762 25.02 11.0113 25.0638 11.055C25.0725 11.0638 25.0725 11.0638 25.0813 11.0638L26.175 12.1575C26.385 12.3675 26.385 12.7175 26.1663 12.9275Z" fill="#2563EB"/>
<path d="M10.25 18.5275V22.9025C10.25 24.9062 11.8687 26.525 13.8725 26.525H24.1188C26.1225 26.525 27.75 24.8975 27.75 22.8938V18.5275C27.75 17.9413 27.2775 17.4688 26.6913 17.4688H11.3088C10.7225 17.4687 10.25 17.9413 10.25 18.5275ZM15.5 23.5938H13.75C13.3913 23.5938 13.0938 23.2962 13.0938 22.9375C13.0938 22.5788 13.3913 22.2812 13.75 22.2812H15.5C15.8587 22.2812 16.1562 22.5788 16.1562 22.9375C16.1562 23.2962 15.8587 23.5938 15.5 23.5938ZM21.1875 23.5938H17.6875C17.3288 23.5938 17.0312 23.2962 17.0312 22.9375C17.0312 22.5788 17.3288 22.2812 17.6875 22.2812H21.1875C21.5462 22.2812 21.8438 22.5788 21.8438 22.9375C21.8438 23.2962 21.5462 23.5938 21.1875 23.5938Z" fill="#2563EB"/>
<path d="M20.3125 12.5338V15.0976C20.3125 15.6838 19.84 16.1563 19.2537 16.1563H11.3088C10.7138 16.1563 10.25 15.6663 10.25 15.0801C10.2587 14.0913 10.6525 13.1901 11.3088 12.5338C11.965 11.8776 12.875 11.4751 13.8725 11.4751H19.2537C19.84 11.4751 20.3125 11.9476 20.3125 12.5338Z" fill="#2563EB"/>
</svg>

   ),
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      title: 'You spent ₦ 9000 less than last week',
      subtitle: 'This week mostly save on food and transport'
    },
    {
      type: 'warning',
       icon: (
 <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" rx="19" fill="#ECC94B" fillOpacity="0.2"/>
<path d="M19 10.25C14.17 10.25 10.25 14.17 10.25 19C10.25 23.83 14.17 27.75 19 27.75C23.83 27.75 27.75 23.83 27.75 19C27.75 14.17 23.83 10.25 19 10.25ZM16.1387 15.2025C16.8475 15.2025 17.4338 15.78 17.4338 16.4975C17.4338 17.2063 16.8562 17.7925 16.1387 17.7925C15.43 17.7925 14.8438 17.215 14.8438 16.4975C14.8438 15.78 15.4212 15.2025 16.1387 15.2025ZM16.2438 22.325C16.1125 22.4563 15.9462 22.5175 15.78 22.5175C15.6137 22.5175 15.4475 22.4563 15.3162 22.325C15.0625 22.0712 15.0625 21.6512 15.3162 21.3975L21.0475 15.6662C21.3013 15.4125 21.7212 15.4125 21.975 15.6662C22.2287 15.92 22.2287 16.34 21.975 16.5938L16.2438 22.325ZM21.8612 22.7975C21.1525 22.7975 20.5662 22.22 20.5662 21.5025C20.5662 20.7937 21.1438 20.2075 21.8612 20.2075C22.57 20.2075 23.1562 20.785 23.1562 21.5025C23.1562 22.22 22.5788 22.7975 21.8612 22.7975Z" fill="#ECBD13"/>
</svg>




   ),
      bgColor: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      title: 'Food took 45% of your expenses this month',
      subtitle: '₦ 28,500 spent mostly on dining out'
    },
    {
      type: 'danger',
      icon: (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" rx="19" fill="#F56565" fillOpacity="0.2"/>
<path d="M27.5402 22.43L21.9402 12.35C21.1877 10.9938 20.1464 10.25 19.0002 10.25C17.8539 10.25 16.8127 10.9938 16.0602 12.35L10.4602 22.43C9.75141 23.7162 9.67266 24.95 10.2414 25.9212C10.8102 26.8925 11.9302 27.4262 13.4002 27.4262H24.6002C26.0702 27.4262 27.1902 26.8925 27.7589 25.9212C28.3277 24.95 28.2489 23.7075 27.5402 22.43ZM18.3439 16.375C18.3439 16.0162 18.6414 15.7187 19.0002 15.7187C19.3589 15.7187 19.6564 16.0162 19.6564 16.375V20.75C19.6564 21.1087 19.3589 21.4062 19.0002 21.4062C18.6414 21.4062 18.3439 21.1087 18.3439 20.75V16.375ZM19.6214 23.9962C19.5777 24.0312 19.5339 24.0662 19.4902 24.1012C19.4377 24.1362 19.3852 24.1625 19.3327 24.18C19.2802 24.2062 19.2277 24.2237 19.1664 24.2325C19.1139 24.2412 19.0527 24.25 19.0002 24.25C18.9477 24.25 18.8864 24.2412 18.8252 24.2325C18.7727 24.2237 18.7202 24.2062 18.6677 24.18C18.6152 24.1625 18.5627 24.1362 18.5102 24.1012C18.4664 24.0662 18.4227 24.0312 18.3789 23.9962C18.2214 23.83 18.1252 23.6025 18.1252 23.375C18.1252 23.1475 18.2214 22.92 18.3789 22.7537C18.4227 22.7188 18.4664 22.6837 18.5102 22.6487C18.5627 22.6137 18.6152 22.5875 18.6677 22.57C18.7202 22.5437 18.7727 22.5262 18.8252 22.5175C18.9389 22.4913 19.0614 22.4913 19.1664 22.5175C19.2277 22.5262 19.2802 22.5437 19.3327 22.57C19.3852 22.5875 19.4377 22.6137 19.4902 22.6487C19.5339 22.6837 19.5777 22.7188 19.6214 22.7537C19.7789 22.92 19.8752 23.1475 19.8752 23.375C19.8752 23.6025 19.7789 23.83 19.6214 23.9962Z" fill="#FB0404"/>
</svg>


   ),
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      title: "You've spent 85% of your estimated income",
      subtitle: 'Try limiting food and shopping next week'
    },
    {
      type: 'positive',
      icon: (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" rx="19" fill="#48BB78" fillOpacity="0.2"/>
<path d="M18.9746 10.25C14.1446 10.25 10.2246 14.17 10.2246 19C10.2246 23.83 14.1446 27.75 18.9746 27.75C23.8046 27.75 27.7246 23.83 27.7246 19C27.7246 14.17 23.8134 10.25 18.9746 10.25ZM23.7259 22.8763C22.6496 24.425 20.8821 25.3438 19.0009 25.3438C17.1196 25.3438 15.3521 24.425 14.2759 22.8763C14.0659 22.5788 14.1446 22.1675 14.4421 21.9663C14.7396 21.7563 15.1509 21.835 15.3521 22.1325C16.1834 23.3225 17.5484 24.04 19.0009 24.04C20.4534 24.04 21.8184 23.3313 22.6496 22.1325C22.8596 21.835 23.2621 21.765 23.5596 21.9663C23.8659 22.1675 23.9359 22.5788 23.7259 22.8763Z" fill="#48BB78"/>
</svg>


   ),
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      title: 'You saved ₦ 15,000 this month',
      subtitle: "Great job! that's 12% more than last month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 lg:w-237 bg-white border-r border-gray-200 p-4 sm:p-6
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        <div className="flex items-center gap-2 mb-8 sm:mb-12">
          <h1 className="text-lg sm:text-xl font-bold">
             <span className="text-[#2525B1]">Expense</span>
             <span className="text-[#4F02FD]"> tracker</span>
          </h1>
          <Link to='/'>
           <button className="p-2 hover:bg-gray-100 rounded-lg">
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#718096" strokeOpacity="0.1"/>
          <path d="M19.627 17.7468L21.3336 16.0402L19.627 14.3335" stroke="#485465" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M14.5068 16.04H21.2868" stroke="#485465" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M15.8402 21.3332C12.8935 21.3332 10.5068 19.3332 10.5068 15.9998C10.5068 12.6665 12.8935 10.6665 15.8402 10.6665" stroke="#485465" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
        </button>
        </Link>
        </div>

   
        <nav className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 text-[#6D2FF9] rounded-lg font-medium text-sm sm:text-base">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="3" y="3" width="6" height="6" rx="1"/>
              <rect x="11" y="3" width="6" height="6" rx="1"/>
              <rect x="3" y="11" width="6" height="6" rx="1"/>
              <rect x="11" y="11" width="6" height="6" rx="1"/>
            </svg>
            Home
          </button>

          <Link to='/analytics'>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm sm:text-base">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 18.3335H17.5" stroke="#92A0BE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.66665 6.9834H3.33333C2.875 6.9834 2.5 7.3584 2.5 7.81673V15.0001C2.5 15.4584 2.875 15.8334 3.33333 15.8334H4.66665C5.12498 15.8334 5.49998 15.4584 5.49998 15.0001V7.81673C5.49998 7.3584 5.12498 6.9834 4.66665 6.9834Z" stroke="#92A0BE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.6666 4.32471H9.33333C8.875 4.32471 8.5 4.69971 8.5 5.15804V14.9997C8.5 15.458 8.875 15.833 9.33333 15.833H10.6666C11.125 15.833 11.5 15.458 11.5 14.9997V5.15804C11.5 4.69971 11.125 4.32471 10.6666 4.32471Z" stroke="#92A0BE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.6666 1.6665H15.3333C14.875 1.6665 14.5 2.0415 14.5 2.49984V14.9998C14.5 15.4582 14.875 15.8332 15.3333 15.8332H16.6666C17.125 15.8332 17.5 15.4582 17.5 14.9998V2.49984C17.5 2.0415 17.125 1.6665 16.6666 1.6665Z" stroke="#92A0BE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            Analytics
          </button>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
             <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9">
             <rect width="36" height="36" rx="18" fill="#718096" fillOpacity="0.08"/>
             <path fillRule="evenodd" clipRule="evenodd" d="M17.9993 22.8729C22.6987 22.8729 24.8727 22.27 25.0827 19.8503C25.0827 17.4322 23.567 17.5877 23.567 14.6208C23.567 12.3033 21.3704 9.6665 17.9993 9.6665C14.6283 9.6665 12.4317 12.3033 12.4317 14.6208C12.4317 17.5877 10.916 17.4322 10.916 19.8503C11.1268 22.2792 13.3008 22.8729 17.9993 22.8729Z" stroke="#2B2B2B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M19.9904 25.3809C18.8536 26.6431 17.0803 26.6581 15.9326 25.3809" stroke="#2B2B2B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
            </button>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">
               <img src="/profile.png" alt="profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold">Sunny Ade</div>
                <div className="text-xs text-gray-500">sunnyade@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 lg:p-8">
         
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Dashboard overview</h2>
              <p className="text-gray-500 text-xs sm:text-sm">Here's a quick look at your spending and income.</p>
            </div>
           <button 
        onClick={() => setIsAddExpenseModalOpen(true)}
        className="flex items-center justify-center gap-2 bg-[#6D2FF9] hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base whitespace-nowrap"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path d="M10 5v10M5 10h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Add Expense
      </button>


     
      <AddExpenseModal 
        isOpen={isAddExpenseModalOpen}
        onClose={() => setIsAddExpenseModalOpen(false)}
      />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Estimated Income */}
            <div className="bg-[#ECC94B12] p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-200 rounded-xl flex items-center justify-center flex-shrink-0">
                 <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
<path d="M0 16.56V19.5C0 27 3 30 10.5 30H19.5C27 30 30 27 30 19.5V10.5C30 3 27 0 19.5 0H10.5C3 0 0 3 0 10.5" fill="#ECC94B" fillOpacity="0.2"/>
<path d="M15.453 7.74937L13.5451 12.1906H11.6372C11.3205 12.1906 11.0118 12.2144 10.7109 12.2777L11.5026 10.3777L11.5343 10.3065L11.5818 10.1798C11.6055 10.1244 11.6214 10.0769 11.6451 10.0373C12.5634 7.9077 13.5926 7.2427 15.453 7.74937Z" fill="#ECBD13"/>
<path d="M20.8286 12.4047L20.8128 12.3968C20.3378 12.2622 19.8549 12.191 19.364 12.191H14.4082L16.1895 8.05053L16.2132 7.99512C16.324 8.0347 16.4428 8.09012 16.5615 8.1297L18.3111 8.86595C19.2849 9.2697 19.9657 9.68928 20.3853 10.196C20.4565 10.291 20.5199 10.378 20.5832 10.481C20.6545 10.5918 20.7099 10.7026 20.7415 10.8214C20.7732 10.8926 20.797 10.956 20.8128 11.0272C20.9315 11.431 20.9395 11.8901 20.8286 12.4047Z" fill="#ECBD13"/>
<path d="M15.9121 19.9807H16.11C16.3475 19.9807 16.5454 19.7669 16.5454 19.5057C16.5454 19.1732 16.4504 19.1257 16.2446 19.0465L15.9121 18.9277V19.9807Z" fill="#ECBD13"/>
<path d="M20.4797 13.5368C20.1234 13.4338 19.7514 13.3784 19.3634 13.3784H11.6368C11.0984 13.3784 10.5918 13.4813 10.1168 13.6872C8.73927 14.2809 7.77344 15.6505 7.77344 17.2418V18.7855C7.77344 18.9755 7.78927 19.1576 7.81302 19.3476C7.98719 21.8651 9.33302 23.2109 11.8505 23.3772C12.0326 23.4009 12.2147 23.4168 12.4126 23.4168H18.5876C21.5168 23.4168 23.0605 22.0234 23.2109 19.2526C23.2189 19.1022 23.2268 18.9438 23.2268 18.7855V17.2418C23.2268 15.4922 22.063 14.0197 20.4797 13.5368ZM16.5134 18.2709C16.8776 18.3976 17.3684 18.6668 17.3684 19.5059C17.3684 20.2263 16.8064 20.8043 16.1097 20.8043H15.9118V20.9784C15.9118 21.208 15.7297 21.3901 15.5001 21.3901C15.2705 21.3901 15.0884 21.208 15.0884 20.9784V20.8043H15.0172C14.2572 20.8043 13.6318 20.163 13.6318 19.3713C13.6318 19.1418 13.8139 18.9597 14.0434 18.9597C14.273 18.9597 14.4551 19.1418 14.4551 19.3713C14.4551 19.7038 14.7084 19.9809 15.0172 19.9809H15.0884V18.643L14.4868 18.4293C14.1226 18.3026 13.6318 18.0334 13.6318 17.1943C13.6318 16.4738 14.1939 15.8959 14.8905 15.8959H15.0884V15.7218C15.0884 15.4922 15.2705 15.3101 15.5001 15.3101C15.7297 15.3101 15.9118 15.4922 15.9118 15.7218V15.8959H15.983C16.743 15.8959 17.3684 16.5372 17.3684 17.3288C17.3684 17.5584 17.1864 17.7405 16.9568 17.7405C16.7272 17.7405 16.5451 17.5584 16.5451 17.3288C16.5451 16.9963 16.2918 16.7193 15.983 16.7193H15.9118V18.0572L16.5134 18.2709Z" fill="#ECBD13"/>
<path d="M14.4551 17.1942C14.4551 17.5267 14.5501 17.5742 14.7559 17.6534L15.0884 17.7722V16.7192H14.8905C14.6451 16.7192 14.4551 16.933 14.4551 17.1942Z" fill="#ECBD13"/>
</svg>

                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Estimated income</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">₦50,000</div>
            </div>

            {/* Total Expenses */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                 <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
<path d="M0 16.56V19.5C0 27 3 30 10.5 30H19.5C27 30 30 27 30 19.5V10.5C30 3 27 0 19.5 0H10.5C3 0 0 3 0 10.5" fill="#8B5CF6" fillOpacity="0.2"/>
<path d="M15.0007 23.9582C11.6673 23.9582 8.95898 21.5665 8.95898 18.6248V15.5415C8.95898 15.1998 9.24232 14.9165 9.58398 14.9165C9.92565 14.9165 10.209 15.1998 10.209 15.5415C10.209 17.7248 12.2673 19.3748 15.0007 19.3748C17.734 19.3748 19.7923 17.7248 19.7923 15.5415C19.7923 15.1998 20.0757 14.9165 20.4173 14.9165C20.759 14.9165 21.0423 15.1998 21.0423 15.5415V18.6248C21.0423 21.5665 18.334 23.9582 15.0007 23.9582ZM10.209 18.7165C10.2673 20.9248 12.3923 22.7082 15.0007 22.7082C17.609 22.7082 19.734 20.9248 19.7923 18.7165C18.709 19.8915 16.9923 20.6248 15.0007 20.6248C13.009 20.6248 11.3007 19.8915 10.209 18.7165Z" fill="#8B5CF6"/>
<path d="M15.0007 16.4582C12.7007 16.4582 10.634 15.4248 9.62564 13.7582C9.19231 13.0498 8.95898 12.2248 8.95898 11.3748C8.95898 9.9415 9.60065 8.5915 10.759 7.57484C11.8923 6.58317 13.4007 6.0415 15.0007 6.0415C16.6007 6.0415 18.1006 6.58317 19.2423 7.56651C20.4006 8.59151 21.0423 9.9415 21.0423 11.3748C21.0423 12.2248 20.809 13.0415 20.3757 13.7582C19.3673 15.4248 17.3007 16.4582 15.0007 16.4582ZM15.0007 7.2915C13.7007 7.2915 12.484 7.72484 11.5757 8.52484C10.6923 9.2915 10.209 10.3082 10.209 11.3748C10.209 11.9998 10.3756 12.5832 10.6923 13.1082C11.484 14.4082 13.134 15.2082 15.0007 15.2082C16.8673 15.2082 18.5173 14.3998 19.309 13.1082C19.634 12.5832 19.7923 11.9998 19.7923 11.3748C19.7923 10.3082 19.309 9.2915 18.4173 8.50817C17.509 7.72484 16.3007 7.2915 15.0007 7.2915Z" fill="#8B5CF6"/>
<path d="M15.0007 20.6248C11.559 20.6248 8.95898 18.4415 8.95898 15.5415V11.3748C8.95898 8.43317 11.6673 6.0415 15.0007 6.0415C16.6007 6.0415 18.1006 6.58317 19.2423 7.56651C20.4006 8.59151 21.0423 9.9415 21.0423 11.3748V15.5415C21.0423 18.4415 18.4423 20.6248 15.0007 20.6248ZM15.0007 7.2915C12.359 7.2915 10.209 9.12484 10.209 11.3748V12.2082C10.209 14.3915 12.2673 16.0415 15.0007 16.0415C17.734 16.0415 19.7923 14.3915 19.7923 12.2082V11.3748C19.7923 10.3082 19.309 9.2915 18.4173 8.50817C17.509 7.72484 16.3007 7.2915 15.0007 7.2915Z" fill="#8B5CF6"/>
</svg>

                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Total Expenses</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">₦50,000</div>
            </div>

            {/* Total Count */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                 <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
<path d="M0 16.56V19.5C0 27 3 30 10.5 30H19.5C27 30 30 27 30 19.5V10.5C30 3 27 0 19.5 0H10.5C3 0 0 3 0 10.5" fill="#2563EB" fillOpacity="0.22"/>
<path d="M14.9993 6.6665C10.3993 6.6665 6.66602 10.3998 6.66602 14.9998C6.66602 19.5998 10.3993 23.3332 14.9993 23.3332C19.5993 23.3332 23.3327 19.5998 23.3327 14.9998C23.3327 10.3998 19.5993 6.6665 14.9993 6.6665ZM10.8327 15.6248H9.16602C8.82435 15.6248 8.54102 15.3415 8.54102 14.9998C8.54102 14.6582 8.82435 14.3748 9.16602 14.3748H10.8327C11.1743 14.3748 11.4577 14.6582 11.4577 14.9998C11.4577 15.3415 11.1743 15.6248 10.8327 15.6248ZM14.9993 16.8748C13.966 16.8748 13.1243 16.0332 13.1243 14.9998C13.1243 13.9665 13.966 13.1248 14.9993 13.1248C16.0327 13.1248 16.8743 13.9665 16.8743 14.9998C16.8743 16.0332 16.0327 16.8748 14.9993 16.8748ZM20.8327 15.6248H19.166C18.8243 15.6248 18.541 15.3415 18.541 14.9998C18.541 14.6582 18.8243 14.3748 19.166 14.3748H20.8327C21.1743 14.3748 21.4577 14.6582 21.4577 14.9998C21.4577 15.3415 21.1743 15.6248 20.8327 15.6248Z" fill="#5454D4"/>
</svg>

                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Total count</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">50</div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Logging history</h3>

                {/* Search */}
                <div className="relative mb-4 sm:mb-6">
                  <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <circle cx="9" cy="9" r="6" strokeWidth="2"/>
                    <path d="M14 14l4 4" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for entry name, amount..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                {/* Table - Desktop View */}
                <div className="hidden md:block overflow-hidden">
                
                  <div className="grid grid-cols-4 gap-4 px-4 py-3 bg-gray-50 rounded-lg text-xs sm:text-sm font-medium text-gray-600 mb-2">
                    <div>ENTRY NAME</div>
                    <div>DESCRIPTION</div>
                    <div>AMOUNT</div>
                    <div>DATE</div>
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-2">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="grid grid-cols-4 gap-4 px-4 py-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg width="28" height="28" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7">
<rect width="37" height="37" rx="18.5" fill="#3030CF" fillOpacity="0.07"/>
<path d="M23.93 13.6849H23.63L21.095 11.1499C20.8925 10.9474 20.5625 10.9474 20.3525 11.1499C20.15 11.3524 20.15 11.6824 20.3525 11.8924L22.145 13.6849H14.855L16.6475 11.8924C16.85 11.6899 16.85 11.3599 16.6475 11.1499C16.445 10.9474 16.115 10.9474 15.905 11.1499L13.3775 13.6849H13.0775C12.4025 13.6849 11 13.6849 11 15.6049C11 16.3324 11.15 16.8124 11.465 17.1274C11.645 17.3149 11.8625 17.4124 12.095 17.4649C12.3125 17.5174 12.545 17.5249 12.77 17.5249H24.23C24.4625 17.5249 24.68 17.5099 24.89 17.4649C25.52 17.3149 26 16.8649 26 15.6049C26 13.6849 24.5975 13.6849 23.93 13.6849Z" fill="#3030CF"/>
<path d="M23.788 18.5H13.153C12.688 18.5 12.3355 18.9125 12.4105 19.37L13.0405 23.225C13.2505 24.515 13.813 26 16.3105 26H20.518C23.0455 26 23.4955 24.7325 23.7655 23.315L24.523 19.3925C24.613 18.9275 24.2605 18.5 23.788 18.5ZM17.458 23.3375C17.458 23.63 17.2255 23.8625 16.9405 23.8625C16.648 23.8625 16.4155 23.63 16.4155 23.3375V20.8625C16.4155 20.5775 16.648 20.3375 16.9405 20.3375C17.2255 20.3375 17.458 20.5775 17.458 20.8625V23.3375ZM20.668 23.3375C20.668 23.63 20.4355 23.8625 20.143 23.8625C19.858 23.8625 19.618 23.63 19.618 23.3375V20.8625C19.618 20.5775 19.858 20.3375 20.143 20.3375C20.4355 20.3375 20.668 20.5775 20.668 20.8625V23.3375Z" fill="#3030CF"/>
</svg>

                          </div>
                          <span className="font-medium text-gray-900 text-sm">{transaction.category}</span>
                        </div>
                        <div className="text-gray-600 text-sm">{transaction.description}</div>
                        <div className="font-semibold text-gray-900 text-sm">₦ {transaction.amount.toLocaleString()}</div>
                        <div className="text-gray-600 text-sm">{transaction.date}</div>
                      </div>
                    ))}
                  </div>
                </div>

            
                <div className="md:hidden space-y-3">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="bg-gray-50 p-4 rounded-xl space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg width="28" height="28" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="37" height="37" rx="18.5" fill="#3030CF" fillOpacity="0.07"/>
<path d="M23.93 13.6849H23.63L21.095 11.1499C20.8925 10.9474 20.5625 10.9474 20.3525 11.1499C20.15 11.3524 20.15 11.6824 20.3525 11.8924L22.145 13.6849H14.855L16.6475 11.8924C16.85 11.6899 16.85 11.3599 16.6475 11.1499C16.445 10.9474 16.115 10.9474 15.905 11.1499L13.3775 13.6849H13.0775C12.4025 13.6849 11 13.6849 11 15.6049C11 16.3324 11.15 16.8124 11.465 17.1274C11.645 17.3149 11.8625 17.4124 12.095 17.4649C12.3125 17.5174 12.545 17.5249 12.77 17.5249H24.23C24.4625 17.5249 24.68 17.5099 24.89 17.4649C25.52 17.3149 26 16.8649 26 15.6049C26 13.6849 24.5975 13.6849 23.93 13.6849Z" fill="#3030CF"/>
<path d="M23.788 18.5H13.153C12.688 18.5 12.3355 18.9125 12.4105 19.37L13.0405 23.225C13.2505 24.515 13.813 26 16.3105 26H20.518C23.0455 26 23.4955 24.7325 23.7655 23.315L24.523 19.3925C24.613 18.9275 24.2605 18.5 23.788 18.5ZM17.458 23.3375C17.458 23.63 17.2255 23.8625 16.9405 23.8625C16.648 23.8625 16.4155 23.63 16.4155 23.3375V20.8625C16.4155 20.5775 16.648 20.3375 16.9405 20.3375C17.2255 20.3375 17.458 20.5775 17.458 20.8625V23.3375ZM20.668 23.3375C20.668 23.63 20.4355 23.8625 20.143 23.8625C19.858 23.8625 19.618 23.63 19.618 23.3375V20.8625C19.618 20.5775 19.858 20.3375 20.143 20.3375C20.4355 20.3375 20.668 20.5775 20.668 20.8625V23.3375Z" fill="#3030CF"/>
</svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{transaction.category}</div>
                          <div className="text-sm text-gray-500">{transaction.date}</div>
                        </div>
                        <div className="font-semibold text-gray-900">₦{transaction.amount.toLocaleString()}</div>
                      </div>
                      <div className="text-sm text-gray-600 pl-13">{transaction.description}</div>
                    </div>
                  ))}
                </div>

              
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                      className="px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                    </select>
                    <span className="text-xs sm:text-sm text-gray-600">items per page</span>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
                    <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                        <path d="M10 12L6 8l4-4" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-[#13003D] text-white font-medium text-xs sm:text-sm flex-shrink-0">
                      1
                    </button>
                    <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600 text-xs sm:text-sm flex-shrink-0">
                      2
                    </button>
                    <button className="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600 text-sm flex-shrink-0">
                      3
                    </button>
                    <button className="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600 text-sm flex-shrink-0">
                      4
                    </button>
                    <span className="text-gray-400 text-xs sm:text-sm">...</span>
                    <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600 text-xs sm:text-sm flex-shrink-0">
                      99
                    </button>
                    <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                        <path d="M6 12l4-4-4-4" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

        
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Your Spending insights</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">Here's your week in numbers</p>

                <div className="space-y-3 sm:space-y-4">
                  {insights.map((insight, index) => (
                    <div
                      key={index}
                      className={`${insight.bgColor} border-2 border-dashed ${
                        insight.type === 'success' ? 'border-blue-200' :
                        insight.type === 'warning' ? 'border-yellow-200' :
                        insight.type === 'danger' ? 'border-red-200' :
                        'border-green-200'
                      } rounded-[40px] sm:rounded-[77px] p-3 sm:p-4`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className={`${insight.iconBg} w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <span className="text-xl scale-75 sm:scale-100">{insight.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                            {insight.title}
                          </p>
                          <p className="text-xs text-gray-600">
                            {insight.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}