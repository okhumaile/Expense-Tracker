import React, { useState } from 'react';

export default function AddExpenseModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    amount: '10,000',
    paymentMethod: "", 
    description: "",
    date: "",
    category: 'Subscription'
  });

  const categories = [
    { id: 'shopping', name: 'Shopping', icon: '🛍️', color: 'purple' },
    { id: 'subscription', name: 'Subscription', icon: '📋', color: 'yellow' },
    { id: 'housing', name: 'Housing', icon: '🏠', color: 'purple' },
    { id: 'food', name: 'Food', icon: '🍽️', color: 'green' },
    { id: 'transportation', name: 'Transportation', icon: '🚗', color: 'red' }
  ];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    console.log('Saving expense:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/*  Blurred Background */}
      <div 
        className="flex-1 backdrop-blur-sm bg-gray-900/20"
        onClick={onClose}
      ></div>

      {/*  Modal Content */}
      <div className="w-[500px] bg-white shadow-2xl flex flex-col max-h-screen">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200 flex flex-col justify-between">
          <div className='flex justify-end'>
            <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M15 5L5 15M5 5l10 10" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          </div>

           <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#8B5CF6" fill-opacity="0.08"/>
<path d="M29.5 30.3335H14.5C14.1583 30.3335 13.875 30.0502 13.875 29.7085C13.875 29.3668 14.1583 29.0835 14.5 29.0835H29.5C29.8417 29.0835 30.125 29.3668 30.125 29.7085C30.125 30.0502 29.8417 30.3335 29.5 30.3335Z" fill="#3500AD"/>
<path d="M27.8495 14.9C26.2328 13.2834 24.6495 13.2417 22.9912 14.9L21.9828 15.9084C21.8995 15.9917 21.8662 16.125 21.8995 16.2417C22.5328 18.45 24.2995 20.2167 26.5078 20.85C26.5412 20.8584 26.5745 20.8667 26.6078 20.8667C26.6995 20.8667 26.7828 20.8334 26.8495 20.7667L27.8495 19.7584C28.6745 18.9417 29.0745 18.15 29.0745 17.35C29.0828 16.525 28.6828 15.725 27.8495 14.9Z" fill="#3500AD"/>
<path d="M25.0089 21.6082C24.7673 21.4915 24.5339 21.3748 24.3089 21.2415C24.1256 21.1332 23.9506 21.0165 23.7756 20.8915C23.6339 20.7998 23.4673 20.6665 23.3089 20.5332C23.2923 20.5248 23.2339 20.4748 23.1673 20.4082C22.8923 20.1748 22.5839 19.8748 22.3089 19.5415C22.2839 19.5248 22.2423 19.4665 22.1839 19.3915C22.1006 19.2915 21.9589 19.1248 21.8339 18.9332C21.7339 18.8082 21.6173 18.6248 21.5089 18.4415C21.3756 18.2165 21.2589 17.9915 21.1423 17.7582C20.9893 17.4304 20.5591 17.333 20.3033 17.5888L15.6173 22.2748C15.5089 22.3832 15.4089 22.5915 15.3839 22.7332L14.9339 25.9248C14.8506 26.4915 15.0089 27.0248 15.3589 27.3832C15.6589 27.6748 16.0756 27.8332 16.5256 27.8332C16.6256 27.8332 16.7256 27.8248 16.8256 27.8082L20.0256 27.3582C20.1756 27.3332 20.3839 27.2332 20.4839 27.1248L25.1777 22.4311C25.4284 22.1804 25.3342 21.7491 25.0089 21.6082Z" fill="#3500AD"/>
</svg>

            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Add Manually</h2>
              <p className="text-sm text-gray-500">Enter expense details yourself.</p>
            </div>
          </div>
         
        </div>

        {/* Form Content*/}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {/* Amount */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
              AMOUNT
            </label>
       <div className="relative">
 
  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900">₦</span>
  <input
    type="number" 
    placeholder="input amount"
    value={formData.amount}
    onChange={(e) => handleChange('amount', e.target.value)}
    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
  />
            </div>
          </div>

          {/* Payment Method */}
        <div>
  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
    PAYMENT METHOD
  </label>
  <div className="relative">
    <select
      value={formData.paymentMethod}
      onChange={(e) => handleChange('paymentMethod', e.target.value)}
  
      className={`w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none ${
        !formData.paymentMethod ? 'text-gray-400' : 'text-gray-900'
      }`}
    >
     
      <option value="" disabled hidden>
        Select a payment method
      </option>
      <option value="Cash" className="text-gray-900">Cash</option>
      <option value="Card" className="text-gray-900">Card</option>
      <option value="Bank Transfer" className="text-gray-900">Transfer</option>
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
        <path d="M6 8l4 4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
</div>

       
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
              DESCRIPTION
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              placeholder="Add a short note"
            />
          </div>

         
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
              DATE
            </label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              placeholder="12/1/2025"
            />
          </div>

         
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
              CATEGORY
            </label>
            <div className="space-y-3">
              {/* First Row */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleChange('category', 'Shopping')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all border-gray-200 bg-white hover:border-gray-300 ${
                    formData.category === 'Shopping'
                  }`}
                >
                  {formData.category === 'Shopping' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91602 12.458C6.91602 12.458 7.79102 12.458 8.95768 14.4997C8.95768 14.4997 12.2003 9.15245 15.0827 8.08301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                  )}
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                   <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#3030CF" fill-opacity="0.07"/>
<path d="M36.4473 20.5097H35.9806L32.0373 16.5663C31.7223 16.2513 31.209 16.2513 30.8823 16.5663C30.5673 16.8813 30.5673 17.3947 30.8823 17.7213L33.6707 20.5097H22.3307L25.119 17.7213C25.434 17.4063 25.434 16.893 25.119 16.5663C24.804 16.2513 24.2907 16.2513 23.964 16.5663L20.0323 20.5097H19.5657C18.5157 20.5097 16.334 20.5097 16.334 23.4963C16.334 24.628 16.5673 25.3747 17.0573 25.8647C17.3373 26.1563 17.6757 26.308 18.0373 26.3897C18.3757 26.4713 18.7373 26.483 19.0873 26.483H36.914C37.2757 26.483 37.614 26.4597 37.9407 26.3897C38.9207 26.1563 39.6673 25.4563 39.6673 23.4963C39.6673 20.5097 37.4856 20.5097 36.4473 20.5097Z" fill="#3030CF"/>
<path d="M36.2257 28H19.6824C18.9591 28 18.4108 28.6417 18.5274 29.3533L19.5074 35.35C19.8341 37.3567 20.7091 39.6667 24.5941 39.6667H31.1391C35.0707 39.6667 35.7708 37.695 36.1908 35.49L37.3691 29.3883C37.5091 28.665 36.9607 28 36.2257 28ZM26.3791 35.525C26.3791 35.98 26.0174 36.3417 25.5741 36.3417C25.1191 36.3417 24.7574 35.98 24.7574 35.525V31.675C24.7574 31.2317 25.1191 30.8583 25.5741 30.8583C26.0174 30.8583 26.3791 31.2317 26.3791 31.675V35.525ZM31.3724 35.525C31.3724 35.98 31.0107 36.3417 30.5557 36.3417C30.1124 36.3417 29.7391 35.98 29.7391 35.525V31.675C29.7391 31.2317 30.1124 30.8583 30.5557 30.8583C31.0107 30.8583 31.3724 31.2317 31.3724 31.675V35.525Z" fill="#3030CF"/>
</svg>

                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Shopping' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Shopping
                  </span>
                </button>

                <button
                  onClick={() => handleChange('category', 'Subscription')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all border-gray-200 bg-white hover:border-gray-300 ${
                    formData.category === 'Subscription'
                     
                  }`}
                >
                  {formData.category === 'Subscription' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91602 12.458C6.91602 12.458 7.79102 12.458 8.95768 14.4997C8.95768 14.4997 12.2003 9.15245 15.0827 8.08301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                  )}
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#FFD951" fill-opacity="0.08"/>
<path d="M32.4107 16.3335H23.5907C19.1807 16.3335 18.084 17.5118 18.084 22.2135V35.3502C18.084 38.4535 19.7873 39.1885 21.8523 36.9718L21.864 36.9602C22.8207 35.9452 24.279 36.0268 25.1073 37.1352L26.2857 38.7102C27.2306 39.9585 28.759 39.9585 29.704 38.7102L30.8823 37.1352C31.7223 36.0152 33.1807 35.9335 34.1373 36.9602C36.214 39.1768 37.9056 38.4418 37.9056 35.3385V22.2135C37.9173 17.5118 36.8207 16.3335 32.4107 16.3335ZM31.5007 27.7085H24.5007C24.0223 27.7085 23.6257 27.3118 23.6257 26.8335C23.6257 26.3552 24.0223 25.9585 24.5007 25.9585H31.5007C31.979 25.9585 32.3757 26.3552 32.3757 26.8335C32.3757 27.3118 31.979 27.7085 31.5007 27.7085ZM32.6673 23.0418H23.334C22.8557 23.0418 22.459 22.6452 22.459 22.1668C22.459 21.6885 22.8557 21.2918 23.334 21.2918H32.6673C33.1457 21.2918 33.5423 21.6885 33.5423 22.1668C33.5423 22.6452 33.1457 23.0418 32.6673 23.0418Z" fill="#ECBD13"/>
</svg>


                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Subscription' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Subscription
                  </span>
                </button>

                <button
                  onClick={() => handleChange('category', 'Housing')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all border-gray-200 bg-white hover:border-gray-300 ${
                    formData.category === 'Housing'
                    
                  }`}
                >
                  {formData.category === 'Housing' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91602 12.458C6.91602 12.458 7.79102 12.458 8.95768 14.4997C8.95768 14.4997 12.2003 9.15245 15.0827 8.08301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                  )}
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                   <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#8B5CF6" fill-opacity="0.08"/>
<path d="M25.666 32.083C25.1877 32.083 24.791 32.4797 24.791 32.958V34.708C24.791 35.1863 25.1877 35.583 25.666 35.583C26.1443 35.583 26.541 35.1863 26.541 34.708V32.958C26.541 32.4797 26.1443 32.083 25.666 32.083Z" fill="#6D2FF9"/>
<path d="M39.6673 38.7912H38.5007V25.6429C38.5007 24.9195 38.174 24.2429 37.6023 23.7995L29.4356 17.4529C28.5956 16.7879 27.4057 16.7879 26.5657 17.4529L18.399 23.7995C17.8273 24.2429 17.5007 24.9195 17.5007 25.6312L17.4423 38.7912H16.334C15.8557 38.7912 15.459 39.1762 15.459 39.6662C15.459 40.1445 15.8557 40.5412 16.334 40.5412H39.6673C40.1457 40.5412 40.5423 40.1445 40.5423 39.6662C40.5423 39.1762 40.1457 38.7912 39.6673 38.7912ZM26.2507 21.8745H29.7507C30.229 21.8745 30.6257 22.2712 30.6257 22.7495C30.6257 23.2279 30.229 23.6245 29.7507 23.6245H26.2507C25.7723 23.6245 25.3757 23.2279 25.3757 22.7495C25.3757 22.2712 25.7723 21.8745 26.2507 21.8745ZM33.834 38.7912H22.1673V28.5829C22.1673 27.6145 22.949 26.8329 23.9173 26.8329H32.084C33.0523 26.8329 33.834 27.6145 33.834 28.5829V38.7912Z" fill="#6D2FF9"/>
</svg>

                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Housing' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Housing
                  </span>
                </button>
              </div>

              
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleChange('category', 'Food')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all border-gray-200 bg-white hover:border-gray-300 ${
                    formData.category === 'Food'
                  }`}
                >
                  {formData.category === 'Food' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91602 12.458C6.91602 12.458 7.79102 12.458 8.95768 14.4997C8.95768 14.4997 12.2003 9.15245 15.0827 8.08301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                  )}
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#48BB78" fill-opacity="0.1"/>
<path d="M39.7353 24.0467C39.3538 22.1613 37.6841 20.7374 35.6879 20.7374C35.0868 20.7374 34.4993 20.869 33.9625 21.1159L33.7704 20.4982C33.4229 19.3811 32.6064 18.4769 31.5305 18.0175C30.4546 17.5581 29.237 17.5937 28.1898 18.1151C27.4279 18.4944 26.5189 18.4307 25.8176 17.9487L25.6497 17.8334C24.8666 17.2952 23.9148 17.0543 22.9699 17.1553C22.025 17.2563 21.1456 17.6927 20.4938 18.3842L18.5344 20.4628L15.838 19.4575V24.0467H14V27.0563C14 31.7615 16.3444 36.1256 20.2713 38.7303L20.4774 38.867H35.5225L35.7287 38.7303C39.6556 36.1256 42 31.7615 42 27.0563V24.0467H39.7353ZM38.0372 24.0467H35.3568C35.2478 23.5084 35.034 23.0077 34.7373 22.567C35.0361 22.4435 35.3586 22.378 35.6878 22.378C36.7729 22.3781 37.6974 23.0762 38.0372 24.0467ZM33.6587 24.0467H28.9599C29.2997 23.0762 30.2243 22.378 31.3093 22.378C32.3944 22.3781 33.3189 23.0762 33.6587 24.0467ZM21.6876 19.5095C22.4859 18.6627 23.7614 18.5263 24.7206 19.1855L24.8883 19.3008C26.0806 20.1202 27.6259 20.2286 28.921 19.5837C29.5371 19.2769 30.2534 19.256 30.8862 19.5263C31.4658 19.7738 31.9167 20.2411 32.1456 20.8226C31.8755 20.7668 31.5958 20.7374 31.3093 20.7374C29.4215 20.7374 27.8266 22.0112 27.3361 23.744L20.2027 21.0846L21.6876 19.5095ZM17.4786 21.8201L23.4513 24.0467H17.4786V21.8201ZM15.6406 25.6874H40.3594C40.3594 25.6874 40.3572 27.2393 40.3552 27.3307H15.6448C15.6428 27.2393 15.6406 25.6874 15.6406 25.6874ZM35.0237 37.2264H20.9763C18.1622 35.2801 16.3078 32.2943 15.7893 28.9713H40.2107C39.6922 32.2943 37.8378 35.2801 35.0237 37.2264Z" fill="#48BB78"/>
</svg>

                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Food' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Food
                  </span>
                </button>

                <button
                  onClick={() => handleChange('category', 'Transportation')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all border-gray-200 bg-white hover:border-gray-300 ${
                    formData.category === 'Transportation'
                  }`}
                >
                  {formData.category === 'Transportation' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                     <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91602 12.458C6.91602 12.458 7.79102 12.458 8.95768 14.4997C8.95768 14.4997 12.2003 9.15245 15.0827 8.08301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                  )}
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                   <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#F56565" fill-opacity="0.08"/>
<path d="M28 35.8747C27.5217 35.8747 27.125 35.478 27.125 34.9997V33.833C27.125 33.3547 27.5217 32.958 28 32.958C28.4783 32.958 28.875 33.3547 28.875 33.833V34.9997C28.875 35.478 28.4783 35.8747 28 35.8747Z" fill="#D60000"/>
<path d="M28 40.5417C27.5217 40.5417 27.125 40.145 27.125 39.6667V38.5C27.125 38.0217 27.5217 37.625 28 37.625C28.4783 37.625 28.875 38.0217 28.875 38.5V39.6667C28.875 40.145 28.4783 40.5417 28 40.5417Z" fill="#D60000"/>
<path d="M16.3325 40.5421C16.2625 40.5421 16.1925 40.5304 16.1225 40.5188C15.6558 40.4021 15.3641 39.9238 15.4808 39.4571L16.6475 34.7904C16.7641 34.3238 17.2308 34.0321 17.7091 34.1488C18.1758 34.2654 18.4675 34.7438 18.3508 35.2104L17.1841 39.8771C17.0791 40.2738 16.7291 40.5421 16.3325 40.5421Z" fill="#D60000"/>
<path d="M39.3787 40.2527C38.9821 40.2527 38.6321 39.9844 38.5271 39.5877L37.3604 34.9211C37.2437 34.4544 37.5237 33.9761 38.0021 33.8594C38.4687 33.7427 38.9471 34.0227 39.0637 34.5011L40.2304 39.1677C40.3471 39.6344 40.0671 40.1127 39.5887 40.2294C39.5187 40.2411 39.4487 40.2527 39.3787 40.2527Z" fill="#D60000"/>
<path d="M36.3306 20.1837C36.3306 20.5337 36.0389 20.8137 35.7006 20.8137H20.4523C20.1023 20.8137 19.8223 20.522 19.8223 20.1837C19.8223 19.8337 20.1139 19.5537 20.4523 19.5537H21.3156L21.6423 18.0253C21.9456 16.532 22.5756 15.167 25.0956 15.167H31.0339C33.5539 15.167 34.1956 16.532 34.4989 18.0137L34.8256 19.542H35.6889C36.0389 19.542 36.3306 19.8337 36.3306 20.1837Z" fill="#D60000"/>
<path d="M36.6922 24.9666C36.5638 23.5666 36.1905 22.085 33.4722 22.085H22.6688C19.9505 22.085 19.5888 23.5783 19.4488 24.9666L18.9705 30.1233C18.9122 30.765 19.1222 31.4066 19.5655 31.8966C20.0205 32.3866 20.6505 32.6666 21.3272 32.6666H22.9138C24.2905 32.6666 24.5472 31.885 24.7222 31.36L24.8972 30.8466C25.0955 30.2633 25.1422 30.1233 25.9005 30.1233H30.2405C30.9988 30.1233 31.0222 30.205 31.2438 30.8466L31.4188 31.36C31.5822 31.885 31.8505 32.6666 33.2155 32.6666H34.8022C35.4672 32.6666 36.1088 32.3866 36.5638 31.8966C37.0072 31.4183 37.2172 30.765 37.1588 30.1233L36.6922 24.9666ZM25.5272 26.74H22.9955C22.6455 26.74 22.3655 26.4483 22.3655 26.11C22.3655 25.7716 22.6572 25.48 22.9955 25.48H25.5388C25.8888 25.48 26.1688 25.7716 26.1688 26.11C26.1688 26.4483 25.8772 26.74 25.5272 26.74ZM33.1455 26.74H30.6022C30.2522 26.74 29.9722 26.4483 29.9722 26.11C29.9722 25.7716 30.2638 25.48 30.6022 25.48H33.1455C33.4955 25.48 33.7755 25.7716 33.7755 26.11C33.7755 26.4483 33.4955 26.74 33.1455 26.74Z" fill="#D60000"/>
</svg>

                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Transportation' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Transportation
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="px-8 py-6 border-t border-gray-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-8 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Go back
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-8 py-3 rounded-full bg-[#13003D]  hover:bg-purple-800 text-white font-medium transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}