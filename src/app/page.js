'use client';
import Image from "next/image";
import styles from "./romantic.module.css";
import { useRef, useState } from "react";

const images = [
  { src: "/1.jpeg", caption: "Nossos passeios" },
  { src: "/2.jpeg", caption: "Nossas idas a praia juntos" },
  { src: "/3.jpeg", caption: "Momentos especiais com você são incrivéis!" },
];

const romanticQuotes = [
  "O amor não se vê com os olhos, mas com o coração. — William Shakespeare",
  "Te amo não só pelo que és, mas pelo que sou quando estou contigo.",
  "Feliz Dia dos Namorados! Que nosso amor seja eterno."
];

function FloatingHearts() {
  // Render 12 floating hearts with random positions and delays
  return (
    <div className={styles.floatingHearts} aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        return (
          <svg
            key={i}
            className={styles.heart}
            style={{ left: `${left}%`, animationDelay: `${delay}s` }}
            viewBox="0 0 32 29.6"
            fill="#d72660"
            width={32}
            height={32}
          >
            <path d="M23.6,0c-2.7,0-5.1,1.3-6.6,3.3C15.5,1.3,13.1,0,10.4,0C4.7,0,0,4.7,0,10.4c0,7.1,10.7,14.2,15.2,18.2c0.6,0.5,1.5,0.5,2.1,0C21.3,24.6,32,17.5,32,10.4C32,4.7,27.3,0,23.6,0z" />
          </svg>
        );
      })}
    </div>
  );
}

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const musicUrl = "/TIAGO IORC - Coisa Linda.mp3"; // Música local na pasta public

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className={styles.musicPlayer}>
      <button onClick={togglePlay} aria-label={playing ? "Pausar música" : "Tocar música"}>
        {playing ? "❚❚" : "▶"}
      </button>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      <span style={{ fontFamily: 'Great Vibes, cursive', color: '#d72660', fontSize: '1.1rem' }}>
        Nossa trilha sonora
      </span>
    </div>
  );
}

function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.carouselBtn} onClick={prev} aria-label="Foto anterior">❮</button>
      <div className={styles.carouselImageBox}>
        <Image
          className={styles.cardImage}
          src={images[current].src}
          alt={images[current].caption}
          width={220}
          height={220}
        />
        <div className={styles.cardCaption}>{images[current].caption}</div>
      </div>
      <button className={styles.carouselBtn} onClick={next} aria-label="Próxima foto">❯</button>
    </div>
  );
}

function LoveSection({ imgSrc, imgAlt, text, reverse }) {
  return (
    <section className={reverse ? styles.loveSectionReverse : styles.loveSection}>
      <div className={styles.loveImgBox}>
        <Image src={imgSrc} alt={imgAlt} width={260} height={260} className={styles.loveImg} />
      </div>
      <div className={styles.loveTextBox}>
        <p className={styles.loveText}>{text}</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <FloatingHearts />
      <h1 className={styles.romanticTitle}>Feliz Dia dos Namorados Minha Princesa</h1>
      <div className={styles.romanticQuote}>{romanticQuotes[0]}</div>
      <MusicPlayer />
      <Carousel />
      <LoveSection
        imgSrc="/sec1.jpeg"
        imgAlt="Primeiros filmes juntos"
        text="Nossos Primeiros filmes e doramas juntos, eu amo estar com você meu amooor!."
        reverse={false}
      />
      <LoveSection
        imgSrc="/sec2.jpeg"
        imgAlt="Minha Mega-Sena"
        text="Posso dizer que sou um Homem de sorte quando te encontrei, e cada dia que passa meu amor por você se torna algo mais sólido, forte e que me trás segurança. Sou grato a Deus por ter você ao meu lado, por ser minha companheira, minha amiga e minha namorada. Você é a minha Mega-Sena Te amo!"
        reverse={true}
      />
      <LoveSection
        imgSrc="/sec3.jpeg"
        imgAlt="Minha princesa, Minha flor!"
        text="Amo lhe presentear com as suas flores preferidas, amo estar contigo e amo viver com você! És uma mulher incrivé que admiro muito por sua dedicaçao, empenho e inteligência, você tem a delicadeza de um girasol no namis belo dia mas também tem a beleza força de uma onça kk obrigado por tudo meu amor! . Te amo!"
        reverse={false}
      />
      <div className={styles.romanticQuote}>{romanticQuotes[1]}</div>
      <div className={styles.romanticQuote}>{romanticQuotes[2]}</div>
    </div>
  );
}
