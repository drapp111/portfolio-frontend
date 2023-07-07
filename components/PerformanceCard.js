'use client';
import Link from 'next/link';
import { Button, Card } from 'flowbite-react';
import React, { Component } from "react";

export default function PerformanceCard(props) {
        return (
                    <div className='card performance-card w-36 h-48 sm:w-44 sm:h-60 lg:w-56 lg:h-72'>
                        <img src='/dance/index-header.jpg' alt={props.title + ". " + props.dates} className=''/>
                        <div className='card-child'>
                            <h5>
                                {props.title}
                            </h5>
                            <p>{props.dates}</p>
                            <Button as={Link} href={props.button_link} color="goldenrod" size='xs' pill className="border-2 border-goldenrod bg-wheat hover:bg-goldenrod transition-all duration-400">
                                {props.button_text}
                            </Button>
                        </div>
                        
                    </div>
  )
}