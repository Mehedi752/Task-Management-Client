import React from 'react';

const WhyUse = () => {
    const whyUseData = [
        {
            role: "Developers",
            title: "Streamline Your Development Workflow",
            image: "https://i.ibb.co.com/XZRv215S/developer-2.png",
            icon: "💻"
        },
        {
            role: "Students",
            title: "Stay Ahead in Your Academic Journey",
            image: "https://i.ibb.co.com/nNCp3xLg/student.png",
            icon: "🎓"
        },
        {
            role: "Freelancers",
            title: "Maximize Productivity & Client Satisfaction",
            image: "https://i.ibb.co.com/WZGYHqc/freelancer.png",
            icon: "🧑‍💼"
        },
        {
            role: "Bankers",
            title: "Efficiently Manage Financial Operations",
            image: "https://i.ibb.co.com/jPMv56pZ/banker.png",
            icon: "🏦"
        },
        {
            role: "Corporate Professionals",
            title: "Boost Efficiency & Drive Business Results",
            image: "https://i.ibb.co.com/vxrvDtSJ/corporate.png",
            icon: "🏢"
        },
        {
            role: "Entrepreneurs",
            title: "Scale Your Business & Achieve Goals Faster",
            image: "https://i.ibb.co.com/bMsRkXRJ/entrepreneur.png",
            icon: "💡"
        }
    ];

    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto py-20 px-5 lg:px-[100px]'>
                <h1 className='text-4xl text-black text-center font-bold'>Why Use <span className='text-red-500'>Task Manager?</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                    {whyUseData.map((data, index) => (
                        <div key={index} className='bg-white text-black p-8 rounded-md shadow-md'>
                            <img src={data.image} alt={data.role} className='w-24 h-24 mx-auto' />
                            <h1 className='text-xl font-semibold text-center'>{data.role}{data.icon}</h1>
                            <p className='text-center mt-4'>{data.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    
    );
};

export default WhyUse;