import './index.scss'

import { getRandomProjectCover } from '@/utils/tools'

export default function ProductTop() {
    const projectCover = getRandomProjectCover()
    return (
        <div className="product-top pr-[2px]">
            <img onError={(e) => e.target.src = './image/default-project.png'} draggable="false" className='product-cover mr-[6px] h-[50px] w-[50px] rounded-[4px]' src={projectCover} />
            <div className='product-info'>
                <p className='product-name line-clamp-1'>
                    Color Watch
                </p>
                <p className='product-desc line-clamp-2'>
                    Software projectSoftware
                </p>
            </div>
        </div>
    )
}

