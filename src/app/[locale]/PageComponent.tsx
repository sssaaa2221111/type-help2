'use client'
import {useRouter} from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import {useState, useMemo, useCallback, useEffect, useRef} from "react";
import {getTwoVideos} from "~/data/openaiVideo";
import HeadInfo from "~/components/HeadInfo";
import {useCommonContext} from "~/context/common-context";
import Link from "next/link";
import Image from "next/image";
// Add these type definitions at the top


// Change the import to use the array of daily games
import data_conn from '~/data/connections/data_conn.json';
import gameData from '~/data/games/sprunki-phase-7.json';
import gameData_re from '~/data/games/sprunki-phase-re.json';


// Add this helper function at the top level

// Add this type declaration at the top of the file, before the component
interface Document {
  webkitFullscreenElement?: Element | null;
  mozFullscreenElement?: Element | null;
  msFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface PageComponentProps {
  locale?: string;
  indexLanguageText: any;
  initVideoList?: any[];
  questionText: any;
  faqText: any;
  pageComponentText: any;
  aboutText: any;
  howToPlayText: any;
}

const PageComponent = ({
                         locale = '',
                         indexLanguageText,
                         initVideoList = [],
                         questionText,
                         faqText,
                         pageComponentText,
                         aboutText,
                         howToPlayText
                       }: PageComponentProps) => {
  const router = useRouter();

  const [textStr, setTextStr] = useState('');
  const {setShowGeneratingModal, setShowLoadingModal} = useCommonContext();

  // Add this state at the top of the component
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Add this helper function inside the component
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 在组件顶部添加状态
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Add new state to control splash screen visibility
  const [showSplash, setShowSplash] = useState(true);

  // Add handler for play button click
  const handlePlayClick = () => {
    setShowSplash(false);
  };

  // 使用固定的视频链接数组替代 state
  const videoList = [
    "https://image.incrediboxsprunki.cc/Incredibox%20Sprunki1.mp4",
    "https://image.incrediboxsprunki.cc/Incredibox%20Sprunki1.mp4"
  ];

  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };

  const iframeRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 检测全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // 进入全屏
  const enterFullscreen = async () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    setIsLoading(true);
    setError('');

    try {
      if (iframe.requestFullscreen) {
        await iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        await iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        await iframe.msRequestFullscreen();
      } else {
        throw new Error('Fullscreen API is not supported');
      }
    } catch (err) {
      setError('Failed to enter fullscreen mode. Please try again.');
      console.error('Fullscreen error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // 退出全屏
  const exitFullscreen = async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
      }
    } catch (err) {
      setError('Failed to exit fullscreen mode. Please try again.');
      console.error('Exit fullscreen error:', err);
    }
  };

  // 切换全屏状态
  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  return (
    <>
      <HeadInfo
        title={gameData.title}
        description={gameData.shortDescription}
        locale={locale}
        page=""
      />
      <Header locale={locale} indexLanguageText={indexLanguageText}/>
      
      <div className="game-play container-fluid px-4 md:px-8 lg:px-16 w-4/5 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 max-w-[1400px] mx-auto">
          <div className="w-full lg:w-4/4">
            <div className="w-full mb-5">
              <div className="w-full">
                <div className="relative w-full">
                  {showSplash && (
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-red-600 to-black-800 rounded-2xl overflow-hidden 
                      transition-opacity duration-300 ease-in-out opacity-100 p-4 sm:pl-16"
                    >
                      <div className="absolute inset-4 sm:inset-x-16 sm:inset-y-20 bg-gradient-to-b from-gray-700/90 to-gray-800/90 
                        rounded-3xl backdrop-blur-sm p-6 sm:p-12 shadow-2xl
                        transition-all duration-300 ease-in-out
                        hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
                        hover:border hover:border-white/20"
                      >
                        <div className="flex flex-col h-full relative">
                          <button
                            onClick={handlePlayClick}
                            className="bg-black/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full mb-4 sm:mb-8 
                              flex items-center gap-2 hover:bg-gray-800 transition-colors w-fit
                              shadow-lg shadow-black/50"
                          >
                            <span className="text-lg sm:text-xl">▶</span>
                            <span className="text-base sm:text-lg font-medium">PLAY GAME</span>
                          </button> 
                          
                          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-6 text-white">{gameData.title}</h1>
                          
                          <p className="text-gray-300 max-w-2xl text-base sm:text-lg mb-16 sm:mb-0">
                            {gameData.shortDescription}
                          </p>

                          <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2
                            sm:bottom-auto sm:right-0 sm:top-1/2 sm:-translate-x-6 sm:-translate-y-1/2">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-black/50 
                              shadow-2xl shadow-black/50 transform hover:scale-105 transition-transform"
                            >
                              <img 
                                src={gameData.thumbnail}
                                alt={gameData.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <iframe 
                    ref={iframeRef}
                    className="w-full h-[400px] lg:h-[601px] border-none"
                    src={gameData.iframeSrc}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center p-2.5 bg-gray-100">
                <div className="game-details-container-left">
                  {/* Game title and info */}
                </div>
                <div className="game-right-section-new-wrap">
                  {/* Like and fullscreen buttons */}
                </div>
              </div>
            </div>

            <div className="ads-slot mt-2">
              {/* 广告内容 */}
            </div>

            <div className="bg-gray-100 rounded-lg p-6 space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">About The Game</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3">{gameData.overview.title}</h3>
                  <p className="text-gray-700 mb-6">{gameData.overview.content}</p>
                  
                  <div className="relative rounded-lg overflow-hidden mb-6">
                    <img 
                      src={gameData.aboutImage}
                      alt={`${gameData.title} Characters`}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </section>  

              <section>
                <h2 className="text-3xl font-bold mb-4">How To Play</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    {gameData.howToPlay.description}
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">{gameData.howToPlay.basicControls[0]}</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>{gameData.howToPlay.basicControls[1]}</li>
                      <li>{gameData.howToPlay.basicControls[2]}</li>
                      <li>{gameData.howToPlay.basicControls[3]}</li>
                      <li>{gameData.howToPlay.basicControls[4]}</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Advanced Features</h2>
                <p className="text-gray-700 mb-4">
                  {gameData.advancedFeatures}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">{gameData.faq[0].question}</h3>
                    <p className="text-gray-700">
                      {gameData.faq[0].answer}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">{gameData.faq[1].question}</h3>
                    <p className="text-gray-700">
                      {gameData.faq[1].answer}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">{gameData.faq[2].question}</h3>
                    <p className="text-gray-700">
                      {gameData.faq[2].answer}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Tips for Success</h2>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>{gameData.tips[0]}</li>
                    <li>{gameData.tips[1]}</li>
                    <li>{gameData.tips[2]}</li>
                    <li>{gameData.tips[3]}</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          
        </div>
      </div>
      {/* <Footer locale={locale} description={indexLanguageText.description}/> */}
    </>
  )


}
export default PageComponent