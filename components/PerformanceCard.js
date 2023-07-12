'use client';
import Link from 'next/link';
import { Button, Card } from 'flowbite-react';
import React, { Component } from "react";

export default function PerformanceCard(props) {
        return (
                    <div className='w-full h-full card performance-card'>
                        <img src='/dance/index-header.jpg' alt={props.title + ". " + props.dates} className=''/>
                        <div className='card-child border-2 border-whitesmoke rounded-b-lg'>
                            <h5 className='text-black text-xl'>
                                {props.title}
                            </h5>
                            <p className='text-black text-xs mb-4'>{props.dates}</p>
                            <Button as={Link} href={props.button_link} color="goldenrod" size='xs' pill className="transition-all duration-1000 border-2 border-goldenrod bg-wheat hover:bg-goldenrod">
                                {props.button_text}
                            </Button>
                        </div>
                    </div>
  )
}