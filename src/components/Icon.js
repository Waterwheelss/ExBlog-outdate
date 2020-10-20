import React from 'react'

export const Icon = (props) => {
    const {
        className,
        width = '60px',
        height = '60px',
    } = props

    return (
        <svg className={className} version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 300 300" width={width} height={height} xmlSpace="preserve">
            <polygon fill="#44b89c" points="150,77.58 217.06,115.92 203.94,124.83 150,95.39 110.89,118.26 153.84,142.63 153.84,162.27 
	102.35,134.1 102.35,176.68 150,206.48 150,226.03 86.87,187.52 86.87,114.74 "/>
            <polygon fill="#46a4ae" points="150,260.45 54.35,205.22 54.35,94.78 150,39.55 244.86,94.32 244.5,113.74 150,59.18 71.35,104.59 
	71.35,195.41 150,240.82 220.15,200.32 160.23,165.88 160.23,146.24 244.5,194.75 244.56,205.85 "/>
        </svg>
    )
}