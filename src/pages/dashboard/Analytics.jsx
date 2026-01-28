import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Analytics({ onNavigate }) {
  const [selectedYear, setSelectedYear] = useState('This year');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
  const expenseBreakdown = [
    {
      category: 'Shopping & Miscellaneous',
      icon: (
    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_79_13815)">
<ellipse cx="36" cy="36" rx="12.5" ry="13" fill="#718096" fillOpacity="0.12"/>
<path d="M41.43 31.1849H41.13L38.595 28.6499C38.3925 28.4474 38.0625 28.4474 37.8525 28.6499C37.65 28.8524 37.65 29.1824 37.8525 29.3924L39.645 31.1849H32.355L34.1475 29.3924C34.35 29.1899 34.35 28.8599 34.1475 28.6499C33.945 28.4474 33.615 28.4474 33.405 28.6499L30.8775 31.1849H30.5775C29.9025 31.1849 28.5 31.1849 28.5 33.1049C28.5 33.8324 28.65 34.3124 28.965 34.6274C29.145 34.8149 29.3625 34.9124 29.595 34.9649C29.8125 35.0174 30.045 35.0249 30.27 35.0249H41.73C41.9625 35.0249 42.18 35.0099 42.39 34.9649C43.02 34.8149 43.5 34.3649 43.5 33.1049C43.5 31.1849 42.0975 31.1849 41.43 31.1849Z" fill="#3030CF"/>
<path d="M41.288 36H30.653C30.188 36 29.8355 36.4125 29.9105 36.87L30.5405 40.725C30.7505 42.015 31.313 43.5 33.8105 43.5H38.018C40.5455 43.5 40.9955 42.2325 41.2655 40.815L42.023 36.8925C42.113 36.4275 41.7605 36 41.288 36ZM34.958 40.8375C34.958 41.13 34.7255 41.3625 34.4405 41.3625C34.148 41.3625 33.9155 41.13 33.9155 40.8375V38.3625C33.9155 38.0775 34.148 37.8375 34.4405 37.8375C34.7255 37.8375 34.958 38.0775 34.958 38.3625V40.8375ZM38.168 40.8375C38.168 41.13 37.9355 41.3625 37.643 41.3625C37.358 41.3625 37.118 41.13 37.118 40.8375V38.3625C37.118 38.0775 37.358 37.8375 37.643 37.8375C37.9355 37.8375 38.168 38.0775 38.168 38.3625V40.8375Z" fill="#3030CF"/>
<path d="M45.0932 61.7867C30.9296 66.7056 15.4602 59.2113 10.5413 45.0477C5.62241 30.8841 13.1167 15.4147 27.2803 10.4958C41.4439 5.57691 56.9133 13.0712 61.8322 27.2348C66.7511 41.3984 59.2568 56.8678 45.0932 61.7867ZM28.7275 14.6629C16.8654 18.7826 10.5888 31.7384 14.7084 43.6005C18.8281 55.4627 31.7839 61.7392 43.646 57.6196C55.5082 53.5 61.7848 40.5442 57.6651 28.682C53.5455 16.8199 40.5897 10.5433 28.7275 14.6629Z" fill="#718096" fillOpacity="0.12"/>
<path d="M60.3485 42.331C61.5284 42.6336 62.7397 41.923 62.9455 40.7224C63.4219 37.9433 63.4632 35.1023 63.0638 32.302C62.5604 28.7726 61.3667 25.3769 59.5509 22.3089C57.7352 19.2408 55.3329 16.5603 52.4813 14.4207C50.2187 12.723 47.7085 11.3921 45.043 10.4724C43.8915 10.075 42.6858 10.7949 42.3832 11.9749C42.0807 13.1548 42.7969 14.3465 43.942 14.7619C46.0487 15.5262 48.0347 16.5992 49.8338 17.9491C52.222 19.7411 54.234 21.986 55.7547 24.5555C57.2754 27.1251 58.2751 29.969 58.6967 32.9249C59.0143 35.1516 58.9992 37.4089 58.6554 39.6234C58.4686 40.8271 59.1685 42.0284 60.3485 42.331Z" fill="#2525B1"/>
</g>
<defs>
<clipPath id="clip0_79_13815">
<rect width="71" height="71" fill="white"/>
</clipPath>
</defs>
</svg>


   ),
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      percentage: '30%',
      amount: '₦ 32,000',
      change: 'Down by 12% from last month',
      changeType: 'down'
    },
    {
      category: 'Subscriptions & Utilities',
     icon: (
    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_79_13784)">
<ellipse cx="36" cy="36" rx="12.5" ry="13" fill="#718096" fillOpacity="0.12"/>
<path d="M38.835 28.5H33.165C30.33 28.5 29.625 29.2575 29.625 32.28V40.725C29.625 42.72 30.72 43.1925 32.0475 41.7675L32.055 41.76C32.67 41.1075 33.6075 41.16 34.14 41.8725L34.8975 42.885C35.505 43.6875 36.4875 43.6875 37.095 42.885L37.8525 41.8725C38.3925 41.1525 39.33 41.1 39.945 41.76C41.28 43.185 42.3675 42.7125 42.3675 40.7175V32.28C42.375 29.2575 41.67 28.5 38.835 28.5ZM38.25 35.8125H33.75C33.4425 35.8125 33.1875 35.5575 33.1875 35.25C33.1875 34.9425 33.4425 34.6875 33.75 34.6875H38.25C38.5575 34.6875 38.8125 34.9425 38.8125 35.25C38.8125 35.5575 38.5575 35.8125 38.25 35.8125ZM39 32.8125H33C32.6925 32.8125 32.4375 32.5575 32.4375 32.25C32.4375 31.9425 32.6925 31.6875 33 31.6875H39C39.3075 31.6875 39.5625 31.9425 39.5625 32.25C39.5625 32.5575 39.3075 32.8125 39 32.8125Z" fill="#ECBD13"/>
<path d="M45.0932 61.7867C30.9296 66.7056 15.4602 59.2113 10.5413 45.0477C5.62241 30.8841 13.1167 15.4147 27.2803 10.4958C41.4439 5.57691 56.9133 13.0712 61.8322 27.2348C66.7511 41.3984 59.2568 56.8678 45.0932 61.7867ZM28.7275 14.6629C16.8654 18.7826 10.5888 31.7384 14.7084 43.6005C18.8281 55.4627 31.7839 61.7392 43.646 57.6196C55.5082 53.5 61.7848 40.5442 57.6651 28.682C53.5455 16.8199 40.5897 10.5433 28.7275 14.6629Z" fill="#718096" fillOpacity="0.12"/>
<path d="M39.5846 60.8455C39.7505 62.0523 40.8663 62.9051 42.0557 62.6419C47.6033 61.414 52.6281 58.4745 56.4171 54.2406C57.2295 53.3328 57.0329 51.9423 56.0623 51.2062C55.0917 50.4702 53.7156 50.669 52.889 51.5638C49.826 54.8797 45.843 57.2098 41.4514 58.2547C40.2664 58.5367 39.4187 59.6388 39.5846 60.8455Z" fill="#CAA10C"/>
</g>
<defs>
<clipPath id="clip0_79_13784">
<rect width="71" height="71" fill="white"/>
</clipPath>
</defs>
</svg>


   ),
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      percentage: '10%',
      amount: '₦ 20,000',
      change: 'Up 10% from last month',
      changeType: 'up'
    },
    {
      category: 'Housing',
      icon: (
    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_79_13665)">
<ellipse cx="36" cy="36" rx="12.5" ry="13" fill="#718096" fillOpacity="0.12"/>
<path d="M34.5 37.625C34.1925 37.625 33.9375 37.88 33.9375 38.1875V39.3125C33.9375 39.62 34.1925 39.875 34.5 39.875C34.8075 39.875 35.0625 39.62 35.0625 39.3125V38.1875C35.0625 37.88 34.8075 37.625 34.5 37.625Z" fill="#6D2FF9"/>
<path d="M43.5 41.9375H42.75V33.485C42.75 33.02 42.54 32.585 42.1725 32.3L36.9225 28.22C36.3825 27.7925 35.6175 27.7925 35.0775 28.22L29.8275 32.3C29.46 32.585 29.25 33.02 29.25 33.4775L29.2125 41.9375H28.5C28.1925 41.9375 27.9375 42.185 27.9375 42.5C27.9375 42.8075 28.1925 43.0625 28.5 43.0625H43.5C43.8075 43.0625 44.0625 42.8075 44.0625 42.5C44.0625 42.185 43.8075 41.9375 43.5 41.9375ZM34.875 31.0625H37.125C37.4325 31.0625 37.6875 31.3175 37.6875 31.625C37.6875 31.9325 37.4325 32.1875 37.125 32.1875H34.875C34.5675 32.1875 34.3125 31.9325 34.3125 31.625C34.3125 31.3175 34.5675 31.0625 34.875 31.0625ZM39.75 41.9375H32.25V35.375C32.25 34.7525 32.7525 34.25 33.375 34.25H38.625C39.2475 34.25 39.75 34.7525 39.75 35.375V41.9375Z" fill="#6D2FF9"/>
<path d="M45.0932 61.7867C30.9296 66.7056 15.4602 59.2113 10.5413 45.0477C5.62241 30.8841 13.1167 15.4147 27.2803 10.4958C41.4439 5.57691 56.9133 13.0712 61.8322 27.2348C66.7511 41.3984 59.2568 56.8678 45.0932 61.7867ZM28.7275 14.6629C16.8654 18.7826 10.5888 31.7384 14.7084 43.6005C18.8281 55.4627 31.7839 61.7392 43.646 57.6196C55.5082 53.5 61.7848 40.5442 57.6651 28.682C53.5455 16.8199 40.5897 10.5433 28.7275 14.6629Z" fill="#718096" fillOpacity="0.12"/>
<path d="M18.1013 53.3112C17.218 54.15 17.1763 55.5537 18.0841 56.366C20.3524 58.3958 22.95 60.0333 25.7706 61.2054C28.5911 62.3774 31.5843 63.063 34.6231 63.2384C35.8392 63.3086 36.8046 62.2888 36.7759 61.071C36.7471 59.8532 35.7346 58.9004 34.5197 58.811C32.0976 58.6328 29.7148 58.0674 27.4632 57.1318C25.2117 56.1962 23.1298 54.9065 21.2947 53.3156C20.3742 52.5177 18.9846 52.4724 18.1013 53.3112Z" fill="#4100D6"/>
</g>
<defs>
<clipPath id="clip0_79_13665">
<rect width="71" height="71" fill="white"/>
</clipPath>
</defs>
</svg>


   ),
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      percentage: '10%',
      amount: '₦ 9000',
      change: 'Up 2% from last month',
      changeType: 'up'
    },
    {
      category: 'Food & Drinks',
       icon: (
    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_79_13630)">
<ellipse cx="36" cy="36" rx="12.5" ry="13" fill="#718096" fillOpacity="0.12"/>
<path d="M43.5441 33.4447C43.2989 32.2326 42.2255 31.3173 40.9422 31.3173C40.5558 31.3173 40.1781 31.4018 39.8331 31.5605L39.7095 31.1635C39.4861 30.4453 38.9613 29.8641 38.2696 29.5688C37.578 29.2734 36.7952 29.2963 36.122 29.6315C35.6322 29.8753 35.0479 29.8343 34.597 29.5245L34.4891 29.4504C33.9857 29.1044 33.3738 28.9495 32.7664 29.0145C32.1589 29.0794 31.5936 29.3599 31.1746 29.8045L29.9149 31.1407L28.1816 30.4945V33.4447H27V35.3794C27 38.4042 28.5071 41.2097 31.0315 42.8841L31.164 42.972H40.8359L40.9684 42.8841C43.4929 41.2097 45 38.4042 45 35.3794V33.4447H43.5441ZM42.4525 33.4447H40.7294C40.6593 33.0986 40.5218 32.7767 40.3311 32.4934C40.5232 32.414 40.7305 32.3719 40.9422 32.3719C41.6397 32.372 42.234 32.8208 42.4525 33.4447ZM39.6378 33.4447H36.6171C36.8355 32.8208 37.4299 32.3719 38.1274 32.3719C38.8249 32.372 39.4193 32.8208 39.6378 33.4447ZM31.942 30.5279C32.4552 29.9835 33.2752 29.8958 33.8918 30.3196L33.9996 30.3937C34.7661 30.9204 35.7595 30.9902 36.5921 30.5756C36.9881 30.3784 37.4486 30.3649 37.8554 30.5387C38.228 30.6978 38.5179 30.9982 38.6651 31.372C38.4914 31.3362 38.3116 31.3172 38.1274 31.3172C36.9138 31.3172 35.8886 32.1361 35.5732 33.2501L30.9875 31.5405L31.942 30.5279ZM29.2363 32.0132L33.0758 33.4447H29.2363V32.0132ZM28.0547 34.4993H43.9453C43.9453 34.4993 43.9439 35.497 43.9426 35.5558H28.0574C28.0561 35.497 28.0547 34.4993 28.0547 34.4993ZM40.5152 41.9173H31.4848C29.6757 40.6661 28.4836 38.7467 28.1502 36.6104H43.8497C43.5164 38.7467 42.3243 40.6661 40.5152 41.9173Z" fill="#2B824F"/>
<path d="M45.0932 61.7867C30.9296 66.7056 15.4602 59.2113 10.5413 45.0477C5.62241 30.8841 13.1167 15.4147 27.2803 10.4958C41.4439 5.57691 56.9133 13.0712 61.8322 27.2348C66.7511 41.3984 59.2568 56.8678 45.0932 61.7867ZM28.7275 14.6629C16.8654 18.7826 10.5888 31.7384 14.7084 43.6005C18.8281 55.4627 31.7839 61.7392 43.646 57.6196C55.5082 53.5 61.7848 40.5442 57.6651 28.682C53.5455 16.8199 40.5897 10.5433 28.7275 14.6629Z" fill="#718096" fillOpacity="0.12"/>
<path d="M41.7414 11.8193C42.0126 10.6317 41.2702 9.43971 40.0646 9.26575C35.7848 8.64824 31.408 9.06065 27.302 10.4829C22.4995 12.1464 18.2604 15.1247 15.0672 19.0787C11.8739 23.0328 9.85475 27.8038 9.23945 32.8489C8.7134 37.1623 9.23158 41.5278 10.7362 45.5817C11.16 46.7237 12.4816 47.1985 13.5855 46.6834C14.6893 46.1683 15.1555 44.8584 14.7497 43.7098C13.584 40.4104 13.1922 36.8762 13.6183 33.383C14.1336 29.1577 15.8247 25.1619 18.4991 21.8503C21.1734 18.5387 24.7237 16.0444 28.7459 14.6512C32.0712 13.4993 35.6086 13.1384 39.0795 13.5834C40.2878 13.7384 41.4702 13.0069 41.7414 11.8193Z" fill="#389F63"/>
</g>
<defs>
<clipPath id="clip0_79_13630">
<rect width="71" height="71" fill="white"/>
</clipPath>
</defs>
</svg>


   ),
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      percentage: '40%',
      amount: '₦ 54,000',
      change: 'Up 12% from last month',
      changeType: 'up'
    },
    {
      category: 'Transport',
     icon: (
   <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_79_13847)">
<ellipse cx="36" cy="36" rx="12.5" ry="13" fill="#718096" fillOpacity="0.12"/>
<path d="M36 41.0625C35.6925 41.0625 35.4375 40.8075 35.4375 40.5V39.75C35.4375 39.4425 35.6925 39.1875 36 39.1875C36.3075 39.1875 36.5625 39.4425 36.5625 39.75V40.5C36.5625 40.8075 36.3075 41.0625 36 41.0625Z" fill="#D60000"/>
<path d="M36 44.0625C35.6925 44.0625 35.4375 43.8075 35.4375 43.5V42.75C35.4375 42.4425 35.6925 42.1875 36 42.1875C36.3075 42.1875 36.5625 42.4425 36.5625 42.75V43.5C36.5625 43.8075 36.3075 44.0625 36 44.0625Z" fill="#D60000"/>
<path d="M28.4996 44.0626C28.4546 44.0626 28.4096 44.0551 28.3646 44.0476C28.0646 43.9726 27.8771 43.6651 27.9521 43.3651L28.7021 40.3651C28.7771 40.0651 29.0771 39.8776 29.3846 39.9526C29.6846 40.0276 29.8721 40.3351 29.7971 40.6351L29.0471 43.6351C28.9796 43.8901 28.7546 44.0626 28.4996 44.0626Z" fill="#D60000"/>
<path d="M43.3145 43.877C43.0595 43.877 42.8345 43.7045 42.767 43.4495L42.017 40.4495C41.942 40.1495 42.122 39.842 42.4295 39.767C42.7295 39.692 43.037 39.872 43.112 40.1795L43.862 43.1795C43.937 43.4795 43.757 43.787 43.4495 43.862C43.4045 43.8695 43.3595 43.877 43.3145 43.877Z" fill="#D60000"/>
<path d="M41.3547 30.975C41.3547 31.2 41.1672 31.38 40.9497 31.38H31.1472C30.9222 31.38 30.7422 31.1925 30.7422 30.975C30.7422 30.75 30.9297 30.57 31.1472 30.57H31.7022L31.9122 29.5875C32.1072 28.6275 32.5122 27.75 34.1322 27.75H37.9497C39.5697 27.75 39.9822 28.6275 40.1772 29.58L40.3872 30.5625H40.9422C41.1672 30.5625 41.3547 30.75 41.3547 30.975Z" fill="#D60000"/>
<path d="M41.5881 34.0498C41.5056 33.1498 41.2656 32.1973 39.5181 32.1973H32.5731C30.8256 32.1973 30.5931 33.1573 30.5031 34.0498L30.1956 37.3648C30.1581 37.7773 30.2931 38.1898 30.5781 38.5048C30.8706 38.8198 31.2756 38.9998 31.7106 38.9998H32.7306C33.6156 38.9998 33.7806 38.4973 33.8931 38.1598L34.0056 37.8298C34.1331 37.4548 34.1631 37.3648 34.6506 37.3648H37.4406C37.9281 37.3648 37.9431 37.4173 38.0856 37.8298L38.1981 38.1598C38.3031 38.4973 38.4756 38.9998 39.3531 38.9998H40.3731C40.8006 38.9998 41.2131 38.8198 41.5056 38.5048C41.7906 38.1973 41.9256 37.7773 41.8881 37.3648L41.5881 34.0498ZM34.4106 35.1898H32.7831C32.5581 35.1898 32.3781 35.0023 32.3781 34.7848C32.3781 34.5673 32.5656 34.3798 32.7831 34.3798H34.4181C34.6431 34.3798 34.8231 34.5673 34.8231 34.7848C34.8231 35.0023 34.6356 35.1898 34.4106 35.1898ZM39.3081 35.1898H37.6731C37.4481 35.1898 37.2681 35.0023 37.2681 34.7848C37.2681 34.5673 37.4556 34.3798 37.6731 34.3798H39.3081C39.5331 34.3798 39.7131 34.5673 39.7131 34.7848C39.7131 35.0023 39.5331 35.1898 39.3081 35.1898Z" fill="#D60000"/>
<path d="M45.0932 61.7867C30.9296 66.7056 15.4602 59.2113 10.5413 45.0477C5.62241 30.8841 13.1167 15.4147 27.2803 10.4958C41.4439 5.57691 56.9133 13.0712 61.8322 27.2348C66.7511 41.3984 59.2568 56.8678 45.0932 61.7867ZM28.7275 14.6629C16.8654 18.7826 10.5888 31.7384 14.7084 43.6005C18.8281 55.4627 31.7839 61.7392 43.646 57.6196C55.5082 53.5 61.7848 40.5442 57.6651 28.682C53.5455 16.8199 40.5897 10.5433 28.7275 14.6629Z" fill="#718096" fillOpacity="0.12"/>
<path d="M11.3018 37.8122C10.0864 37.8941 9.15838 38.948 9.33863 40.1527C9.84055 43.5074 10.9678 46.745 12.6685 49.6949C14.3692 52.6449 16.6062 55.2427 19.2579 57.358C20.2102 58.1177 21.5872 57.8426 22.2671 56.8318C22.9469 55.8211 22.6706 54.4585 21.7304 53.6839C19.6312 51.9544 17.8546 49.8583 16.4901 47.4917C15.1257 45.125 14.202 42.5372 13.7572 39.854C13.5579 38.6522 12.5172 37.7303 11.3018 37.8122Z" fill="#D60000"/>
</g>
<defs>
<clipPath id="clip0_79_13847">
<rect width="71" height="71" fill="white"/>
</clipPath>
</defs>
</svg>


   ),
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      percentage: '10%',
      amount: '₦ 48,000',
      change: 'Up 30% from last month',
      changeType: 'up'
    }
  ];

  
  const chartData = [
    { month: 'JAN', income: 3500, expense: 3000 },
    { month: 'FEB', income: 5000, expense: 4200 },
    { month: 'MAR', income: 6000, expense: 5500 },
    { month: 'APR', income: 4500, expense: 4000 },
    { month: 'MAY', income: 5000, expense: 4500 },
    { month: 'JUN', income: 5200, expense: 4800 },
    { month: 'JUL', income: 4800, expense: 4200 },
    { month: 'AUG', income: 3000, expense: 2500 },
    { month: 'SEPT', income: 3500, expense: 3000 },
    { month: 'OCT', income: 5000, expense: 4500 },
    { month: 'NOV', income: 4000, expense: 3500 },
    { month: 'DEC', income: 3000, expense: 2800 }
  ];

  const maxValue = 6000;

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
           <button className="p-2 hover:bg-gray-100 rounded-lg">
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#718096" strokeOpacity="0.1"/>
          <path d="M19.627 17.7468L21.3336 16.0402L19.627 14.3335" stroke="#485465" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M14.5068 16.04H21.2868" stroke="#485465" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M15.8402 21.3332C12.8935 21.3332 10.5068 19.3332 10.5068 15.9998C10.5068 12.6665 12.8935 10.6665 15.8402 10.6665" stroke="#485465" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
        </button>
        </div>

        
        <nav className="space-y-2">
          <Link to='/dashboard'>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm sm:text-base"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="3" y="3" width="6" height="6" rx="1"/>
              <rect x="11" y="3" width="6" height="6" rx="1"/>
              <rect x="3" y="11" width="6" height="6" rx="1"/>
              <rect x="11" y="11" width="6" height="6" rx="1"/>
            </svg>
            Home
          </button>
          </Link>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-600 rounded-lg font-medium text-sm sm:text-base">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="3" y="14" width="3" height="6" rx="1"/>
              <rect x="8" y="10" width="3" height="10" rx="1"/>
              <rect x="13" y="6" width="3" height="14" rx="1"/>
            </svg>
            Analytics
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
     
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

        {/* Analytics Content */}
        <div className="p-4 sm:p-6 lg:p-8">
       
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Spending analytics</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Here's how your expenses have shaped up this month.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Total Spent */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 sm:p-6 rounded-2xl">
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
                <span className="text-gray-700 font-medium text-sm sm:text-base">Total spent</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">₦50,000</div>
            </div>

        
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
                <span className="text-gray-700 font-medium text-sm sm:text-base">Average daily spend</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">₦10,000</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
<path d="M0 16.56V19.5C0 27 3 30 10.5 30H19.5C27 30 30 27 30 19.5V10.5C30 3 27 0 19.5 0H10.5C3 0 0 3 0 10.5" fill="#2563EB" fillOpacity="0.22"/>
<path d="M14.9993 6.6665C10.3993 6.6665 6.66602 10.3998 6.66602 14.9998C6.66602 19.5998 10.3993 23.3332 14.9993 23.3332C19.5993 23.3332 23.3327 19.5998 23.3327 14.9998C23.3327 10.3998 19.5993 6.6665 14.9993 6.6665ZM10.8327 15.6248H9.16602C8.82435 15.6248 8.54102 15.3415 8.54102 14.9998C8.54102 14.6582 8.82435 14.3748 9.16602 14.3748H10.8327C11.1743 14.3748 11.4577 14.6582 11.4577 14.9998C11.4577 15.3415 11.1743 15.6248 10.8327 15.6248ZM14.9993 16.8748C13.966 16.8748 13.1243 16.0332 13.1243 14.9998C13.1243 13.9665 13.966 13.1248 14.9993 13.1248C16.0327 13.1248 16.8743 13.9665 16.8743 14.9998C16.8743 16.0332 16.0327 16.8748 14.9993 16.8748ZM20.8327 15.6248H19.166C18.8243 15.6248 18.541 15.3415 18.541 14.9998C18.541 14.6582 18.8243 14.3748 19.166 14.3748H20.8327C21.1743 14.3748 21.4577 14.6582 21.4577 14.9998C21.4577 15.3415 21.1743 15.6248 20.8327 15.6248Z" fill="#5454D4"/>
</svg>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Daily count</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">20</div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8">

            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Expense breakdown</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">Here's your month in numbers</p>

                <div className="space-y-3 sm:space-y-4">
                  {expenseBreakdown.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className={`${item.bgColor} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <span className="text-xl sm:text-2xl scale-75 sm:scale-100">{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">
                            {item.percentage} {item.category} - {item.amount}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-500">{item.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

           
            <div className="xl:col-span-3">
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Your Spending insights</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Here's a breakdown of your year in numbers</p>
                  </div>
                  <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="px-3 sm:px-4 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
                  >
                    <option>This year</option>
                    <option>Last year</option>
                  </select>
                </div>

                
                <div className="relative h-64 sm:h-80 overflow-x-auto">
              
                  <div className="absolute left-0 top-0 bottom-6 sm:bottom-8 flex flex-col justify-between text-xs text-gray-500">
                    <span>6K</span>
                    <span>5K</span>
                    <span>4K</span>
                    <span>3K</span>
                    <span>2K</span>
                    <span>1K</span>
                    <span>0</span>
                  </div>

                 
                  <div className="ml-8 sm:ml-12 h-full flex items-end justify-between gap-1 sm:gap-3 pb-6 sm:pb-8 min-w-[600px] sm:min-w-0">
                    {chartData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-1 sm:gap-2">
                       
                        <div className="w-full flex items-end justify-center gap-0.5 sm:gap-1 relative" style={{ height: '220px' }}>
                    
                          <div 
                            className="w-3 sm:w-5 bg-[#E9ECF3] rounded-t-lg relative group"
                            style={{ height: `${(data.income / maxValue) * 100}%` }}
                          >
                            
                            {data.month === 'OCT' && (
                              <div className="hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 bg-purple-900 text-white text-xs px-3 py-1.5 rounded whitespace-nowrap">
                                Income: ₦400,000
                                <br />
                                Expense: ₦403,000
                              </div>
                            )}
                          </div>
                          <div 
                            className="w-3 sm:w-5 bg-gradient-to-b from-[#5454D4] to-[#FAFFFC] rounded-t-lg"
                            style={{ height: `${(data.expense / maxValue) * 100}%` }}
                          ></div>
                        </div>
                        
                        <span className="text-[10px] sm:text-xs text-gray-500">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}