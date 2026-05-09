import { ArrowBackIos, ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Photo1 from "../../assets/images/Photo1.jpg"
import Photo2 from "../../assets/images/Photo2.jpg"
import Photo3 from "../../assets/images/Photo3.jpg"
import Photo4 from "../../assets/images/Photo4.jpg"


export default function Slider() {
  const images = [Photo1, Photo2, Photo3, Photo4];
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [index]);

  useEffect(()=>{
  const Timer= setTimeout(() => {
    handleNext()
  }, 3000);
  return() =>clearTimeout(Timer)
  },[index])

  return (
    <Box
      sx={{
        position: "relative",
        width: "900px",
        height: "55 0px",
        margin: "40px auto",
        overflow: "hidden",
        borderRadius: 9,
        boxShadow: 4,
      }}
    >
      {/* تصویر */}
      <Box
        component="img"
        src={images[index]}
        alt={`slide-${index}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.8s ease",
        }}
      />

      {/* دکمه قبلی */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* دکمه بعدی */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
          transform: "translateY(-50%)",
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* نقطه‌ها */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor:
                i === index ? "white" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}



