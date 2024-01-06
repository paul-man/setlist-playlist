'use client';

import React, {useState} from "react";
import {FetchDataButton, OnDataReceivedCallback} from '@/components/FetchDataButton/FetchDataButton'
import type {TrendingAlbums} from "@/app/api/sputnik";

export default function Discover() {
  const [albumsData, setAlbumsData] = useState<TrendingAlbums>([]);

  const handleAlbumsReceived: OnDataReceivedCallback<{trendingAlbums: TrendingAlbums}> = (data, error) => {
    if (error != null) {
      console.error(error);
      return;
    }
    if (data) {
      setAlbumsData(data.trendingAlbums);
    }
  };

    return (
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div>
          <FetchDataButton
            text="Trending Albums"
            endpoint="/api/sputnik"
            onDataReceived={handleAlbumsReceived}
          />
          {albumsData && (
            <ul>
              {albumsData.map((album, index) => (
                <li key={index}>{album.artist} : {album.album}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
}