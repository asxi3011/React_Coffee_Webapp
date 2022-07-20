import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function SliderRank({ myScore }) {
  const [sliderValue, setSliderValue] = useState(myScore);
  const maxRank = 300;
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    myScore && (
      <Box pt={6} pb={4}>
        <Slider
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
          defaultValue={sliderValue}
        >
          <SliderMark value={0} {...labelStyles}>
            Tiêu chuẩn
          </SliderMark>
          <SliderMark value={(100 / maxRank) * 100} {...labelStyles}>
            Vàng
          </SliderMark>
          <SliderMark value={100} {...labelStyles}>
            KC
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
          >
            {sliderValue}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  );
}
