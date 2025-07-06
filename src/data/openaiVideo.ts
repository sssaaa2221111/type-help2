export const allVideoList = [
  {
    "number": "a1",
    "description": "Incredibox - Sprunki: The rebellious maestro of the music world. Watch as Sprunki defies conventions with rhythm, creating unexpected harmonies!",
    "videoUrl": "https://image.incrediboxsprunki.cc/FW%20put%20the%20knife%20away%20sprunki.mp4",
    "keywords": "Incredibox, Sprunki, music game, defiance, innovation",
    "poster": "https://image.incrediboxsprunki.cc/incredibox-sprunki111.jpg"
  },
  {
    "number": "a2",
    "description": "Incredibox - Sprunki: Where music meets rebellion. Sprunki composes astounding musical adventures with his unique brand of musical defiance!",
    "videoUrl": "https://image.incrediboxsprunki.cc/Sprunki%20but%20too%20kID%20frIEndly%20animation%20tw%20gore%20and%20blood.mp4",
    "keywords": "Incredibox, Sprunki, music creation, defiance, adventure",
    "poster": "https://image.incrediboxsprunki.cc/incredibox-sprunki111.jpg" 
  },
  {
    "number": "a3",
    "description": "Incredibox - Sprunki: A rhapsody of musical rebellion! Surf the ocean of notes with Sprunki, breaking conventions with unique rhythms. Every click is a musical revolution, every track a challenge to the ordinary.",
    "videoUrl": "https://image.incrediboxsprunki.cc/Incredibox%20Sprunki1.mp4",
    "keywords": "Incredibox, Sprunki, music creation, defiance, adventure",
    "poster": "https://image.incrediboxsprunki.cc/incredibox-sprunki111.jpg" 
  }

]
//Are you ready? Let's compose your own mad symphony in Sprunki's world!

export const randomVideo = (count:number) => {
  // 定义一个空数组来存放随机数
  let randomNumbers = [];
  const resultVideoList = [];
  // 循环获取多个不同的随机数
  while (randomNumbers.length < count) {
    let randomNumber = Math.floor(Math.random() * (allVideoList.length + 1));
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
      resultVideoList.push(allVideoList[randomNumber])
    }
  }
  return resultVideoList;
}

export const getTwoVideos = () => {
  // 总是返回前两个视频
  return allVideoList.slice(0, 2);
}
