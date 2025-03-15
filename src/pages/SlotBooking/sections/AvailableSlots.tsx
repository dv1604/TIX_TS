import { Stars } from "@mui/icons-material";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { slotsActions } from "../../../store/features/Slots/SlotsSlice";

interface ShowDetails {
  movieName: string;
  theatreName: string;
  city: string;
  slots: string[];
  theatreType: string;
  selectedTime: string;
  ticketPrice: number;
}

const AvailableSlots = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { selectedMovie, selectedCity } = useSelector((state: RootState) => state.movie);

  // Ensure we get city data safely
  const cityData = selectedMovie.city.find((city) => city.name === selectedCity);

  if (!cityData) {
    return (
      <Typography variant="h6" color="error">
        No theatres available for {selectedCity}.
      </Typography>
    );
  }

  const chainColor = (chainName: string) => {
    switch (chainName) {
      case "CGV":
        return theme.palette.cgv.main;
      case "Cinepolis":
        return theme.palette.cinepolis.main;
      default:
        return theme.customGradients.primary;
    }
  };

  const sendSelectedShow = (obj: ShowDetails) => {
    dispatch(
      slotsActions.setSelectedShow({
        movieName: obj.movieName,
        theatreName: obj.theatreName,
        city: obj.city,
        slots: obj.slots,
        theatreType: obj.theatreType,
        selectedTime: obj.selectedTime,
        ticketPrice: obj.ticketPrice,
        totalAmount: 0,
      })
    );
  };

  return (
    <>
      {cityData.theatres.map((theatre, theatreIndex) => (
        <Container
          key={theatreIndex}
          disableGutters
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2.5,
          }}
        >
          {/* Theatre and chain heading */}
          <Container
            disableGutters
            maxWidth={false}
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Theatre name */}
            <Box sx={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "center" }}>
              <Stars
                sx={{
                  width: 32,
                  height: 32,
                  fontSize: 32,
                  color: "rgba(26, 44, 80, 1)",
                  bgcolor: "rgba(242, 196, 111, 1)",
                  borderRadius: "50%",
                  "& path": {
                    transform: "scale(1.2)",
                    transformOrigin: "center",
                  },
                }}
              />
              <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
                {theatre.name}
              </Typography>
            </Box>

            {/* Theatre chain */}
            <Box
              sx={{
                width: "fit-content",
                padding: "3px 10px",
                color: "primary.main",
                background: chainColor(theatre.chain),
                borderRadius: "4px",
                fontSize: "17px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {theatre.chain}
            </Box>
          </Container>

          {/* Theatre location */}
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "grey.600",
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: 0.5,
            }}
          >
            {theatre.location}
          </Typography>

          {/* Available screens */}
          <Container
            disableGutters
            maxWidth={false}
            sx={{ display: "flex", flexDirection: "column", gap: "36px" }}
          >
            {theatre.screens.map((screen, screenIndex) => (
              <Box key={screenIndex} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {/* Theatre type and price */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="h3" sx={{ color: "grey.600", textTransform: "uppercase" }}>
                    {screen.type}
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "grey.600" }}>
                    Rs. {screen.price}
                  </Typography>
                </Box>

                {/* Available slots in screen */}
                <Box sx={{ width: "100%", display: "flex", gap: "18px", flexWrap: "wrap" }}>
                  {screen.slots.map((slot, slotIndex) => (
                    <Box
                      key={slotIndex}
                      onClick={() =>
                        sendSelectedShow({
                          movieName: selectedMovie.name,
                          theatreName: theatre.name,
                          city: cityData.name,
                          theatreType: screen.type,
                          slots: screen.slots,
                          selectedTime: slot,
                          ticketPrice: screen.price,
                        })
                      }
                      sx={{
                        width: 77,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "4px",
                        padding: "12px 20px",
                        border: "1px solid",
                        borderColor: "grey.400",
                        cursor: "pointer",
                        "&:hover": {
                          bgcolor: "rgba(26, 44, 80, 1)",
                          color: "primary.main",
                        },
                      }}
                    >
                      {slot}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Container>
        </Container>
      ))}
    </>
  );
};

export default AvailableSlots;
