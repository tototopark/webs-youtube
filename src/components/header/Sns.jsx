import React from 'react'

import { snsLink } from '../../data/header'

const Sns = () => {
    return (
        <div className='header__sns'>
            <ul>
                {snsLink.map((sns, key) => (
                    <li key={key}>
                        <a 
                            href={sns.url} 
                            target='_black' 
                            rel='noopener noreferrer' 
                            aria-label={sns.title}
                        >
                            <span>{sns.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns

// sns 부분에서 혹시 a링크 대신 <Link>를 사용해서....
//  <div className='header__sns'>
//                 <ul>
//                         {snsLink.map((sns, key)=>(
//                             <li key={key}>
//                                 <Link to={sns.url} aria-label={sns.title}>
//                                     {sns.icon}
//                                 </Link>
//                             </li>
//                         ))}
//                 </ul>
//             </div>
// 이렇게 사용해도 괜찮을까요??
// -------------
// 외부 페이지 이동이면 a 링크 내부 페이지 이동이면 Link를 사용합니다.
// aria-label 속성에 대한 설명
// aria-label 속성은 웹 접근성을 향상시키기 위해 사용되는 ARIA (Accessible Rich Internet Applications) 속성 중 하나입니다. 이 속성은 화면에 보이는 텍스트가 없거나 부족한 경우, 해당 요소에 대한 추가적인 설명을 제공하여 시각 장애인이나 화면 읽기 프로그램을 사용하는 사용자들이 웹 콘텐츠를 더 잘 이해할 수 있도록 돕습니다.

// 왜 aria-label이 필요한가요?
// 시각 장애인: 화면 읽기 프로그램은 화면에 보이는 텍스트를 소리로 변환하여 사용자에게 전달합니다. 이미지나 아이콘만 있는 경우, 화면 읽기 프로그램은 이를 단순히 "이미지"라고 읽기 때문에 사용자가 어떤 내용인지 파악하기 어렵습니다. aria-label을 사용하면 화면 읽기 프로그램이 이미지나 아이콘에 대한 정확한 설명을 제공하여 사용자가 콘텐츠를 더 쉽게 이해할 수 있도록 합니다.
// 검색 엔진: 검색 엔진은 aria-label 속성을 통해 웹 페이지의 내용을 더 정확하게 파악하고 색인화할 수 있습니다. 이는 검색 엔진 최적화 (SEO)에도 도움이 됩니다.