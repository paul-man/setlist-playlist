"use client";

import React from "react";
import Button from '@mui/material/Button';

export function SpotifyLoginButton() {
  const loginToSpotify = async () => {
    // TODO: Login to Spotify
  }

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={loginToSpotify}
      >
        LOG IN WITH SPOTIFY
      </Button>
    </div>
  )
}
