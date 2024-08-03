import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Webd = lazy(() => import('./pages/Webd'));
const Website = lazy(() => import('./pages/Website'));
const Gsap = lazy(() => import('./pages/Gsap'));
const Port = lazy(() => import('./pages/Port'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/developer" element={<Developer />} />
                    <Route path="/webd" element={<Webd />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/gsap" element={<Gsap />} />
                    <Route path="/port" element={<Port />} />
                    <Route path="/youtube" element={<Youtube />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>

        
    );
}

export default App;

// React의 Suspense 컴포넌트에서 fallback 속성은 자식 컴포넌트가 로드되기 전까지 보여줄 대체 UI를 지정하는 데 사용됩니다. 이는 주로 비동기 작업이 완료될 때까지 사용자에게 로딩 상태를 표시하는 데 유용합니다12.
// 이 예시에서 Main 컴포넌트가 로드되기 전까지 Loading... 텍스트가 화면에 표시됩니다Main 컴포넌트가 로드되면 Loading... 텍스트가 사라지고 Main 컴포넌트가 렌더링됩니다12.

// 주요 포인트
// 비동기 데이터 로딩: Suspense는 비동기 데이터 로딩 중에 사용자에게 로딩 상태를 표시할 수 있게 합니다.
// // 사용자 경험 향상: 로딩 중에 빈 화면 대신 로딩 인디케이터를 보여줌으로써 사용자 경험을 향상시킵니다.
// ======
// React의 lazy 함수는 코드 스플리팅(Code Splitting)을 통해 컴포넌트를 지연 로딩(Lazy Loading)하는 데 사용됩니다. 이는 애플리케이션의 초기 로딩 시간을 줄이고, 필요한 시점에만 컴포넌트를 로드하여 성능을 최적화하는 데 유용합니다12.

// 사용법
// lazy 함수는 동적으로 import된 모듈을 반환하는 함수를 인수로 받습니다. 예를 들어, 다음과 같이 사용할 수 있습니다:
// 주요 포인트
// 동적 import: lazy 함수는 동적으로 모듈을 import하여 필요할 때만 로드합니다.
// Suspense와 함께 사용: Suspense 컴포넌트를 사용하여 로딩 중에 보여줄 대체 UI를 지정합니다.
// 성능 최적화: 초기 로딩 시간을 줄이고, 필요한 시점에만 컴포넌트를 로드하여 성능을 최적화합니다.
// 이렇게 하면 Home 컴포넌트는 실제로 필요할 때만 로드되며, 로딩 중에는 Loading... 텍스트가 표시됩니다12.

// 혹시 더 궁금한 점이 있나요? 😊