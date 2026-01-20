import React, { useState } from 'react';
import AddExpenseModal from '../../component/modals/AddExpenseModal';

export default function Dashboard({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
    const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);

  // Sample transaction data
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
      icon: '💳',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      title: 'You spent ₦ 9000 less than last week',
      subtitle: 'This week mostly save on food and transport'
    },
    {
      type: 'warning',
      icon: '🍔',
      bgColor: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      title: 'Food took 45% of your expenses this month',
      subtitle: '₦ 28,500 spent mostly on dining out'
    },
    {
      type: 'danger',
      icon: '⚠️',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      title: "You've spent 85% of your estimated income",
      subtitle: 'Try limiting food and shopping next week'
    },
    {
      type: 'positive',
      icon: '✓',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      title: 'You saved ₦ 15,000 this month',
      subtitle: "Great job! that's 12% more than last month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
          <h1 className="text-xl font-bold text-purple-600">Expense tracker</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-600 rounded-lg font-medium">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="3" y="3" width="6" height="6" rx="1"/>
              <rect x="11" y="3" width="6" height="6" rx="1"/>
              <rect x="3" y="11" width="6" height="6" rx="1"/>
              <rect x="11" y="11" width="6" height="6" rx="1"/>
            </svg>
            Home
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="14" height="14" strokeWidth="2" rx="2"/>
              <path d="M3 7h14M7 3v14" strokeWidth="2"/>
            </svg>
            Analytics
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M10 2a6 6 0 016 6c0 3-2 5-2 5H6s-2-2-2-5a6 6 0 016-6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 13h5M9 16h2" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">
                👤
              </div>
              <div>
                <div className="text-sm font-semibold">Sunny Ade</div>
                <div className="text-xs text-gray-500">sunnyade@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Dashboard overview</h2>
              <p className="text-gray-500 text-sm">Here's a quick look at your spending and income.</p>
            </div>
           <button 
        onClick={() => setIsAddExpenseModalOpen(true)}
        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 5v10M5 10h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Add Expense
      </button>


      {/* Add Expense Modal */}
      <AddExpenseModal 
        isOpen={isAddExpenseModalOpen}
        onClose={() => setIsAddExpenseModalOpen(false)}
      />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Estimated Income */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-200 rounded-xl flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <span className="text-gray-700 font-medium">Estimated income</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">₦50,000</div>
            </div>

            {/* Total Expenses */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center">
                  <span className="text-xl">👛</span>
                </div>
                <span className="text-gray-700 font-medium">Total Expenses</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">₦50,000</div>
            </div>

            {/* Total Count */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-200 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🔢</span>
                </div>
                <span className="text-gray-700 font-medium">Total count</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">50</div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Logging History - Takes 2 columns */}
            <div className="col-span-2">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Logging history</h3>

                {/* Search */}
                <div className="relative mb-6">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <circle cx="9" cy="9" r="6" strokeWidth="2"/>
                    <path d="M14 14l4 4" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for entry name, amount..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Table */}
                <div className="overflow-hidden">
                  {/* Table Header */}
                  <div className="grid grid-cols-4 gap-4 px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-600 mb-2">
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
                          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke="#7c3aed" strokeWidth="2"/>
                            </svg>
                          </div>
                          <span className="font-medium text-gray-900">{transaction.category}</span>
                        </div>
                        <div className="text-gray-600">{transaction.description}</div>
                        <div className="font-semibold text-gray-900">₦ {transaction.amount.toLocaleString()}</div>
                        <div className="text-gray-600">{transaction.date}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                    </select>
                    <span className="text-sm text-gray-600">items per page</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                        <path d="M10 12L6 8l4-4" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600 text-white font-medium">
                      1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600">
                      2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600">
                      3
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600">
                      4
                    </button>
                    <span className="text-gray-400">...</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-600">
                      99
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                        <path d="M6 12l4-4-4-4" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Spending Insights - Takes 1 column */}
            <div className="col-span-1">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Your Spending insights</h3>
                <p className="text-gray-500 text-sm mb-6">Here's your week in numbers</p>

                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div
                      key={index}
                      className={`${insight.bgColor} border-2 border-dashed ${
                        insight.type === 'success' ? 'border-blue-200' :
                        insight.type === 'warning' ? 'border-yellow-200' :
                        insight.type === 'danger' ? 'border-red-200' :
                        'border-green-200'
                      } rounded-2xl p-4`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${insight.iconBg} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <span className="text-xl">{insight.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm mb-1">
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