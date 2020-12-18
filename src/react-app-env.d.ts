/// <reference types="react-scripts" />
declare module '*.mp4' {
  const src: string;
  export default src;
}

declare var process : {
  env: {
    KAKAO_KEY: string
  }
} 
//