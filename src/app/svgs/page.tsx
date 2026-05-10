import React from 'react'

const LearningSvg = () => {
    const datapoints = [5, 6, 4, 10, 2, 7];
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <svg width={200} height={200} viewBox='0 0 200 200'>
                <circle cx={100} cy={100} r={50} className='bg-[#2c2c2c] stroke-2 stroke-[#d02323]' />
            </svg>
            <svg width={200} height={200} viewBox='0 0 200 200'>
                <rect width={150} height={100} x={25} y={50} />
            </svg>
            <svg width={200} height={200} className='border'>
                {datapoints.map((datapoints, index) => (
                    <rect key={index}
                        x={40 + index * 20}
                        width={15}
                        height={datapoints * 10}
                        className='fill-[#d02323]'
                    />
                ))}
            </svg>
        </div>
    )
}

export default LearningSvg