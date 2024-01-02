"use client"; // This is a client component

import React, { useState } from "react";
import Link from "next/link";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {navData} from "@/lib/nav/navBarData";
import styles from '@/components/SideNavBar/SideNavBar.module.css';

export function SideNavBar() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={isOpen ? styles.open : styles.closed}>
      <button className={styles.menuButton} onClick={toggleIsOpen}>
        {isOpen ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
      </button>
      {navData.map(item =>{
          return  <Link key={item.id} onClick={() => {}} href={item.link} className={styles.sideItem}>
                    {item.icon}
                    <span className={isOpen ? styles.linkText : styles.linkTextClosed}>
                      {item.text}
                    </span>
                  </Link>
      })}
  </div>
  )
}
